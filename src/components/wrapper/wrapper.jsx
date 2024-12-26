import React from 'react';
import './wrapper.css';



const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <div className='course-status-count'>{props.data.data.length}</div>
            <div className='course-status'>{props.data.title}</div>
        </div>
    );
};

export default Wrapper;
