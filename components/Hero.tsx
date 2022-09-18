import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name's Egemen Ozyurek",
            "Guy-Who-Loves-Coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-fill h-32 w-32 mx-auto rounded-full object-cover' src="31106842.png" />
            <div className='z-20'>
                <h2 className='font-comfortaa text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='font-comfortaa mr-3'>{text}</span>
                    <Cursor cursorColor='#21F8F6' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='font-comfortaa heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='font-comfortaa heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='font-comfortaa heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='font-comfortaa heroButton'>Projects</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}