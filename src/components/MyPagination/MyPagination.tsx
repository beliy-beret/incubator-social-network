import {FC} from "react";
import {Pagination, PaginationProps} from "antd";

type ComponentPropsType = {
  totalCount: number
  currentPage: number
  pageSize: number
  changePageNumber: (pageNumber: number) => void
}

const MyPagination: FC<ComponentPropsType> = (
  {
    totalCount,
    currentPage,
    changePageNumber
  }
) => {

  const onChange: PaginationProps['onChange'] = (page) => {
    changePageNumber(page);
  };

  return (
    <Pagination
      current={currentPage}
      total={totalCount}
      showSizeChanger={false}
      onChange={onChange}
    />
  )
};

export default MyPagination;
