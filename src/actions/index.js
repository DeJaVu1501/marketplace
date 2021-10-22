const getGQL = url => 
    (query, variables={}) => fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...(localStorage.authToken ? {Authorization: "Bearer " + localStorage.authToken } : {})
        },
        body: JSON.stringify({query, variables})
    }).then(res => res.json())

export const actionPending = name => ({type: 'PROMISE', status: 'PENDING', name})
export const actionResolved = (name, payload) => ({type: 'PROMISE', status: 'RESOLVED', name, payload})
export const actionRejected = (name, error) => ({type: 'PROMISE', status: 'REJECTED', name, error})

let shopGQL = getGQL('/graphql')

export const actionPromise = (name, promise) => 
    async dispatch => {
        dispatch(actionPending(name))
        try{
            let payload = await promise
            dispatch(actionResolved(name, payload)) 
            return payload
        }
        catch(error){
             dispatch(actionRejected(name, error))
        }
    }

const actionAuthLogin = token => ({type:'LOGIN', token})
export const actionAuthLogout = () => ({type:"LOGOUT"})

let log = async (login, password) => {
  let query = `query log($l: String!, $p: String!) {
        login(login: $l, password: $p)
      }`

  let variables = {
      "l": login,
      "p": password
  }

  let token = await shopGQL(query, variables)
  console.log(token)
  return token.data.login
}

const actionLogin = (login, password) => actionPromise("login", log(login, password))

export const actionFullLogin = (login, password) => {
  return async (dispatch) => {
      let result = await dispatch(actionLogin(login, password))
      if(result) {
          dispatch(actionAuthLogin(result))
          dispatch(actionUserInfo())
      }
  }
}

const actionRegister = (login,password) =>
    actionPromise('reg',shopGQL(`mutation reg($login: String!, $password: String!){
        createUser(login:$login, password: $password){
        _id login
    }
}`,{login,password}))

export const actionFullRegister = (login,password) => 
  async dispatch => {
    let payload = await dispatch(actionRegister(login,password))
    if(payload.data.createUser != null){
      await dispatch(actionFullLogin(login,password))
    }
    else {
      console.log("exiciting user")
    }
  }

export const actionTypeAd = (title, skip = 0) =>
async(dispatch,getState) => {
    let ads = getState().promiseReducer.AdFind?.payload?.data.AdFind
    await dispatch(actionPromise('AdFind', shopGQL(`
            query Ad($query:String){
              AdFind(query:$query){
                _id  
                title
                description
                price
                images {
                  url
                }
                comments {
                  _id text owner {login} answerTo { owner { login}}
                }
                createdAt
                owner {login}
              }
            }
        `, {query: JSON.stringify([{field: title},{sort: [{_id: -1}],skip : [skip], limit: [50]}])}
        )))
        if(ads) {
          ads.concat(skip)
        }
      }
      

export const actionTypeAdOne = (id) => 
          actionPromise('AdFindOne',shopGQL(`
            query Ad($query:String){
              AdFindOne(query:$query){
                _id
                title
                description
                price
                images {
                  url
                }
                comments {
                  _id text owner {login} answerTo { text owner{ login}}
                }
                createdAt
                owner {login , createdAt}
              }
            }`,{query: JSON.stringify([{_id:id}])}))


// export const actionComments = (ad) => 
//             actionPromise('Comments',shopGQL(`
//             query Comments($query: String){
//               CommentFind(query: $query){
//                 _id
//                 text
//                 owner {login}
//                 ad {_id}
//                 answerTo {text owner{login}}
//               }
//             }`,{query: JSON.stringify([{}])}))

export const actionAddComment = (text) => 
async(dispatch,getState) => {
  let adId = getState().promiseReducer.AdFindOne.payload.data.AdFindOne._id
  let addedCom = await dispatch(actionPromise('AddComment',shopGQL(`
  mutation Comment($comment: CommentInput){
    CommentUpsert(comment: $comment){
      _id
      text
      owner {login}
      ad {_id}
    }
  }`,{comment: {text,ad: {_id: adId}}})))
  if(addedCom) {
    dispatch(actionTypeAdOne(adId))
  }
}


export const actionPostAd = (title,description,price,files,_id) =>
            async dispatch => {
              let res = await dispatch(actionUploadFiles(files))
              let imagesId = res.map(({_id}) => ({_id}))
              if(res){
                let upsert = actionPromise('PostAd',shopGQL(`
                mutation Post($ad: AdInput){
                  AdUpsert(ad: $ad) {
                      _id
                      title
                      description
                      price
                      images {
                        url
                      }
                    }
                  }`,{ad: {title,description,price,images: imagesId,_id}}))
                  if(upsert) {
                    await dispatch(actionTypeAd())
                    await dispatch(actionMyPosts())
                  }
              }
            }

export const actionMyPosts = () =>
    async (dispatch,getState) => {
      let userId = getState().authReducer.payload.sub.id
      return await dispatch(actionPromise('MyPosts',shopGQL(`
        query MyPosts($query: String){
          AdFind(query: $query){
            _id  
            title
            description
            price
            images {
              url
            }
            comments {
              _id text owner {login} answerTo { owner { login}} ad {_id}
            }
          }
        }`,{query: JSON.stringify([{___owner: userId},{sort: [{_id: -1}]}])})))
      }


export const actionUploadFile = (file) => {
  return actionPromise('photo',fetchFiles(file))
};

const fetchFiles = (file) => {  
  let fd = new FormData
  fd.append('photo', file)
  return fetch('/upload', {
    method: "POST",
    headers: localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {},
    body: fd
  }).then(res => res.json())
}

export const actionUploadFiles = (files) => 
  actionPromise('photos',Promise.all(files.map(file => fetchFiles(file))))

const actionAvaAdd = (avaId) => 
async (dispatch,getState) => {
  let userId = getState().authReducer.payload.sub.id
  await dispatch (actionPromise('ava',shopGQL(`mutation setAvatar($userId: String, $avaId: ID){
  UserUpsert(user:{_id: $userId, avatar: {_id: $avaId}}){
      _id, avatar{
          _id
      }
  }
}`,{avaId,userId})))
}

export const actionAvaChange = (file) => 
  async (dispatch) => {
   let res =  await dispatch(actionUploadFile(file))
   if(res) {
     await dispatch(actionAvaAdd(res._id))
     await dispatch(actionUserInfo())
   }
  }

export const actionUserInfo = () => 
  async (dispatch,getState) => {
    let userId = getState().authReducer.payload.sub.id
    await dispatch(actionPromise('UserInfo',shopGQL(`
      query UserInfo($query:String){
        UserFindOne(query: $query){
          _id login avatar {url}
        }
      }`,{query: JSON.stringify([{_id: userId}])})))
  }


const regexp = (string) => `/${string.split(" ").join('|').trim()}/`
const toQuery = (queryString, fields = ["title", "description"]) => ({ $or: fields.map(string => ({ [string]: regexp(queryString) }))})
export const actionSearch = (queryString) => 
async (dispatch) =>
  await dispatch(actionPromise('SearchAd',shopGQL(`
  query AdFind($query: String){
    AdFind(query: $query) {
      _id
      title
      description
      price
      images {
        url
      }
    }
  }`,{query: JSON.stringify([toQuery(queryString),
      {
        sort: [{_id: -1}],
        limit: [15]
      }]
    )}
  )
))

