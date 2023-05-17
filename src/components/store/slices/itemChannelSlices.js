import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    typeName: '',
    sensorName: '',
    baudRate: ''
}

const objectSlice = createSlice({
    name: 'channel',
    initialState: initialState,
    reducers: {
        typeChange: (state, action) => {
            state.typeName = action.payload;
        },
        bautrateChange: (state, action) => {
            state.baudRate = action.payload
        },
        sensorChange: (state, action) => {
            state.sensorName = action.payload
        }
    }
})

export const componentSelector = {
    getComponent: (state) => {
        console.log(state)
    }
}

//export const channelActions  = objectSlice.actions;
export const { typeChange, bautrateChange, sensorChange } = objectSlice.actions;

export default objectSlice;

