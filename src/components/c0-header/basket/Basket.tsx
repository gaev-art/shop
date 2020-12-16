import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {Avatar, Button} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import {ProductsType} from '../../../utils/types'

type BasketType = {
  basket: ProductsType
  closeBasket: () => void
}
export const Basket = (props: BasketType) => {


  const removeAllItems = () => {
    alert('remove all')
    props.closeBasket()
  }

  return (
    <List style={{textAlign: 'center'}}>
      {props.basket.map((item) => (
        <ListItem key={item.id}>
          <Avatar style={{marginRight: '10px'}} src={item.src}/>
          <ListItemText style={{marginRight: '10px'}} primary={item.title}/>
          <IconButton
            onClick={() => alert('remove')}><RemoveIcon/></IconButton>
          <span
            style={{
              color: 'red',
              fontWeight: 'bold'
            }}>{item.counter < 10 ? '0' + item.counter : item.counter}</span>
          <IconButton onClick={() => alert('add')}><AddIcon/></IconButton>
        </ListItem>
      ))}
      {!!props.basket.length &&
      <Button variant="outlined" style={{margin: '5px'}} onClick={removeAllItems}>
        Remove all
      </Button>}
      {!props.basket.length && <div style={{padding: '10px', color: 'grey'}}>Cart is empty</div>}
      <Divider/>
      <Typography variant="h5" component="h2">Total: {'total'} $</Typography>
      <Divider/>
    </List>
  )
}