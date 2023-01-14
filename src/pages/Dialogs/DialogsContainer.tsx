import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';
import { RootStateType } from '../../redux/_store';
import { DialogsType, NewMessageType } from '../../AppTypes';
import { createMessageAC } from '../../redux/actions/dialogsPageActions';

type PropType = {
	dialogs: DialogsType
}

const mapState = (state: RootStateType): PropType => ({
	dialogs: state.dialogsPage.dialogs
});

const mapDispatch = {
	createMessage: (newMessage: NewMessageType) => createMessageAC(newMessage)
};

export const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);