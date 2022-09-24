import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Egemen's Portfolio</title>
        <meta name="description" content="Let's meet" />
        <link rel="icon" href="/myicon.jpg" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      
    </div>
  )
}

export default Home
