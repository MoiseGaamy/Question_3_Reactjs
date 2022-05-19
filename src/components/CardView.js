import React from 'react'
import background from '../bc.jpg'
import profile from '../pf.jpg'
import { BsCheck } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter,AiOutlineGooglePlus,AiOutlineBehance } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';


const CardView = () =>
{
  return (
      <div className="inner-container">
              <div>
                 <img src={background} style={{ width: '290px',height: '205px', position:'relative'}} />
                 <div className="img-container">
                  <img src={profile} style={{width:'120px',height:'120px',borderRadius:'60px'}}/>
                 </div>
              </div>
              <div className="secondContainer">
                  <div className="check-container">
                      <BsCheck size={50} color="#fff"/>
                  </div>
                  <h2 className="heading">Mike Parker</h2>
                  <p className="text">some quick example to build on the card title and make up the bulk of the card's content</p>
                  <div className="social-container">
                      <div className="social-media"><GrFacebookOption /></div>
                      <div className="social-media"><AiOutlineTwitter/></div>
                      <div className="social-media"><AiOutlineGooglePlus /></div>
                      <div className="social-media"><BiGlobe/></div>
                      <div className="social-media"><AiOutlineBehance/></div>
                  </div>
              </div>
         
    </div>
  )
}

export default CardView