import React from 'react'
import img1 from './images/bg_web-removebg-preview.png'
import img2 from './images/Avenger_Blog_IronMan_Imagery4-ho31fqax6-removebg-preview.png'
import img3 from './images/research-and-development-medication-vector-30145533-removebg-preview.png'

export default function Cards() {
  return (
    <>
      <hr />
      <div className='cards_images'>

        <div className="card">

          <div className="card-content">
            <div className="image">
              <img src="https://community.nasscom.in/sites/default/files/media/images/web-development-post-scaled-1.jpg" />
            </div>
            <div className="media-icons">
              <a href="https://www.facebook.com/ccanitd.in"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/aarohan_nitdgp"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/cca.nitd/"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="branch">
              <div className="name">Web, Design & Creative Team</div>
            </div>
            <div className="description">
              <p id="desc">This team is responsible for the development, design of the various websites associated with CCA, the Aarohan official website and various online publication and propaganda of the events of the club. It also devises interactive online events, which see about 3000 online participants, for Aarohan, the Annual Techno- Management Fest of CCA.</p>
            </div>
          </div>
        </div>

        <img src={img1} className='cards_outimages' />
      </div>
      <hr />
      <hr />





      <div className='cards_images'>
       
        <img src={img2} className='cards_outimages' id='robos' />

        <div className="card">

          <div className="card-content">
            <div className="image">
              <img src="https://www.industr.com/en/__image/a/2345181/alias/xl/ar/16-9/fn/Lead.jpg" alt="" />
            </div>
            <div className="media-icons">
              <a href="https://www.facebook.com/ccanitd.in"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/aarohan_nitdgp"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/cca.nitd/"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="branch">
              <div className="name">RoboCell</div>
            </div>
            <div className="description">
              <p id="desc">This team is responsible for the development, design of the various websites associated with CCA, the Aarohan official website and various online publication and propaganda of the events of the club. It also devises interactive online events, which see about 3000 online participants, for Aarohan, the Annual Techno- Management Fest of CCA.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <hr />



      <div className='cards_images'>

        <div className="card">

          <div className="card-content">
            <div className="image">
              <img src="https://i.tribune.com.pk/media/images/3821605700575-0/3821605700575-0.jpg" alt="" />
            </div>
            <div className="media-icons">
              <a href="https://www.facebook.com/ccanitd.in"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://twitter.com/aarohan_nitdgp"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/cca.nitd/"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="branch">
              <div className="name">Research & Development Team</div>
            </div>
            <div className="description">
              <p id="desc">This team is responsible for the development, design of the various websites associated with CCA, the Aarohan official website and various online publication and propaganda of the events of the club. It also devises interactive online events, which see about 3000 online participants, for Aarohan, the Annual Techno- Management Fest of CCA.</p>
            </div>
          </div>
        </div>
        <img src={img3} className='cards_outimages' />
      </div>

    </>
  )
}
