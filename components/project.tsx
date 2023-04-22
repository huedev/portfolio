import Image from 'next/image'
import Link from 'next/link'
import { ProjectType } from '@/interfaces'

type Props = {
  data: ProjectType
}

export default function Project({ data }: Props) {
  return (
    <Link href={data.link} rel="noopener noreferrer" target="_blank">
      <div className="group p-4 flex flex-row gap-x-4 rounded-2xl shadow
        bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-300 dark:ring-0
        hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Image
          src={data.logo}
          alt=""
          className="h-8 w-8 rounded-md rendering-pixelated"
          unoptimized
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-950 dark:text-white">{data.name}</h3>
          <p className="mt-1">{data.description}</p>
          <ul className="mt-2 flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <li key={index} className="inline-flex text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 group-hover:dark:bg-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}
