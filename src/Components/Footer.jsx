import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>

    <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
    
    <div className='footer justify-content-evenly align-items-center d-flex mt-5 mb-5'>
      <div className='website' style={{ width: '400px' }}   >
        <h5 style={{ color: 'white', fontWeight: "bold" }} >
        <i className="fa-solid fa-utensils me-2 "></i>Food Circle</h5>
        <p style={{ textAlign: "justify", width: '400px', color: "white" }}  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, possimus vel voluptatem distinctio,
          expedita tempora consequatur facere architecto, hic vitae suscipit doloremque fugit! Inventore minima quasi illum
          iure doloribus ut.</p>
    
      </div>
      <div className="links d-flex flex-column ms-5">
        <h4>Links</h4>
        <Link to={'/'} style={{ color: "white", textDecoration: "none" }} >Home</Link>
      </div>
    </div>
    <div className="guides d-flex flex-column ms-5">
      <h4>Guides</h4>
      <Link to='https://react.dev/' target='_blank' style={{ color: "white", textDecoration: "none" }} >React</Link>
      <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ color: "white", textDecoration: "none" }} >React Bootstrap</Link>
      <Link to='https://bootswatch.com/' target='_blank' style={{ color: "white", textDecoration: "none" }} >Boots Watch</Link>
    </div>
    
    <div className="contact ms-5 ">
      <h4>Contact US</h4>
      <div className='d-flex' >
      <input type="text" className='form-control' placeholder='Enter your Email id' />
      <button className='btn btn-warning ms-3 ' >subscribe</button>
      </div>
      <div className='d-flex align-items-center justify-content-evenly ' >
      <Link style={{fontSize:"25px", color:'white', paddingLeft:'15px' , paddingTop:"25px"}} ><i class="fa-brands fa-instagram"></i></Link>
      <Link style={{fontSize:"25px", color:'white', paddingLeft:'15px' , paddingTop:"25px"}}  ><i class="fa-brands fa-twitter"></i></Link>
      <Link style={{fontSize:"25px", color:'white', paddingLeft:'15px', paddingTop:"25px"}}  ><i class="fa-brands fa-linkedin"></i></Link>
    
      </div>
      
    </div>
    </div>
    
    <p className='mt-5 mb-2 text-center' >Copyright &copy; 2023 E cart build with react</p>
    
        </div>
  )
}

export default Footer