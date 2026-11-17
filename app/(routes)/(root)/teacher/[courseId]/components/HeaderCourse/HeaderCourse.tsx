

"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import type { HeaderCourseProps } from "./HeaderCourse.types";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, MoveLeft, Trash } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";


export function HeaderCourse(props: HeaderCourseProps) {


    const { idCourse, isPublished } = props;
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const onPublish = async (state: boolean) => {

        try {

            axios.patch(`/api/course/${idCourse}`, { 
                isPublished: state 
            });

            toast(state ? "Curso publicado" : "Curso oculto");
            router.refresh();

        } catch {
            toast("Hubo un error al actualizar el estado del curso");
        }
        
        setIsLoading(false);

    }


    const removeCourse = async () => {

        axios.delete(`/api/course/${idCourse}`);
        toast("Curso eliminado correctamente");
        router.push("/teacher");

    }


    return (

        <div className="mb-4">

            <div className="flex flex-col md:flex-row justify-between items-center">

                <Button onClick={() => router.push("/teacher")} className="hover: cursor-pointer">
                    <MoveLeft /> Volver a cursos
                </Button>

                <div className="gap-2 flex items-center ">

                    {isPublished ? (
                        <Button onClick={() => onPublish(false)} disabled={isLoading} variant="outline" className="hover: cursor-pointer">
                            Despublicar <EyeOff /> 
                        </Button>
                    ) : (
                        <Button onClick={() => onPublish(true)} disabled={isLoading} className="hover: cursor-pointer">
                            Publicar <Eye /> 
                        </Button>
                    )}

                    <Button variant="destructive" onClick={() => removeCourse()} className="hover: cursor-pointer">
                        <Trash /> 
                    </Button>

                </div>

            </div>
            
        </div>

    );

}

