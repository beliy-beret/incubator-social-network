import { FC } from 'react'
import classes from './errorMessage.module.css'

type ComponentPropsType = {
  message: string
}

const ErrorMessage: FC<ComponentPropsType> = ({ message }) => {
  return <span className={classes.error}>{message}</span>
}

export default ErrorMessage
