import { Avatar, Col, Row, Typography } from 'antd'
import ava from '../../../../assets/images/samurai-anime.jpg'
import { PostType } from '../../../../AppTypes'
import { FC } from 'react'

const { Title, Paragraph } = Typography

type ComponentPropsType = {
  post: PostType
}

export const Post: FC<ComponentPropsType> = ({ post }) => {
  return (
    <>
      <Row gutter={10} style={{ padding: '1rem' }}>
        <Col>
          <Avatar src={ava} size={'large'} />
        </Col>
        <Col>
          <Title level={3}>{post.title}</Title>
        </Col>
      </Row>
      <Row
        style={{
          paddingBottom: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <Paragraph>{post.body}</Paragraph>
      </Row>
    </>
  )
}
