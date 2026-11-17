

import { BellRing, LogIn, Search } from "lucide-react"
import { Show, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"


export function Navbar() {

    return (

        <header className="relative flex h-16 items-center justify-between border-b bg-white px-4">

            {/* IZQUIERDA: SIDEBAR */}
            <div className="flex items-center">
                <SidebarTrigger />
            </div>

            {/* DERECHA: ACCIONES */}
            <div className="ml-auto flex items-center gap-4">
                {/* BUSCADOR */}
                <div className="hidden w-56 items-center rounded-lg border px-2 md:flex">
                    <Search className="mr-2 h-4 w-4 shrink-0" />

                    <Input
                        type="search"
                        placeholder="Buscar..."
                        className="border-0 shadow-none"
                    />
                </div>

                {/* NOTIFICACIONES */}
                <Button variant="outline" size="icon">
                    <BellRing className="h-4 w-4" />
                </Button>

                {/* AUTENTICACIÓN */}
                <Show when="signed-out">
                    <SignInButton>
                        <Button className="bg-pink-600 hover:bg-pink-700">
                            <LogIn className="mr-2 h-4 w-4" />
                            Iniciar sesión
                        </Button>
                    </SignInButton>
                </Show>

                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>

        </header>

    )
}
