import { Alert } from 'antd'
import { FC } from 'react'

export const ErrorMessage: FC<ComponentPropsType> = ({ message }) => (
  <Alert description={message} type='error' />
)

type ComponentPropsType = {
  message: string
}
