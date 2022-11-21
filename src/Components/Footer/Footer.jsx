import React,{useEffect} from 'react'
import './footer.css'
import video from '../../Assets/River.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer=()=>{

    useEffect(()=>{
        Aos.init({duration:2000})

    },[])

    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>

                    </div>
                    <div className="inputDiv flex">
                        <input type="text" data-aos="fade-up" placeholder='Enter Email Address' />
                        <button className="btn flex" data-aos="fade-up" type='Submit'>
                            SEND<FiSend className='icon'/>
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/>Explore World.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagragh">
                        Jobs fill your pockets, adventures fill your soul.
Remember that happiness is a way of travel, not a destination.
The world is a book and those who do not travel read only one page.
Travel is the only thing you buy that makes you richer.Not all those who wander are lost.
Travel is an investment in yourself.

 “The journey of a thousand miles begins with a single step.”
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FiFacebook className='icon'/>
                        </div>
                    </div >
                

                <div className="footerLinks grid">
                    <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Services
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Insurance
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Agency
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            
                            Tourism
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Payment
                        </li>
                    </div>


                    <div data-aos-duration="4000" data-aos="fade-up" className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>
                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Bookings
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            RentCars
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            HostelWorld
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            
                            Trivago
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            TripAdvisor
                        </li>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="5000"  className="linkGroup">
                        <span className="groupTitle">
                          LAST MINUTE
                        </span>
                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            London
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            California
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Indonesia
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            
                            Europe
                        </li>

                        <li className='footerList flex'>
                            <FiChevronRight className="icon"/>
                            Asia
                        </li>
                    </div>


                </div>


                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE</small>
                    <small>COPYRIGHTS RESERVED - EXPLORE WORLD 2022</small>
                </div>
                </div>
            </div>

        </section>
    )
}
export default Footer