import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { PageInfo, Project, Socials } from '../typing'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  socials: Socials[];
}

const Home = ({ pageInfo, socials, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#21F8F6]/80">
      <Head>
        <title>Egemen's Portfolio</title>
        <meta name="description" content="Let's meet" />
        <link className='rounded-full' rel="icon" href="/myicon.jpg" />
      </Head>

      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section  id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'><img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
            src="/myicon.jpg" alt="" /></div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Socials[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      socials,
      projects
    }
  }
}
