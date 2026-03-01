import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle } from './Text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Button } from './button'
import { Input } from './input'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div className='py-12 grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Logo />
            <SubText> yawedi khtini yerham babak rani 3ayan </SubText>
            <SocialMedia className="text-darkColor/60" 
            iconClassName='boreder-darkColor/60 hover:border-shop_light_green hover:border-shop_light_green hover:text-shop_light_green'
            toolTipClassName='bg-darkColor text-white'
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className='space-y-3 mt-4'>
              {quickLinksData?.map((item)=>(
                <li key={item?.title}>
                  <Link  href={item?.href} className='hover:text-shop_light_green hoverEffect'>
                  {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className='space-y-3 mt-4'>
              {categoriesData?.map((item)=>(
                <li key={item?.title}>
                  <Link  href={`/category/${item?.href}`} className='hover:text-shop_light_green hoverEffect'>
                  {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <SubTitle>Newsletter</SubTitle>
            <SubText>Subscribe to our newsletter to receive updates and exculisive letters</SubText>
            <form className='py-3'>
              <Input placeholder="Enter your email" type='email' required />
              <Button className='w-full mt-2'>Subscribe </Button>
            </form>
          </div>
        </div>
        <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
      </Container>
    </footer>
  )
}

export default Footer