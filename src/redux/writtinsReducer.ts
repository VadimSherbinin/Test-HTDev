import { IWritting } from './../types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISlice {
	writtins: IWritting[]
}

const initialState: ISlice = {
	writtins: [
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}, {
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}, {
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}, {
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		},
		{
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}, {
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}, {
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}, {
			sign: "fsdfsdf",
			text: "sdfsdf",
			tz: "Africa/Juba",
			date: {
				abbreviation: "CAT",
				client_ip: "188.243.182.218",
				datetime: "2022-07-21T21:41:43.035677+02:00",
				day_of_week: 4,
				day_of_year: 202,
				dst: false,
				dst_from: null,
				dst_offset: 0,
				dst_until: null,
				raw_offset: 7200,
				timezone: "Africa/Maputo",
				unixtime: 1658432503,
				utc_datetime: "2022-07-21T19:41:43.035677+00:00",
				utc_offset: "+02:00",
				week_number: 29,
			}
		}
	],
}

export const slice = createSlice({
	name: 'writtins',
	initialState,
	reducers: {
		addWritin(state, action: PayloadAction<IWritting>) {
			state.writtins.push(action.payload)
			localStorage.setItem('ключ', 'значение')
			console.log(action.payload);
		}
	}
})

export const { addWritin } = slice.actions
export default slice.reducer