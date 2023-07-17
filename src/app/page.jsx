import React from 'react'
import Movies from '@/component/Movies';

const Page = async({searchParams}) => {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=2fb22fc1a4a60f76f91f3f2f89b3b9c7&language=en-us&page=1`,
  {next:{revalidate:10000}})

  const data =await res.json();


  console.log(data,"data")
  return (
    <div className='flex items-center justify-center flex-wrap gap-3'> 
      {
      data?.results?.map((dt,i)=>(
<Movies key={i} dt={dt}/>
      ))
      }
    </div>
  )
}

export default Page