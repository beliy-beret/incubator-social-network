import { connect } from 'react-redux';
import {
	setCurrentPageAC,
	setTotalCountAC,
	setUsersAC,
	toggleFollowAC, toggleIsLoadingAC,
} from '../../redux/actions/actions';
import { UserType } from '../../AppTypes';
import { RootStateType } from '../../redux/_store';
import { UsersApiContainer } from './UsersApiContainer';

type StatePropsType = {
	userList: Array<UserType>;
	currentPage: number;
	totalCount: number;
	isLoading: boolean
};

type DispatchPropsType = typeof mapDispatch;

export type UserConnectType = StatePropsType & DispatchPropsType

const mapState = (state: RootStateType): StatePropsType => ({
	userList: state.usersPage.userList,
	totalCount: state.usersPage.totalCount,
	currentPage: state.usersPage.currentPage,
	isLoading: state.usersPage.isLoading
});

const mapDispatch = {
	toggleFollow: (userId: number, status: boolean) => toggleFollowAC(userId, status),
	setUsers: (userList: Array<UserType>) => setUsersAC(userList),
	setCurrentPage: (page: number) => setCurrentPageAC(page),
	setTotalCount: (count: number) => setTotalCountAC(count),
	toggleIsLoading: (isLoading: boolean) => toggleIsLoadingAC(isLoading),
};

export const UsersContainer = connect(mapState, mapDispatch)(UsersApiContainer);