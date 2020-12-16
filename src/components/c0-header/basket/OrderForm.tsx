import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {Button, TextField} from '@material-ui/core'
import React from 'react'

export const OrderForm = () => {
  return (
    <List>
      <ListItem>
        <TextField fullWidth label="Name"/>
      </ListItem>
      <ListItem>
        <TextField fullWidth label="Address"/>
      </ListItem>
      <ListItem>
        <TextField fullWidth label="Phone"/>
      </ListItem>
      <ListItem>
        <Button variant="outlined" onClick={() => alert('buy')}>Buy</Button>
      </ListItem>
    </List>
  )
}