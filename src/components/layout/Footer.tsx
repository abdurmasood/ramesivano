import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
})

export function Footer() {
  return (
    <footer className="mt-12 sm:mt-20 text-center">
      <p className={`text-xs text-gray-400 ${poppins.className}`}>© 2024 Ramé Sivano. All rights reserved.</p>
    </footer>
  )
} 