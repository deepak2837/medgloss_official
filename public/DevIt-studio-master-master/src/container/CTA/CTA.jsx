import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';
import { images } from '../../constant';

const CTA = () => {
  const navigate = useNavigate()
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Let’s make things happen</h3>

<p className="pt-2 pb-4">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
<buton  onClick={()=>navigate("/contact")} className="btn-positivus">Contact</buton>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
  )
}

export default CTA