import { createSlice } from '@reduxjs/toolkit'

export const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    value: "",
  },
  reducers: {
    setFieldValue: (state, action) => {
      // Устанавливаем значение в то, что вводит пользователь
      state.value = action.payload
    },
  },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { setFieldValue } = fieldSlice.actions

export default fieldSlice.reducer