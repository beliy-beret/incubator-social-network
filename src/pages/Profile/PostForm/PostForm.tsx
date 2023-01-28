import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import style from './postForm.module.css'

type ComponentProps = {
  addNewPost: (text: string) => void
}

export const PostForm: FC<ComponentProps> = ({ addNewPost }) => {
  const [text, setText] = useState<string>('')
  const handleText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value)
  }
  const createPost = () => {
    addNewPost(text)
    setText('')
  }
  const onClickCreatePostButton = () => {
    createPost()
  }
  const pressCtrlEnterKey = (event: KeyboardEvent) => {
    event.ctrlKey && createPost()
  }

  return (
    <form className={style.postForm}>
      <TextArea
        onChange={handleText}
        value={text}
        rows={5}
        allowClear={true}
        onKeyPress={pressCtrlEnterKey}
        style={{ width: '60%' }}
      />
      <Button
        onClick={onClickCreatePostButton}
        type={'primary'}
        size={'large'}
        style={{ marginTop: '1rem' }}
      >
        Create post
      </Button>
    </form>
  )
}
