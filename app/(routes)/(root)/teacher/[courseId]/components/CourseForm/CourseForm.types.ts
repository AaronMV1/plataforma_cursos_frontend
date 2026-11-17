

import { Chapter, Course } from "@/lib/generated/prisma/client";


export type CourseFormProps = {
    course: CourseWithRelations;
}


type CourseWithRelations = Course & { chapters: Chapter[] };

