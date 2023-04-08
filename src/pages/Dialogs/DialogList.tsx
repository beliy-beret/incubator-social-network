import { Avatar, List } from 'antd'

import { DialogType } from 'API/api'
import { FC } from 'react'

type ComponentPropsType = {
  dialogList: DialogType[]
}

export const DialogList: FC<ComponentPropsType> = ({ dialogList }) => {
  return (
    <div>
      <List
        itemLayout='horizontal'
        dataSource={dialogList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.photos.small} />}
              title={<h3>{item.userName}</h3>}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
