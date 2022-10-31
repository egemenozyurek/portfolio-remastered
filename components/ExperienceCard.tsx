import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full object-cover object-center'
                src="myicon.jpg"
                alt=""
            />
            <div className='px-0 md:px-10'>
                <h4 className='font-comfortaa text-4xl font-light'>CEO of my life</h4>
                <p className='font-bold font-comfortaa text-2xl mt-1'>Freelance</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full' src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="" />
                    {/* Tech used */}
                    {/* Tech used */}
                    {/* Tech used */}
                </div>
                <p className='uppercase font-comfortaa py-5 text-gray-300'>Started work... - Ended...</p>
                <ul className='font-comfortaa list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard