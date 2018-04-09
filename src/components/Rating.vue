<template>
  <div class="rating">
    <ul class="list">
      <li
      @click="rate(star)"
      v-for ="star in maxStars" 
      :class  ="{ 'active': star <= stars }"
      class="star"
      >
        <icon :name="star <= stars ? 'star' : 'star-o'"/>
      </li>
    </ul>
    <span v-if="hasCounter">{{counter}}</span>
  </div>
</template>


<script>
  import 'vue-awesome/icons/star'
  import 'vue-awesome/icons/star-o'

  import Icon from 'vue-awesome/components/Icon'

export default {
  props: ['grade', 'maxStars', 'hasCounter'],
  data() {
    return {
      stars: this.grade
    }
    },
    computed:{
      counter(){
        return `${this.stars} of ${this.maxStars}` 
      }
    },
    methods:{
      rate(star){
      this.stars = this.stars === star ? star - 1 : star
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rating {

    font-size: 16px;
 
  }
  .list {
    margin: 0 0 5px 0;
    padding: 0;
    list-style-type: none;
  }
  .list:hover .star {
    color: #f3d23e;
  }
  .star {
    display: inline-block;
    cursor: pointer;
  }
  .star:hover ~ .star:not(.active) {
    color: inherit;
  }
  .active {
    color: #f3d23e;
  }
</style>
