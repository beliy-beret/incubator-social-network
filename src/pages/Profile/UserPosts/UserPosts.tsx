import {Post} from './Post/Post';
import {PostType} from '../../../AppTypes';
import { FC } from 'react';

type ComponentPropsType = {
  postList: Array<PostType>
}

export const UserPosts: FC<ComponentPropsType> = ({postList}) => {
	return (
		<div>
			{postList.map(item => <Post key={item.id} post={item}/>)}
		</div>
	);
};