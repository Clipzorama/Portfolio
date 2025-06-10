import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import {cn} from '@/lib/utils.js'


export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // the useEffect executes one first render and keeps the theme on what the user desires.
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }

    }, []);

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            // user's theme preference persists across page reloads or future visits. Thats why we're using this.
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }



    return ( 
        <button 
            onClick={toggleTheme} 
            className={cn("fixed max-sm:hidden top-20 right-6 z-50 p-2 transition-colors duration-300",
                          "focus:outline-hidden"
            )}
        > 
            {isDarkMode ? 
            <Sun className="h-6 w-6 text-yellow-300 cursor-pointer" /> : 
            <Moon className="h-6 w-6 text-blue-900 cursor-pointer" />} 
        </button> 
        
    );
}