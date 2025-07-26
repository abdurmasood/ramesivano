import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
})

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 text-center pb-8 sm:pb-12">
      <p className={`text-xs text-gray-400 ${poppins.className}`}>© 2024 Ramé Sivano. All rights reserved.</p>
    </footer>
  )
} 