import {FC} from 'react';
import {Col, Divider, Row} from "antd";
import MyPagination from "../../components/MyPagination/MyPagination";
import UserList from "./UserList/UserList";
import {UserType} from "../../AppTypes";

type ComponentPropsType = {
  totalCount: number
  currentPage: number
  setCurrentPage: (page: number) => void
  userList: Array<UserType>
  toggleFollow: (userId: number, status: boolean) => void
};

const UserPage: FC<ComponentPropsType> = (props) => {
  return(
    <>
      <Row justify={'center'}>
        <Col span={20}>
          <MyPagination
            totalCount={props.totalCount}
            pageSize={10}
            currentPage={props.currentPage}
            changePageNumber={props.setCurrentPage}
          />
        </Col>
      </Row>
      <Divider />
      <Row justify={'center'}>
        <Col span={23}>
          <UserList userList={props.userList} toggleFollow={props.toggleFollow}/>
        </Col>
      </Row>
    </>
  );
}

export default UserPage;
