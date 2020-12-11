import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [{
            firstName: 'John',
            lastName: 'doe',
            age: 19,
            class: 'SS2A',
            image: require('../assets/user.jpg')
        }],
        subjects: [{
                course: "geography",
                score: 50,
            },
            {
                course: "mathematics",
                score: 80
            },
            {
                course: "english",
                score: 88
            },
            {
                course: "physics",
                score: 92
            },
            {
                course: "biology",
                score: 33
            },
            {
                course: "music",
                score: 100
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})