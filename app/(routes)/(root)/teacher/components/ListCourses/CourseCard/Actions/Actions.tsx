

"use client";

import { useRouter } from "next/navigation";
import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { ActionsProps } from "./Actions.types";
import axios from "axios";
import { toast } from "sonner";


export function Actions(props: ActionsProps) {

    const { courseId } = props;

    const router = useRouter();

    const onEdit = () => {
        router.push(`/teacher/${courseId}`);
    }

    const deleteCourse = () => {
        axios.delete(`/api/course/${courseId}`);
        toast("Curso eliminado correctamente");
        
        router.refresh();
    }

    return (

        <div className="flex flex-col gap-2 items-center w-full lg:max-w-42">

            <Button className="w-2/3 hover: cursor-pointer" onClick={onEdit}> Editar <Edit className="w-4 h-4" /></Button>

            <AlertDialog>

                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-2/3 text-red-500 bg-red-100 hover:bg-red-300 cursor-pointer"> Eliminar <Trash className="w-4 h-4" /> </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>

                    <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esto borrará el curso y todo su contenido.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={deleteCourse}>Continuar</AlertDialogAction>
                    </AlertDialogFooter>

                </AlertDialogContent>

            </AlertDialog>

        </div>

    )
    

}

