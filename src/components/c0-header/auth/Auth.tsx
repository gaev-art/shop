import React from 'react'
import {Button, FormControl, FormGroup, Grid, TextField, Typography} from '@material-ui/core'
import {useFormik} from 'formik'

type PropsType = {
  action: string
  name: string
}

export const Auth = (props: PropsType) => {

  const formik = useFormik({
    validate: (values: { password: string, email: string, disabled: boolean }) => {
      if (!values.email) {
        return {
          email: 'email is required',
          disabled: true
        }
      }
      if (!values.password) {
        return {
          password: 'Password is required',
          disabled: true
        }
      }
    },
    initialValues: {
      password: '',
      email: '',
      action: '',
      disabled: false
    },
    onSubmit: values => {
      if (values.action === 'login') {
        alert('log')
      } else if (values.action === 'registration') {
        alert('reg')
      }
    },
  })

  const handleSubmit = (action: string) => {
    formik.setFieldValue('action', action)
    formik.handleSubmit()
  }

  return <Grid container style={{
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }}>
    <form onSubmit={formik.handleSubmit}>
      <Typography style={{margin: '15px'}} variant="h3">{props.name}</Typography>
      <FormControl>
        <FormGroup>
          <TextField label="Email" margin="normal" variant="outlined"
                     {...formik.getFieldProps('email')}/>
          {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
          <TextField label="Password" margin="normal" variant="outlined" type='password'
                     {...formik.getFieldProps('password')}/>
          {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
          <Grid container justify='center' alignItems='center'>
            <Button disabled={!!formik.errors.disabled}
                    onClick={() => handleSubmit(props.action)}
                    style={{margin: '10px'}}>
              {props.name}
            </Button>
          </Grid>
        </FormGroup>
      </FormControl>
    </form>
  </Grid>
}

