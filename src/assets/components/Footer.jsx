import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { WhatsappNumber } from '../utils'

const Footer = () => {
    return (

        <div className="">
            <div className="bg-[#3c37f1] py-5">
                <div className="bg-banner1 z-10">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-7 py-10 w-10/12 mx-auto">

                        <div className="text-white flex flex-col gap-3 md:col-span-2">
                            <h1 className='mb-2'>143 castle road 517</h1>
                            <h1 className='mb-3'>district, kiyev port south Canada</h1>
                            <div className="">
                                <h1 className=''>{WhatsappNumber}</h1>
                                <h1 className=''>Marshmallow@yourmail.com</h1>
                            </div>
                            <h1 className='text-2xl font-bold mb-2'>Social Share</h1>
                            <h1 className=' flex items-center text-2xl gap-3'>
                                <FaFacebook />
                                <FaInstagram />
                            </h1>
                        </div>

                        <div className="text-white md:col-span-2">
                            <div className="grid grid-cols-1">
                                <h1 className="text-xl mb-3 font-semibold">OUR PAGES</h1>
                                <div className="flex flex-col">
                                    <h1 className="w-full text-sm py-1.5 font-medium capitalize">HOME</h1>
                                    <h1 className="w-full text-sm py-1.5 font-medium capitalize">SERVICES</h1>
                                    <h1 className="w-full text-sm py-1.5 font-medium capitalize">ABOUT</h1>
                                    <h1 className="w-full text-sm py-1.5 font-medium capitalize">PRODUCTS</h1>
                                    <h1 className="w-full text-sm py-1.5 font-medium capitalize">TESTIMONIAL</h1>
                                    <h1 className="w-full text-sm py-1.5 font-medium capitalize">TEAM</h1>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3 text-white">
                            <div className="">
                                <h1 className="text-2xl mb-3 font-semibold">Subscribe to our NewsLetters</h1>
                                <p className="mb-5">Get the most out of ouy service by subscribing to our newsletters</p>
                            </div>
                            <form>
                                <div className="bg-red-500 rounded-md shadow-2xl flex items-center py-1">
                                    <input type="email" placeholder='Enter Email Address' className="outline-none border rounded-md ml-1 px-3 py-2 w-full border-gray-300" />
                                    <button className='px-3'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
