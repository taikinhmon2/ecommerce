import {createSlice} from '@reduxjs/toolkit'

export const productCart = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('product')) || [],
    reducers: {
        addCart: (state,action) => {
            //check already exist
            const exist = state.find((x) => x.id === action.payload.id )
            if(exist) {
                exist.number = exist.number + 1
            } else {
                action.payload.number = 1
                state.push(action.payload)
            }
        },
        delCart: (state,action) => {
            let index
            const currProduct = state.find((x,i) => {
                index = i
                return x.id === action.payload
            })
            if(currProduct.number === 1) {
                state.splice(index,1)
            }else {
                currProduct.number = currProduct.number -1
            }
        }

    }
})