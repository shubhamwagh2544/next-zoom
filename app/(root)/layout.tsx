import { StreamVideoProvider } from "@/providers/StreamClientProvider"
import React from "react"

export default function MeetingLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}