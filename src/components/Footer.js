import React from 'react'
import Image from './Image'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      <a href="https://instagram.com/wherethewildlingslearn/">
        <Image src="https://res.cloudinary.com/kdventures/image/upload/c_scale,h_50,w_50/v1597336812/instagram_w5duc3.png"
                alt="Instagram"
                /></a>
        <a href="https://www.facebook.com/WhereTheWildlingsLearn/">
        <Image src="https://res.cloudinary.com/kdventures/image/upload/c_scale,h_50,w_50/v1597336812/facebook_cifvzg.png"
                alt="Facebook"
                /></a>
        <a href="https://twitter.com/wildlingslearn/">
        <Image src="https://res.cloudinary.com/kdventures/image/upload/c_scale,h_50,w_50/v1597336812/twitter_xxw4sk.png"
                alt="Twitter"
                /></a>
        <a href="https://www.pinterest.com/wherethewildlingslearn/">
        <Image src="https://res.cloudinary.com/kdventures/image/upload/c_scale,h_50,w_50/v1597336812/pinterest_o5v5nl.png"
                alt="Pinterest"
                /></a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
