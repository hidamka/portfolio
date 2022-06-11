<template>
  <div id="parallax">
    <div data-depth="0.2">
      <h1 class="title">Hida's Portfolio</h1>
      <span>welcome to page!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPage",
  mounted() {
    this.$nextTick(function () {
      var layer = document.getElementById("parallax");
      // eslint-disable-next-line no-unused-vars,no-undef
      const parallax = new Parallax(layer, {
        scalarX: 10.0, // X軸の移動速度と範囲を増減
        scalarY: 10.0, // Y軸の移動速度と範囲を増減
        frictionX: 0.1, // X軸のレイヤーの速度。0.00〜1.00の範囲内で指定可能
        frictionY: 0.1, // Y軸のレイヤーの速度。0.00〜1.00の範囲内で指定可能
      });
    });
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
