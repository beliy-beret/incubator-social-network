import React from 'react';
import {Image} from "antd";
import Ava from '../../../assets/images/samurai-anime.jpg';

function UserAva() {
  return (
    <Image src={Ava} width={300} style={{padding: '0.5rem', borderRadius: '15px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} />
  );
}

export default UserAva;
