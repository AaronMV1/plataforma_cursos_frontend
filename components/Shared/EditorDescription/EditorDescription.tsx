

"use client";


import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { EditorDescriptionProps } from "./EditorDescription.types";


const ReactQuill = dynamic(
    () => import("react-quill-new"),
    { ssr: false }
);


export const EditorDescription = (props: EditorDescriptionProps) => {

    const { value, onChange } = props;

    return <ReactQuill theme="snow" value={value} onChange={onChange} />;
    
};