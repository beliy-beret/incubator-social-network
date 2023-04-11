import { Button, Col, Descriptions, Divider, Row, Typography } from 'antd'
import { ContactListType, UserProfileType } from 'API/api'

import { EditOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { Status } from '../Status/Status'

const { Title, Paragraph } = Typography

type ComponentPropsType = {
  userData: UserProfileType
  profileStatus: string
}

export const UserInfo: FC<ComponentPropsType> = ({ userData }) => {
  const contactList: ContactListType = userData.contacts

  return (
    <div>
      <Row>
        <Col span={24}>
          <Title level={2} italic={true} underline={true}>
            {userData.fullName}
          </Title>
        </Col>
      </Row>
      <Divider>Profile status</Divider>
      <Row>
        <Col span={24}>
          <Status />
        </Col>
      </Row>
      <Divider>Profile info</Divider>
      <Row style={{ position: 'relative' }}>
        <Button type='text' style={{ position: 'absolute', right: 0, top: 0 }}>
          <EditOutlined />
        </Button>
        <Col span={24}>
          <Paragraph>{userData.aboutMe}</Paragraph>
          {userData.lookingForAJob && userData.lookingForAJobDescription && (
            <Descriptions>
              <Descriptions.Item label='LookingForAJob'>
                <Paragraph>{userData.lookingForAJobDescription}</Paragraph>
              </Descriptions.Item>
            </Descriptions>
          )}
        </Col>
      </Row>

      <Divider>User contacts</Divider>
      <Row>
        <Col>
          <Descriptions column={1}>
            {Object.keys(contactList).map((contact: string, index: number) =>
              contactList[contact] ? (
                <Descriptions.Item key={index} label={contact}>
                  {contactList[contact]}
                </Descriptions.Item>
              ) : null
            )}
          </Descriptions>
        </Col>
      </Row>
    </div>
  )
}
