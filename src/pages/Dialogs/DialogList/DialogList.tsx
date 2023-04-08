import { Avatar, List } from 'antd'
import classes from './dialogList.module.css'
import { DialogType } from 'API/api'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type ComponentPropsType = {
  dialogList: DialogType[]
  activeDialogId: number | null
  activeDialogHandler: (dialogId: number) => void
}

export const DialogList: FC<ComponentPropsType> = ({
  dialogList,
  activeDialogHandler,
  activeDialogId,
}) => {
  return (
    <div>
      <List
        itemLayout='horizontal'
        dataSource={dialogList}
        renderItem={(item) => (
          <Link to={`/dialogs/${item.id}`}>
            <List.Item
              onClick={() => activeDialogHandler(item.id)}
              className={activeDialogId === item.id ? classes.active : ''}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.photos.small} />}
                title={item.userName}
              />
            </List.Item>
          </Link>
        )}
      />
    </div>
  )
}
