import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { ERRNULL, POPUPSIGNUPREJ, POPUPSIGNUPREQ, POPUPSIGNUPRES, USERCREATEREJ, USERCREATEREQ, USERCREATERES, USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES } from "../const"
import { authUser, db, provider } from "../../firebaseConfig"
import { addDoc, collection, getDocs, query } from "firebase/firestore"

const userCreateReq = () => {
    return {
        type: USERCREATEREQ
    }
}
const userCreateRes = () => {
    return {
        type: USERCREATERES
    }
}
const userCreateRej = (error) => {
    return {
        type: USERCREATEREJ,
        payload: error
    }
}

const userLoginReq = () => {
    return {
        type: USERLOGINREQ
    }
}

const userLoginRes = (img) => {
    return {
        type: USERLOGINRES,
        payload: img
    }
}

const userLoginRej = (error) => {
    return {
        type: USERLOGINREJ,
        payload: error
    }
}

const userLogoutReq = () => {
    return {
        type: USERLOGOUTREQ
    }
}
const userLogoutRes = () => {
    return {
        type: USERLOGOUTRES
    }
}
const userLogoutRej = () => {
    return {
        type: USERLOGOUTREJ
    }
}

const popUpSignUpReq = () => {
    return {
        type: POPUPSIGNUPREQ
    }
}

const popUpSignUpRes = (data) => {
    return {
        type: POPUPSIGNUPRES,
        payload: data
    }
}

const popUpSignUpRej = () => {
    return {
        type: POPUPSIGNUPREJ
    }
}

export const userCreate = (email, password) => {
    return async dispatch => {
        dispatch(userCreateReq());
        await createUserWithEmailAndPassword(authUser, email, password).then((userCredential) => {
            const user = userCredential.user;
            // console.log("user>>>>", user);
            dispatch(userCreateRes());
        }).catch((err) => {
            let error = null;
            const errorCode = err.code;
            // const errorMessage = err.message;
            console.log('err', errorCode);

            if ('auth/weak-password' == errorCode) {
                error = "Password should be at least 6 characters"
            }
            else if ('auth/email-already-in-use' == errorCode) {
                error = "email-already-in-use"
            }
            dispatch(userCreateRej(error));
        })
    }
}

export const userLogin = (email, password) => {
    return async dispatch => {
        dispatch(userLoginReq());
        await signInWithEmailAndPassword(authUser, email, password).then((userCredential) => {
            console.log('userCredential>>>>', userCredential.user);

            userCredential.user.photoURL = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
            const detail = {
                uname: res.user.displayName,
                uemail: res.user.email,
                uphoto: userCredential.user.photoURL
            }
            dispatch(userLoginRes(detail));
            // console.log("userCredential.user.photoURL", userCredential.user.photoURL);

        }).catch((err) => {

            let error = null;
            const errorCode = err.code;

            if ('auth/invalid-credential' == errorCode) {
                error = "User Does Not Exists"
            }
            dispatch(userLoginRej(error));
        })
    }
}

export const userLogout = () => {
    return async dispatch => {
        dispatch(userLogoutReq());
        await signOut(authUser).then((res) => {
            dispatch(userLogoutRes());
        }).catch((err) => {
            console.log("err", err);
            dispatch(userLogoutRej());
        })
    }
}

export const popUpSignUp = () => {
    return async dispatch => {
        dispatch(popUpSignUpReq());

        await signInWithPopup(authUser, provider).then((res) => {
            // console.log("res", res.user);
            // const user = res.user;
            // const q = query(collection(db, "users"), where("uid", "==", user.uid));
            // const docs = getDocs(q);

            // if (docs.docs.length === 0) {
            //     addDoc(collection(db, "users"), {
            //         uid: user.uid,
            //         name: user.displayName,
            //         authProvider: "google",
            //         email: user.email,
            //     });
            // }
            const detail = {
                uname: res.user.displayName,
                uemail: res.user.email,
                uphoto: res.user.photoURL
            }
            dispatch(popUpSignUpRes(detail));

        }).catch((err) => {
            // console.log("err", err);
            dispatch(popUpSignUpRej());
        })
    }
}



// for error null 
export const errNull = () => {
    return {
        type: ERRNULL
    }
}