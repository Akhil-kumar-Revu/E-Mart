import React from 'react'

import {tvData} from "../data/tv";

const Mobiles = () => {
    const firstfive=tvData.slice(0,5);
  return (
    <>
        <div className='proTitle'>
            <h2>TVs</h2>
        </div>
        <div className='ProSection'>
        {
            firstfive.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="mobile"/>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Mobiles