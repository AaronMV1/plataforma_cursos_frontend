

"use client"


import { ChapterTitleFormProps } from "./ChapterTitleForm.types";
import { formSchema } from "./ChapterTitleForm.form";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { EditorDescription } from "@/components/Shared";
import axios from "axios";
import { toast } from "sonner";


export function ChapterTitleForm(props: ChapterTitleFormProps) {

    const { courseId, chapter } = props;

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: chapter.title || "",
            description: chapter.description || "",
            isFree: chapter.isFree || false
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        try {

            await axios.patch(`/api/course/${courseId}/chapter/${chapter.id}`, {
                title: values.title,
                description: values.description,
                isFree: values.isFree
            })

            toast.success("Capítulo actualizado correctamente");
            router.refresh();


        } catch (error) {

            console.error(error);
            toast.error("Error al actualizar el capítulo");

        }

    }
    

    return (

        <div className="p-6 rounded-md bg-white mt-6">

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            
                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>

                            <FieldLabel htmlFor="title">Título del capítulo</FieldLabel>

                            <Input
                                {...field}
                                id="title"
                                placeholder="Ej: Introducción a la programación"
                                aria-invalid={fieldState.invalid}
                            />

                        </Field>
                    )}
                />

                <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (

                        <Field data-invalid={fieldState.invalid}>

                            <FieldLabel htmlFor="description">Título del capítulo</FieldLabel>

                            <EditorDescription
                                {...field}
                            />


                        </Field>
                    )}
                />

                
                <Controller
                    name="isFree"
                    control={form.control}
                    render={({ field }) => (

                        <Field
                            orientation="horizontal"
                            className="flex items-start gap-3"
                        >
                            <Checkbox
                                id="isFree"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="shrink-0 mt-1"
                            />

                            <div className="flex flex-col gap-1">
                                
                                <FieldLabel htmlFor="isFree">Capítulo público</FieldLabel>

                                <FieldDescription>Si quieres que este capítulo sea público, activa esta opción.</FieldDescription>

                            </div>

                        </Field>

                    )}

                />

                <div></div>

                <Button type="submit">Guardar</Button>

            </form>

        </div>

    )
    

}

