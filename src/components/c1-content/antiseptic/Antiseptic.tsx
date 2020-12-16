import {ProductType} from '../../../utils/types'
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

type AntisepticProps = {
  antiseptic: ProductType
}
export const Antiseptic = (props: AntisepticProps) => {

  return (
    <Grid key={props.antiseptic.id} item>
      <Card style={{margin: '10px', width: '300px'}}>
        <CardMedia component="img" image={props.antiseptic.src} title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{props.antiseptic.title}</Typography>
          <Typography variant="body2" color="textSecondary"
                      component="p">{props.antiseptic.description}</Typography>
        </CardContent>
        <CardActions style={{position: 'relative'}}>
          <Typography>{`${props.antiseptic.price} $`}</Typography>
          <Button
            style={{position: 'absolute', right: '5px'}}
            onClick={() => alert('add to cart')}>Add to Card</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}