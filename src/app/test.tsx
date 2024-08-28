'use client'

import { useState, useRef, useEffect } from "react"

export default function Test() {
    const [items, setItems] = useState([
        <p key="1" className="snap-center bg-red-600">1</p>,
        <p key="2" className="snap-center bg-blue-600">2</p>,
        <p key="3" className="snap-center bg-green">3</p>,
        <p key="4" className="snap-center bg-yellow-600">4</p>,
        <p key="5" className="snap-center bg-pink-600">5</p>,
        <p key="6" className="snap-center bg-blue-600">6</p>,
        <p key="7" className="snap-center bg-green">7</p>,
        <p key="8" className="snap-center bg-yellow-600">8</p>,
        <p key="9" className="snap-center bg-pink-600">9</p>
    ])

    const itemsRef = useRef<HTMLDivElement>(null)
    
    const handleLeft = () => {
        if (itemsRef.current) {
            itemsRef.current.scrollBy({left: -itemsRef.current.clientWidth/2})
        }
    }

    const handleRight = () => {
        if (itemsRef.current) {
            itemsRef.current.scrollBy({left: itemsRef.current.clientWidth/2})
        }
    }

    return (
        <div className="flex w-full flex-col justify-center items-center gap-5">
            <div className="flex w-[100px] items-center gap-10 overflow-x-scroll scroll-smooth snap-x snap-mandatory" ref={itemsRef}>
                {items[items.length-1]}
                {items}
                {items[0]}
            </div>
            <div className="flex w-full justify-center items-center gap-2">
                <button onClick={handleLeft} className="bg-emerald-400">Left</button>
                <button onClick={handleRight} className="bg-emerald-400">Right</button>
            </div>
        </div>
    )
}