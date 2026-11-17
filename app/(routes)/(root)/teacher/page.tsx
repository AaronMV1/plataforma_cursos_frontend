

import { currentUser } from "@clerk/nextjs/server"
import { Header } from "./components"
import prisma from "@/lib/prisma"
import ListCourses from "./components/ListCourses"


export default async function TeacherPage() {

    // Obtiene los datos del usuario autenticado en Clerk (o null si no ha iniciado sesión).
    const user = await currentUser()
    
    console.log(user)

    if (!user) {
        return <p>Not signed in</p>
    }

    const courses = await prisma.course.findMany({
        where: {
            userId: user.id
        }
    })

    console.log(courses)

    return (

        <div>
            <Header />
            <ListCourses courses={courses} />
        </div>

    )

}

