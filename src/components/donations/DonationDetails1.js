import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import StyledAppBar from '../shared/StyledAppBar'
import {
   Avatar,
   Box,
   Button,
   Chip,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Divider,
   Grid,
   Paper,
   Typography,
   withStyles,
} from '@material-ui/core'
import LeftDrawer from '../shared/LeftDrawer'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { deepOrange } from '@material-ui/core/colors'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import MainContainer from '../shared/MainContainer'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import ScheduleIcon from '@material-ui/icons/Schedule'
import MapImage from './pickup_map.png'
import DialogDrawer from '../shared/DialogDrawer'
import { useParams } from 'react-router-dom'

// returns a page that displays the details of the donation when user clicks on a donation listing
export default function DonationDetails(props) {
   const classes = useStyles()
   const [openDialog, setOpenDialog] = useState(false)

   const handleOpen = () => {
      setOpenDialog(true)
   }

   const handleClose = () => {
      setOpenDialog(!openDialog)
   }

   const { listingId } = useParams()

   return (
      <div className={classes.root}>
         <CssBaseline />
         <StyledAppBar />
         <ActionDrawer handleOpen={handleOpen} />
         <MainContainer>
            <ActionDrawerResponsive />
            <Grid container justify="center">
               <DonationImages />
               <DonationDetail />
            </Grid>
            <Report open={openDialog} handleClose={handleClose} />
         </MainContainer>
      </div>
   )
}
// returns a left drawer that allows user to view the donor's name, message the donor, and request the listing
function ActionDrawer(props) {
   const { handleOpen } = props
   const classes = useStyles()
   return (
      <LeftDrawer>
         <BackButton />
         <Typography>
            Listed <span className={classes.text_bold}>2h ago</span> by
         </Typography>
         <DonorAvatar />
         <Divider className={classes.divider_margin} />
         {/* <SendMessageButton /> */}
         <RequestButton />

         <ReportButton handleOpen={handleOpen} />
      </LeftDrawer>
   )
}
// returns a dialog drawer that displays when the screen reaches responsive layout
function ActionDrawerResponsive(props) {
   const { handleOpen } = props
   const classes = useStyles()

   return (
      <DialogDrawer buttonName="actions" dialogTitle="Actions">
         <BackButton />
         <Typography>
            Listed <span className={classes.text_bold}>2h ago</span> by
         </Typography>
         <DonorAvatar />
         <Divider className={classes.divider_margin} />
         {/* <SendMessageButton /> */}
         <RequestButton />
         {/* <ReportButton handleOpen={handleOpen} /> */}
      </DialogDrawer>
   )
}
// returns a return to listings button
function BackButton() {
   return (
      <div
         style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}
      >
         <ArrowBackIcon fontSize="small" />
         <div style={{ width: '.5rem' }}></div>
         <Typography>Back</Typography>
      </div>
   )
}

// returns the donor's avatar and name
function DonorAvatar() {
   const classes = useStyles()
   return (
      <div className={classes.container__avatar}>
         <Avatar className={classes.avatar__color}>FB</Avatar>
         <Typography variant="body1" component="p">
            Fhillip Bagsic
         </Typography>
      </div>
   )
}
// returns button that allows user to message the donor. redirects to message page
function SendMessageButton() {
   return (
      <Button
         color="primary"
         variant="outlined"
         fullWidth
         startIcon={<ChatBubbleIcon />}
      >
         Send a message
      </Button>
   )
}
// returns a button that allows user to request the listing
function RequestButton() {
   const StyledButton = withStyles({
      root: {
         backgroundColor: '#66BB6A',
         color: 'white',
         '&:hover': {
            backgroundColor: '#60B064',
         },
      },
   })(Button)

   return <StyledButton fullWidth>Receive Listing</StyledButton>
}
// returns a button that allows user to report what the user thinks is deemed to be reported
function ReportButton(props) {
   const { handleOpen } = props
   const classes = useStyles()
   return (
      <Button
         onClick={handleOpen}
         color="secondary"
         variant="outlined"
         fullWidth
         className={classes.button__report}
      >
         See something wrong?
      </Button>
   )
}
// returns the photos of the donation
function DonationImages(props) {
   const classes = useStyles()
   const image =
      'https://i.pinimg.com/originals/3a/01/1d/3a011d76e93823db300009c39a039af4.jpg'

   return (
      <Grid
         container
         item
         xs={12}
         lg={6}
         direction="column"
         className={classes.container}
      >
         <Typography variant="h6" className={classes.container__title}>
            Donation Images
         </Typography>
         <Paper className={classes.container__paper}>
            <img
               src={image}
               alt="pancit canton"
               className={classes.image__mainPreview}
            />
         </Paper>
      </Grid>
   )
}
// returns the details of the donation, has multiple child components
function DonationDetail(props) {
   const classes = useStyles()

   return (
      <Grid
         container
         item
         xs={12}
         lg={6}
         direction="column"
         className={classes.container}
      >
         <Typography variant="h6" className={classes.container__title}>
            Item Details
         </Typography>
         <Paper className={classes.container__paper}>
            <Typography variant="h6" className={classes.text_bold}>
               Lucky Me Pancit Canton Noodles
            </Typography>
            <DistanceFromDonee />
            <ChipCategory />
            <DonationQuantity />
            <DonationExpiry />
            <DonationNotes />
            <Map />
            <Pickup />
         </Paper>
      </Grid>
   )
}
// returns the distance from the user
function DistanceFromDonee() {
   const classes = useStyles()

   return (
      <div className={classes.container__distanceAway}>
         <LocationOnIcon color="secondary" />
         <Typography>3 kilometers away</Typography>
      </div>
   )
}
// returns the food category of the donation
function ChipCategory() {
   const classes = useStyles()

   return (
      <div className={classes.container__chipCategory}>
         <Chip label="Instant Noodles" color="primary" />
      </div>
   )
}
// returns the quantity of the donation
function DonationQuantity() {
   const classes = useStyles()

   return (
      <Typography>
         <span className={classes.text_bold}>Quantity:</span> 5 (in pieces)
      </Typography>
   )
}
// returns the expiry date of the donation
function DonationExpiry() {
   const classes = useStyles()

   return (
      <div style={{ margin: '5px 0' }}>
         <Typography>
            The expiry date is on{' '}
            <span className={classes.text_bold}>June 07, 2021</span>.
         </Typography>
      </div>
   )
}
function DonationNotes() {
   const classes = useStyles()

   return (
      <>
         <Typography className={classes.text_bold}>Donation Notes</Typography>
         <Typography>
            If you are interested, text me on my number 09123456789 or message
            me instead here.
         </Typography>
      </>
   )
}
// returns a map that shows approximate pickup location
function Map() {
   const classes = useStyles()

   return (
      //<div style={{width: '100%', height: '150px'}}>
      <img className={classes.image__map} src={MapImage} alt="map" />
      //</div>
   )
}
// returns pickup details - the pickup location, date, and time
function Pickup() {
   const classes = useStyles()

   return (
      <>
         <div className={classes.container__pickup}>
            <LocationOnIcon
               className={`${classes.icon_pickup} ${classes.icon__location_green}`}
            />
            <Typography>
               Pick up location is around{' '}
               <span className={classes.text__address_highlighted}>
                  {' '}
                  Jhocson St., Sampaloc, Manila
               </span>
               .
            </Typography>
         </div>
         <div className={classes.container__pickup}>
            <EventAvailableIcon
               className={`${classes.icon_pickup} ${classes.icon__date_orange}`}
            />
            <Typography>
               Pick up date is on{' '}
               <span className={classes.text_bold}> June 06, 2021</span>.
            </Typography>
         </div>
         <div className={classes.container__pickup}>
            <ScheduleIcon
               className={`${classes.icon_pickup} ${classes.icon__time_purple}`}
            />
            <Typography>
               Pick up time is in the afternoon,{' '}
               <span className={classes.text_bold}> between 12pm to 5pm</span>.
            </Typography>
         </div>
      </>
   )
}

