import React, { useState, useRef, useEffect } from 'react'
import {
   AppBar,
   Toolbar,
   Typography,
   Button,
   Avatar,
   IconButton,
   Menu,
   MenuItem,
   makeStyles,
   Popper,
   Grow,
   Paper,
   ClickAwayListener,
   MenuList,
   Hidden,
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
   navbar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'white',
   },
   heading: {
      fontFamily: 'Work Sans',
      color: '#A6CB3C',
   },
   heading__container: {
      flex: '1',
      color: 'black',
   },
   heading__container_wrap: {
      display: 'inline-block',
   },
   heading__link: {
      textDecoration: 'none',
   },
   navbar__actions: {
      width: '18rem',
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: theme.spacing(2),
   },

   avatar__color_orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
   },
}))
function StyledAppBar() {
   const classes = useStyles()

   return (
      <AppBar elevation={1} position="fixed" className={classes.navbar}>
         <Toolbar>
            {/* This is the page title: 'Foodernity' */}
            <div className={classes.heading__container}>
               <div className={classes.heading__container_wrap}>
                  <Link to="/donations" className={classes.heading__link}>
                     <Typography
                        variant="h4"
                        component="h1"
                        className={classes.heading}
                     >
                        Foodernity
                     </Typography>
                  </Link>
               </div>
            </div>
            <MenuButton />
            <NavigationButtons />
            <IconButton component={Link} to="/account">
               <Avatar className={classes.avatar__color_orange}>FB</Avatar>
            </IconButton>
         </Toolbar>
      </AppBar>
   )
}
// returns the navigation buttons of the website
function NavigationButtons() {
   const classes = useStyles()
   const [open, setOpen] = useState(false)
   const anchorRef = useRef(null)

   const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen)
   }

   const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
         return
      }

      console.log(event.target)
      setOpen(false)
   }

   function handleListKeyDown(event) {
      if (event.key === 'Tab') {
         event.preventDefault()
         setOpen(false)
      }
   }

   // return focus to the button when we transitioned from !open -> open
   const prevOpen = useRef(open)
   useEffect(() => {
      if (prevOpen.current === true && open === false) {
         anchorRef.current.focus()
      }

      prevOpen.current = open
   }, [open])

   return (
      <Hidden smDown>
         <div className={classes.navbar__actions}>
            <>
               <Button
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
               >
                  Donations
               </Button>
               <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
               >
                  {({ TransitionProps, placement }) => (
                     <Grow
                        {...TransitionProps}
                        style={{
                           transformOrigin:
                              placement === 'bottom'
                                 ? 'center top'
                                 : 'center bottom',
                        }}
                     >
                        <Paper>
                           <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                 autoFocusItem={open}
                                 id="menu-list-grow"
                                 onKeyDown={handleListKeyDown}
                              >
                                 <MenuItem component={Link} to="/donations">
                                    Available Donations
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
                                    Requested Donations
                                 </MenuItem>
                                 <MenuItem component={Link} to="/post">
                                    Post a Donation
                                 </MenuItem>
                              </MenuList>
                           </ClickAwayListener>
                        </Paper>
                     </Grow>
                  )}
               </Popper>
            </>

            <Button component={Link} to="/faqs">
               FAQs &amp; Guidelines
            </Button>
         </div>
      </Hidden>
   )
}

// returns the menu button when the page reaches the responsive layout
function MenuButton() {
   const [anchorEl, setAnchorEl] = useState(null)

   function handleClick(event) {
      setAnchorEl(event.currentTarget)
   }
   function handleClose() {
      setAnchorEl(null)
   }
   return (
      <Hidden mdUp>
         <IconButton onClick={handleClick}>
            <MenuIcon />
         </IconButton>
         <Menu
            id="menuButton"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            <MenuItem component={Link} to="/donations">
               Available Donations
            </MenuItem>
            <MenuItem onClick={handleClose}>Requested Donations</MenuItem>
            <MenuItem component={Link} to="/post">
               Post a Donation
            </MenuItem>
            <MenuItem onClick={handleClose}>FAQs</MenuItem>
         </Menu>
      </Hidden>
   )
}
export default StyledAppBar
