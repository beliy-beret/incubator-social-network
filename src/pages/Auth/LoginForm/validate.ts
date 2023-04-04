import { AuthFormDataType } from 'API/api'

export const validate = (values: AuthFormDataType) => {
  const errors: Partial<AuthFormDataType> = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 4) {
    errors.password = 'Password should have min 4 symbols'
  }

  return errors
}
