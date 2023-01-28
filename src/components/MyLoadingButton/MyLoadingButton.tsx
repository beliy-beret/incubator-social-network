import { FC, useState } from 'react'
import { Button } from 'antd'

type ComponentPropsType = {
  text: string
}

export const MyLoadingButton: FC<ComponentPropsType> = ({ text }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const enterLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <Button type='primary' loading={loading} onClick={() => enterLoading()}>
      {text}
    </Button>
  )
}
