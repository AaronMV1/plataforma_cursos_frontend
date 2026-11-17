

import { TitleBlockProps } from "./TitleBlock.types";


export function TitleBlock(props: TitleBlockProps) {

    const { title, icon: Icon } = props;



    return (
        <div className="flex items-center mb-6 gap-4">
            <div className="p-2 rounded-full bg-violet-400">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    )

}

