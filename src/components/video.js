import React, { useEffect } from 'react'
import * as TwilioVideo from "twilio-video"

const Video = ({ token }) => {
    useEffect(() => {
        console.info('token', token)
        /*
        TwilioVideo.connect(token, {
            // video: true, audio: true, name: "SVA"
            name: 'prayer-meeting-room'
        }).then(
            room => {
                console.log("Successfully joined room", room)
            })
        */
    }, [token])

    return (
        <div>
            Video
        </div>
    )
}

export default Video;