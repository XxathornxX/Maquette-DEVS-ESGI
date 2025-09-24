import Link from "next/link"
import { Button } from "./button"
import { HomeIcon, Sprout } from "lucide-react"

function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50"> 
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <Link 
                        href="/"
                        className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                        💻 Intranet ESGI
                    </Link>
                </div>

                {/* Navbar components */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" asChild>
                        <Link href="/Applications" className="flex items-center gap-2">
                            <HomeIcon className="w-4 h-4" />
                            <span>Applications</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" asChild>
                        <Link href="/Home" className="flex items-center gap-2">
                            <HomeIcon className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar