import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/_store";
import {createMessageAC} from "../../redux/actions/actions";
import {DialogsType, NewMessageType} from "../../AppTypes";

type PropType = {
  dialogs: DialogsType
}

const mapState = (state: RootStateType): PropType  => ({
  dialogs: state.dialogsPage.dialogs
});

const mapDispatch = {
  createMessage: (newMessage: NewMessageType) => createMessageAC(newMessage)
}

const DialogsContainer = connect(mapState, mapDispatch)(Dialogs)

export default DialogsContainer;
