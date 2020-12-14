<template>
  <div class="random">
    <div class="left">
      <div class="center">
        <span class="pointer" @click="add(['color-red','color-red'], 0)">可</span>
        <span class="pointer" @click="add(['color-red','color-yellow'], 1)">能</span>
        <span class="pointer" @click="add(['color-red','color-blue'], 2)">出</span>
        <span class="pointer" @click="add(['color-yellow','color-yellow'], 3)">现</span>
        <span class="pointer" @click="add(['color-yellow','color-red'], 4)">的</span>
        <span class="pointer" @click="add(['color-yellow','color-blue'], 5)">情</span>
        <span class="pointer" @click="add(['color-blue'], 6)">况</span>
      </div>
    </div>
    <div class="right">
      <table border="1" style="border-collapse: collapse;">
        <tr>
          <td>第一次</td>
          <td>第二次</td>
        </tr>
        <tr v-for="(l, i) of list" :key="i">
          <td>
            <div :class='["circle", l[0] || ""]'></div>
          </td>
          <td>
            <div :class='["circle", l[1] || ""]'></div>
          </td>
        </tr>
      </table>
    </div>
    <div class="img" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ]
    }
  },
  methods: {
    add(colors, num) {
      this.$set(this.list, num, this.list[num].length ? [] : colors);
    }
  },
}
</script>
<style scoped>
.random {
  display: flex;
  width: 100vw;
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  justify-content: center;
}

.left, .right {
  width: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 340px;
}
.left{
  width: 40vw;
}
.center{
  display: inline-block;
}
table{
  width: 200px;
}

td {
  height: 40px;
  width: 100px;
}

.circle {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid #cecece;
  margin: auto;
}

.color-red {
  background: red;
  border: none;
}

.color-yellow {
  background: yellow;
  border: none;
}

.color-blue {
  background: blue;
  border: none;
}

.pointer{
  font-size: 32px;
  cursor: pointer;
  display: inline-block;
  width: 42px;
  line-height: 56px;
  transition: all .5s ;
}

.pointer:hover{
  text-align: center;
  font-size: 36px;
  width: 42px;
  position: relative;
  text-shadow: #999999 3px 3px 3px;
  transition: all .5s ;
}

.img{
  position: absolute;
  bottom: -20px;
  left: 50px;
  height: 150px;
  width: 150px;
  background: url("../assets/hj.png") no-repeat center;
  background-size: contain;
  z-index: 100;
}
</style>
