import { Button, Col, Descriptions, Divider, Row, Typography } from 'antd'
import { ConnectedProps, connect } from 'react-redux'
import {
  ContactListType,
  ResponseStatus,
  UpdateProfileFormDataType,
  UserProfileType,
} from 'API/api'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { EditOutlined } from '@ant-design/icons'
import { ProfileForm } from '../ProfileForm/ProfileForm'
import { PureComponent } from 'react'
import { RootStateType } from 'redux/_store'
import { Status } from '../Status/Status'
import { appSelectors } from 'redux/app'

const { Title, Paragraph } = Typography

class Component extends PureComponent<ComponentPropsType, ComponentStateType> {
  state = {
    isEdit: false,
  }

  toggleIsEditTruthy = () => this.setState({ isEdit: true })
  toggleIsEditFalsy = () => this.setState({ isEdit: false })
  formSubmit = async (formData: UpdateProfileFormDataType) => {
    const res = await this.props.changeProfileData(formData)
    if (res?.resultCode === ResponseStatus.SUCCESS) {
      this.toggleIsEditFalsy()
    }
  }

  render() {
    const contactList: ContactListType = this.props.profileData.contacts
    if (this.state.isEdit) {
      return (
        <ProfileForm
          userData={this.props.profileData}
          submit={this.formSubmit}
          cancelForm={this.toggleIsEditFalsy}
          error={this.props.errorMessage}
        />
      )
    }

    return (
      <>
        {this.props.isOwner && (
          <Button
            type={'text'}
            onClick={this.toggleIsEditTruthy}
            icon={<EditOutlined />}
            style={{ position: 'absolute', right: 0, top: 0, zIndex: 1 }}
          ></Button>
        )}

        <Row>
          <Col span={24}>
            <Title level={2} italic={true} underline={true}>
              {this.props.profileData.fullName}
            </Title>
          </Col>
        </Row>
        <Divider>Profile status</Divider>
        <Row>
          <Col span={24}>
            <Status isOwner={this.props.isOwner} />
          </Col>
        </Row>
        <Divider>Profile info</Divider>
        <Row>
          <Col span={24}>
            <Paragraph>{this.props.profileData.aboutMe}</Paragraph>
            {this.props.profileData.lookingForAJob &&
              this.props.profileData.lookingForAJobDescription && (
                <Descriptions>
                  <Descriptions.Item label='LookingForAJob'>
                    <Paragraph>
                      {this.props.profileData.lookingForAJobDescription}
                    </Paragraph>
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
      </>
    )
  }
}

const mapState = (state: RootStateType) => ({
  profileData: userProfileSelectors.profile(state) as UserProfileType,
  errorMessage: appSelectors.errorMessage(state),
})
const mapDispatch = {
  changeProfileData: (formData: UpdateProfileFormDataType) =>
    userProfileOperations.changeUserProfileThunk(formData),
}

const connector = connect(mapState, mapDispatch)
export const UserInfo = connector(Component)

// Types
type ConnectorType = ConnectedProps<typeof connector>
type ComponentPropsType = ConnectorType & {
  isOwner: boolean
}
type ComponentStateType = {
  isEdit: boolean
}
