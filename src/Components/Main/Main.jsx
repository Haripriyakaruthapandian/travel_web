import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
    {
        id:1,
        imgSrc:img,
        destTitle:"Bora Bora",
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'₹20000',
        description:'The center of the romantic universe, where luxury, beach resorts, and spas dot the island with overwater bungalows, thatched-roof villas, and a fabled ambiance. Simply Bora Bora is one of the most beautiful islands in the world.'
    },
  {
        id:2,
        imgSrc:img2,
        destTitle:"Machu Picchu",
        location:'Peru',
        grade:'CULTURAL RELAX',
        fees:'₹15000',
        description:'Machu Picchu , Ancient fortress city of the Incas in the Andes Mountains, south-central Peru. Made a UNESCO World Heritage site in 1983, it is a popular tourist attraction.'
    },

    {
        id:3,
        imgSrc:img3,
        destTitle:"Shimla",
        location:'India',
        grade:'CULTURAL RELAX',
        fees:'₹25000',
        description:"Shimla still retains its old-world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and the ridge lined up with multiple shops, cafes and restaurants."
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:"Cappadocia",
        location:'Turkey',
        grade:'CULTURAL RELAX',
        fees:'₹25000',
        description:"Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves."
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:"Cinque Terre",
        location:'Italy',
        grade:'CULTURAL RELAX',
        fees:'₹21000',
        description:"Cinque Terre, which means Five Lands, comprises the five small coastal villages of Riomaggiore, Manarola, Corniglia, Vernazza and Monterosso located in the Italian region of Liguria. They are listed on the UNESCO World Heritage List"
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:"Angkor Wat",
        location:'Cambodia',
        grade:'CULTURAL RELAX',
        fees:'₹20000',
        description: "Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. Angkor Wat is said to be the largest religious monument in the world."
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:"TajMahal",
        location:'India',
        grade:'CULTURAL RELAX',
        fees:'₹7000',
        description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."
    },
    {
        id:8,
        imgSrc:img8,
        destTitle:"Bali Island",
        location:'Indonesia',
        grade:'CULTURAL RELAX',
        fees:'₹12000',
        description: "Bali Indonesia. Land of the Gods. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!"
    },
     {
        id:9,
        imgSrc:img9,
        destTitle:"Maldives Island",
        location:'Maldives',
        grade:'CULTURAL RELAX',
        fees:'₹20000',
        description: "Best summer spot and holiday spot! Highest facinated spot where maximum people like to reaches. Cool and romantic spot for chilling!"
    }



]

const Main=()=>{

    useEffect(()=>{
        Aos.init({duration:2000})

    },[])
    return(
       <section className='main container section'>
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">Most visited destination</h3>


        </div>
        <div className="secContent grid">
            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">
                                    {destTitle}
                                </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">
                                        {location}
                                    </span>

                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+ | </small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <button className="btn flex">
                                    DETAILS
                                    <HiOutlineClipboardCheck className='icon'/>
                                </button>

                            </div>



                        </div>
                    )


                })
            }

        </div>


        </section>
    )
}
export default Main