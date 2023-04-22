import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Project from '@/components/project'

import { ProjectType } from '@/interfaces'
import { projectData } from '@/utils/project-data'
import portrait from '@/public/images/portrait.jpg'
import Button from '@/components/button'
import { GitHubIcon, LinkedInIcon, ResumeIcon } from '@/components/icons'

type Props = {
  projects: ProjectType[]
}

export default function Home({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Zachary Hewlett</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <h1 className="font-semibold text-3xl text-gray-950 dark:text-white">Zachary Hewlett</h1>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-x-10">
          <div>
            <p className="my-6">
              Hi, I&apos;m Zach. I&apos;m a developer with over 4 years of experience in building web applications and static sites.
              I appreciate the importance of writing clear technical documentation.
            </p>
            <p className="my-6">
              I have an eye for detail and a passion for accessible visual design.
              I consider myself a life-long learner who is always eager to grow and hone my craft, and I enjoy finding the fun in everything I do.
            </p>
          </div>
          <Image
            src={portrait}
            alt="Portrait of Zachary Hewlett"
            className="mt-6 sm:my-6 w-32 shrink-0 rounded-full"
            placeholder="blur"
            priority
          />
        </div>
        <div className="mb-6 flex sm:flex-row items-center gap-x-3">
          <Button
            href="/documents/resume.pdf"
            label="View Resume"
            icon={<ResumeIcon />}
            isPrimary={true}
          />
          <Button
            href="https://github.com/huedev"
            label="GitHub"
            icon={<GitHubIcon />}
            isPrimary={false}
          />
          <Button
            href="https://www.linkedin.com/in/zachary-hewlett/"
            label="LinkedIn"
            icon={<LinkedInIcon />}
            isPrimary={false}
          />
        </div>
      </section>
      <section>
        <h2 className="font-semibold text-2xl text-gray-950 dark:text-white">Projects</h2>
        <ul className="my-6 grid grid-cols-1 gap-4">
          {projectData.map((project) => (
            <li key={project.id}>
              <Project data={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
