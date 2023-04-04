import { FC } from 'react'
import { Status } from '../Status/Status'
import { Typography } from 'antd'
import { UserProfileType } from 'API/api'

const { Title } = Typography

type ComponentPropsType = {
  userData: UserProfileType
  profileStatus: string
}

export const UserInfo: FC<ComponentPropsType> = ({ userData }) => {
  return (
    <div>
      <Title level={2} italic={true} underline={true}>
        {userData.fullName}
      </Title>
      <Status />
      <p>{userData.aboutMe}</p>
      {userData.lookingForAJob && <span>I`m looking for a job</span>}
      {userData.lookingForAJob && userData.lookingForAJobDescription && (
        <p>{userData.lookingForAJobDescription}</p>
      )}
    </div>
  )
}
