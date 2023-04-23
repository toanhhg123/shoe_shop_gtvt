import React from 'react'
import {Link} from 'react-router-dom'

const Footer =()=>{
    return(
        <>
        <div className="footer-main">
            <div className="footer-content">
                <h3>OUR ADDRESS</h3>
                <h4>What'sApp: 03xx-xxxxxxx <br />Email:<a href="mailto:azharnaeem76@gmial.com" className="fot-lnk">azharnaeem76@gmail.com</a> </h4>
            </div>
            <div className="footer-content">
                <h2>MEN'S COLLECTION</h2>
                <h4><Link className="fot-lnk" to="Addidas">Adidas </Link><br />
                <Link className="fot-lnk" to="Nike" >Nike</Link><br /><Link className="fot-lnk" to="Gucci">Gucci</Link><br />
                <Link className="fot-lnk" to="Sky" >Sky</Link ><br /><Link className="fot-lnk" to="Vans" >Vans</Link></h4>
            </div>            
        </div>
            <div className="footer-end">
                Created by-AzharNaeem
            </div>
        </>
    )
}

export default Footer