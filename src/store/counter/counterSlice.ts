import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { //Acciones que nosotros queremos mandar a llamar desde cualquier parte de la app para que cambien el valor del state
    
  }
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;