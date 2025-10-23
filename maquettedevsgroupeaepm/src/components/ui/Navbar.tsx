import Link from "next/link";
import { Button } from "./button";
import { HomeIcon, LogIn, LogInIcon, LogOut, Newspaper,NotebookPen,Store, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { stackServerApp } from "../../stack/server";
import { getUserDetails } from "@/actions/user.action";
import { UserButton } from "@stackframe/stack";

async function Navbar() {
    const user = stackServerApp.getUser();
    const app = stackServerApp.urls;

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
                        🖥️ Intranet ESGI 🖥️
                    </Link>
                </div>

                {/* Navbar components */}
                
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" asChild>
                        <Link href="/" className="flex items-center gap-2">
                            <HomeIcon className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" asChild>
                        <Link href="/actualites" className="flex items-center gap-2">
                            <Newspaper className="w-4 h-4" />
                            <span>Actualités</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" asChild>
                        <Link href="/formulaire" className="flex items-center gap-2">
                            <NotebookPen className="w-4 h-4" />
                            <span>Formulaire</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" asChild>
                        <Link href="/marketplace" className="flex items-center gap-2">
                            <Store className="w-4 h-4" />
                            <span>Marketplace</span>
                        </Link>
                    </Button>
                    
                    <ModeToggle/>

                    {/*Sign Button*/}
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href={app.signIn}>
                    <LogIn className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign In</span>
                  </Link>
                </Button>

                    
                    {/*Sign out Button*/}
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href={app.signOut}>
                    <LogOut className="w-4 h-4" />

                    <span className="hidden lg:inline">Sign Out</span>
                  </Link>
                </Button>

                <UserButton />

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar