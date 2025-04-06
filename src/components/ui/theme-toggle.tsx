
"use client"

import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/ThemeContext"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={cn(
        "flex w-20 h-10 p-1.5 rounded-full cursor-pointer transition-all duration-300",
        isDark 
          ? "bg-zinc-950 border border-zinc-800" 
          : "bg-white border border-zinc-200",
        className
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-7 h-7 rounded-full transition-transform duration-300",
            isDark 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-10 bg-gray-200"
          )}
        >
          {isDark ? (
            <Moon 
              className="w-5 h-5 text-white" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-5 h-5 text-gray-700" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-7 h-7 rounded-full transition-transform duration-300",
            isDark 
              ? "bg-transparent" 
              : "transform -translate-x-10"
          )}
        >
          {isDark ? (
            <Sun 
              className="w-5 h-5 text-gray-500" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-5 h-5 text-black" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  )
}
