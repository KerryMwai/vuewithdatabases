import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/jobs/NotFound.vue'
import Comments from "../views/jobs/Comments.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component:Jobs
  },
  {
    path:"/jobs/:id",
    name:"jobDetails",
    component:JobDetails,
    props:true
  },
  {
    path:"/comments",
    name:"comments",
    component:Comments
  },
  // Redirects
  {
    path:"/all-jobs",
    redirect:"/jobs"
  },
  // Catch all 404
  {
    path:"/:catchAll(.*)",
    name:"NotFound",
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
