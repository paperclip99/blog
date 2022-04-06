export const postsModule = {
    state: () => ({
        post: {
            title: localStorage.getItem('title'),
            body: localStorage.getItem('body'),
            author: localStorage.getItem('author'),
        },
    }),
    getters: {
        getPost(state) {
            return state.post
        }
    },
    mutations: {
        setPost(state, post) {
            state.post = post
            localStorage.setItem('title', post.title)
            localStorage.setItem('body', post.body)
            localStorage.setItem('author', post.author)
        },
        deletePost(state) {
            localStorage.removeItem('title')
            localStorage.removeItem('body')
            localStorage.removeItem('author')
            state.post = {}
        }
    }
}