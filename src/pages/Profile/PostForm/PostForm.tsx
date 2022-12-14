import React, {useState} from 'react';
import {Button} from "antd";

type ComponentProps = {
  addNewPost: (text: string) => void
}

function PostForm({addNewPost}: ComponentProps) {
  const [text, setText] = useState<string>('')
  function handleText(event: any){
    setText(event.target.value);
  }
  function createNewPost(){
    addNewPost(text)
  }

  return (
    <>
      <textarea value={text} onChange={handleText}></textarea>
      <Button onClick={createNewPost} type={'primary'} style={{marginTop: '1rem'}}>Show text</Button>
    </>
  );
}

export default PostForm;
