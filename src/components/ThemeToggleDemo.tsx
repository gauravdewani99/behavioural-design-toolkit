
import { ThemeToggle } from "@/components/ui/theme-toggle"

function ThemeToggleDemo() {
  return (
    <div className="py-8 flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <ThemeToggle />
      </div>
      <p className="text-sm text-muted-foreground mt-6 max-w-md text-center">
        Toggle between light and dark mode with this interactive component
      </p>
    </div>
  )
}

export default ThemeToggleDemo
