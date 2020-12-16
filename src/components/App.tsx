import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import {Button} from '@material-ui/core'
import {antiseptics, basket, masks} from '../database'
import {Header} from './c0-header/Header'
import {Content} from './c1-content/Content'
import {Basket} from './c0-header/basket/Basket'
import {OrderForm} from './c0-header/basket/OrderForm'


export const App = () => {

  const [openBasket, setOpenBasket] = useState<boolean>(false)
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const handleDrawerOpenBasket = () => setOpenBasket(true)
  const handleDrawerOpenMenu = () => setOpenMenu(true)
  const handleDrawerCloseBasket = () => setOpenBasket(false)
  const handleDrawerCloseMenu = () => setOpenMenu(false)

  return (
    <div style={{display: 'flex'}}>
      <Header basket={basket} openBasket={handleDrawerOpenBasket} openMenu={handleDrawerOpenMenu}/>
      <Content antiseptics={antiseptics} items={masks}/>
      <Drawer variant="persistent" anchor="left" open={openMenu}>
        <Button style={{margin: '10px'}} onClick={handleDrawerCloseMenu}><ChevronLeftIcon/></Button>
        <List>
          <NavLink onClick={() => handleDrawerCloseMenu()} to='/'
                   style={{color: 'black', textDecoration: 'none'}}>
            <ListItem button>
              <Typography variant="h6" noWrap style={{flexGrow: 1}}>Маски</Typography>
            </ListItem>
          </NavLink>
          <NavLink onClick={() => handleDrawerCloseMenu()} to='/antiseptics'
                   style={{color: 'black', textDecoration: 'none'}}>
            <ListItem button>
              <Typography variant="h6" noWrap style={{flexGrow: 1}}>Антисептики</Typography>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <Drawer variant="persistent" anchor="right" open={openBasket}>
        <Button style={{margin: '10px'}} onClick={handleDrawerCloseBasket}><ChevronRightIcon/></Button>
        <Basket closeBasket={handleDrawerCloseBasket} basket={basket}/>
        <OrderForm/>
      </Drawer>
    </div>
  )
}

