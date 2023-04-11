import {createSlice} from "@reduxjs/toolkit"

export const ContactSlice = createSlice({
    name: 'contacts',
    initialState:{
        contacts:[],
        filter:'',
    },
    reducers:{
        addContacts(state, action){
            return {
                ...state,
                contacts:[...state.contacts, action.payload]
            }
        },
        removeContacts(state, action){
            return {
                ...state, 
                contacts: state.contacts.filter(item =>item.id !==action.payload)
            }
        },
        filterContacts(state, action){
            return {
                ...state,
                filter: action.payload,
              };
        }

    }
})
export const {addContacts, removeContacts, filterContacts} = ContactSlice.actions
export default ContactSlice.reducer