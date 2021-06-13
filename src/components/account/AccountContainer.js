import { Route, Switch, useRouteMatch } from 'react-router'
import MainContainer from '../shared/MainContainer'
import Posted from './Posted'
import Received from './Received'
import Requested from './Requested'
import ScrollTop from '../shared/ScrollTop'
export default function AccountContainer() {
   let { path } = useRouteMatch()

   return (
      <MainContainer>
         <Switch>
            <Route path={`${path}/`} exact>
               <Posted />
            </Route>
            <Route path={`${path}/receiveddonations`}>
               <Received />
            </Route>
            <Route path={`${path}/requesteddonations`}>
               <Requested />
            </Route>
         </Switch>
         <ScrollTop />
      </MainContainer>
   )
}
