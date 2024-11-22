import { createSlice} from "@reduxjs/toolkit";


const initialState={
    users:[],
}
export const Userslice=createSlice({
    name:"Username",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.users=[...state.users,action.payload];
        }
    }

})

export const {setUsers}=Userslice.actions;
export default Userslice.reducer;