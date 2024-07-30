import React from 'react'
import { computerData } from '../data/computers'
import '../../styles/MobilePage.css'
import Navbar from '../components/Navbar'

const ComputerPage = () => {
  return (
    <>
        <Navbar/>
        <div className="pageSection">
        {
            computerData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <img src={item.image} alt=""/>
                        </div>
                        <div>
                            {item.company},{item.model}
                        </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default ComputerPage