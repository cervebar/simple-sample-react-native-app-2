import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ItemT} from '../../types/ItemT';
import {client} from '../../api/api';
import {RootStateType} from '../RootStateType';
import {FetchDataT} from '../../types/FetchDataT';

export type SecondReducerStateT = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any | undefined | null; // TODO more strict
  data: ItemT[];
};

// thunk
export const fetchDataSecond = createAsyncThunk(
  'second/fetchData',
  async () => {
    const response = await client.fetchData();
    return response;
  },
);

const initialState = {
  data: [] as ItemT[],
  status: 'idle',
  error: null,
};

const secondSlice = createSlice({
  name: 'second',
  initialState,
  reducers: {
    resetSecondState: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataSecond.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchDataSecond.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const payload = action.payload as FetchDataT;
        state.data = state.data.concat(payload.data);
      })
      .addCase(fetchDataSecond.rejected, (state, action) => {
        state.status = 'failed';
        //TODO better types
        if (action.payload) {
          state.error = action.payload! as any;
        } else {
          state.error = action.error as any;
        }
      });
  },
});
export const {resetSecondState} = secondSlice.actions;
export default secondSlice.reducer;

// selectors
export const selectAllSecondData = (state: RootStateType) => state.second.data;
export const selectItemById = (state: RootStateType, id: string) =>
  state.second.data.find(item => item.id === id);
