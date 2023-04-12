import { Button, Col, Input, Row, Space } from 'antd'

import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
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
    <Row>
      <Col>
        <form onSubmit={formik.handleSubmit}>
          <label>
            Full name:{' '}
            <Input type={'text'} {...formik.getFieldProps('fullName')} />
          </label>
          <label>
            About me: <TextArea {...formik.getFieldProps('aboutMe')} />
          </label>
          <label>
            Looking for a job:{' '}
            <Input
              type={'checkbox'}
              checked={formik.values.lookingForAJob}
              {...formik.getFieldProps('')}
            />
          </label>
          <label>
            Job description:{' '}
            <TextArea {...formik.getFieldProps('lookingForAJobDescription')} />
          </label>

          <label>
            github: <Input type={'text'} {...formik.getFieldProps('github')} />
          </label>
          {formik.touched.github && formik.errors.github && (
            <ErrorMessage message={formik.errors.github} />
          )}

          <label>
            vk: <Input type={'text'} {...formik.getFieldProps('vk')} />
          </label>
          {formik.touched.vk && formik.errors.vk && (
            <ErrorMessage message={formik.errors.vk} />
          )}

          <label>
            facebook:{' '}
            <Input type={'text'} {...formik.getFieldProps('facebook')} />
          </label>
          {formik.touched.facebook && formik.errors.facebook && (
            <ErrorMessage message={formik.errors.facebook} />
          )}

          <label>
            instagram:{' '}
            <Input type={'text'} {...formik.getFieldProps('instagram')} />
          </label>
          {formik.touched.instagram && formik.errors.instagram && (
            <ErrorMessage message={formik.errors.instagram} />
          )}

          <label>
            twitter:{' '}
            <Input type={'text'} {...formik.getFieldProps('twitter')} />
          </label>
          {formik.touched.twitter && formik.errors.twitter && (
            <ErrorMessage message={formik.errors.twitter} />
          )}

          <label>
            website:{' '}
            <Input type={'text'} {...formik.getFieldProps('website')} />
          </label>
          {formik.touched.website && formik.errors.website && (
            <ErrorMessage message={formik.errors.website} />
          )}

          <label>
            youtube:{' '}
            <Input type={'text'} {...formik.getFieldProps('youtube')} />
          </label>
          {formik.touched.youtube && formik.errors.youtube && (
            <ErrorMessage message={formik.errors.youtube} />
          )}

          <label>
            mainLink:{' '}
            <Input type={'text'} {...formik.getFieldProps('mainLink')} />
          </label>
          {formik.touched.mainLink && formik.errors.mainLink && (
            <ErrorMessage message={formik.errors.mainLink} />
          )}

          <Space>
            <Button type={'primary'} htmlType='submit'>
              Change info
            </Button>
            <Button type={'primary'} onClick={cancelForm}>
              Cancel
            </Button>
          </Space>
          <ErrorMessage message={error} />
        </form>
      </Col>
    </Row>
  )
}
