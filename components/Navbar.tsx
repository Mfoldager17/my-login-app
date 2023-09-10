import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
        <nav className='flex items-center bg-slate-500 h-10 mx-1 rounded-2xl px-5 opacity-80'>
            <Link className="text-slate-300" href="/">Home</Link>
        </nav>
    </header>
  )
}
