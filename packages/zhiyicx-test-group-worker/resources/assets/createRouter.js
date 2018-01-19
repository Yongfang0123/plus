import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from './components/pages/Projects';
import Setting from './components/pages/Setting';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import ProjectGeneral from './components/modules/project/General';

Vue.use(VueRouter);

export default new VueRouter({
  base: '/test-group-worker/',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/projects' },
    { path: '/projects', component: Projects },
    { path: '/setting', component: Setting },
    { path: '/new-project', component: NewProject },
    {
      path: '/projects/:id',
      component: Project,
      children: [
        { path: '', component: ProjectGeneral },
        { path: 'issues', component: ProjectGeneral },
        { path: 'tasks', component: ProjectGeneral },
        { path: 'setting', component: ProjectGeneral },
      ]
    },
  ]
});