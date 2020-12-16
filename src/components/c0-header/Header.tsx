import {ProductsType} from '../../utils/types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {Menu} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'

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
        {!!props.basket.length && <IconButton color="inherit" edge="end" onClick={props.openBasket}>
          <Badge badgeContent={props.basket.length} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
        </IconButton>}
      </Toolbar>
    </AppBar>
  )
}