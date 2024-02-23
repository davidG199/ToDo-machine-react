import "../../styles/index.css";
import '../../styles/modal.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className='Modal-body'>
            {children}
        </div>,
        document.getElementById('modal')
    );


}


export { Modal };
