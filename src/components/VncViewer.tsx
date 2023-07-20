import React, { FC, useEffect, useRef } from 'react'
import { RFB } from '@novnc/novnc'
// import RFB from 'novnc-core'
//
interface IProps {
    url: string
}

const VncViewer: FC<IProps> = ({ url }) => {
    const vncContainerRef = useRef(null)

    useEffect(() => {
        const vncContainer = vncContainerRef.current
        const rfb = new RFB(vncContainer)

        rfb.connect(url)

        return () => rfb.disconnect()
    }, [url])

    return <div ref={vncContainerRef}></div>
}

export default VncViewer
