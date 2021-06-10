import React from 'react'
import { Helmet } from 'react-helmet'
import {
   makeStyles,
   useTheme,
   useMediaQuery,
   CssBaseline,
} from '@material-ui/core'
import { StepperDrawer } from '../components/post/StepperDrawer'
import StyledAppBar from '../components/shared/StyledAppBar'

import PostContainer from '../components/post/PostContainer'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}))
// the container for the whole page
function Post() {
   const theme = useTheme()
   const responsive = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Post Donation | Foodernity</title>
         </Helmet>
         <div
            style={{
               display: 'flex',
               flexDirection: responsive ? 'column' : 'row',
            }}
         >
            <CssBaseline />
            <StyledAppBar />
            <StepperDrawer />
            <PostContainer />
         </div>
      </>
   )
}

export default Post
