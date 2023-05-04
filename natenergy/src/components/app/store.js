import { configureStore } from '@reduxjs/toolkit';
import userReducer from './stores/userStore';
import discusionReducer from './stores/discusionStore';

export default configureStore({
    reducer: {
        userData: userReducer,
        discusionsData: discusionReducer
    }
})