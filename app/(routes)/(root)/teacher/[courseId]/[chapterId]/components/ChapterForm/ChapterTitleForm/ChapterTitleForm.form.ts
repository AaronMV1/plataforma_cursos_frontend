

//  Esquema de validación para el formulario de creación de curso
import { z } from "zod";


// Esquema de validación del formulario
export const formSchema = z.object({
    title: z.string().min(2).max(200),
    description: z.string().min(2).max(500),
    isFree: z.boolean().default(false).optional()
});

