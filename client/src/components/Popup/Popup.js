import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './Popup.css'
function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
          <IconButton color="primary" aria-label="close" className='close-btn' onClick={() => props.setTrigger(false)}>
            <CloseIcon />
          </IconButton>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup