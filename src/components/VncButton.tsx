import React, { FC } from 'react'

interface IProps {
    ipAddress: string
}

const VncButton: FC<IProps> = ({ ipAddress }) => {
    const url = `https://novnc.com/noVNC/vnc.html?autoconnect=true&host=${ipAddress}&port=5900&password=40552169`

    const handleButtonClick = () => {
        window.open(url, '_blank')
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Открыть VNC</button>
        </div>
    )
}

export default VncButton
