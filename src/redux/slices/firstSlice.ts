import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ItemT} from '../../types/ItemT';
import {FirstItemMapT} from '../RootStateType';

const firstSlice = createSlice({
  name: 'first',
  initialState: {
    ids: [] as string[],
    data: {} as FirstItemMapT,
  },
  reducers: {
    addToFirstStore: (state, action: PayloadAction<ItemT>) => {
      const item = action.payload;
      const dataValue = state.data[item.id];
      if (!dataValue) {
        state.data[item.id] = item;
        state.ids.push(item.id);
      } //else already there
    },
    removeFromFirstStore: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      delete state.data[itemId];
      const newIds = state.ids.filter(id => id != itemId);
      state.ids = newIds;
    },
  },
});

export const {addToFirstStore, removeFromFirstStore} = firstSlice.actions;
export default firstSlice.reducer;
