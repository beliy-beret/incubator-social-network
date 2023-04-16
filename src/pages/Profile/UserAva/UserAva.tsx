import { Col, Image, Row, Space } from 'antd'
import { userProfileOperations, userProfileSelectors } from 'redux/userProfile'

import { PureComponent } from 'react'
import { RootStateType } from 'redux/_store'
import TemplatePhoto from '../../../assets/images/user.jpg'
import { UploadFileInput } from 'components/UploadFileInput/UploadFileInput'
import { connect } from 'react-redux'

class Ava extends PureComponent<ComponentPropsType> {
  render() {
    return (
      <Row>
        <Col>
          <Space direction='vertical' size={'middle'}>
            <Image
              src={this.props.profilePhotoURL || TemplatePhoto}
              width={300}
              style={{
                padding: '0.5rem',
                borderRadius: '15px',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
              }}
            />
            {this.props.isOwner && (
              <UploadFileInput
                label={'Change photo'}
                onChooseFile={this.props.uploadProfilePhoto}
              />
            )}
          </Space>
        </Col>
      </Row>
    )
  }
}

const mapState = (state: RootStateType) => ({
  profilePhotoURL: userProfileSelectors.profilePhoto(state),
})
const mapDispatch: MapDispatchType = {
  uploadProfilePhoto: (photo: File) =>
    userProfileOperations.changeUserProfilePhotosThunk(photo),
}
type ComponentPropsType = MapDispatchType &
  ReturnType<typeof mapState> & {
    isOwner: boolean
  }
type MapDispatchType = {
  uploadProfilePhoto: (photo: File) => void
}

export const UserAva = connect(mapState, mapDispatch)(Ava)
