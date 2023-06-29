import {configureStore} from '@reduxjs/toolkit'
import { productCart } from './productSlice'
export const store = configureStore(
    {
        reducer: {
            productCart: productCart.reducer
        }
    }
)