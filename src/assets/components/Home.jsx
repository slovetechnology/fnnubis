import React from 'react'
import group from '../images/group.png'
import idea from '../images/idea.png'
import contact from '../images/contact.jpg'
import ser1 from '../images/integrated-marketing.svg'
import ser2 from '../images/design-development.svg'
import ser3 from '../images/digital-strategy.svg'
import ser4 from '../images/digital-marketing.svg'
import ser5 from '../images/growth-strategy.svg'
import ser6 from '../images/saving-strategy.svg'
import client from '../images/satisfied-client.svg'
import finished from '../images/finished-project.svg'
import team from '../images/team-members.svg'
import blog from '../images/our-blog-posts.svg'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import img7 from '../images/img7.jpeg'
import img8 from '../images/img8.jpeg'
import img9 from '../images/img9.jpeg'
import img10 from '../images/img10.jpeg'
import img11 from '../images/img11.jpeg'
import img12 from '../images/img12.jpeg'
import img13 from '../images/img13.jpeg'
import img14 from '../images/img14.jpeg'
import img16 from '../images/img16.jpeg'
import img17 from '../images/img17.jpeg'
import img18 from '../images/img18.jpeg'
import img19 from '../images/img19.jpeg'
import img20 from '../images/img20.jpeg'
import man from '../images/man.jpeg'
import what from '../images/whats.png'
import { VscPass } from 'react-icons/vsc'
import { FaMailBulk } from 'react-icons/fa'
import Header from './Header'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { WhatsappNumber } from '../utils'


const Products = [
  {
    image: img1,
    title: 'kick starter for mercedes BENZ Actros new model(mp2*)',
  },
  {
    image: img2,
    title: 'Mercedes BENZ 911, 814 etc models 12volts and 24volt available',
  },
  {
    image: img4,
    title: 'kick clutch for mercedes universal MAN',
  },
  {
    image: img5,
    title: 'Shooting coil Big for universal man diesel',
  },
  {
    image: img6,
    title: 'Kick Bendix for mercedes man diesel',
  },
  {
    image: img7,
    title: 'Amateur for universal',
  },
  {
    image: img8,
    title: 'Shooting coil small for universal man diesel',
  },
  {
    image: img9,
    title: 'Brush',
  },
  {
    image: img10,
    title: 'Fide Coil for Mercedes trucks',
  },
  {
    image: img11,
    title: 'Alternator For Mercedes 911 etc',
  },
  {
    image: img12,
    title: 'Solenoid for Mercedes 911, 814 trucks',
  },
  {
    image: img13,
    title: 'Kick starter Bendix for Mercedes trucks',
  },
  {
    image: img14,
    title: 'Amateur for Mercedes small trucks',
  },
  {
    image: img3,
    title: 'Brush and brush holder for Mercedes small trucks',
  },
]
const about = [
  {
    image: client,
    title: '97%',
    text: 'Satisfied clients',
  },
  {
    image: finished,
    title: '3214',
    text: 'Finished Project',
  },
  {
    image: team,
    title: '125',
    text: 'Team Members',
  },
  {
    image: blog,
    title: '2135',
    text: 'Our Blog Posts',
  }
]

const service = [
  {
    image: ser1,
    title: 'Integrated Marketing',
    text: 'Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum',
  },
  {
    image: ser2,
    title: 'Design & Development',
    text: 'Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum',
  },
  {
    image: ser3,
    title: 'Digital Strategy',
    text: 'Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum',
  },
  {
    image: ser4,
    title: 'Digital Marketing',
    text: 'Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum',
  },
  {
    image: ser5,
    title: 'Growth Strategy',
    text: 'Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum',
  },
  {
    image: ser6,
    title: 'Saving Strategy',
    text: 'Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum',
  },
]
const Home = () => {
  return (
    <div>
      <div className="bg-banner bg-cover w-full h-[45rem] bg-no-repeat">
        <Header />
        <div className="lg:flex mb-20 items-center gap-4 justify-between m-4 lg:ml-16 lg:mr-16">
          <div className="text-white lg:px-10">
            <h1 className="lg:text-5xl text-xl font-semibold mb-2">we deal with all kind of motor spare parts and accessories.</h1>
            <p className="mb-12">F.N NUBIS ENTERPRISES Is one of the leading procurement and supply company with a nationwide reputation for procurement,supply and Logistic service .She also provides highly skilled services to the Oil, gas and allied industries.</p>
          </div>
          <img src={group} alt="" className="w-[32rem]" />
        </div>
      </div>
      <div className="lg:ml-16 mb-32 mx-6 lg:mt-20 lg:mr-16">
        <div className="">
          <div className="">
            <h6 className="lg:text-xl text-lg font-medium">We’re offering</h6>
            <p className="font-bold text-2xl lg:text-4xl">Creative Digital Agency</p>
          </div>
          <div className="mt-10">
            <div className=" items-center justify-center mx-2 my-6 gap-10 grid md:grid-cols-3">
              {service.map((item, i) => (
                <div className="" key={i}>
                  <img src={item.image} alt="" className="mb-3" />
                  <div className="text-xl mb-2 font-semibold"> {item.title} </div>
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
            <h6 className="text-xl font-medium">Imagination will take us everywhere</h6>
            <h6 className="text-md text-gray-500 font-semibold">Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur</h6>
            <div className="mt-4">
              <div className="flex items-center gap-3">  <VscPass />Lorem ipsum dolor sit amet, pretium pretium </div>
              <div className="flex items-center gap-3">  <VscPass />Lorem ipsum dolor sit amet, pretium pretium </div>
              <div className="flex items-center gap-3">  <VscPass />Lorem ipsum dolor sit amet, pretium pretium </div>
            </div>
          </div>
          <img src={idea} alt="" className="" />
        </div>
        <div className="mt-20">
          <div className="lg:flex items-center justify-between">
            {about.map((item, i) => (
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

      <div className="">
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

      <div className="bg-gray-200 py-20">
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
      <div className="bg-purple-700 py-20">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-white">
            <h4 className="font-bold">Meet the Team</h4>
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
      <div className="bg-slate-100 py-14">

        <div className="flex items-center justify-center">
          <a href={`https://wa.me/${WhatsappNumber}`} target='_blank'>
            <img src={what} alt="" className="w-[17rem]" />
          </a>
        </div>
        <div className="text-center text-3xl md:text-4xl font-semibold text-green-600"> <a href={`https://wa.me/${WhatsappNumber}`} target='_blank'>Contact us directly via Whatsapp</a> </div>
    </div>

      {/* footer */ }
  <Footer />
    </div >
  )
}

export default Home
