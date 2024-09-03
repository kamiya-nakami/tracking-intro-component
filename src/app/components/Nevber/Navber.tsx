
"use client"

import Image from 'next/image'
import IconLogo from '../../img/icon/logo.svg'
import IconHamburger from '../../img/icon/icon-hamburger.svg'
import IconClose from '../../img/icon/icon-close.svg'
// image  icon 
import Link from 'next/link'
import { useState } from 'react'

function Naveber() {
  const [open , Setopeon] = useState<Boolean>(false);

  const toggleNavbar = () => {
    Setopeon(!open)
  }
  return (
    <nav className='contaner-Navber ' >
      <div className="contaner flex  min-h-20  mx-auto w-full  h-auto  items-center justify-between ">

        <div className="  ">
          <Image
            src={IconLogo}
            width={50}
            height={50}
            alt="IconLogo"
            loading='lazy'
          />
        </div>
        <div className="  flex md:hidden ">
          { open  ?  (  null )
          :(<button onClick={toggleNavbar}
                className=" flex ">
                  <Image
                    src={IconHamburger}
                    width={50}
                    height={50}
                    alt="IconHamburger"
                  />
                </button>)}
            { open ? (
            <button className=" "
                    onClick={toggleNavbar}>
                <Image            
                  src={IconClose}
                  width={50}
                  height={50}
                  alt="IconClose"
                />    
            </button>
          ) : null   }

        </div>
        {/* menu desktop */}
        <div className="  hidden md:flex ">
          <ul className=" flex md:mx-5 flex-col  md:flex-row mx-auto py-10  
                          *:text-xl *:mx-5    *:relative *:font-bold ">
              <li className="NavEffect  "><Link href="/" >PRODUCT</Link></li>
              <li className="NavEffect   "><Link href="/" >FEATURES</Link></li>
              <li className="NavEffect   "><Link href="/" >PRICING</Link></li>
              <li className=" bg-[#9294a06b] text-center w-6 rounded-full border-[.2rem] "></li>
              <li className="NavEffect  text-[#9294a06b] "><Link href="/" >LOGIN</Link></li>
          </ul>
        </div>

        {/*  Mobile Menu  */}
        { open  ? (
        <div className="  md:hidden absolute rounded-lg min-h-[30vh] left-[10%] top-[20%] w-[80%] bg-white drop-shadow-2xl ">
          <ul className=" flex md:mx-5 flex-col  md:flex-row mx-auto px-10 py-10 text-center 
                          *:text-xl *:my-5 *:font-bold ">
              <li><Link href="/" >PRODUCT</Link></li>
              <li><Link href="/" >FEATURES</Link></li>
              <li><Link href="/" >PRICING</Link></li>
              <li className=" text-[#9294a0b7] border-t-[2px] border-[#9294a06b] pt-10 "><Link href="/" >LOGIN</Link></li>
          </ul>
        </div>
      ): null }
      </div>
    </nav>
  )
}

export default Naveber