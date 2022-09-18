import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
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
                src='Screenshot_20220918_160331.jpg' alt=''
                className='mb-30 md:mb-0 flex-shrink-0 w-46 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-comfortaa font-semibold'>Here is a <span className='underline decoration-[#21F8F6]/50'>little</span> background</h4>
                <p className='font-comfortaa text-md'>
                    My name is Egemen 💯
                    I'm interested in Front-end positions and Test Automations. 💻
                    I’m currently learning test automation and frontend development. 📚
                    I graduated from Hacettepe University Electronic Technology.🎓
                    I developed myself in terms of research, self-motivation, entrepreneurship and acquiring different abilities. 🌱
                    Who knows, maybe I can bring together the electronic tech and software world in the future and develop software that is effective for our world and environment and will contribute positively to living things and nature in this regard. ✨
                    When I was in the electronic technologies department, all of our projects and assignments were about coding and designing. Since I had an interest in software before.🧑🏻‍💻 Now, I want to follow my dreams and become a developer.🎈
                    Thanks for your interest,
                    If you want to make some magic 🪄 just shoot me a message and i'll get back to you on the double. 	⏫
                </p>
            </div>
        </motion.div>
    )
}

export default About