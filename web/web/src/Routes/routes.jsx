import { Route, Switch } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import dashboard from "../pages/DashBoard"


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/dashboard" exact component={dashboard} />
    </Switch>
  )
}
