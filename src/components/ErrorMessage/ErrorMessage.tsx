import { FC } from 'react'
import { Alert } from 'antd'

type ComponentPropsType = {
  message: string
}

export const ErrorMessage: FC<ComponentPropsType> = ({ message }) => (
  <Alert description={message} type='error' />
)
