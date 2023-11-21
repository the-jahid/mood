import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const links = [
    { name: 'Journals', href: '/journal' },
    { name: 'History', href: '/history' },
  ]


const DashboardLayout = ({children}) => {
    return <main>
    {/* header Start */}
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <UserButton />
            <span className="ml-3 text-xl">Mood</span>
            </div>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className="px-4 flex space-x-2 ">
                {links.map((link) => (
                  <li key={link.name} className="text-xl my-4">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
        
        </div>
    </header>
    {/* header end */}
    <div className="h-full w-full" >
        {children}
    </div>
    </main>
}

export default DashboardLayout

