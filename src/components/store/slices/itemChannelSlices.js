import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
//     id: {
//         typeName: '',
//         sensorName: '',
//         baudRate: ''
//     }
// }

const updateValue = (value, newValue, name) => {
    let result = {};
    if (value === undefined) {
        result[name] = newValue;
        return result;
    }

    result = value;
    result[name] = newValue;
    return result;
}

const objectSlice = createSlice({
    name: 'channel',
    initialState: initialState,
    reducers: {
        typeChange: (state, action) => {
            state[action.payload.id] = Object.assign(state[action.payload.id] ?? {}, { typeName: action.payload.value });
        },
        bautrateChange: (state, action) => {
            state[action.payload.id] = Object.assign(state[action.payload.id] ?? {}, { baudRate: action.payload.value });
        },
        sensorChange: (state, action) => {
            state[action.payload.id] = Object.assign(state[action.payload.id] ?? {}, { sensorName: action.payload.value });
        }
    }
});

export const componentSelector = {
    getComponent: (state) => {
        console.log(state);
    }
}

export const channelActions = objectSlice.actions;

export default objectSlice;
