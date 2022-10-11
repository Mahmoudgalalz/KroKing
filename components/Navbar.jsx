import Link from 'next/link'
import React from 'react'
const classes='text-xl lowercase ml-8 no-underline bg-transparent'

const Navbar = ()=>{
    return (
      <nav className="flex w-full justify-between flex-wrap flex-col md:flex-row">

        <Link href='/'>
        <a className="text-xl font-bold no-underline bg-transparent">
          Mahmoud Galal
          </a>
        </Link>

        <div className="flex flex-wrap flex-col md:flex-row">
          <Link href="/about">
          <a className={classes}>
            about
            </a>
          </Link>

            <Link href="/blog">
            <a className={classes} href="/blog">
            blog
            </a>
            </Link>
            <Link href="/projects">
              <a className={classes} >
            Projects
            </a>
            </Link>
        </div>
      </nav>
    )
}
export default Navbar