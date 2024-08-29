'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlusIcon from "./PlusIcon";

export default function WorkingProcessCard({ orderNo, label, textContent = "" }: { orderNo: number; label: string; textContent?: string }) {
    const [state, setState] = useState<boolean>(false);

    return (
        <motion.div
            className={`w-full rounded-[45px] flex flex-col px-[60px] py-[41px] border border-dark drop-shadow-[0px_5px] ${state ? "bg-green" : "bg-grey"} transition-colors duration-300`}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3}}
        >
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-[25px] items-center">
                    <h1>{orderNo < 10 ? `0${orderNo}` : orderNo}</h1>
                    <h3 className="w-[612px]">{label}</h3>
                </div>
                <button onClick={() => setState(!state)}><PlusIcon property={state ? "minus" : "plus"} /></button>
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
                            className="w-[1114px] bg-black"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '1px' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.span>
                        <motion.p
                            className="w-[1114px]"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '60px' }}
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