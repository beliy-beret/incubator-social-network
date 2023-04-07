import { Dialogs } from './Dialogs'
import { FC } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/WithAuthRedirect'

export const DialogsContainer = compose<FC>(
  connect(null, {}),
  withAuthRedirect
)(Dialogs)
