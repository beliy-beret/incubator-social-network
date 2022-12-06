import React, {useState} from 'react';
import {Button} from "antd";

type ComponentProps = {
  addPost: (text: string) => void
}

function PostForm({addPost}: ComponentProps) {
  const [text, setText] = useState<string>('')
  function handleText(event: any){
    setText(event.target.value);
  }
  function createNewPost(){
    addPost(text);
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
