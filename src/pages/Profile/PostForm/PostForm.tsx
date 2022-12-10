import React, {useState} from 'react';
import {Button} from "antd";
import {ActionTypes, addPostAC} from "../../../redux/_store";

type ComponentProps = {
  dispatch: (action: ActionTypes) => void
}

function PostForm({dispatch}: ComponentProps) {
  const [text, setText] = useState<string>('')
  function handleText(event: any){
    setText(event.target.value);
  }
  function createNewPost(){
    dispatch(addPostAC(text));
    setText('');
  }

  return (
    <>
      <textarea value={text} onChange={handleText}></textarea>
      <Button onClick={createNewPost} type={'primary'} style={{marginTop: '1rem'}}>Show text</Button>
    </>
  );
}

export default PostForm;
