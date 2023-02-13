import { DialogsType, NewMessageType } from '../../AppTypes'

import { Dialogs } from './Dialogs'
import { RootStateType } from '../../redux/_store'
import { connect } from 'react-redux'
import { createMessageAC } from '../../redux/actions/dialogsPageActions'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

type PropType = {
  dialogs: DialogsType
  isAuth: boolean
}

const mapState = (state: RootStateType): PropType => ({
  dialogs: state.dialogsPage.dialogs,
  isAuth: state.auth.isAuth,
})

const mapDispatch = {
  createMessage: (newMessage: NewMessageType) => createMessageAC(newMessage),
}

const withAuth = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapState, mapDispatch)(withAuth)
