

"use client";


import { DollarSign } from "lucide-react";
import { TitleBlock } from "../TitleBlock";

import { CoursePriceProps } from "./CoursePrice.types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";


export function CoursePrice(props: CoursePriceProps) {

    const { idCourse, priceCourse } = props;
    const [ price, setPrice ] = useState<string | undefined>(
        priceCourse || "Gratis"
    );

    const onChangePrice = async() => {

        axios.patch(`/api/course/${idCourse}`, {
            price: price
        });

        toast.success("Precio del curso actualizado correctamente");

    }

    return (

        <div className="p-6 bg-white rounded-md h-fit">

            <TitleBlock title="Precio del Curso" icon={DollarSign} />

            <Select onValueChange={setPrice} defaultValue={price}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un precio del curso" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Precio del curso</SelectLabel>
                        <SelectItem value="Gratis">Gratis</SelectItem>
                        <SelectItem value="20,00">S/20,00</SelectItem>
                        <SelectItem value="30,00">S/30,00</SelectItem>
                        <SelectItem value="40,00">S/40,00</SelectItem>
                        <SelectItem value="50,00">S/50,00</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button onClick={onChangePrice} disabled={!price} className="mt-3">Guardar precio</Button>

        </div>

    )

}

