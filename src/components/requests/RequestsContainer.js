import { Grid, Typography } from '@material-ui/core'
import MainContainer from '../shared/MainContainer'
import { data } from '../../__mock__/requestData'
import RequestItem from './RequestItem'
import ScrollTop from '../shared/ScrollTop'

export default function RequestsContainer() {
   return (
      <MainContainer>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <Typography variant="h6" component="h3">
                  Requested donations near you
               </Typography>
            </Grid>
            {data.map((item) => (
               <RequestItem
                  requestID={item.requestID}
                  imgLoc={item.imgLoc}
                  requestName={item.requestName}
                  distance={item.distance}
                  postTime={item.postTime}
                  max={item.max}
               />
            ))}
         </Grid>
         <ScrollTop />
      </MainContainer>
   )
}
