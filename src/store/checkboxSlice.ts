/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const checkboxSlice = createSlice({
	name: 'checkboxState',
	initialState: {
		checkbox1: [false, '100% Indica'],
		checkbox2: [false, '100% Sativa'],
		checkbox3: [false, '>50%, Indica'],
		checkbox4: [false, '>50% Sativa'],
		checkbox5: [false, 'Indoor'],
		checkbox6: [false, 'Outdoor'],
		checkbox7: [false, 'Greenhouse'],
		checkbox8: [false, 'Light Deprivation'],
		checkbox9: [false, 'Mixed Light'],
		checkbox10: [false, 'Other'],
		checkbox11: [false, 'Flower'],
		checkbox12: [false, 'Pre-Roll Flower'],
		checkbox13: [false, 'Pre-Roll Infused'],
		checkbox14: [false, 'Pre-Roll Leaf'],
		checkbox15: [false, 'Shake'],
		checkbox16: [false, 'Smalls'],
		checkbox17: [false, 'Trim'],
		checkbox18: [false, 'Shake'],
		checkbox19: [false, 'Keef'],
		checkbox20: [false, 'Fresh Frozen'],
	},
	reducers: {
		collectCheckBoxInfo(state, actions) {
			state.checkbox1[0] = actions.payload.checkbox1[0];
			state.checkbox2[0] = actions.payload.checkbox2[0];
			state.checkbox3[0] = actions.payload.checkbox3[0];
			state.checkbox4[0] = actions.payload.checkbox4[0];
			state.checkbox5[0] = actions.payload.checkbox5[0];
			state.checkbox6[0] = actions.payload.checkbox6[0];
			state.checkbox7[0] = actions.payload.checkbox7[0];
			state.checkbox8[0] = actions.payload.checkbox8[0];
			state.checkbox9[0] = actions.payload.checkbox9[0];
			state.checkbox10[0] = actions.payload.checkbox10[0];
			state.checkbox11[0] = actions.payload.checkbox11[0];
			state.checkbox12[0] = actions.payload.checkbox12[0];
			state.checkbox13[0] = actions.payload.checkbox13[0];
			state.checkbox14[0] = actions.payload.checkbox14[0];
			state.checkbox15[0] = actions.payload.checkbox15[0];
			state.checkbox16[0] = actions.payload.checkbox16[0];
			state.checkbox17[0] = actions.payload.checkbox17[0];
			state.checkbox18[0] = actions.payload.checkbox18[0];
			state.checkbox19[0] = actions.payload.checkbox19[0];
			state.checkbox20[0] = actions.payload.checkbox20[0];
		},
	},
});
export const { collectCheckBoxInfo } = checkboxSlice.actions;
export default checkboxSlice.reducer;
