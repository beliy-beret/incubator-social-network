import { Checkbox, Input } from 'antd'

import { AuthFormDataType } from '../../../AppTypes'
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage'
import { FC } from 'react'
import classes from './loginForm.module.css'
import { connect } from 'react-redux'
import { signInThunk } from '../../../redux/thunks/authThunk'
import { useFormik } from 'formik'
import { validate } from './validate'

type MapDispatchType = {
  login: (formData: AuthFormDataType) => void
}

type ComponentPropsType = MapDispatchType

const Form: FC<ComponentPropsType> = ({ login }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validate,
    onSubmit: (values: AuthFormDataType) => {
      login(values)
    },
  })

  return (
    <section className={classes.loginPage}>
      <h2 className={classes.title}>Login</h2>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Input
          placeholder='Enter email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            borderColor:
              formik.errors.email && formik.touched.email ? 'red' : 'inherit',
          }}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage message={formik.errors.email} />
        )}

        <Input.Password
          placeholder='Enter password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            borderColor:
              formik.errors.password && formik.touched.password
                ? 'red'
                : 'inherit',
          }}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage message={formik.errors.password} />
        )}

        <Checkbox
          name='rememberMe'
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

const mapState = () => {
  return {}
}

const mapDispatch = {
  login: (formData: AuthFormDataType) => signInThunk(formData),
}

export const AuthForm = connect(mapState, mapDispatch)(Form)
