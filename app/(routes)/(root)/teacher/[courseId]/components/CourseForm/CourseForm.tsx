

"use client"


import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Cog } from "lucide-react";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { CourseFormProps } from "./CourseForm.types";
import { formSchema } from "./CourseForm.form";
import { TitleBlock } from "../TitleBlock";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";


export function CourseForm(props: CourseFormProps ) {

    const { course } = props;

     const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: course.title || "",
            slug: course.slug || "",
            description: course.description || "",
            category: course.category || "",
            level: course.level || "",
        },
    });


    // Se ejecuta cuando el formulario es válido
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        
        try {

            axios.patch(`/api/course/${course.id}`, values);
            toast.success("Curso actualizado correctamente");

        } catch (error) {

            toast.error("Error al actualizar el curso");
            console.error(error);

        }

    }
    
    return (

        <div className="p-6 bg-white rounded-md">

            <TitleBlock title="Configuración del Curso" icon={Cog} />

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Controller
                        name="title"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel htmlFor="courseName">
                                    Nombre del Curso
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id="courseName"
                                    placeholder="Curso de ReactJS"
                                    aria-invalid={fieldState.invalid}
                                />

                                <FieldDescription>
                                    Esto es lo que el usuario verá como título del curso.
                                </FieldDescription>

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                    <Controller
                        name="slug"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel htmlFor="courseSlug">
                                    URL del Curso
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id="courseSlug"
                                    placeholder="curso-de-react-js"
                                    aria-invalid={fieldState.invalid}
                                    disabled
                                />

                                <FieldDescription>
                                    Es única y no se puede modificar.
                                </FieldDescription>

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                    <Controller
                        name="category"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel htmlFor="courseCategory">
                                    Categoría del Curso
                                </FieldLabel>

                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger id="courseCategory">
                                        <SelectValue placeholder="Selecciona la categoría del curso" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Frontend">Frontend</SelectItem>
                                            <SelectItem value="Backend">Backend</SelectItem>
                                            <SelectItem value="FullStack">FullStack</SelectItem>
                                            <SelectItem value="DevOps">DevOps</SelectItem>
                                            <SelectItem value="Diseño UX/UI">Diseño UX/UI</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <FieldDescription>
                                    Selecciona la categoría del curso.
                                </FieldDescription>

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                    <Controller
                        name="level"
                        control={form.control}
                        render={({ fieldState, field }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel htmlFor="courseLevel">
                                    Nivel del Curso
                                </FieldLabel>

                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona el nivel del curso" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Principiante">Principiante</SelectItem>
                                            <SelectItem value="Intermedio">Intermedio</SelectItem>
                                            <SelectItem value="Avanzado">Avanzado</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <FieldDescription>
                                    Selecciona el nivel del curso.
                                </FieldDescription>

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                    <Controller
                        name="description"
                        control={form.control}
                        render={({ fieldState, field }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel htmlFor="courseDescription">
                                    Descripción del Curso
                                </FieldLabel>

                                <Textarea id="courseDescription" placeholder="Escribe la descripción del curso" {...field} />  

                                <FieldDescription>
                                    Escribe una descripción detallada del curso.
                                </FieldDescription>

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                </div>

                <Button type="submit">Guardar Información</Button>

            </form>

        </div>

    );

}

