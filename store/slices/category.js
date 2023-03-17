import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import CategoryService from '../../services/category'

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (data, thunkAPI) => {
      const response = await CategoryService.getCategory(data)
      return response.data
    }
  )
export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: []
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })
        .addCase(fetchCategory.rejected, (state, action) => {
            console.log(action.error.message)
        })
  },
})

export const {} = categorySlice.actions

export default categorySlice.reducer