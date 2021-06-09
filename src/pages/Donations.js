import React from 'react'
import { Helmet } from 'react-helmet'
import { FilterDrawer } from '../components/donations/FilterDrawer'
import StyledAppBar from '../components/shared/StyledAppBar'
import { CssBaseline } from '@material-ui/core'
import DonationsContainer from '../components/donations/DonationsContainer'

export default function Donations() {
   return (
      <>
         <Helmet>
            <title>Listings | Foodernity</title>
         </Helmet>
         <div style={{ display: 'flex' }}>
            <CssBaseline />
            <StyledAppBar />
            <FilterDrawer />
            <DonationsContainer />
         </div>
      </>
   )
}