function Report(props) {
   const { open, handleClose } = props

   return (
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Report</DialogTitle>
         <DialogContent dividers>
            <Box mb={3}>
               <Typography variant="h6" gutterBottom>
                  Let us know what is going on
               </Typography>
               <Typography gutterBottom>
                  Tell us about the issues with the donation.
               </Typography>
            </Box>

            <Grid container spacing={1}>
               <Grid item>
                  <Chip
                     // onClick={() => handleSetClicked(1)}
                     // color={chip1}
                     // onClicked={handleSetClicked(0)}
                     label="Inaccurate Description"
                  />
               </Grid>
               <Grid item>
                  <Chip
                     // onClick={() => handleSetClicked(1)}
                     // color={clicked.chip2}
                     label="Promoting a Business"
                  />
               </Grid>
               <Grid item>
                  <Chip
                     // color={clicked.chip3}
                     label="No Intent to Donate"
                  />
               </Grid>
               <Grid item>
                  <Chip
                     // color={clicked.chip4}
                     label="Inappropriate item"
                  />
               </Grid>
               <Grid item>
                  <Chip
                     // color={clicked.chip5}
                     label="Abusive or Harmful Content"
                  />
               </Grid>
               <Grid item>
                  <Chip
                     // color={clicked.chip6}
                     label="Scam"
                  />
               </Grid>
               <Grid item>
                  <Chip
                     // color={clicked.chip7}
                     label="Sexualized Content"
                  />
               </Grid>
            </Grid>
         </DialogContent>
         <DialogActions>
            <Button variant="contained" color="primary">
               Report
            </Button>
         </DialogActions>
      </Dialog>
   )
}

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   container: {
      maxWidth: '700px',
      height: '100%',
      padding: theme.spacing(1, 3),
   },
   container__paper: {
      padding: theme.spacing(2.5),
   },
   container__title: {
      fontWeight: 'bold',
      marginBottom: '10px',
   },
   text_bold: {
      fontWeight: 'bold',
   },
   divider_margin: {
      margin: theme.spacing(2.5, 0),
   },
   button__report: {
      marginTop: 'auto',
   },
   container__avatar: {
      display: 'flex',
      alignItems: 'center',
   },
   avatar__color: {
      backgroundColor: deepOrange[500],
      marginRight: '10px',
   },
   image__mainPreview: {
      width: '100%',
      height: '450px',
   },
   container__subImages: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100px',
   },
   image__subImage: {
      width: '25%',
      padding: '3px',
      cursor: 'pointer',
   },
   image__sub: {
      width: '100%',
      height: '100%',
      borderRadius: theme.spacing(0.5),
   },
   container__distanceAway: {
      display: 'flex',
      margin: '5px 0',
   },
   container__chipCategory: {
      display: 'flex',
      margin: '10px 0',
   },
   image__map: {
      height: '200px',
      width: '100%',
   },
   container__pickup: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
   },
   icon_pickup: {
      marginRight: theme.spacing(0.5),
   },
   icon__location_green: {
      color: '#66BB6A',
   },
   text__address_highlighted: {
      fontWeight: 'bold',
      color: '#2196F3',
   },
   icon__date_orange: {
      color: '#FFA726',
   },
   icon__time_purple: {
      color: '#AB47BC',
   },
}))
