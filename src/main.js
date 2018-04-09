// https://frontstuff.io/build-your-first-vue-js-component
// https://codesandbox.io/s/38k1y8x375
import Vue from 'vue';

import Rating from './components/Rating';
import style from './sass/style.scss';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: `
  <div>
  <Rating :grade="3" :maxStars="5" :hasCounter="true"/>
  <Rating :grade="4" :maxStars="10"/>
  <Rating :grade="0" :maxStars="1" :hasCounter="true"/>
  </div>
`,  components: { Rating }
})