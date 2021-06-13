import React, { useState } from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {
   Avatar,
   Button,
   Chip,
   Dialog,
   DialogContent,
   DialogTitle,
   Divider,
   Grid,
   LinearProgress,
   Paper,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import ListAltIcon from '@material-ui/icons/ListAlt'
import ShareIcon from '@material-ui/icons/Share'
import { grey } from '@material-ui/core/colors'
import AddIcon from '@material-ui/icons/Add'
import { data } from '../../__mock__/MessagesData'
import { Data } from '../../__mock__/PostedDonationsData'
import { completedData } from '../../__mock__/completedDonationsData'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'

export default function Posted() {
   return (
      <Grid container>
         <Grid item xs={12} lg={9}>
            <DonationTabs />
         </Grid>
      </Grid>
   )
}

function DonationTabs() {
   const classes = useStyles()
   const [value, setValue] = useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div className={classes.root}>
         <Box boxShadow={1} borderRadius={5}>
            <div className={classes.container__search}>
               <Typography variant="h6" className={classes.text_bold}>
                  My Donations
               </Typography>
               <SearchField />
            </div>
            <AppBar
               position="static"
               color="default"
               elevation={0}
               className={classes.appbar}
            >
               <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
               >
                  <Tab label="Posted" />
                  <Tab label="Completed" />
               </Tabs>
            </AppBar>
         </Box>

         <TabPanel value={value} index={0}>
            {Data.map((donation) => (
               <PostedDonation
                  listingID={donation.listingID}
                  donationName={donation.donationName}
                  imgLoc={donation.imgLoc}
                  max={donation.max}
                  left={donation.left}
               />
            ))}
         </TabPanel>
         <TabPanel value={value} index={1}>
            {completedData.map((donation) => (
               <CompletedDonation
                  listingID={donation.listingID}
                  donationName={donation.donationName}
                  imgLoc={donation.imgLoc}
                  max={donation.max}
                  left={donation.left}
               />
            ))}
         </TabPanel>
      </div>
   )
}
function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`scrollable-auto-tabpanel-${index}`}
         aria-labelledby={`scrollable-auto-tab-${index}`}
         {...other}
      >
         {value === index && <Box>{children}</Box>}
      </div>
   )
}

function SearchField() {
   const classes = useStyles()
   return (
      <div className={classes.search}>
         <div className={classes.searchIcon}>
            <SearchIcon />
         </div>
         <InputBase
            placeholder="Search for donations"
            classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
         />
      </div>
   )
}

function PostedDonation(props) {
   const { listingID, donationName, imgLoc, max, left } = props
   const classes = useStyles()
   const [open, setOpen] = useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }

   return (
      <Box boxShadow={1} borderRadius={5}>
         <div className={classes.container__listingitem}>
            <img
               className={classes.image__listingitem}
               src={imgLoc}
               alt="donation"
            />
            <div className={classes.container__listingdetail}>
               <div>
                  <Typography
                     component="h6"
                     className={classes.text_bold}
                     style={{ fontSize: '18px' }}
                  >
                     {donationName}
                  </Typography>
                  <DonationProgress max={max} left={left} />

                  <Box display="flex" flexDirection="row">
                     <ChatBubbleIcon
                        style={{
                           fontSize: '20px',
                           color: '#2196F3',
                           marginRight: '5px',
                        }}
                     />
                     <Typography
                        variant="body2"
                        style={{ marginBottom: '1.5rem' }}
                     >
                        You have messages from donees
                     </Typography>
                  </Box>
               </div>
               <div className={classes.container__button}>
                  <Button
                     disableElevation
                     variant="contained"
                     className={classes.button_lightblue}
                     startIcon={<ListAltIcon />}
                     onClick={handleClickOpen}
                  >
                     View details
                  </Button>
                  <Button
                     disableElevation
                     variant="contained"
                     className={classes.button_grey}
                     startIcon={<ShareIcon />}
                  >
                     Share
                  </Button>
               </div>
            </div>
         </div>
         <DonationDetails open={open} handleClose={handleClose} />
      </Box>
   )
}

function CompletedDonation(props) {
   const { listingID, donationName, imgLoc, max, left } = props
   const classes = useStyles()
   const [open, setOpen] = useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }

   return (
      <Box boxShadow={1} borderRadius={5}>
         <div className={classes.container__listingitem}>
            <img
               className={classes.image__listingitem}
               src={imgLoc}
               alt="donation"
            />
            <div className={classes.container__listingdetail}>
               <div>
                  <Typography
                     component="h6"
                     className={classes.text_bold}
                     style={{ fontSize: '18px' }}
                  >
                     {donationName}
                  </Typography>
                  <DonationProgress max={max} left={left} />
               </div>
               <div className={classes.container__button}>
                  <Button
                     disableElevation
                     variant="contained"
                     className={classes.button_lightblue}
                     startIcon={<ListAltIcon />}
                     onClick={handleClickOpen}
                  >
                     View details
                  </Button>
               </div>
            </div>
         </div>
         <DonationDetails open={open} handleClose={handleClose} />
      </Box>
   )
}

function DonationProgress(props) {
   const { max, left } = props
   const multiplier = 100 / max
   const value = multiplier * (max - left)
   // const valueBuffer =
   return (
      <Box style={{ margin: '7px 0' }}>
         <Box display="flex" alignItems="center">
            <Box width="50%">
               <LinearProgress variant="determinate" value={value} />
            </Box>
         </Box>
         <Box>
            {left !== 0 ? (
               <Typography variant="body2">
                  <span style={{ fontWeight: 'bold' }}>
                     Remaining quantity left:{' '}
                  </span>
                  {left} out of {max}
               </Typography>
            ) : (
               <Typography
                  variant="body2"
                  style={{ margin: '8px 0', fontWeight: '300' }}
               >
                  All {max} pieces have already been claimed
               </Typography>
            )}
         </Box>
      </Box>
   )
}

