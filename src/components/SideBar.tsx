import React, { useState } from 'react'
import { IdcardOutlined, TeamOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Tabs } from '../common'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

const SideBar = () => {
    // const [active, setActive] = useState<string>(Tabs.SKUD)
    const { activeTab } = useAppSelector(state => state.table)
    const { changeActiveTab } = useActions()

    const styleTabItem: (n: string) => string = n => (activeTab != n ? 'tab-item' : 'tab-item tab-item_active')

    return (
        <aside className='bg-slate-800 w-[15dvw] h-[100dvh] px-14 py-20'>
            <p className='text-3xl mb-40 font-semibold text-teal-400'>Отдел 169</p>
            <div className='tab-list'>
                <div onClick={() => changeActiveTab(Tabs.SKUD)} id='1' className={styleTabItem(Tabs.SKUD)}>
                    <IdcardOutlined className='tab-icon' />
                    <span>СКУД</span>
                </div>
                <div onClick={() => changeActiveTab(Tabs.TSON)} id='2' className={styleTabItem(Tabs.TSON)}>
                    <VideoCameraOutlined className='tab-icon' />
                    <span className=''>ТСОН</span>
                </div>
                <div
                    onClick={() => changeActiveTab(Tabs.DISPATCHERS)}
                    id='3'
                    className={styleTabItem(Tabs.DISPATCHERS)}
                >
                    <TeamOutlined className='tab-icon' />
                    <span>Диспетчера</span>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
