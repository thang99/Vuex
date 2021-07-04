import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth.js";
import todos from "./modules/todos.js";

Vue.use(Vuex)


// ================================= KHI CHƯA DÙNG MODULES =================================

const store = new Vuex.Store({
    state: {
        // fix todos
        // todos: [
        //     { id: 1, title: "Do homeworks", completed: true },
        //     { id: 2, title: "Play sports", completed: false },
        //     { id: 3, title: "Watch TV", completed: true },
        // ],

        // fetch api
        todos: [],
        isAuthenticated: false
    },

    getters: {
        doneTodos: state => state.todos.filter(todo => todo.completed),

        // cách 1
        // progress: state => {
        //     const doneTodos = state.todos.filter(todo => todo.completed);
        //     return Math.round(doneTodos.length / state.todos.length * 100)
        // }


        // cách 2: có thể dùng Getters đã có
        progress: (state, getters) => {
            const doneTodos = getters.doneTodos;
            return Math.round(doneTodos.length / state.todos.length * 100)

        }
    },

    mutations: {
        TOGGLE_AUTH(state) {
            state.isAuthenticated = !state.isAuthenticated
        },
        MARK_COMPLETED(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed;
                }
                // return todo;
            })
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo);
        },
        SET_TODOS(state, todos) {
            state.todos = todos;
        }
    },

    actions: {
        // cách 1
        // deleteTodo(context, todoId) {
        //     context.commit('DELETE_TODO', todoId); // gọi mutations DELETE_TODO
        // }

        // cách 2

        // đồng bộ
        // deleteTodo({ commit }, todoId) {
        //     commit('DELETE_TODO', todoId); // gọi mutations DELETE_TODO
        // },
        // addTodo({ commit }, newTodo) {
        //     commit('ADD_TODO', newTodo); // gọi mutations ADD_TODO
        // },

        // bất đồng bộ
        async deleteTodo({ commit }, todoId) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                commit('DELETE_TODO', todoId); // gọi mutations DELETE_TODO
            } catch (error) {
                console.log(error);
            }
        },
        async addTodo({ commit }, newTodo) {
            try {
                await axios.post('https://jsonplaceholder.typicode.com/todos', {
                    newTodo
                })
                commit('ADD_TODO', newTodo); // gọi mutations ADD_TODO
            } catch (error) {
                console.log(error);
            }
        },
        async getTodos({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                commit('SET_TODOS', response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }

})

export default store;


// ====================================== KHI DÙNG MODULES =============================================

// const store = new Vuex.Store({
//     modules: {
//         auth,
//         todos
//     }
// })

// export default store;


// mutations : đồng bộ
// actions : bất đồng bộ, là trung gian giữa người dùng và mutations