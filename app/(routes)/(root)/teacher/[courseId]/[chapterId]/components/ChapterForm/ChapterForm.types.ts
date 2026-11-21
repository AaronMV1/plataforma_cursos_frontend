import { Chapter } from "@/lib/generated/prisma/client";


export type ChapterFormProps = {
   
    chapter: Chapter | null;
    courseId: string;

};

