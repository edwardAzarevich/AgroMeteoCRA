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
            action.payload.forEach((value) => {
                state[value.ch_number] = value;
            });

        }

    }
});

export const componentSelector = {
    getComponent: (state) => state
}

export const channelActions = objectSlice.actions;

export default objectSlice;
