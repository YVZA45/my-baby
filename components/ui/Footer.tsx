import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div>
          <div>
            <Logo />
            <p> yawedi khtini yerham babak rani 3ayan </p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer