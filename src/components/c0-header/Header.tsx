import React from 'react'
import {NavLink} from 'react-router-dom'
import {ProductsType} from '../../utils/types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {Menu} from '@material-ui/icons'
import {Badge, Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Typography from '@material-ui/core/Typography'

type HeaderProps = {
  openBasket: () => void
  openMenu: () => void
  basket: ProductsType
}

export const Header = (props: HeaderProps) => {
  return (
    <AppBar color='inherit' position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={props.openMenu}>
          <Menu/>
        </IconButton>
        <div style={{flexGrow: 1}}/>
        <div style={{flexGrow: 1}}>
          <Typography variant="h4" noWrap style={{flexGrow: 1}}>Welcome to online store!</Typography>
        </div>
        <NavLink to='/login' style={{color: 'black', textDecoration: 'none'}}>
          <Button style={{margin: '10px'}}>Sing in</Button>
        </NavLink>
        <NavLink to='/registration' style={{color: 'black', textDecoration: 'none'}}>
          <Button style={{margin: '10px'}}>Sing up</Button>
        </NavLink>
        {!!props.basket.length && <IconButton color="inherit" edge="end" onClick={props.openBasket}>
          <Badge badgeContent={props.basket.length} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>}
      </Toolbar>
    </AppBar>
  )
}