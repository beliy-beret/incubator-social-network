import { Col, Image, Row, Space } from 'antd'

import Ava from '../../../assets/images/samurai-anime.jpg'
import { FC } from 'react'
import { UploadFileInput } from 'components/UploadFileInput/UploadFileInput'

type ComponentPropsType = {
  src: string | null
  uploadPhoto: (photo: File) => void
}

export const UserAva: FC<ComponentPropsType> = ({ src, uploadPhoto }) => {
  return (
    <Row>
      <Col>
        <Space direction='vertical' size={'middle'}>
          <Image
            src={src || Ava}
            width={300}
            style={{
              padding: '0.5rem',
              borderRadius: '15px',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
          />
          <UploadFileInput label={'Change photo'} onChooseFile={uploadPhoto} />
        </Space>
      </Col>
    </Row>
  )
}
