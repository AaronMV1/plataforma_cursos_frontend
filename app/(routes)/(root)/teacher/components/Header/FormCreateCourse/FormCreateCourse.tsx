

"use client";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormCreateCourse.form";
import { toast } from "sonner";


export function FormCreateCourse() {


    const router = useRouter();

    // Inicializa el formulario y configura sus validaciones
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseName: "",
            slug: "",
        },
    });


    // Se ejecuta cuando el formulario es válido
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        console.log(values);

        try {

            const res = await axios.post("/api/course", values);
            toast.success("Curso creado exitosamente! ");
            console.log(res);

            router.push(`/teacher/${res.data.id}`);             // Redirige al usuario a la página del curso recién creado

        } catch (error) {

            toast.error("Error al crear el curso");
            console.error(error);

        }

    }


    return (

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-2">

            {/* Campo: Nombre del curso */}
            <Controller
                name="courseName"
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

                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            {/* Campo: Slug del curso */}
            <Controller
                name="slug"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="slug">
                            Slug del Curso
                        </FieldLabel>

                        <Input
                            {...field}
                            id="slug"
                            placeholder="curso-de-reactjs"
                            aria-invalid={fieldState.invalid}
                        />

                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Button type="submit">Crear Curso</Button>

        </form>

    );

}

