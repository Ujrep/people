import 'common/base.scss';

import Vue from 'vue';

import Home from 'components/pages/home.vue';

const App = new Vue({
  el: '#app',
  components: {
    'home': Home
  }
});
