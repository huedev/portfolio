import { ProjectType } from '../interfaces'

export const projectData: ProjectType[] = [
  {
    id: 0,
    name: 'Personal Blog',
    description: 'My personal blog for updates on my hobby projects.',
    skills: [
      'React',
      'Next.js',
      'JavaScript',
    ],
    link: 'https://huedev.me/',
  },
  {
    id: 1,
    name: 'Matching',
    description: 'A web-based matching game.',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
    ],
    link: 'https://matching.huedev.me/',
  },
  {
    id: 2,
    name: 'Textbox',
    description: 'A web app for manipulating text, lists, and other data.',
    skills: [
      'React',
      'Create React App',
      'JavaScript',
    ],
    link: 'https://textbox.huedev.me/',
  },
]
