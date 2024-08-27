'use client';

import { useState } from "react";
import PlusIcon from "./PlusIcon";

export default function WorkingProcessCard({orderNo, label, textContent = ""}:{orderNo: number, label: string, textContent?: string}) {
    const [state, setState] = useState<boolean>(false);

    return (
        <>
            <div className={`w-full rounded-[45px] flex flex-col gap-[30px] px-[60px] py-[41px] border border-dark drop-shadow-[0px_5px] ${state ? "bg-green" : "bg-grey"}`}>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-[25px] items-center">
                        <h1>{orderNo < 10 ? `0${orderNo}` : orderNo}</h1>
                        <h3 className="w-[612px]">{label}</h3>
                    </div>
                    <button onClick={() => setState(!state)}><PlusIcon property={state ? "minus" : "plus"}/></button>
                </div>
                <span className={`w-[1114px] h-px bg-black ${state ? "block" : "hidden"}`}></span>
                <p className={`w-[1114px] h-[60px]  ${state ? "" : "hidden"}`}>{textContent}</p>
            </div>
        </>
    )
}