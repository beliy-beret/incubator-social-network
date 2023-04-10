import { Col, Image, Row, Typography } from 'antd'

import reactLogo from 'assets/technologies-icon/React_logo.png'
import reduxLogo from 'assets/technologies-icon/Redux_logo.png'
import typeScriptLogo from 'assets/technologies-icon/TypeScript_logo.jpg'

const { Text, Paragraph } = Typography

const technologiesStyle = {
  padding: '16px',
}

export const Home = () => {
  return (
    <section>
      <Row>
        <Col span={24}>
          <Typography.Paragraph
            style={{ textAlign: 'justify', fontSize: '1.5rem' }}
          >
            This application is based on the lessons of Dmitry Kuzyuberdin. Used
            React class and function components, Higher-Order Components,
            Routing, Redux state manager with Thunk middleware, Axios library,
            Ant Design library, TypeScript. If you are want to check application
            options, you can use test data.
          </Typography.Paragraph>
        </Col>
      </Row>

      <Row justify='center' style={{ marginTop: '3rem' }}>
        <Col
          span={4}
          style={{
            backgroundColor: '#121111',
            borderRadius: '8px',
            padding: '8px 16px',
          }}
        >
          <Paragraph style={{ color: 'white' }}>
            email:{' '}
            <Text code copyable style={{ color: 'white' }}>
              free@samuraijs.com
            </Text>
          </Paragraph>
          <Paragraph style={{ color: 'white' }}>
            password:{' '}
            <Text code copyable style={{ color: 'white' }}>
              free
            </Text>
          </Paragraph>
        </Col>
      </Row>

      <Row justify='center' gutter={25} style={{ marginTop: '3rem' }}>
        <Col span={5} style={technologiesStyle}>
          <Image
            src={reactLogo}
            preview={false}
            height={'200px'}
            width={'300px'}
          />
        </Col>
        <Col span={5} style={technologiesStyle}>
          <Image
            height={'200px'}
            width={'300px'}
            src={reduxLogo}
            preview={false}
            style={{ backgroundColor: '#880fa6' }}
          />
        </Col>
        <Col span={5} style={technologiesStyle}>
          <Image
            src={typeScriptLogo}
            preview={false}
            height={'200px'}
            width={'300px'}
          />
        </Col>
      </Row>
    </section>
  )
}
