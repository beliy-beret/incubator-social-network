import { DialogsType, NewMessageType } from '../../AppTypes'

import { Dialogs } from './Dialogs'
import { FC } from 'react'
import { RootStateType } from '../../redux/_store'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createMessageAC } from '../../redux/actions/dialogsPageActions'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

type PropType = {
  dialogs: DialogsType
}

const mapState = (state: RootStateType): PropType => ({
  dialogs: state.dialogsPage.dialogs,
})

const mapDispatch = {
  createMessage: (newMessage: NewMessageType) => createMessageAC(newMessage),
}

export const DialogsContainer = compose<FC>(
  connect(mapState, mapDispatch),
  withAuthRedirect
)(Dialogs)
