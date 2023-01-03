import Image from 'next/image'
import { Movie } from '../typings'
import { useState } from 'react'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {

  const [movie, setMovie] = useState<Movie | null>(null)

  return (
    <div>
        <div>
            {/* <Image/> */}
        </div>
    </div>
  )
}

export default Banner