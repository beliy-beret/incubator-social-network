import React from 'react';
import {Avatar, Col, Row} from "antd";
import Sub from "./Sub";
import q from '../../../assets/images/maxresdefault.jpg';
import w from '../../../assets/images/samurai-anime.jpg';
import e from '../../../assets/images/1233.jpg';
import r from '../../../assets/images/qwe.jpg';
import t from '../../../assets/images/Time.jpg';

const list = [
  {src: q},
  {src: w},
  {src: e},
  {src: r},
  {src: t}
]

function Subscriptions() {
  const subList = list.map((item, index) => <Sub key={index} src={item.src}/>)
  return (
    <Row>
      <Col>
        <Avatar.Group maxCount={5} size={'large'}>
          {subList}
        </Avatar.Group>
      </Col>
    </Row>
  );
}

export default Subscriptions;


