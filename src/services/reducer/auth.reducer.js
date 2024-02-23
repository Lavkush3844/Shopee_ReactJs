import { ERRNULL, POPUPSIGNUPREJ, POPUPSIGNUPREQ, POPUPSIGNUPRES, USERCREATEREJ, USERCREATEREQ, USERCREATERES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES } from "../const";

const initialState = {
    isLoading: false,
    isSignUp: false,
    isLogin: false,
    isLogout: false,
    user: null,
    err: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case USERCREATEREQ:
            return {
                ...state,
                isLoading: true
            };

        case USERCREATERES:
            return {
                ...state,
                isLoading: false,
                isSignUp: true
            };

        case USERCREATEREJ:
            return {
                ...state,
                isLoading: false,
                isSignUp: false,
                err: action.payload
            };

        case USERLOGINREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERLOGINRES:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                user: action.payload
            }


        case USERLOGINREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case USERLOGOUTREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERLOGOUTRES:
            return {
                ...state,
                isLoading: false,
                isLogout: true,
                isLogin: false,
                user: null
            }

        case USERLOGOUTREJ:
            return {
                ...state,
                isLoading: false
            }

        case POPUPSIGNUPREQ:
            return {
                ...state,
                isLoading: true
            }

        case POPUPSIGNUPRES:
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                user: action.payload,
                err: null
            }

        case POPUPSIGNUPREJ:
            return {
                ...state,
                isLoading: false,
                err: "server Error"
            }

        case ERRNULL:
            return {
                ...state,
                err: null
            }

        default: return state;
    }

} 