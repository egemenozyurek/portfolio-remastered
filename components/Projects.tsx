import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({ }: Props) {

  const projects = [1, 2, 3, 4, 5]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#21F8F6]/80'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -30,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.roamsofttech.com/images/deloo_eats_lap.svg" alt="" />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-comfortaa font-semibold text-center'>
                <span className='underline decoration-[#21F8F6]/50'>Case Study {i + 1} of {projects.length}:</span>
                Deliveroo Clone
              </h4>
              <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repellendus quae modi exercitationem sunt quo deleniti, optio temporibus unde, corrupti dolorem vel ea assumenda, ullam mollitia blanditiis tempore error illo!</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#21F8F6]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects