import { Image } from 'antd';
import { FC } from 'react';
import Ava from '../../../assets/images/samurai-anime.jpg';

type ComponentPropsType = {
	src: string | null
}

export const UserAva: FC<ComponentPropsType> = ({ src }) => {
	return (
		<Image src={src || Ava} width={300} style={{ padding: '0.5rem', borderRadius: '15px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
	);
};