

"use client";


import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChapterFormProps } from "./ChapterForm.types";
import { ArrowLeft, Cog, Trash } from "lucide-react";
import { TitleBlock } from "../../../components";
import axios from "axios";
import { toast } from "sonner";
import { ChapterTitleForm } from "./ChapterTitleForm";
import { ChapterVideoForm } from "./ChapterVideoForm";


export function ChapterForm(props: ChapterFormProps) {

    const { chapter, courseId } = props;

    const router = useRouter();

    if (!chapter) return null;

    const onPublish = async (state: boolean) => {
        
        try {

            await axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
                isPublished: state
            })

            toast.success(state ? "Capítulo publicado" : "Capítulo ocultado");
            router.refresh();

        } catch (error) {

            console.error(error);
            toast.error("Error al actualizar el capítulo");

        }

    }

    const removeChapter = async () => {

        try {

            await axios.delete(`/api/course/${courseId}/chapter/${chapter.id}`);
            router.push(`/teacher/${courseId}`);
            toast.success("Capítulo eliminado correctamente");

        } catch (error) {

            console.error(error);
            toast.error("Error al eliminar el capítulo");

        }

    }

    return (

        <div>

            <div className="p-6 bg-white rounded-md">

                <Button className="mb-4" onClick={ () => router.push(`/teacher/${courseId}`) }>
                    <ArrowLeft />
                    Volver a la edición del curso
                </Button>

            </div>

            <div className="p-6 mt-6 bg-white rounded-md flex justify-between items-center">

                <TitleBlock title="Configuración del capítulo" icon={Cog} />

                <div className="gap-2 flex items-center">

                    { chapter.isPublished ? (
                        <Button variant="outline" onClick={() => onPublish(false) }>Ocultar</Button>   
                    ) : (
                        <Button onClick={() => onPublish(true) }>Publicar</Button>
                    ) }

                    <Button variant="destructive" onClick={removeChapter}> <Trash /> </Button>

                </div>                

            </div>

            <ChapterTitleForm courseId={courseId} chapter={chapter} />

            <ChapterVideoForm chapterId={chapter.id} courseId={courseId} videoUrl={chapter.videoUrl} />

        </div>

    )
}

