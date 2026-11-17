

import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function NotFound() {

    return (

        <div className="flex flex-col items-center justify-center flex-1 text-center">

            <h1 className="text-4xl font-bold">404</h1>

            <p className="mt-2 text-lg text-slate-500">Página no encontrada.</p>

            <Button asChild>
                <Link href="/" className="mt-4">Volver al Inicio</Link>
            </Button>

        </div>

    )

}

