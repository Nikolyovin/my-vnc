import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from './table/table.slice'

export const store = configureStore({
    reducer: {
        table: tableReducer
    }
})

//чтобы передать типы в useAppSelector
export type RootState = ReturnType<typeof store.getState>
