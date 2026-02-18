import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        loading: false, 
        data: null,
        reloadData:false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = true
        },
        hideLoading: (state, action) => {
            state.loading = false
        },
        setYogaData: (state, action) => {
            state.data = action.payload
        },
        setReloadData:(state,action)=>{
            state.reloadData=action.payload
        }
    }
})

export default rootSlice.reducer
export const { setLoading, hideLoading, setYogaData ,setReloadData} = rootSlice.actions