import { EMAIL_CHANGED } from "../actions/types";
const INITIAL_STATE = { email: ''};
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            state.email = action.payload;
            return state;
        default:
            return state;
    }
}