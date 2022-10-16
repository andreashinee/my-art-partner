import React, { useState, useEffect } from 'react';
import * as showService from '../../services/show-service';
import ShowTemplate from '../shows/ShowTemplate';

function Shows (){
  const [shows, setShows] = useState([]);

  useEffect(() => {
    showService.getShows()
    .then(shows => setShows(shows))
    .catch(error => console.error(error));
  }, [])

  return (
<>
 
    <div className=" row row-cols-12 row-cols-sm-6 row-cols-md-5">
    {shows.map((show) => (
      <div className='col' key={show.id}>
      <ShowTemplate {...show}/>
      </div>
    ))}
    </div>
    </>
  )

}

export default Shows