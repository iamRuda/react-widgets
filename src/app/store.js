import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterReducer'
import fieldReducer from '../features/field/fieldReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    field: fieldReducer,
  },
})