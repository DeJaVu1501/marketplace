const getGQL = url => 
    (query, variables={}) => fetch(url, {
        method: 'POST',
        headers: {
            //Accept: "application/json",
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
      if(result)
          dispatch(actionAuthLogin(result))
  }
}
//dsfsdfsd
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

export const actionTypeAd = () =>
    actionPromise('AdFind', shopGQL(`
            query Ad($query:String){
              AdFind(query:$query){
                _id  
                title
                description
                price
                images {
                  url
                }
              }
            }
        `, {query: JSON.stringify([{}])}))

        // tags
        // address
        // images
        // comments
        // createdAt
        //img