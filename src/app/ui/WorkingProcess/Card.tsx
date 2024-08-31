'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlusIcon from "../PlusIcon";

export default function WorkingProcessCard({ orderNo, label, textContent = "" }: { orderNo: number; label: string; textContent?: string }) {
    const [state, setState] = useState<boolean>(false);

    return (
        <motion.div
            className={`w-full rounded-[45px] flex flex-col px-[30px] sm:px-[60px] py-[30px] sm:py-[41px] border border-dark drop-shadow-[0px_5px] ${state ? "bg-green" : "bg-grey"} transition-colors duration-300`}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3}}
        >
            <div className="w-full flex max-sm:gap-[28px] justify-between items-center">
                <div className="flex gap-[33px] sm:gap-[25px] items-center">
                    <h1 className="font-medium max-sm:text-[30px]">{orderNo < 10 ? `0${orderNo}` : orderNo}</h1>
                    <h3 className="max-sm:hidden w-[612px]">{label}</h3>
                    <h4 className="sm:hidden">{label}</h4>
                    
                </div>
                <button className="max-sm:w-[30px] max-sm:h-[30px]" onClick={() => setState(!state)}><PlusIcon property={state ? "minus" : "plus"} /></button>
            </div>

            {/* AnimatePresence only around elements that will be added/removed */}
            <AnimatePresence>
                {state && (
                    <motion.div
                    className="w-full flex flex-col"
                    initial={{ opacity: 0, height: 0}}
                    animate={{ opacity: 1, height: 'auto', gap: '30px', marginTop: '30px' }}
                    exit={{ opacity: 0, height: 0, gap: '0px', marginTop: '0px'  }}
                    transition={{ duration: 0.3 }}
                    >
                        <motion.span
                            className="bg-black"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '1px' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.span>
                        <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {textContent}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}