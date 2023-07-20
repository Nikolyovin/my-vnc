import { Space, Table } from 'antd'
import React, { useState } from 'react'
import { DATA_DISPATCHERS, DATA_SKUD, DATA_TSON } from '../common/data'
import { ITableData } from '../models'
import { useAppSelector } from '../hooks/redux'
import { Tabs } from '../common'
import Column from 'antd/es/table/Column'
import axios from 'axios'
import VncViewer from './VncViewer'

const TheTable = () => {
    const { activeTab } = useAppSelector(state => state.table)

    const [connected, setConnected] = useState(false)

    const handleConnect = async () => {
        //     try {
        //         const response = await axios.get('192.168.62.187')
        //     } catch (err) {
        //     }
    }

    const columns = [
        {
            title: 'Имя компьютера',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'DNS',
            dataIndex: 'dns',
            key: 'dns'
        },
        {
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip'
        },
        {
            title: 'Номер',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => (
                <Space size='middle'>
                    <a onClick={handleConnect} className='text-teal-400 text-lg'>
                        Управление
                    </a>
                    <a className='text-teal-400 text-lg'>Просмотр</a>
                </Space>
            )
        }
    ]

    const currentTableData: () => ITableData[] = () => {
        switch (activeTab) {
            case Tabs.SKUD:
                return DATA_SKUD
            case Tabs.TSON:
                return DATA_TSON
            case Tabs.DISPATCHERS:
                return DATA_DISPATCHERS
            default:
                return []
        }
    }

    return (
        <div className='flex-1 p-10'>
            <h1 className='text-5xl font-semibold text-teal-400 mb-20'>Система удаленного управления</h1>
            <Table
                className='table-striped-rows'
                pagination={false}
                // showHeader={false}
                // rowClassName={'table-border-bottom'}
                columns={columns}
                dataSource={currentTableData()}
            />
            {/* <VncViewer url={'192.168.62.187:5900'} /> */}
        </div>
    )
}

export default TheTable
