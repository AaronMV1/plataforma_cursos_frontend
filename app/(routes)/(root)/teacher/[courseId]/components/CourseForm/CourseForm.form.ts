

//  Esquema de validación para el formulario de creación de curso
import { z } from "zod";


// Esquema de validación del formulario
export const formSchema = z.object({
    title: z.string().min(2).max(200),
    slug: z.string().min(2).max(200),
    category: z.string().min(2).max(200),
    level: z.string().min(2).max(200),
    description: z.string().min(2).max(500).optional().or(z.literal("")),
});

