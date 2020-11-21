import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export const Loading = () => {
    return(
        <div className='col-12 mt-3'>
            <p className='text-center'>
                <FaSpinner className="fa-pulse fa-3x fa-fw"/>
            </p>
            <p className='text-center'>Loading. . .</p>
        </div>
    );
}