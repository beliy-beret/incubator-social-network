import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/_store';
import { PostType, UserProfileType } from '../../AppTypes';
import { addPostAC, setUserProfileAC } from '../../redux/actions/profilePageActions';
import { toggleIsLoadingAC } from '../../redux/actions/appActions';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type PropType = {
	postList: Array<PostType>
	userProfile: UserProfileType
	isLoading: boolean
}

export type ProfilePageConnectType = PropType & typeof mapDispatch & RouteComponentProps<{ id: string }>

const mapState = (state: RootStateType): PropType => (
	{ ...state.profilePage }
);
const mapDispatch = {
	addPost: (text: string) => addPostAC(text),
	setUserProfile: (userProfile: UserProfileType) => setUserProfileAC(userProfile),
	toggleIsLoading: (isLoading: boolean) => toggleIsLoadingAC(isLoading)
};

export const ProfileContainer = withRouter(connect(mapState, mapDispatch)(Profile));