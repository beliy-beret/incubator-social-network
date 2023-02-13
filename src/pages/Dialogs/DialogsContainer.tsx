import { DialogsType, NewMessageType } from '../../AppTypes'

import { Dialogs } from './Dialogs'
import { RootStateType } from '../../redux/_store'
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

export const DialogsContainer = withAuthRedirect(
  connect(mapState, mapDispatch)(Dialogs)
)
