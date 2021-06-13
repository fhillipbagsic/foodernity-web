import { CssBaseline, useMediaQuery, useTheme } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import StyledAppBar from '../components/shared/StyledAppBar'
import NavDrawer from '../components/account/NavDrawer'
import AccountContainer from '../components/account/AccountContainer'

export default function Account() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Account | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <NavDrawer />
            <AccountContainer />
         </div>
      </>
   )
}
