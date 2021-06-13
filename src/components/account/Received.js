import React, { useState } from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Button, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { grey } from '@material-ui/core/colors'
import AddIcon from '@material-ui/icons/Add'
import { receivedata } from '../../__mock__/toReceiveData'

export default function Received() {
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
                  Received Donations
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
                  <Tab label="To Receive" />
                  <Tab label="Received" />
               </Tabs>
            </AppBar>
         </Box>

         <TabPanel value={value} index={0}>
            {receivedata.map((donation) => (
               <ToReceiveDonation
                  listingID={donation.listingID}
                  donationName={donation.donationName}
                  imgLoc={donation.imgLoc}
                  quantity={donation.quantity}
                  pickupLocation={donation.pickupLocation}
                  pickupDate={donation.pickupDate}
               />
            ))}
         </TabPanel>
         <TabPanel value={value} index={1}>
            {receivedata.map((donation) => (
               <ReceivedDonation
                  listingID={donation.listingID}
                  donationName={donation.donationName}
                  imgLoc={donation.imgLoc}
                  quantity={donation.quantity}
                  pickupLocation={donation.pickupLocation}
                  pickupDate={donation.pickupDate}
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

function ToReceiveDonation(props) {
   const {
      listingID,
      donationName,
      imgLoc,
      quantity,
      pickupLocation,
      pickupDate,
   } = props
   const classes = useStyles()

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
                  <Typography variant="body2">
                     <span style={{ fontWeight: 'bold' }}>To receive:</span>{' '}
                     {quantity} pieces
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: '300' }}>
                     Pickup on{' '}
                     <span style={{ fontWeight: '400' }}> {pickupDate}</span> at{' '}
                     <span style={{ color: '#2196F3' }}>{pickupLocation}</span>
                  </Typography>
               </div>
               <div className={classes.container__button}>
                  <Button
                     disableElevation
                     variant="contained"
                     className={classes.button_lightblue}
                     startIcon={<ListAltIcon />}
                  >
                     Message Donor
                  </Button>
               </div>
            </div>
         </div>
      </Box>
   )
}

function ReceivedDonation(props) {
   const {
      listingID,
      donationName,
      imgLoc,
      quantity,
      pickupLocation,
      pickupDate,
   } = props
   const classes = useStyles()

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
                  <Typography
                     variant="body2"
                     style={{ margin: '8px 0', fontWeight: '300' }}
                  >
                     You have received {quantity} pieces of this donation
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: '300' }}>
                     Pickedup on{' '}
                     <span style={{ fontWeight: '400' }}> {pickupDate}</span> at{' '}
                     <span style={{ color: '#2196F3' }}>{pickupLocation}</span>
                  </Typography>
               </div>
               {/* <div className={classes.container__button}>
                  <Button
                     disableElevation
                     variant="contained"
                     className={classes.button_lightblue}
                     startIcon={<ListAltIcon />}
                  >
                     Message Donor
                  </Button>
               </div> */}
            </div>
         </div>
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
