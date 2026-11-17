import React from "react"

export default function Authlayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-full">
            <div className="flex w-full flex-col items-center justify-center">
                <div className="absolute top-0 left-0 z-[-1] h-full w-full bg-linear-to-r from-amber-200 to-yellow-400" />
                {children}
            </div>
        </div>
    )
}
