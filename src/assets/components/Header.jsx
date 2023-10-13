import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images/logo.png'
import { WhatsappNumber } from '../utils'

const urlLinks = [
    {
        title: 'home',
        url: '#home'
    },
    {
        title: 'services',
        url: '#services'
    },
    {
        title: 'about',
        url: '#about'
    },
    {
        title: 'products',
        url: '#products'
    },
    {
        title: 'contact us',
        url: '#contact'
    },
    {
        title: 'team',
        url: '#team'
    },
]
const Header = () => {
    const [scroll, setScroll] = useState(false)
    const [active, setActive] = useState('home')
    const [show, setShow] = useState(false)
    const Icon = show ? FaTimes : FaBars
    window.onscroll = function () {
      siteScroll()
    }
  
    function siteScroll() {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    return (
        <div>
            <div className={`fixed w-full z-10 bg-[#3c37f1] ${scroll ? 'shadow-2xl' : ''}`}>
                <div className="lg:flex items-center justify-between lg:mx-20 mx-5 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={logo} alt="" className="lg:w-16 w-9" />
                            <div className="font-semibold text-xs text-white">fnnubisparts.store</div>
                        </div>
                        <div className="lg:hidden text-white text-xl flex"> <Icon onClick={() => setShow(!show)} /> </div>
                    </div>

                    <div className="lg:flex items-center hidden gap-4">
                        {urlLinks.map((item, i) => (
                            <a key={i} href={item.url} className={`text-white font-semibold text-sm py-2 capitalize ${active === item.title ? 'bg-blue-900 rounded-full px-6' : 'px-2'}`}>{item.title}</a>
                        ))}
                        <a href={`tel:${WhatsappNumber}`} target="_blank" className="rounded-full bg-green-400 py-2 px-3 text-center">{WhatsappNumber}</a>
                    </div>

                   {show && <div className="items-start py-3 flex flex-col gap-4">
                        {urlLinks.map((item, i) => (
                            <a key={i} href={item.url} className={`text-white font-semibold w-full hover:bg-blue-900 rounded-full text-sm py-2 px-6 capitalize ${active === item.title ? 'bg-blue-900 rounded-full' : ''}`}>{item.title}</a>
                        ))}
                        <a href={`tel:${WhatsappNumber}`} target="_blank" className="rounded-full bg-green-400 py-2 px-3 text-center">{WhatsappNumber}</a>
                    </div>}
                </div>
            </div><br /><br /><br /><br />
        </div>
    )
}

export default Header
