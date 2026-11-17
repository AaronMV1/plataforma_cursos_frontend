import { BookOpen, House, Settings2, SquareTerminal, GraduationCap, ChartArea } from "lucide-react";


export const routes = [
    {
        title: "Inicio",
        url: "/",
        icon: House
    },
    {
        title: "Cursos",
        url: "/courses",
        icon: SquareTerminal
    },
    {
        title: "Mis Cursos",
        url: "/my-courses",
        icon: BookOpen
    },
    {
        title: "Ajustes",
        url: "/settings",
        icon: Settings2
    }
]



export const routesTeacher = [

    {
        title: "Cursos",
        url: "/teacher",
        icon: GraduationCap
    },
    {
        title: "Analíticas",
        url: "/teacher/analytics",
        icon: ChartArea
    },

]
