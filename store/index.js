import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/category'
import SettingSliceReducer from './slices/setting'

const store = configureStore({
    reducer: {
        Category    : categoryReducer,
        Setting     : SettingSliceReducer,


    },
})
  
  
export default store;