import HelloWorld from '@/components/HelloWorld'
import NextLesson from '@/components/NextLesson'
import Users from '@/components/Users'
import NewUser from '@/components/NewUser'
import User from '@/components/User'
import EditUser from '@/components/EditUser'
import CarsVuex from '@/components/CarsVuex'

export const routes = [
    {path: '*', component: HelloWorld, props: {msg: 'BAD URL'}},
    {path: "/hello", component: HelloWorld, name: 'hello', props: true},
    {path: "/counter", component: NextLesson, name: 'counter', props: true},
    {path: "/users", component: Users, children: [
            {path: "new", component: NewUser},
        ]},
    {path: "/users/:id", component: User, name: 'user', props: true, children: [
            {path: "edit", component: EditUser, name: 'edit', props: true},
        ]},
    {path: "/cars", component: CarsVuex}
]
