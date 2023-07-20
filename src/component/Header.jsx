"use client"
import React from 'react'
import {BiSearch} from "react-icons/bi"
import ThemeComp from './ThemeComp'
import MenuItem from './MenuItem'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const header = () => {
    const [keyword,setKeyword] =useState("")
    const router = useRouter();
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
    const searchFunc =(e) =>{
        if(e.key === "Enter" && keyword.length >= 3){
            router.push(`/search/${keyword}`)
            setKeyword("")
        }

    }
  return (
    <div className="flex items-center gap-7 h-20 p-5">
        <a href="/">  <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold"> Movie App</div> </a>
        <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder="Arama Yapınız !!" className='outline-none flex-1 bg-transparent' type="text" />
            <BiSearch size={25}/>
        </div>
        <ThemeComp/>
        {
        menu.map((mn,i) =>(
            <MenuItem mn={mn} key={i}/>
        ))
        }
        </div>
  )
}

export default header