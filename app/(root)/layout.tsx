import React from "react"

export default function MeetingLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
}