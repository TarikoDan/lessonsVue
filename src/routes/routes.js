import Hello from '@/components/Hello'
import Counter from '@/components/Counter'
import Users from '@/components/Users/Users'
import NewUser from '@/components/Users/NewUser'
import User from '@/components/Users/User'
import EditUser from '@/components/Users/EditUser'
import CarsVuex from '@/components/CarsVuex'

export const routes = [
    {path: '*', component: Hello, props: {msg: 'BAD URL'}},
    {path: '/hello', component: Hello, name: 'hello', props: true},
    {path: "/counter", component: Counter, name: 'counter', props: true},
    {path: "/users", component: Users, children: [
            {path: "new", component: NewUser},
        ]},
    {path: "/users/:id", component: User, name: 'user', props: true, children: [
            {path: "edit", component: EditUser, name: 'edit', props: true},
        ]},
    {path: "/cars", component: CarsVuex}
]
