
import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <svg
      className={cn(
        "animate-pulse-subtle pointer-events-none absolute z-0 h-[300px] w-[300px] opacity-30",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
    >
      <g fill={fill}>
        <circle cx="400" cy="400" r="200" />
        <circle cx="400" cy="400" r="150" opacity="0.7" />
        <circle cx="400" cy="400" r="100" opacity="0.5" />
        <circle cx="400" cy="400" r="50" opacity="0.3" />
      </g>
    </svg>
  )
}
