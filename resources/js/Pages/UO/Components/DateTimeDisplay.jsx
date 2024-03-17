import React from 'react'

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='mb-0 font-semibold font-cormorant-upright'>{value}</p>
      <span className='text-base font-cormorant-garamond'>{type}</span>
    </div>
  );
};

export default DateTimeDisplay