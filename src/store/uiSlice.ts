import { createSlice } from '@reduxjs/toolkit'

type UiState = {
    menuOpen: boolean
}

const initialState: UiState = {
    menuOpen: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setMenuOpen(state, action: { payload: boolean }) {
            state.menuOpen = action.payload
        }
    }
})

export const { setMenuOpen } = uiSlice.actions
export default uiSlice.reducer
