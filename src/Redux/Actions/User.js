import { LOGIN_USER, LOGOUT_USER } from './Types'

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        user: user
    }
}
export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    }
}