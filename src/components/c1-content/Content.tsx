import {ProductsType} from '../../utils/types'
import {Grid} from '@material-ui/core'
import {Route, Switch} from 'react-router-dom'
import React from 'react'
import {Mask} from './mask/Mask'
import {Antiseptic} from './antiseptic/Antiseptic'
import {Auth} from '../c0-header/auth/Auth'

type ContentProps = {
  items: ProductsType
  antiseptics: ProductsType
}
export const Content = (props: ContentProps) => {
  return (
    <Grid container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      width: '80%',
      margin: '0 auto',
      height: '100%'
    }}>
      <Switch>
        <Route exact path={'/'} render={() => props.items.map(mask => <Mask key={mask.id} mask={mask}/>)}/>
        <Route path={'/antiseptics'}
               render={() => props.antiseptics.map(antiseptic => <Antiseptic key={antiseptic.id}
                                                                             antiseptic={antiseptic}/>)}/>
        <Route exact path={'/login'} render={() => <Auth action='login' name='Sing in'/>}/>
        <Route exact path={'/registration'} render={() => <Auth action='registration' name='Sing up'/>}/>

      </Switch>
    </Grid>
  )
}