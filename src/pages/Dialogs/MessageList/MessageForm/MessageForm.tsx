import { Button, Col, Input, Row } from 'antd'

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage'
import { FC } from 'react'
import { useFormik } from 'formik'

type ComponentPropsType = {
  errorMessage: string
  submit: (message: string) => void
}

export const MessageForm: FC<ComponentPropsType> = ({
  submit,
  errorMessage,
}) => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      submit(values.message)
      formik.resetForm()
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col span={24}>
          <Input
            type='text'
            {...formik.getFieldProps('message')}
            placeholder='Write your message'
            style={{ width: '80%', minWidth: '250px', marginRight: '8px' }}
          />
          <Button type='primary' htmlType='submit'>
            Send
          </Button>

          {errorMessage && <ErrorMessage message={errorMessage} />}
        </Col>
      </Row>
    </form>
  )
}
