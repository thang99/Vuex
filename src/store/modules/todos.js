import axios from "axios";

const state = {
    todos: [],
}

const getters = {
    doneTodos: state => state.todos.filter(todo => todo.completed),
    progress: (state, getters) => {
        const doneTodos = getters.doneTodos;
        return Math.round(doneTodos.length / state.todos.length * 100)

    }
}

const actions = {
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

const mutations = {
    MARK_COMPLETED(state, todoId) {
        state.todos.map(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
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
}


export default {
    state,
    getters,
    actions,
    mutations
}