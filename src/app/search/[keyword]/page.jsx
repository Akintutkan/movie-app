import React from 'react'
import Movies from '@/component/Movies'

const Page = async({params}) => {
    const keyword = params.keyword

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2fb22fc1a4a60f76f91f3f2f89b3b9c7&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();

    console.log(data?.results,"data")
  return (
    <div>
       { 
         !data?.results ? 
         <div>Aranılan Şey Bulunamadı!!!</div> :
         <div className='flex-items-center flex-wrap gap-3'> 
            {
               data?.results?.map((dt,i)=>(
                <Movies key={i} dt={dt}/>
                ))
            }        
         </div>
       }
    </div>
  )
}

export default Page