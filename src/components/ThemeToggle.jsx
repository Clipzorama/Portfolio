import { Moon, Sun } from "lucide-react"
import {cn} from '@/lib/utils.js'
import { useTheme } from '@/context/ThemeProvider';



export const ThemeToggle = () => {

    const { theme, toggleTheme } = useTheme();
    return ( 
        <button 
            onClick={toggleTheme} 
            className={cn("fixed max-sm:hidden sm:hidden md:block top-20 right-6 z-50 p-2 transition-colors duration-300",
                          "focus:outline-hidden"
            )}
        > 
            {theme === "dark" ? (
                <Sun className="h-6 w-6 text-yellow-300 cursor-pointer" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900 cursor-pointer" />
            )}
        </button> 
        
    );
}