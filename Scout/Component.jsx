/**
 * v0 by Vercel.
 * @see https://v0.dev/t/09iAspM5nDO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-[#f4f4f4]">
      <header className="bg-[#007b43] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CompassIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">Scout Event Manager</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Register or Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email or Phone Number
              </label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email or phone number"
                className="border rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="border rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <Button className="bg-[#007b43] text-white rounded-md py-2 px-4 hover:bg-[#005a32]">Register</Button>
              <Button className="bg-[#007b43] text-white rounded-md py-2 px-4 hover:bg-[#005a32]">Sign In</Button>
            </div>
          </form>
        </div>
      </main>
      <footer className="bg-[#007b43] text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CompassIcon className="w-6 h-6" />
          <p>&copy; 2023 Scout Event Manager. All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
