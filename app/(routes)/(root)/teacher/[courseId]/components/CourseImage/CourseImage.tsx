

"use client";


import { useState } from "react";
import Image from "next/image";


import { FileImage, Pencil } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import type { CourseImageProps } from "./CourseImage.types";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";
import axios from "axios";


export function CourseImage(props: CourseImageProps) {

    const { idCourse, imageCourse } = props;

    const [isEditing, setIsEditing] = useState(false);

    const [image, setImage] = useState(imageCourse);

    const onChangeImage = async (imageUrl: string) => { 

        // console.log(imageUrl);

        try {
            axios.patch(`/api/course/${idCourse}`, { 
                imageUrl: imageUrl
            });
            toast.success("Imagen del curso actualizada correctamente");
        } catch {
            toast.error("Ha ocurrido un error al actualizar la imagen del curso");
            // console.error(error);
        }
        
    }

    return (

        <div className="p-4 rounded-lg bg-white h-fit">

            <TitleBlock title="Imagen del curso" icon={FileImage} />

            { isEditing ? (
                <div className="bg-slate-300 p-4 mt-2 rounded-lg">
                    <UploadButton 
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            onChangeImage(res[0]?.ufsUrl);
                            setImage(res[0]?.ufsUrl);
                            setIsEditing(false);
                        }}
                        onUploadError={() => {
                            toast.error("Ha ocurrido un error al subir la imagen");
                        }}
                    />
                </div>
            ) : (

                <Image src={ image || "/portada_curso.png"} alt="Imagen del Curso" className="w-full h-full rounded-md" width={500} height={250} />

            )}            

            <Button className="mt-4 hover:cursor-pointer" variant="outline" size="sm" onClick={ () => setIsEditing(!isEditing) }> <Pencil className="w-4 h-4" /> Editar Imagen</Button>

        </div>

    );

}

