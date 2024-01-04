import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filters: {
    search:'',
    category: '',
    sort: '',
  },
}

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterBySearch: (state, action) => {
      state.filters.search = action.payload
    },
    filterByCategory : (state, action) => {
      state.filters.category = action.payload
    },
    filterSortBy : (state, action) => {
      state.filters.sort = action.payload
    },
  },
})

export const { filterBySearch, filterByCategory, filterSortBy } = filterSlice.actions

export default filterSlice

