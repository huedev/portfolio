import { StaticImageData } from "next/image"

export type ProjectType = {
  id: number
  name: string
  description: string
  skills: string[]
  link: string
  logo: StaticImageData
}
