'use client'
import {useState} from "react"
import HeadingAndSubHeading from "../components/HeadingAndSubHeading"
import TestimonalBubble from "../components/TestimonalBubble"

export default function Testimonials() {
    const [items, setItems] = useState([
        <TestimonalBubble key="1" className="snap-always snap-center"/>,
        <TestimonalBubble key="2" className="snap-always snap-center"/>,
        <TestimonalBubble key="3" className="snap-always snap-center"/>,
        <TestimonalBubble key="4" className="snap-always snap-center"/>,
        <TestimonalBubble key="5" className="snap-always snap-center"/>
    ])
    
    const [page, setPage] = useState(1)

    const handleLeft = () => {
        setItems([...items.slice(1), items[0]])
        setPage(page <= 1? items.length : page-1)
    }

    const handleRight = () => {
        setItems([items[items.length-1], ...items.slice(0, items.length-1)])
        setPage(page >= items.length? 1 : page+1)
    }
    
    return (
        <div className="pt-[70px] mt-[70px]">
            <HeadingAndSubHeading HeadLabel="Testimonials" SubHeadLabel="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" SubWidth="473px"/>
            <div className="w-full h-[625px] rounded-[45px] flex items-center bg-dark text-white">
                <div className="w-full flex flex-col justify-center items-center gap-[124px]">
                    <div className="w-full flex gap-[25px] justify-center overflow-hidden scroll-smooth snap-x snap-mandatory">
                        {items[items.length-1]}
                        {items}
                        {items[0]}
                    </div>
                    <div className="w-[564px] flex justify-between items-center">
                        <button onClick={handleLeft}><svg width="24" height="24" viewBox="0 0 24 24" className="fill-white opacity-[0.3] hover:opacity-100" xmlns="http://www.w3.org/2000/svg"><path d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"/></svg></button>
                        <div className="w-[146px] flex gap-[19px]">
                            <button><svg width="14" height="14" viewBox="0 0 14 14" className={`${page === 1 ? "fill-green" : "fill-white"} hover:stroke-green`} xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"/></svg></button>
                            <button><svg width="14" height="14" viewBox="0 0 14 14" className={`${page === 2 ? "fill-green" : "fill-white"} hover:stroke-green`} xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"/></svg></button>
                            <button><svg width="14" height="14" viewBox="0 0 14 14" className={`${page === 3 ? "fill-green" : "fill-white"} hover:stroke-green`} xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"/></svg></button>
                            <button><svg width="14" height="14" viewBox="0 0 14 14" className={`${page === 4 ? "fill-green" : "fill-white"} hover:stroke-green`} xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"/></svg></button>
                            <button><svg width="14" height="14" viewBox="0 0 14 14" className={`${page === 5 ? "fill-green" : "fill-white"} hover:stroke-green`} xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"/></svg></button>
                        </div>
                        <button onClick={handleRight}><svg width="24" height="24" viewBox="0 0 24 24" className="fill-white opacity-[0.3] hover:opacity-100" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"/></svg></button>
                    </div>
                </div>
            </div>
        </div>
    )
}