import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Country, Extra } from "types";
export const loadCountries = createAsyncThunk <
{data:  Country[]},
  undefined,

{
  extra: Extra,
    state: { countries: CountrySlice }  
  rejectValue: string
}
  > (
  "@@countries/load-countries",
    async (_, { extra: { client, api } }) => {
   
    return client.get(api.ALL_COUNTRIES);
  },
  {
    condition: (_, { getState }) => {
      const {
        countries: { status },
      } = getState();

      if (status === "loading") {
        return false;
      }
    },
  }
);
type CountrySlice = {
  status: Status,
  error: string | null,
  list: Country[],
};

const initialState: CountrySlice = {
  status: "idle",
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "reject";
        state.error = action.payload || "Cannot load data";
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      });
  },
});

export const countryReducer = countrySlice.reducer;

// selectors
// export const selectCountriesInfo = (state) => ({
//   status: state.countries.status,
//   error: state.countries.error,
//   qty: state.countries.list.length
// })

// export const selectAllCountries = (state) => state.countries.list;
// export const selectVisibleCountries = (state, {search = '', region = ''}) => {
//   return state.countries.list.filter(
//     country => (
//       country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
//     )
//   )
// }
