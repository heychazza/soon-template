import Image from "next/image"
import Logo from "@/components/Logo"

export const viewport = {
  themeColor: "#111C2C", // This changes the browser theme
}

export const metadata = {
  title: "Example — Coming Soon",
  description: "This cool new website is coming soon. Check back later!",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  icons: {
    /*
     * The favicon automatically switches based on whether the user
     * has a light or dark theme setting.
     *
     * Mainly to ensure the favicon looks nice!
     */
    icon: [
      {
        rel: "icon",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
        url: "/favicon-black.png", // Change this to a black favicon
      },
      {
        rel: "icon",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-white.png", // Change this to a white favicon
      },
    ],
  },
}

export default function Home() {
  return (
    <main>
      <div className="relative isolate z-50 mx-auto flex h-screen flex-col items-center justify-center px-5 text-center lg:w-9/12 lg:px-0 xl:w-1/2">
        <Logo className="mx-auto mb-4 w-72 fill-current text-white" />
        <div className="text-xl font-semibold uppercase leading-normal text-blurple">Coming soon</div>
        <h1 className="py-4 font-sans text-3xl font-medium text-white md:text-balance md:text-5xl md:leading-tight">{metadata.title}</h1>
        <p className="text-gray-200 mx-auto mb-2 w-10/12 font-sans text-lg leading-normal text-white">This cool new website is coming soon. Check back later!</p>
        <p className="text-gray-200 mx-auto mb-6 w-10/12 font-sans text-lg leading-normal text-white">Join our Discord to stay updated and be part of the journey!</p>

        <a href="https://discord.gg/yourdomain" className="inline-flex h-10 items-center justify-center gap-3 rounded border border-blurple/[0.15] bg-blurple/20 px-3 py-4 shadow transition-colors hover:border-blurple/[0.75]">
          <div className="flex items-center justify-center gap-3 pb-px text-white">
            <div className="text-sm font-semibold uppercase leading-none md:text-base">Join our Discord</div>
            <svg className="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
              <path
                fill="#fff"
                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
              />
            </svg>
          </div>
        </a>
      </div>

      <div className="absolute top-0 isolate h-screen w-screen bg-gradient-to-b from-[#14151c] to-[#0c0619]"></div>
      <div className="absolute top-0 z-0 h-screen w-full opacity-15">
        <Image src="/bg.webp" alt="Background Image" fill />
      </div>
    </main>
  )
}
