import React from 'react';

import './ShowTemplate.css';

function ShowTemplate({title, image}) {

  return (
    <div className="d-felx show-item flex-column">
      <img className='w-100 rounded-1' scr={image} alt={title} />
      <div className="d-flex mt-1 justify-content-between align-items-baseline">
      <h3 className='m-0 fs-4 fw-lighter'> {title}</h3>
    </div>
    </div>

  )
}
export default ShowTemplate