import React from "react"
import { connect } from "react-redux"
import { Redirect,Route } from "react-router"

const PrivateRoute = ({component,roles,auth, fallback='/login',...originProps}) => {
    const PageWrapper = (pageProps) => {
      const OriginalPage = component
      console.log(auth)
      if(roles.includes('unknown')){
        return <OriginalPage {...pageProps} />
      }
      if(auth === undefined) {
        return <Redirect to={fallback} />
      }
      let userL = roles.filter(item => auth.includes(item))
      if(userL){
        return <OriginalPage {...pageProps} />
      }
      return <Redirect to={fallback} />
    }
    return (
      <Route component={PageWrapper} {...originProps} />
    )
  }
const RoleRoute = connect(state => ({auth: state.authReducer?.payload?.sub.acl[1]}))(PrivateRoute)
export default RoleRoute
