"use client"

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import useGetCallById from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs"
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

export default function Meeting({ params: { id } }: {
    params: {
        id: string
    }
}) {

    const { user, isLoaded } = useUser();
    const [isSetUpComplete, setIsSetUpComplete] = useState(false);
    const { call, isCallLoading } = useGetCallById(id);

    if (!isLoaded || isCallLoading) return <Loader />

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme as="main">
                    {
                        !isSetUpComplete ? (
                            <MeetingSetup setIsSetUpComplete={setIsSetUpComplete} />
                        ) : (
                            <MeetingRoom />
                        )
                    }
                </StreamTheme>
            </StreamCall>
        </main>
    )
}