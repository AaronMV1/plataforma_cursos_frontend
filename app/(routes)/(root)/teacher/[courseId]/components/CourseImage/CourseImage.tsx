

"use client";


import { useState } from "react";
import Image from "next/image";

import { FileImage, Pencil } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import type { CourseImageProps } from "./CourseImage.types";
import { Button } from "@/components/ui/button";

export function CourseImage(props: CourseImageProps) {

    const { idCourse, imageCourse } = props;

    const [isEditing, setIsEditing] = useState(false);

    return (

        <div className="p-4 rounded-lg bg-white h-fit">

            <TitleBlock title="Imagen del curso" icon={FileImage} />

            { isEditing ? (
                <p>Uploadthing</p>
            ) : (
                <Image src={imageCourse || "/portada_curso.png"} alt="Imagen del Curso" className="w-full h-full rounded-md" width={500} height={250} />
            )}            

            <Button className="mt-4 hover:cursor-pointer" variant="outline" size="sm" onClick={ () => setIsEditing(!isEditing) }> <Pencil className="w-4 h-4" /> Editar Imagen</Button>

        </div>

    );

}

