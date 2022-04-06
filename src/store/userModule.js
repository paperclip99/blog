export const userModule = {
    state: () => ({
        user: {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password'),
            email: localStorage.getItem('email') 
        },
        isActive: false
    }),
    getters: {
        getUser(state) {
            return state.user
        },
        getIsActive(state) {
            return state.isActive
        }
    },
    mutations: {
        setIsActive(state, bool) {
            state.isActive = bool
        },
        setUser(state, user) {
            state.user = user
            localStorage.setItem('username', user.username)
            localStorage.setItem('password', user.password)
            localStorage.setItem('email', user.email)
        }
    }
}