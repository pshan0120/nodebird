import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// (이전 상태, 액션) => 다음 상태
const rootReducer = combineReducers({
    // index가 있어야 서버사이드 렌더링을 위한 HYDRATE 가 작동하기 때문에 만들어 주는 리듀서
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;
