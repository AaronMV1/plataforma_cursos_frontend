

import "./globals.css"
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Space_Grotesk } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./(routes)/(root)/components"
import { Navbar } from "@/components/Shared/Navbar"
import { Footer } from "@/components/Shared/Footer"
import { Toaster } from "@/components/ui/sonner"



const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {

    return (

        <ClerkProvider>

            <html lang="en">

                <body className={`${spaceGrotesk.className} antialiased`}>

                    {/* <Show when="signed-out">
                        <SignInButton />
                        <SignUpButton>
                        <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button>
                        </SignUpButton>
                    </Show>

                    <Show when="signed-in">
                        <UserButton />
                    </Show> */}

                    

                    <SidebarProvider>

                        <AppSidebar />

                        <div className="w-full bg-stone-100 flex flex-col min-h-screen">

                            <Navbar />
                            <main className="flex flex-col flex-1">{children}</main>
                            <Toaster />
                            <Footer />

                        </div>

                    </SidebarProvider>

                </body>

            </html>

        </ClerkProvider>

    )

}

