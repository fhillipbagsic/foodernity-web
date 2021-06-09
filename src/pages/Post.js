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
   const classes = useStyles()
   const theme = useTheme()
   //  used to determine whether the page should use components intended for responsive layout
   const responsiveLayout = useMediaQuery(theme.breakpoints.down('sm'))

   return (
      <>
         <Helmet>
            <title>Post Donation | Foodernity</title>
         </Helmet>
         <div className={classes.root}>
            <CssBaseline />
            <StyledAppBar />
            {/* displays whether the left drawer should be displayed or not depending on the variable */}
            <StepperDrawer />
            <PostContainer />
         </div>
      </>
   )
}

export default Post
