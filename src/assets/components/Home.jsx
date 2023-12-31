import React from 'react'
import group from '../images/group.png'
import idea from '../images/idea.png'
import contact from '../images/contact.jpg'
import img16 from '../images/img16.jpeg'
import img17 from '../images/img17.jpeg'
import img18 from '../images/img18.jpeg'
import img19 from '../images/img19.jpeg'
import img20 from '../images/img20.jpeg'
import man from '../images/man.jpeg'
import what from '../images/whats.png'
import { SlEnvolope, SlPhone } from 'react-icons/sl'
import { FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa'
import Header from './Header'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { About, Products, Service, WhatsappNumber } from '../utils'


const Home = () => {
  return (
    <div>
      <div className="bg-banner bg-cover w-full h-[49rem] bg-no-repeat">
        <Header />
        <div className="lg:flex mb-20 items-center gap-4 justify-between m-4 lg:ml-16 lg:mr-16">
          <div className="text-white lg:px-10">
            <h1 className="lg:text-5xl text-xl font-semibold mb-2">we deal with all kind of motor spare parts and accessories.</h1>
            <p className="mb-12">F.N NUBIS ENTERPRISES Is one of the leading procurement and supply company with a nationwide reputation for procurement,supply and Logistic service .She also provides highly skilled services to the Oil, gas and allied industries.</p>
          </div>
          <img src={group} alt="" className="w-[32rem]" />
        </div>
      </div>
      <div id="services" className="lg:ml-16 mb-32 mx-6 lg:mt-20 lg:mr-16">
        <div className="">
          <div className="">
            <h6 className="lg:text-5xl text-3xl font-medium">We’re offering</h6>
          </div>
          <div className="mt-10">
            <div className=" items-center justify-center mx-2 my-6 gap-10 grid md:grid-cols-3">
              {Service.map((item, i) => (
                <div className="" key={i}>
                  <img src={item.image} alt="" className="mb-3" />
                  <div className="text-xl mb-2 uppercase font-semibold"> {item.title} </div>
                  <p className=""> {item.text} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-16 mx-10 mb-20 lg:mr-16">
        <div className="lg:flex items-center justify-between">
          <div className="mb-12 lg:mb-0">
            <h6 className="text-xl mb-2 font-medium">Our work process</h6>
            <p className="font-bold mb-2 text-4xl">Discover New Idea With Us!</p>
            <div className="flex items-center gap-1 text-xl pt-5">
              <FaMapMarkerAlt className='text-orange-500 text-4xl' />
              <div className="">Shop 97, block 8, Zone D, Tradefair canple Lagos Nigeria</div>
            </div>
            <div className="flex items-center gap-1 text-xl pt-5">
              <SlPhone className='text-orange-500 text-4xl' />
              <div className="">+2438160733553</div>
            </div>
          </div>
          <img src={idea} alt="" className="" />
        </div>
        <div className="mt-20">
          <div className="lg:flex items-center justify-between">
            {About.map((item, i) => (
              <div key={i} className="flex items-center mx-16 lg:mx-0 mb-10 gap-10">
                <img src={item.image} alt="" className="" />
                <div className="">
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="text-lg text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="team" className="">
        <div className="text-center text-4xl font-bold uppercase mb-10">meet the team</div>
        <div className="flex items-center justify-center w-11/12 mx-auto pb-14">
          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            centeredSlides={true}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={false}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            className='mySwiper'
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide> <div className="w-fit mx-auto"><img src={img16} alt="" className="w-[20rem] h-[20rem] object-cover" /></div> </SwiperSlide>
            <SwiperSlide><div className="w-fit mx-auto"><img src={img17} alt="" className="w-[20rem] h-[20rem] object-cover" /></div> </SwiperSlide>
            <SwiperSlide><div className="w-fit mx-auto"><img src={img18} alt="" className="w-[20rem] h-[20rem] object-cover" /></div> </SwiperSlide>
            <SwiperSlide><div className="w-fit mx-auto"><img src={img19} alt="" className="w-[20rem] h-[20rem] object-cover" /></div> </SwiperSlide>
            <SwiperSlide><div className="w-fit mx-auto"><img src={img20} alt="" className="w-[20rem] h-[20rem] object-cover" /></div> </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div id="products" className="bg-gray-200 py-20">
        <div className="w-11/12 mx-auto">
          <div className="">
            <h1 className="text-4xl mb-2 font-semibold">Let's See Our Latest Products</h1>
            <p className="text-sm font-medium text-gray-500">OUR PRODUCTS INCLUDE: Alternators, kickstarters, Buchin for universal, Amateur for universal, shooting coil, kick Bendix, kick clutch e.t.c
            </p>
          </div>
          <div className="">
            <div className="mt-10">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {Products.map((item, i) => (
                  <div className="" key={i}>
                    <img src={item.image} alt="" className="mb-3 w-full" />
                    {/* <div className="text-xl mb-2 font-semibold"> {item.title} </div> */}
                    <p className="text-sm font-medium"> {item.title} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="bg-purple-700 py-20">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-white">
            <h4 className="font-bold">Meet the C.E.O</h4>
            <h1 className="text-4xl font-bold">NDUBUISI .F. NWABUISI</h1>
            <p className="">NDUBUISI .F. NWABUISI is the Managing Director of F.N NUBIS enterprises a spare part company specialising in all kind of motor spare parts and motor accessories, Truck and Trailer parts for Mercedes Benz, Scania, MAN and BPW.</p>
            <p className="">My responsibilities here include procurement of parts, customer relations, business development and general management of the F.N NUBIS team.</p>
          </div>
          <div className="border-white border-4 rounded-xl"> <img src={man} alt="" className="w-full h-[30rem] rounded-xl object-top object-cover" /> </div>
        </div>
      </div>
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 gap-10 mx-auto">
          <div className="w-fit mx-auto">
            <img src={contact} alt="" className="" />
          </div>
          <div className="">
            <div className="flex items-center mb-1 text-4xl font-semibold gap-2">
              <FaMailBulk />Need an assistant?
            </div>
            <p className="text-xl mb-10 text-gray-800">You can seamlessly send us a direct Email</p>
            <form>
              <div className="grid grid-cols-2 gap-5 mb-5">
                <input type="text" placeholder='Name' className='outline-none border rounded-md px-3 py-3 w-full mr-4 border-gray-300' />
                <input type="email" placeholder='Email' className='outline-none border rounded-md px-3 py-3 w-full border-gray-300' />
              </div>
              <textarea name="" id="" cols="0" rows="6" placeholder='Message' className='outline-none border rounded-md px-3 py-3 w-full border-gray-300'></textarea><br />
              <div className="w-3/5 mx-auto"> <button className=' bg-blue-700 capitalize shadow-2xl px-6 w-full py-5 rounded-full text-white font-bold mt-5'>send</button> </div>
            </form>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-slate-100 py-14">
        <div className="w-11/12 mx-auto">

          <div className="flex items-center justify-center">
            <a href={`https://wa.me/${WhatsappNumber}`} target='_blank'>
              <img src={what} alt="" className="w-[17rem]" />
            </a>
          </div>
          <div className="text-center text-3xl md:text-4xl font-semibold text-green-600"> <a href={`https://wa.me/${WhatsappNumber}`} target='_blank'>Contact us directly via Whatsapp</a> </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div >
  )
}

export default Home
