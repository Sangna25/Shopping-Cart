import { useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

export function ImageCarousel({data}){
const [slide, setSlide]= useState(0);
const nextSlide = ()=>{
    setSlide(current => current ===data.length-1 ? 0 : current+1);
}
const prevSlide = ()=>{
    setSlide(current => current=== 0 ? data.length -1 : current-1);
}
    return(
        <div className="carousel" >
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {data.map((item,index) =>{
                return (
                    <img src={item.src} alt={item.alt} key={index} className={slide===index ? "slide" :"slide slide-hidden"}/>
                )
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {data.map((_,idx) => {
                    return (
                        <button key={idx} onClick={()=> setSlide(idx)} className={slide===idx ? "indicator" :"indicator-inactive"}></button>
                    )
                    })
                }
            </span>

        </div>
    )    
}