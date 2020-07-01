<template>
  <div class="home">
    <div class="stack-wrapper">
      <card-slide ref="stack" :pages="list"></card-slide>
    </div>
  </div>
</template>

<script>
import CardSlide from '@/components/CardSlide'

export default {
  name: 'Home',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    console.log('123')
    setTimeout(() => {
      this.list = [
        'http://images.12yrmh.com/comic/20200610162208c84fe.jpeg',
        'http://images.12yrmh.com/comic/20200611100343c7715.jpeg',
        'http://images.12yrmh.com/comic/202006151017346c78d.jpeg'
      ]
    }, 1000)
  },
  components: {
    CardSlide
  }
}
</script>
<style lang="scss">
.stack-wrapper {
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  width: 300px;
  height: 400px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
</style>
