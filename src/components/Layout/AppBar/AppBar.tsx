import React from 'react';
import {MyLoadingButton} from '../../MyLoadingButton/MyLoadingButton';
import {Col, Row, Space, Typography} from 'antd';
import style from './AppBar.module.css';
import Samurai from '../../../assets/icons/samurai.svg';

const {Title} = Typography;

export const AppBar = () => {
	return (
		<Row align={'middle'} justify={'space-between'} gutter={32}>
			<Col className={style.appLogo}>
				<img src={Samurai} alt="App logo"/>
			</Col>
			<Col>
				<Title style={{margin: 0}}>Developers Social Network</Title>
			</Col>
			<Col flex={1} style={{display: 'flex', justifyContent: 'end'}}>
				<Space size={'small'}>
					<MyLoadingButton text={'SignUp'}/>
					<MyLoadingButton text={'SignOut'}/>
				</Space>
			</Col>
		</Row>
	);
};