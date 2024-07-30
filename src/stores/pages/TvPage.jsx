import React from 'react'
import { tvData } from '../data/tv'
import '../../styles/MobilePage.css'
import Navbar from '../components/Navbar'

const TvPage = () => {
  return (
    <>
        <Navbar/>
        <div className="pageSection">
        {
            tvData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className='matter'>
                            {item.brand},{item.model}
                        </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default TvPage