import React from 'react';

export const Loading = () => {
    return(
        <div className='col-12 mt-3'>
            <p className='text-center'><span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span></p>
            <p className='text-center'>Loading. . .</p>
        </div>
    );
}