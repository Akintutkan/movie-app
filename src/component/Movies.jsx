"use client"
import React from 'react'
import Image from 'next/image'

const Movies = ({dt}) => {

    console.log(dt,"dt")
  return (
    <div className='min-w-[440px]  imgContainer'>
        <Image width={440} height={300} src={`https://image.tmdb.org/t/p/original/${dt.backdrop_path || dt.poster_path}`}/>

    </div>
  )
}

export default Movies