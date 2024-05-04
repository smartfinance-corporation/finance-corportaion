import * as React from 'react';
import Button from '@mui/material/Button';

export default function ActionAreaCard() {
  return (<div className='card-container'>
    <a href="#">
   <img className="card" src="https://fcc-did.pages.dev/images/what-cards/finance.svg"/></a>
   <a href="#"><img className="card" src="https://fcc-did.pages.dev/images/what-cards/consulting.svg"/></a>
   <a href="#"><img className="card" src="https://fcc-did.pages.dev/images/what-cards/prodman.svg"/></a>
    </div>
  );
}
