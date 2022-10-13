import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='flex felx-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='font-comfortaa absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,

                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.heroImage).url()} alt=''
                className='mb-30 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-14 md:h-35 xl:w-[400px] xl:h-[500px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-comfortaa font-semibold'>Here is a <span className='underline decoration-[#21F8F6]/50'>little</span> background</h4>
                <p className='font-comfortaa text-md text-base'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}

export default About