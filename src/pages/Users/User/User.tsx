import { Button, Col, Image, Input, Modal, Row, Space, Typography } from 'antd'
import { ChangeEvent, FC, useState } from 'react'

import { Link } from 'react-router-dom'
import { UserType } from 'API/api'
import classes from './user.module.css'
import userImg from '../../../assets/images/user.jpg'

type ComponentPropsType = {
  user: UserType
  subscribe: (userId: number) => void
  sendMessage: (userId: number, message: string) => void
}

export const User: FC<ComponentPropsType> = ({
  user,
  subscribe,
  sendMessage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    sendMessage(user.id, message)
    setIsModalOpen(false)
  }
  const cancelModal = () => {
    setIsModalOpen(false)
  }

  const subscribeButtonHandle = () => {
    subscribe(user.id)
  }

  return (
    <>
      <Modal
        title='Write message'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={cancelModal}
        footer={[
          <Button key='back' onClick={cancelModal}>
            Cancel
          </Button>,
          <Button key='submit' type='primary' onClick={handleOk}>
            Send message
          </Button>,
        ]}
      >
        <Input.TextArea value={message} onChange={messageHandler} rows={6} />
      </Modal>
      <Row gutter={[16, 16]} className={classes.user}>
        <Col flex={'1 1 200px'}>
          <Image
            src={user.photos.small || userImg}
            alt={'samurai'}
            width={150}
            height={150}
          />
        </Col>
        <Col flex={'1 1 350px'}>
          <Typography.Title level={3} italic underline>
            {user.name}
          </Typography.Title>
          <span>{user.status}</span>
        </Col>
        <Col flex={'0 0 100%'}>
          <Space>
            <Link to={`profile/${user.id}`}>Go to profile</Link>
            <Button type={'primary'} onClick={subscribeButtonHandle}>
              {user.followed ? 'Unsubscribe' : 'Subscribe'}
            </Button>
            <Button onClick={showModal}>Send message</Button>
          </Space>
        </Col>
      </Row>
    </>
  )
}
