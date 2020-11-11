import HelloWorld from '@/components/HelloWorld'
import NextLesson from '@/components/NextLesson'
import Users from '@/components/Form'

export const routes = [
    {path: "/hello", component: HelloWorld, name: 'hello', props: true},
    {path: "/counter", component: NextLesson, name: 'counter', props: true},
    {path: "/users", component: Users},
]
