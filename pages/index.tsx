import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Socials } from '../typing'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Socials[];
}

const Home = ({ pageInfo, socials, projects, experience, skills }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#21F8F6]/80">
      <Head>
        <title>Egemen's Portfolio</title>
        <meta name="description" content="Let's meet" />
        <link className='rounded-full' rel="icon" href="/myicon.jpg" />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="KZzUD1V1K5" data-description="Support me on Buy me a coffee!" data-message="Thank you so much for your time. Cheers !" data-color="#21F8F6" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experience}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
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
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Socials[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      socials,
      projects
    },
    // Next.js will attempt to re-generate the page
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}
