import {Component} from 'react';
import {Col, Row} from 'antd';
import {DialogList} from './DialogList/DialogList';
import {Route, Switch} from 'react-router-dom';
import {MessageList} from './MessageList/MessageList';
import {DialogsType, NewMessageType} from '../../AppTypes';

type ComponentPropsType = {
  dialogs: DialogsType
  createMessage: ({userID, message}: NewMessageType) => void
}

export class Dialogs extends Component<ComponentPropsType> {
	render() {
		return (
			<Row>
				<Col span={5}>
					<DialogList userList={this.props.dialogs.userList}/>
				</Col>
				<Col span={19}>
					<Switch>
						<Route path={'/dialogs/:id'} render={() =>
							<MessageList
								createMessage={this.props.createMessage}
								dialogList={this.props.dialogs.messageList}
							/>}/>
					</Switch>
				</Col>
			</Row>
		);
	}
}