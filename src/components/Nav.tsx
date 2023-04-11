import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="container min-w-full h-40 flex justify-center items-center flex-row divide-x-4 divide-slate-400 gap-x-10">
            <div className="h-[60%]  flex justify-center items-center">
                <p className="text-3xl font-semibold text-white text-slate-200">Vishrut Thoutam</p>
            </div>
            <div className="h-[60%] flex flex-row justify-center items-center">
                <p className="text-2xl text-slate-500 px-10">Latest</p>
                <p className="text-2xl text-slate-500 px-10">Archive</p>
                <p className="text-2xl text-slate-500 px-10">Resources</p>
            </div>
        </div>
    )
}