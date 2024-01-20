'use client'

import Link from "next/link"
import { useState } from "react"


export default function Nav () {

   const [color, setcolor] = useState("gris")

  const handleClick = ()=>{
    setcolor("amarillo")
  }

    return (
        <ul className="flex flex-col gap-6 font-bold text2 hidden ">
          <li className={`cursor-pointer hover:text-yellow-400 max-w-14 ${color == 'gris' ? 'text2' : 'text-yellow-400'}`} onClick={handleClick}>
            <Link href="/#about">
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 max-w-24">
            <Link href="/#experience">
              Experience
            </Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 max-w-20">
            <Link href="/#projects">
              Projects
            </Link>
          </li>
        </ul>
    )
}