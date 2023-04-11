import { ChangeEvent, FC } from 'react'

import { Space } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import classes from './uploadFileInput.module.css'

type ComponentPropsType = {
  label: string
  onChooseFile: (file: File) => void
}
export const UploadFileInput: FC<ComponentPropsType> = ({
  label,
  onChooseFile,
}) => {
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0]
    onChooseFile(file)
  }

  return (
    <label className={classes.btn}>
      <Space>
        <UploadOutlined />
        {label}
      </Space>

      <input type='file' accept='image/*' onChange={handleFile} />
    </label>
  )
}
