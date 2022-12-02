import React from 'react';
import {Avatar, Col, Row, Typography} from "antd";
import ava from '../../../../assets/images/samurai-anime.jpg';

const {Title, Paragraph} = Typography;

function Post() {
  return (
    <>
      <Row gutter={10} style={{padding: '1rem'}}>
        <Col>
          <Avatar src={ava} size={'large'}/>
        </Col>
        <Col>
          <Title level={3}>Post title</Title>
        </Col>
      </Row>
      <Row style={{paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio explicabo nemo neque officia, rerum
          temporibus! Adipisci amet consectetur, doloribus et illo iste pariatur perspiciatis quam repudiandae sequi,
          tempore voluptatum!
        </Paragraph>
      </Row>
    </>
  );
}

export default Post;
