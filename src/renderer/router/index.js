import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const landingPage = require('@/components/LandingPage');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: landingPage.default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
