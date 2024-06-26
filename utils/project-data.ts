import { ProjectType } from '@/interfaces'
import huedevLogo from '@/public/images/huedev.png'
import matchingLogo from '@/public/images/matching.png'
import textboxLogo from '@/public/images/textbox.png'
import gameReviewsLogo from '@/public/images/game_reviews.png'

export const projectData: ProjectType[] = [
  {
    id: 0,
    name: 'Personal Blog',
    description: 'My personal blog for updates on my hobby projects.',
    skills: [
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
    link: 'https://huedev.me/',
    logo: huedevLogo,
  },
  {
    id: 1,
    name: 'Matching',
    description: 'A web-based matching game.',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    link: 'https://matching.huedev.me/',
    logo: matchingLogo,
  },
  {
    id: 2,
    name: 'Textbox',
    description: 'A web app for manipulating text, lists, and other data.',
    skills: [
      'React',
      'Create React App',
      'Tailwind CSS',
    ],
    link: 'https://textbox.huedev.me/',
    logo: textboxLogo,
  },
  {
    id: 3,
    name: 'CS50 Game Reviews',
    description: 'A game review web application I built as my final project for CS50x.',
    skills: [
      'Python',
      'Flask',
      'JavaScript',
      'Tailwind CSS',
    ],
    link: 'https://github.com/huedev/game-reviews',
    logo: gameReviewsLogo,
  },
]
