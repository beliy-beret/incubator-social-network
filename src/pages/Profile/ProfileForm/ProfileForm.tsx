import { Button, Checkbox, Col, Input, Row, Space, Typography } from 'antd'

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage'
import { FC } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import { UpdateProfileFormDataType } from 'API/api'
import { UserProfileType } from 'API/api'
import { useFormik } from 'formik'
import { validate } from './validate'

type ComponentPropsType = {
  userData: UserProfileType
  submit: (formData: UpdateProfileFormDataType) => void
  cancelForm: () => void
  error: string
}

export const ProfileForm: FC<ComponentPropsType> = ({
  userData,
  submit,
  cancelForm,
  error,
}) => {
  const initialValues: UpdateProfileFormDataType = {
    userId: userData.userId,
    fullName: userData.fullName,
    aboutMe: userData.aboutMe,
    lookingForAJob: userData.lookingForAJob,
    lookingForAJobDescription: userData.lookingForAJobDescription,
    github: userData.contacts.github,
    vk: userData.contacts.vk,
    facebook: userData.contacts.facebook,
    instagram: userData.contacts.instagram,
    twitter: userData.contacts.twitter,
    website: userData.contacts.website,
    youtube: userData.contacts.youtube,
    mainLink: userData.contacts.mainLink,
  }

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      submit(values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row gutter={[0, 8]}>
        <Col span={24}>
          <Row gutter={10} align='middle'>
            <Col span={4}>
              <Typography.Text>Full name:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('fullName')} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>About me:</Typography.Text>
            </Col>
            <Col span={12}>
              <TextArea {...formik.getFieldProps('aboutMe')} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Space size={'large'}>
            <Typography.Text>Looking for a job:</Typography.Text>
            <Checkbox
              checked={formik.values.lookingForAJob}
              {...formik.getFieldProps('')}
            />
          </Space>
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>Job description:</Typography.Text>
            </Col>
            <Col span={12}>
              <TextArea
                {...formik.getFieldProps('lookingForAJobDescription')}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>github:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('github')} />
            </Col>
          </Row>
          {formik.touched.github && formik.errors.github && (
            <ErrorMessage message={formik.errors.github} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>vk:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('vk')} />
            </Col>
          </Row>
          {formik.touched.vk && formik.errors.vk && (
            <ErrorMessage message={formik.errors.vk} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>facebook:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('facebook')} />
            </Col>
          </Row>
          {formik.touched.facebook && formik.errors.facebook && (
            <ErrorMessage message={formik.errors.facebook} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>instagram:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('instagram')} />
            </Col>
          </Row>
          {formik.touched.instagram && formik.errors.instagram && (
            <ErrorMessage message={formik.errors.instagram} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>twitter:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('twitter')} />
            </Col>
          </Row>
          {formik.touched.twitter && formik.errors.twitter && (
            <ErrorMessage message={formik.errors.twitter} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>website:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('website')} />
            </Col>
          </Row>
          {formik.touched.website && formik.errors.website && (
            <ErrorMessage message={formik.errors.website} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>youtube:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('youtube')} />
            </Col>
          </Row>
          {formik.touched.youtube && formik.errors.youtube && (
            <ErrorMessage message={formik.errors.youtube} />
          )}
        </Col>
        <Col span={24}>
          <Row gutter={10}>
            <Col span={4}>
              <Typography.Text>mainLink:</Typography.Text>
            </Col>
            <Col span={12}>
              <Input type={'text'} {...formik.getFieldProps('mainLink')} />
            </Col>
          </Row>
          {formik.touched.mainLink && formik.errors.mainLink && (
            <ErrorMessage message={formik.errors.mainLink} />
          )}
        </Col>
        <Col span={24}>
          <Space>
            <Button type={'primary'} htmlType='submit'>
              Change info
            </Button>
            <Button type={'primary'} onClick={cancelForm}>
              Cancel
            </Button>
          </Space>
        </Col>
        {error && <ErrorMessage message={error} />}
      </Row>
    </form>
  )
}
