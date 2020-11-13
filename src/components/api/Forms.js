import Vue from 'vue';

export const Forms = {
    create: (form) => Vue.http.post('forms.json', form),
    readAll: () => Vue.http.get('forms.json'),
    update: (id, form) => Vue.http.put(`forms/${id}.json`, form),
    delete: (id) => Vue.http.delete(`forms/${id}.json`),
}
