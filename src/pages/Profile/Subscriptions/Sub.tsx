import React from "react";
import {Avatar, Col, Row} from "antd";

type ComponentPropsType = {
  src: string
}

function Sub({src}: ComponentPropsType) {
  return (
      <Row>
        <Col>
          <Avatar src={src}/>
        </Col>
      </Row>
  )
}

export default Sub;