function DonationDetails(props) {
   const { handleClose, open } = props
   const classes = useStyles()

   return (
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
         <DialogTitle>Donation Details</DialogTitle>
         <DialogContent dividers>
            <Grid container>
               <Grid container item xs={12} md={6}>
                  <Grid item xs={3}>
                     <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XYbVIMtYStaldxv09IlkCFzQ0vMZh9Ntuw&usqp=CAU"
                        alt="donation"
                        style={{
                           height: '100%',
                           width: '100%',
                           borderRadius: '5px',
                           objectFit: 'cover',
                        }}
                     />
                  </Grid>
                  <Grid item xs={9}>
                     <Box style={{ marginLeft: '1rem' }}>
                        <Typography className={classes.text_bold}>
                           Pancit Canton Noodles
                        </Typography>
                        <Box style={{ margin: '5px 0' }}>
                           <Chip
                              label="Instant Noodles"
                              color="primary"
                              size="small"
                           />
                        </Box>
                        <Typography variant="body2">
                           <span style={{ fontWeight: 'bold' }}>Quantity:</span>{' '}
                           72/100
                        </Typography>
                        <Typography variant="body2">
                           <span style={{ fontWeight: 'bold' }}>
                              Expiry Date:
                           </span>{' '}
                           September 15, 2021
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid item xs={10}>
                     <Typography className={classes.text_bold}>
                        Donation notes
                     </Typography>
                     <Typography variant="body2">
                        i have 100 pieces of lucky me pancit canton noodles.
                        assorted flavors will be given to you.
                     </Typography>
                  </Grid>
                  <Grid item xs={12}>
                     <Divider className={classes.divider_margin} />
                  </Grid>
                  <Grid container xs={12}>
                     <Grid item xs={6}>
                        <Typography
                           className={classes.text_bold}
                           style={{ textAlign: 'center' }}
                        >
                           Pickup location
                        </Typography>
                        <Typography
                           variant="body2"
                           style={{ textAlign: 'center' }}
                        >
                           National University-Manila
                        </Typography>
                     </Grid>
                     <Grid item xs={6}>
                        <Typography
                           className={classes.text_bold}
                           style={{ textAlign: 'center' }}
                        >
                           Pickup date
                        </Typography>
                        <Typography
                           variant="body2"
                           style={{ textAlign: 'center' }}
                        >
                           July 03, 2021
                        </Typography>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid container item xs={12} md={6} direction="column">
                  <Grid item>
                     <Typography
                        variant="h6"
                        className={classes.text_bold}
                        gutterBottom
                     >
                        Messages
                     </Typography>
                  </Grid>
                  <Grid item>
                     <div
                        style={{
                           overflowY: 'auto',
                           maxHeight: '300px',
                           display: 'flex',
                           flexDirection: 'column',
                        }}
                     >
                        {data.map((message) => (
                           <MessageItem
                              avatar={message.avatar}
                              doneeName={message.doneeName}
                              lastMessage={message.lastMessage}
                           />
                        ))}
                     </div>
                  </Grid>
               </Grid>
            </Grid>
         </DialogContent>
      </Dialog>
   )
}

function MessageItem(props) {
   const classes = useStyles()
   const { avatar, doneeName, lastMessage } = props

   return (
      <Box
         display="flex"
         alignItems="center"
         m={1}
         style={{
            cursor: 'pointer',
         }}
      >
         <Avatar style={{ marginRight: '1rem' }} alt="user" src={avatar} />
         <Box>
            <Typography className={classes.text_bold}>{doneeName}</Typography>
            <Typography variant="body2">{lastMessage}</Typography>
         </Box>
      </Box>
   )
}
const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      borderRadius: '5px',
   },
   appbar: {
      backgroundColor: 'white',
      borderRadius: '5px',
   },
   container__search: {
      borderRadius: '5px',
      width: 'auto',
      backgroundColor: 'white',
      padding: '15px 15px 10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
         flexDirection: 'column',
      },
   },
   text_bold: {
      fontWeight: 'bold',
   },
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
      [theme.breakpoints.down('xs')]: {
         marginTop: '.5rem',
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '25ch',
         '&:focus': {
            width: '30ch',
         },
      },
   },
   container__listingitem: {
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      margin: '10px  0',
      padding: '15px',
      borderRadius: '5px',
   },
   image__listingitem: {
      width: '150px',
      height: '150px',
      borderRadius: '5px',
      marginRight: '15px',
      objectFit: 'cover',
   },
   container__listingdetail: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
   },
   container__button: {
      alignSelf: 'flex-end',
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
   },
   button_grey: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[300],
      '&:hover': {
         backgroundColor: grey[400],
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: grey[300],
         },
      },
   },
   button_lightblue: {
      marginRight: theme.spacing(1),
      color: '#2196F3',
      backgroundColor: '#E3F2FD',
      '&:hover': {
         backgroundColor: '#BEE4FF',
         // Reset on touch devices, it doesn't add specificity
         '@media (hover: none)': {
            backgroundColor: '#2196F3',
         },
      },
   },
   divider_margin: {
      margin: theme.spacing(1.5, 0),
   },
}))
