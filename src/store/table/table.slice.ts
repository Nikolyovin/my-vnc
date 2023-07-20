import { Tabs } from '../../common'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialStateType {
    activeTab: Tabs.DISPATCHERS | Tabs.SKUD | Tabs.TSON
}

const initialState: InitialStateType = {
    activeTab: Tabs.SKUD
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        changeActiveTab(state, action: PayloadAction<Tabs.DISPATCHERS | Tabs.SKUD | Tabs.TSON>) {
            state.activeTab = action.payload
        }
    }
})

export const tableActions = tableSlice.actions
export const tableReducer = tableSlice.reducer
