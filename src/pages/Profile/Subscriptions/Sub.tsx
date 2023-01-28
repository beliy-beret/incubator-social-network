import { Avatar, Col, Row } from 'antd'
import { FC } from 'react'

type ComponentPropsType = {
  src: string
}

export const Sub: FC<ComponentPropsType> = ({ src }) => {
  return (
    <Row>
      <Col>
        <Avatar src={src} />
      </Col>
    </Row>
  )
}
