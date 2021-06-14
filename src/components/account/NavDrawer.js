import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import DialogDrawer from '../shared/DialogDrawer'
import LeftDrawer from '../shared/LeftDrawer'
import ReceiptIcon from '@material-ui/icons/Receipt'
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { Link, useRouteMatch } from 'react-router-dom'
const iconList = [
   {
      label: 'Posted Donations',
      icon: <ReceiptIcon />,
      color: '#66BB6A',
      link: '',
   },
   {
      label: 'Received Donations',
      icon: <ReceiptIcon />,
      color: '#66BB6A',
      link: '/receiveddonations',
   },
   {
      label: 'Requested Donations',
      icon: <ReceiptIcon />,
      color: '#66BB6A',
      link: '/requesteddonations',
   },
]
const iconList2 = [
   {
      label: 'My Profile',
      icon: <AccountBoxRoundedIcon />,
      color: '#2196F3',
      link: '/myprofile',
   },
   {
      label: 'Edit Profile',
      icon: <EditRoundedIcon />,
      color: '#2196F3',
      link: '/editprofile',
   },
]

export default function NavDrawer() {
   const classes = useStyles()

   return (
      <>
         <LeftDrawer>
            <Title />
            <Divider className={classes.divider_margin} />
            <Subtitle title="Donations" />
            {iconList.map((list) => (
               <Tab icon={list.icon} label={list.label} link={list.link} />
            ))}
            <Subtitle title="Profile" />
            {iconList2.map((list) => (
               <Tab icon={list.icon} label={list.label} link={list.link} />
            ))}
         </LeftDrawer>
         <DialogDrawer buttonName="Account">
            <Title />
            <Divider className={classes.divider_margin} />
            <Subtitle title="Donations" />
            {iconList.map((list) => (
               <Tab icon={list.icon} label={list.label} link={list.link} />
            ))}
         </DialogDrawer>
      </>
   )
}

function Title() {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.title} ${classes.text_bold}`}
            gutterBottom
            variant="h5"
            component="h2"
         >
            My Account
         </Typography>
      </div>
   )
}
function Subtitle(props) {
   const classes = useStyles()
   return (
      <div>
         <Typography
            className={`${classes.subtitle} ${classes.text_bold}`}
            gutterBottom
            variant="h6"
            component="h2"
            style={{ color: props.color }}
         >
            {props.title}
         </Typography>
      </div>
   )
}

function Tab(props) {
   const classes = useStyles()
   const { label, icon, link } = props
   let { url } = useRouteMatch()
   return (
      <Grid
         container
         direction="row"
         className={`${classes.container__tab} ${classes.hover}`}
         component={Link}
         to={`${url}${link}`}
      >
         <Typography>{label}</Typography>
      </Grid>
   )
}

const useStyles = makeStyles((theme) => ({
   text_bold: {
      fontWeight: 'bold',
   },
   title: {
      margin: theme.spacing(0.5, 0),
   },
   divider_margin: {
      margin: theme.spacing(1.5, 0),
   },
   container__tab: {
      width: 'auto',
      cursor: 'pointer',
      padding: '10px 10px 10px 10px',
      textDecoration: 'none',
   },
   hover: {
      '&:hover': {
         backgroundColor: '#F5F5F5',
         borderRadius: '5px',
      },
   },
}))
