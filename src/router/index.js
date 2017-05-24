import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Question1 from '@/components/Question1'
import Question2 from '@/components/Question2'
import Question3 from '@/components/Question3'
import Question4 from '@/components/Question4'
import Question5 from '@/components/Question5'
import Conclusion from '@/components/Conclusion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/question1',
      name: 'Question1',
      component: Question1
    },
    {
      path: '/question2',
      name: 'Question2',
      component: Question2
    },
    {
      path: '/question3',
      name: 'Question3',
      component: Question3
    },
    {
      path: '/question4',
      name: 'Question4',
      component: Question4
    },
    {
      path: '/question5',
      name: 'Question5',
      component: Question5
    },
    {
      path: '/conclusion',
      name: 'Conclusion',
      component: Conclusion
    }
  ]
})
