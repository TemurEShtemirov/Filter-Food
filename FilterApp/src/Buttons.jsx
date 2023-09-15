import React from 'react';

export default function Buttons({ menuItems, filterItem }) {
    return (
        <div className='d-flex justify-content-center'>
            {menuItems.map((val, index) => (
                <button
                    key={index}
                    className='btn btn-dark text-white p-1 px-2 mx-2 fw-bold'
                    onClick={() => filterItem(val)}
                >
                    {val}
                </button>
            ))}

            <button
                className='btn btn-dark text-white p-1 px-2 mx-2 fw-bold'
                onClick={() => filterItem('All')}
            >
                All
            </button>
        </div>
    );
}