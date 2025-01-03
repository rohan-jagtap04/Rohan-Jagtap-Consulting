// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Left side: brand or disclaimers */}
        <div className="space-y-1">
          <p className="font-semibold text-gray-800 dark:text-gray-100">
            augen
          </p>
          <p>Enhancement of the human experience.</p>
        </div>

        {/* Middle links */}
        <div className="flex flex-col text-right space-y-1">
          <span className="text-gray-800 dark:text-gray-100 font-semibold">
            1.0 Pages
          </span>
          <a href="/programs" className="hover:underline">
            A&rsquo;Sense
          </a>
          <a href="/programs" className="hover:underline">
            B&rsquo;Eye
          </a>
          <a href="/programs" className="hover:underline">
            A&rsquo;Neuro
          </a>
          <a href="/updates" className="hover:underline">
            Updates
          </a>
        </div>

        {/* Right side: disclaimers and region */}
        <div className="flex flex-col space-y-1 text-right">
          <div className="flex items-center space-x-3 justify-end">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <span>Italy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}