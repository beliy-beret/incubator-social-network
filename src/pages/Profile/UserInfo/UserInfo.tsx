import { FC } from 'react';
import { Typography } from 'antd';
import { UserProfileType } from '../../../AppTypes';

const { Title } = Typography;

type ComponentPropsType = {
	userData: UserProfileType
}

export const UserInfo: FC<ComponentPropsType> = ({ userData }) => {
	return (
		<div>
			<Title level={2} italic={true} underline={true}>{userData.fullName}</Title>
			<p>{userData.aboutMe}</p>
			{userData.lookingForAJob && <span>I`m looking for a job</span>}
			{
				userData.lookingForAJob &&
				userData.lookingForAJobDescription &&
				<p>{userData.lookingForAJobDescription}</p>
			}
		</div>
	);
};