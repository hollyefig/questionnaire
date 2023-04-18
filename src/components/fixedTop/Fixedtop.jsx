import React from 'react';
import './fixedTop.css'

export default function Fixedtop({combo}) {

  console.log('combo', combo)
  return (
    <>
    <div className='fixedTopWrapper'>
      <div className="fixedTopCopy">
        <ul>
          {combo.map(e => <li>{e}</li>)}
        </ul>
      </div>
    </div>
    </>
  )
}
