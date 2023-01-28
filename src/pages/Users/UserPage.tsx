import { FC } from 'react'
import { Col, Divider, Row } from 'antd'
import { MyPagination } from '../../components/MyPagination/MyPagination'
import { UserList } from './UserList/UserList'
import { UserType } from '../../AppTypes'

type ComponentPropsType = {
  totalCount: number
  currentPage: number
  setCurrentPage: (page: number) => void
  userList: Array<UserType>
  toggleSubscription: (userId: number) => void
}

export const UserPage: FC<ComponentPropsType> = ({
  currentPage,
  setCurrentPage,
  toggleSubscription,
  totalCount,
  userList,
}) => {
  return (
    <>
      <Row justify={'center'}>
        <Col span={20}>
          <MyPagination
            totalCount={totalCount}
            pageSize={10}
            currentPage={currentPage}
            changePageNumber={setCurrentPage}
          />
        </Col>
      </Row>
      <Divider />
      <Row justify={'center'}>
        <Col span={23}>
          <UserList
            userList={userList}
            toggleSubscription={toggleSubscription}
          />
        </Col>
      </Row>
    </>
  )
}
