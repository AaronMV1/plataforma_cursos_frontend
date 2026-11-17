

//  Esquema de validación para el formulario de creación de curso


import { z } from "zod";


// Esquema de validación del formulario
export const formSchema = z.object({
    courseName: z.string().min(2).max(200),
    slug: z.string().min(2).max(200),
});

