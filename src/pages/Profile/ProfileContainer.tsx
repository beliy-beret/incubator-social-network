import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/_store';
import { addPostAC } from '../../redux/actions/actions';
import { PostType } from '../../AppTypes';

type PropType = {
	postList: Array<PostType>
}

const mapState = (state: RootStateType): PropType => (
	{
		postList: state.profilePage.postList
	}
);
const mapDispatch = {
	addPost: (text: string) => addPostAC(text)
};

export const ProfileContainer = connect(mapState, mapDispatch)(Profile);