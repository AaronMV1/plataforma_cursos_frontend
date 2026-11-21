

import { ChapterNameFormProps } from "./FormChapterName.types";
import { formSchema } from "./FormChapterName.form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export function FormChapterName(props: ChapterNameFormProps) {


    const { idCourse, setShowInputChapter } = props;

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        
        try {

            await axios.post(`/api/course/${idCourse}/chapter`, {
                title: values.title
            });

            toast.success("Capítulo creado correctamente");
            setShowInputChapter(false);
            router.refresh();

        } catch (error) {

            toast.error("Error al crear el capítulo");
            console.error(error);

        }

    }


    return (

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">

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

                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}

                    </Field>
                )}
            />

            <Button type="submit" disabled={!form.formState.isValid} >Crear</Button>

        </form>

    )

}

