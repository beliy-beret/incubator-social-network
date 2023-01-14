import { Component } from 'react';
import { UserAva } from './UserAva/UserAva';
import { UserInfo } from './UserInfo/UserInfo';
import { UserPosts } from './UserPosts/UserPosts';
import { Col, Divider, Row } from 'antd';
import { Subscriptions } from './Subscriptions/Subscriptions';
import { PostForm } from './PostForm/PostForm';
import { getUserProfile } from '../../API/api';
import { ProfilePageConnectType } from './ProfileContainer';
import { Preloader } from '../../components/Preloader/Preloader';

type ComponentPropsType = ProfilePageConnectType

export class Profile extends Component<ComponentPropsType> {

	componentDidMount() {
		this.props.toggleIsLoading(true);
		getUserProfile(2).
			then((data) => {
				this.props.setUserProfile(data!);
				setTimeout(() => this.props.toggleIsLoading(false), 300);
			}).
			catch(() => this.props.toggleIsLoading(false));
	}

	render() {
		return (
			<section>
				{this.props.isLoading && <Preloader />}
				<Row gutter={15}>
					<Col>
						<UserAva src={this.props.userProfile.photos.large} />
						<Divider>Subscriptions</Divider>
						<Subscriptions />
					</Col>
					<Col>
						<UserInfo userData={this.props.userProfile} />
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col span={24}>
						<PostForm addNewPost={this.props.addPost} />
					</Col>
				</Row>
				<Divider />
				<Row>
					{this.props.postList && <UserPosts postList={this.props.postList} />}
				</Row>
			</section>
		);
	}
}