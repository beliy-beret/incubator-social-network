import { Component } from 'react';
import { getUserList } from '../../API/api';
import { UserPage } from './UserPage';
import { Preloader } from '../../components/Preloader/Preloader';
import { UserConnectType } from './UsersContainer';

type ComponentPropsType = UserConnectType;

export class UsersApiContainer extends Component<ComponentPropsType> {

	getUsers = () => {
		this.props.toggleIsLoading(true);
		getUserList(this.props.currentPage).
			then((data) => {
				this.props.setUsers(data?.items!);
				this.props.setTotalCount(data?.totalCount!);
				setTimeout(() => this.props.toggleIsLoading(false), 300);
			}).
			catch(() => this.props.toggleIsLoading(false));
	};

	componentDidMount() {
		this.getUsers();
	}

	componentDidUpdate(prevProps: Readonly<ComponentPropsType>) {
		if (prevProps.currentPage !== this.props.currentPage) {
			this.getUsers();
		}
	}

	render() {
		return (
			<>
				{this.props.isLoading && <Preloader />}
				<UserPage
					totalCount={this.props.totalCount}
					currentPage={this.props.currentPage}
					setCurrentPage={this.props.setCurrentPage}
					userList={this.props.userList}
					toggleFollow={this.props.toggleFollow}
				/>
			</>
		);
	}
}