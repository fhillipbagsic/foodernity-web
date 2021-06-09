import React, { useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { FilterDrawerResponsive } from './FilterDrawer'
import DonationItem from './DonationItem'
import MainContainer from '../shared/MainContainer'
import Axios from 'axios'
import { useFilterStore } from '../../store/FilterStore'
import data from '../../__mock__/donationsData'
// returns the container for individual listings that is displayed as a grid
export default function DonationsContainer() {
   const donationsData = useFilterStore((state) => state.donationsData)
   const setDonationsData = useFilterStore((state) => state.setDonationsData)

   // useEffect(() => {
   //    const obj = { userID: localStorage.getItem('userID') }
   //    Axios.post('http://localhost:3001/listingItem/get', obj).then(
   //       (response, err) => {
   //          if (err) {
   //             console.log(err)
   //          }
   //          console.log(response.data)
   //          setDonationsData(
   //             response.data.map((data) => (
   //                <DonationItem
   //                   key={data.listingID}
   //                   listingID={data.listingID}
   //                   imgLoc={data.imgLoc}
   //                   donationName={data.donationName}
   //                   distance={data.pickupLoc}
   //                   postTime={data.postTime}
   //                />
   //             ))
   //          )
   //       }
   //    )
   // }, [setDonationsData])

   // useEffect(() => {
   //    setDonationsData(

   //    )
   // })

   return (
      <MainContainer>
         <FilterDrawerResponsive />
         <Grid container spacing={1}>
            <Grid item xs={12}>
               <Typography variant="h6" component="h3">
                  Available donations near you
               </Typography>
            </Grid>
            {data.map((item) => (
               <DonationItem
                  key={item.listingID}
                  listingID={item.listingID}
                  donationName={item.donationName}
                  imgLoc={item.imgLoc}
                  distance={item.distance}
                  postTime={item.postTime}
               />
            ))}
         </Grid>
      </MainContainer>
   )
}
