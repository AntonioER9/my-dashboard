import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    
    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if(state.count === 0) return;

      state.count--;
    }, 

    resetCount(state, action: PayloadAction<number>) {
      if(action.payload < 0) action.payload = 0;

      state.count = action.payload;
    }

  }
});

export const { addOne, substractOne, resetCount} = counterSlice.actions;

export default counterSlice.reducer;