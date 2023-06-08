
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      console.log(actions.payload);
      const payload = actions.payload;
      if (payload.name && payload.age && payload.score) {
        state.data.push({ ...payload, id: Date.now() });

      }
    },
    deleteUser: (state, actions) => { 
      const id = actions.payload;
      if (id) {
        const filterData = state.data.filter((user) => user.id !== id);
        state.data= filterData;
      }
    }
  },
});
 
export const { addUser, deleteUser } = counterSlice.actions;

export default counterSlice.reducer;

