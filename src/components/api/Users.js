import Vue from 'vue';

export const Users = {
    create: (user) => Vue.http.post('users.json', user),
    readAll: () => Vue.http.get('users.json'),
    update: (id, user) => Vue.http.put(`users/${id}.json`, user),
    delete: (id) => Vue.http.delete(`users/${id}.json`),
}
