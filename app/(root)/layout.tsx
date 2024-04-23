import { StreamVideoProvider } from "@/providers/StreamClientProvider"
import { Metadata } from "next";
import React from "react"

export const metadata: Metadata = {
    title: "Zoom",
    description: "Full Stack Video Conferencing App",
    icons: {
        icon: "/icons/logo.svg",
    }
};

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