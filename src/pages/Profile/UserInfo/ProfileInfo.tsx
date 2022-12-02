import React from 'react';
import {Typography} from "antd";

const { Title } = Typography;

function UserInfo() {
  return (
    <div>
      <Title level={2} italic={true} underline={true}>User name</Title>
      <p>About user</p>
      <span>Looking for a job</span>
      <p>About job</p>
      <ul><li>User contacts</li></ul>
    </div>
  );
}

export default UserInfo;
