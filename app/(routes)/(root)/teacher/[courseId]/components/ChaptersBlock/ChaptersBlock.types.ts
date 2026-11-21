

import { Chapter } from "@/lib/generated/prisma/client";


export type ChaptersBlockProps = {
    idCourse: string;
    chapters: Chapter[] | null;             // Puede ser null si no hay capítulos disponibles
};

