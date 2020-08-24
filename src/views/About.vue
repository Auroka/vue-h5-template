<template>
  <div class="about">
    <p>多行内容隐藏</p>
    <p class="info">
      人不能孤独地活着，之所以有作品是为了沟通。透过作品去告诉人家，心里的想法、眼中看世界的样子、所在意的、所珍惜的。所以，作品就是自己。
    </p>
    <p class="f1">
      人不能孤独地活着（font-size:14）
    </p>
    <p class="f2">
      人不能孤独地活着（font-size:16）
    </p>
    <p class="f3">
      人不能孤独地活着（font-size:18）
    </p>
    <p class="ignore">
      人不能孤独地活着（font-size:18）
    </p>
  </div>
</template>
<script>
export default {
  mounted() {}
}
</script>
<style lang="scss">
.info {
  font-size: 14px;
  padding: 0px 40px;
  line-height: 18px;
  @include textOverflow(2);
}
.f1 {
  font-size: 14px;
}
.f2 {
  font-size: 16px;
}
.f3 {
  font-size: 18px;
}
</style>
