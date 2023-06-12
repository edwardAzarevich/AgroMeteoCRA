import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};
//     id: {
//         typeName: '',
//         sensorName: '',
//         baudRate: ''
//     }
// }

const objectSlice = createSlice({
    name: 'channel',
    initialState: initialState,
    reducers: {
        typeChange: (state, action) => {
            const id = action.payload.id;
            const value = action.payload.value;
            state[id] = Object.assign(state[id] ?? {}, { ch_number: id, phy: value, });
        },
        bautrateChange: (state, action) => {
            const id = action.payload.id;
            const value = action.payload.value;
            state[id] = Object.assign(state[id] ?? {}, { baudrate: value });
        },
        sensorChange: (state, action) => {
            const id = action.payload.id;
            const value = action.payload.value;
            state[id] = Object.assign(state[id] ?? {}, { dev: value });
        },
        allParams: (state, action) => {
            // const id = action.payload[0].ch_number;
            // const allParams = action.payload[0];
            // console.log(action.payload);
            action.payload.forEach((value, id) => {
                state[id] = value;
                console.log(state[id]);
            });
            // state[id] = Object.assign(state[id] ?? {}, allParams)

        }
    }
});

export const componentSelector = {
    getComponent: (state) => state
}

export const channelActions = objectSlice.actions;

export default objectSlice;
