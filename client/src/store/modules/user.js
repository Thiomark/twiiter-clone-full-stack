const state = {
    user: {
        "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        "handle": "thiomark",
        "email": "itumeleng@thiomark.com",
        "name": "Itumeleng",
        "avator": "https://cdn.quasar.dev/img/avatar2.jpg",
        "following": 0,
        "followers": 0,
        "password": "123456",
        "bio": "just testing the app",
        "is_verfied": true,
        "date": "2021-04-01T19:52:48.957Z"
    },
    isLoggedIn: true,
    userTwoots: [],
    twootsWithMedia: [],
    likedTwoots: [],
    userLoading: true,
    twootsLoading: false,
}

const mutations = {
    getLoggedUser(state, payload){
        state.userLoading = false
        state.user = payload
    }, 
    getUserTwoots(state, payload){
        state.twootsLoading = false
        state.userTwoots = payload
    }, 
    getLikedTwoots(state, payload){
        state.twootsLoading = false
        state.likedTwoots = payload
    }, 
    getTwootsWithMedia(state){
        state.twootsLoading = true
        state.twootsWithMedia = state.userTwoots.filter(twoot => twoot.twootImage)
        state.twootsLoading = false
    }, 
    twootsLoading(state){
        state.twootsLoading = true
    }, 

}

const actions = {
    getLoggedUser({commit}){
        const user = {
            name: 'Thio Mark',
            username: 'thiomark',
            bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse rem placeat perspiciatis consequuntur aperiam? Molestias magni enim nulla eveniet, beatae numquam ex, repellat soluta ipsa assumenda corrupti, consectetur eligendi quidem.',
            followers: 200,
            following: 123,
        }
        setTimeout(() => {
            commit('getLoggedUser', user)
        }, 8000)   
    },
    getUserTwoots({commit}){
        commit('twootsLoading')
        let twoots = [
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                id: '1615047624085',
                name: 'Itumeleng', 
                handle: 'thiomark', 
                liked: true,
                date: 1615047624085, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi quaerat cum, iure cupiditate quam quos nostrum laudantium. Fugiat, eius error sunt, quam, quod quis nemo aut illo perferendis incidunt quidem consequatur. Debitis, enim?'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'Elon', 
                liked: true,
                handle: 'elonmusk', 
                id: '1615047750358',
                twootImage: 'https://placeimg.com/500/300/nature',
                date: 1615047750358, 
                twoot: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'jonny', 
                liked: false,
                handle: 'jonny3234', 
                id: '1615047761814',
                date: 1615047761814, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex!'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                id: '161504762408jhg5',
                name: 'Itumeleng', 
                liked: false,
                handle: 'thiomark', 
                date: 1615047624085, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi quaerat cum, iure cupiditate quam quos nostrum laudantium. Fugiat, eius error sunt, quam, quod quis nemo aut illo perferendis incidunt quidem consequatur. Debitis, enim?'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'Elon', 
                liked: true,
                handle: 'elonmusk', 
                id: '16150477503jhgf58',
                date: 1615047750358, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'jonny', 
                liked: false,
                handle: 'jonny3234', 
                id: '161504776181jhgf4',
                date: 1615047761814, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex!'
            }
        ]
        setTimeout(() => {
            commit('getUserTwoots', twoots)
        }, 4000)
    },
    getLikedTwoots({commit}){
        commit('twootsLoading', true)
        const twoots = [
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                id: '1615047624085',
                name: 'Itumeleng', 
                handle: 'thiomark', 
                liked: true,
                date: 1615047624085, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi quaerat cum, iure cupiditate quam quos nostrum laudantium. Fugiat, eius error sunt, quam, quod quis nemo aut illo perferendis incidunt quidem consequatur. Debitis, enim?'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'Elon', 
                liked: true,
                handle: 'elonmusk', 
                id: '1615047750358',
                twootImage: 'https://placeimg.com/500/300/nature',
                date: 1615047750358, 
                twoot: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'Elon', 
                liked: true,
                handle: 'elonmusk', 
                id: '16150477503jhgf58',
                date: 1615047750358, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi'
            }
        ]
        setTimeout(() => {
            commit('getLikedTwoots', twoots)
        }, 4000)
    }
}

const getters = {
    user: state => state.user,
    isLoggedIn: state => state.isLoggedIn,
    userTwoots: state => state.userTwoots,
    twootsWithMedia: state => state.twootsWithMedia,
    twootsLoading: state => state.twootsLoading,
    userLoading: state => state.userLoading,
    likedTwoots: state => state.likedTwoots,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}