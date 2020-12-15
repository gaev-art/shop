import React, {useState} from 'react'
import {Button, CircularProgress, Paper, TextField} from '@material-ui/core'
import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Auth API'
}

type PropsType = {
  isLoading: boolean
  state: any
  onClick: (email: string, password: string) => void
}

const Screen = (props: PropsType) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const setData = (email: string, password: string) => props.onClick(email, password)


  if (props.isLoading) {
    return <div
      style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
      <CircularProgress/>
    </div>
  }

  return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <TextField label={'email'}
                 style={{margin: '10px'}}
                 value={email}
                 onChange={event => setEmail(event.currentTarget.value)}
      />
      <TextField label={'password'}
                 type={'password'}
                 style={{margin: '10px'}}
                 value={password}
                 onChange={event => setPassword(event.currentTarget.value)}
      />
      <Button variant='outlined' onClick={() => setData(email, password)}>submit</Button>
    </div>
    <Paper style={{margin: '30px', padding: '10px'}}>
      {JSON.stringify(props.state)}
    </Paper>
  </div>
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
})

export const Login = () => {
  const [state, setState] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onClickHandler = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      await instance.post(`/auth/login`, {email, password})
      setState('User logged in!')
      setIsLoading(false)
    } catch (error) {
      setState('Error, incorrect login information!')
      setIsLoading(false)
    }
  }

  return <Screen isLoading={isLoading} onClick={onClickHandler} state={state}/>
}

export const Registration = () => {

  const [state, setState] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onClickHandler = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      await instance.post(`/auth/registration`, {email, password})
      setState('User registered!')
      setIsLoading(false)
    } catch (error) {
      setState('Error, incorrect registration information!')
      setIsLoading(false)
    }
  }

  return <Screen isLoading={isLoading} onClick={onClickHandler} state={state}/>
}

export const GetUsers = () => {

  const [state, setState] = useState<any>(null)
  const [token, setToken] = useState<any>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const setData = async (token = '') => {
    try {
      setIsLoading(false)
      const res = await instance.get(`/auth/users`, {headers: {authorization: token}})
      setState(res.data)
      setIsLoading(false)
    } catch (error) {
      alert(error.message)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div
      style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
      <CircularProgress/>
    </div>
  }

  return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <TextField label={'token'}
                 type={'token'}
                 style={{margin: '10px'}}
                 value={token}
                 onChange={event => setToken(event.currentTarget.value)}
      />
      <Button variant='outlined' onClick={() => setData(token)}>submit</Button>
    </div>
    <Paper style={{margin: '30px', padding: '10px'}}>
      {JSON.stringify(state)}
    </Paper>
  </div>
}