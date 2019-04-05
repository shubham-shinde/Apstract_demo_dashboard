import React from 'react';

var create = () => (
    <div className='grow-1'>
        <div className="min-width-100 d-flex text-left">
            <div className='text-white' style={{width: '340px', background: '#F55350'}}>
                <h4 className='m-3'>New Item</h4>
            </div>
            <div className='grow-1 d-flex justify-content-between align-items-center pl-3 pr-3'  style={{background: '#FFFFFF'}}>
                <h2 className='font-weight-bold m-0 text-gray text-muted'>Create Creature Card</h2>
                <button className="btn btn-dark p-1 pl-5 pr-5" style={{borderRadius:'20px'}}>Preview</button>
            </div>
        </div>
    </div>
)

export default create;