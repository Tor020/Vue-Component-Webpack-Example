// https://frontstuff.io/build-your-first-vue-js-component
import Vue from 'vue';

import Rating from './components/Rating';
import style from './sass/style.scss';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<Rating :grade="3" :maxStars="5" :hasCounter="true"/>',
  components: { Rating }
})