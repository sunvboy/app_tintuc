import { createSlice } from '@reduxjs/toolkit'


export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    home: [
        {id: 10, type : 'grid', status: true},
        {id: 13, type : 'column', status: true},
        {id: 14, type : 'grid', status: true},
        {id: 5, type : 'grid', status: true},
    ]
  },
  reducers: {
    
  }
})

export const {} = settingSlice.actions

export default settingSlice.reducer