import React from 'react'

import ListMessages from '../components/ListMessages'
import FormMessages from '../components/FormMessages'

const Messages = () => {
  return <>
    <div className="title">Liste of messages</div>
    <FormMessages />
    <ListMessages />
  </>
};

export default Messages;
