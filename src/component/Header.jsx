import React from 'react'
import {BiSearch} from "react-icons/bi"

const header = () => {
    const menu =[
        {
            name:"About",
            url: "/about"
        },
        {
            name:"Sign In",
            url: "/login"
        },
    ]
  return (
    <div className="flex items-center gap-7 h-20 p-5">
        <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">Movie App</div>
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input placeholder="Arama Yapınız !!" className='outline-none flex-1' type="text" />
            <BiSearch size={25}/>
        </div>
        </div>
  )
}

export default header