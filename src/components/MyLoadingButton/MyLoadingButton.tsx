import React, {useState} from 'react';
import {Button} from 'antd';

type ComponentProps = {
  text: string
}

function MyLoadingButton({text}: ComponentProps ) {

  const [loading, setLoading] = useState<boolean>(false);

  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
      <Button type="primary" loading={loading} onClick={() => enterLoading()}>
        {text}
      </Button>
  )
};

export default MyLoadingButton;
