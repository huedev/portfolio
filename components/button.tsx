import Link from 'next/link'

type Props = {
  href: string
  label: string
  icon: any
  isPrimary: boolean
}

export default function Button({ href, label, icon, isPrimary }: Props) {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank" className={`${isPrimary && 'col-span-2'}`}>
      <div className={`
        px-3 py-2 flex items-center justify-center sm:justify-normal gap-x-2 rounded-md shadow font-medium
        ${isPrimary ? 'bg-indigo-500 dark:bg-indigo-600 text-white hover:bg-indigo-400 dark:hover:bg-indigo-500'
        : 'bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-0 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
      >
        {icon}
        {label}
      </div>
    </Link>
  )
}
