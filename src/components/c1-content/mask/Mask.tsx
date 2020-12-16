import {ProductType} from '../../../utils/types'
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

type MaskProps = {
  mask: ProductType
}
export const Mask = (props: MaskProps) => {

  return (
    <Grid key={props.mask.id} item>
      <Card style={{margin: '10px', width: '300px'}}>
        <CardMedia component="img" image={props.mask.src} title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.mask.title}</Typography>
          <Typography variant="body2" color="textSecondary"
                      component="p">{props.mask.description}</Typography>
        </CardContent>
        <CardActions style={{position: 'relative'}}>
          <Typography>{`${props.mask.price} $`}</Typography>
          <Button style={{position: 'absolute', right: '5px'}}
                  onClick={() => alert('add to cart')}>Add to Card</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}