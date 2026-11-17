

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FormCreateCourse } from "./FormCreateCourse"


export default function Header() {

    return (

        <div className="mx-6 my-6 rounded-lg border bg-white">

            <div className="flex items-center justify-between px-3 py-2">

                <h1 className="text-1xl font-bold uppercase">Modo Docente</h1>

                <Dialog>

                    <DialogTrigger asChild>
                        <Button className="hover: cursor-pointer"> Crear Curso <Plus /> </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Crea tu Curso</DialogTitle>
                            <FormCreateCourse />
                        </DialogHeader>
                    </DialogContent>

                </Dialog>

            </div>

        </div>

    )

}

