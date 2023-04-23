import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {ShoeContext} from '../context/shoeContext'
import Brands from './Brands'
const Gucci=()=>{
    let {data}=useContext(ShoeContext)

    return(
        <div className="Home-container">
            <h1 style={{textAlign:'center'}}>Gucci</h1>
            <Brands />
        <img  alt=""/>
        <div className="prooo">
    {data.map((proo, ind)=>proo.Category === 'Shoes' && proo.Gender === 'Men'  && proo.Brand ==='Gucci'?(
        
        <div key={ind} className="pro-con">
                <Link key={ind} className='lnk' to={`/shoe${proo.id}`}>
            <img src={proo.image} alt=""  title={proo.Name}/>
                </Link>
                <p>{proo.Name} < br /><strong>Rs.{proo.Price}</strong></p>
    </div>
    ): null)}
    </div>
    </div>
        
    )
}

export default Gucci