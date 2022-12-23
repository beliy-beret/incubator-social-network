import {FC} from "react";
import {Pagination} from "antd";

type ComponentPropsType = {
  totalCount: number
  currentPage: number
  pageSize: number
}

const MyPagination: FC<ComponentPropsType> = (
  {
    totalCount,
    currentPage,
    pageSize
  }
)=> (
  <Pagination defaultCurrent={currentPage} total={totalCount} pageSize={pageSize} />
);

export default MyPagination;
