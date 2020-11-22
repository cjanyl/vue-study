<template>
  <div class="index">
    <div>
      <h1>1.v-focus</h1>
      <div>当前input会自动获取焦点: <input v-focus/></div>
      <div>当前input不会自动获取焦点: <input v-focus=""/></div>
    </div>
    <div>
      <h1>2. v-hotkey</h1>
      <div v-hotkey="keymap" v-show="flag">
        Press `ctrl + b` to toggle me! Hold `enter` to hide me!
      </div>
    </div>
    <div v-hotkey="scrollToKeyMap">
      <h1>3. v-scroll-to</h1>
      <div class="scrollTo" v-if="flag3">
        <a href="#" v-scroll-to="'#element'">Scroll to #element</a>

        <div id="element">
          Hi. I'm #element.
        </div>
      </div>
    </div>
    <div style="height: 50px">
      <h1>4. v-infinite-scroll</h1>
      <div
        v-infinite-scroll="onLoadMore"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="50"
      ></div>
    </div>
    <div>
      <h1>5. v-ripple-directive</h1>
      <div class="is-primary" v-ripple>点击波动</div>
    </div>
    <div>
      <h1>6. v-ripple-directive</h1>
      <!-- Example 1 using just a boolean (Uses default values) -->
      <div v-blur="isBlurred" @click="isBlurredChange"  v-ripple class="is-primary">点击改变遮罩</div>

      <!-- Example 2 using an object (Uses config values) -->
      <div v-blur="blurConfig" class="is-primary">123</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      flag: true,
      flag3: false,

      data: [],
      busy: false,
      count: 0,

      isBlurred: true,
      blurConfig: {
        isBlurred: true,
        opacity: 0.9,
        filter: 'blur(3px)',
        transition: 'all .3s linear'
      },
    }
  },
  computed: {
    keymap() {
      return {
        // 'esc+ctrl' is OK.
        'alt+2': this.toggle,
        'enter': {
          keydown: this.hide,
          keyup: this.show
        },
        'alt+3': this.flag3Change,
      }
    },
    scrollToKeyMap(){
      return {
      }
    },
  },
  methods: {
    isBlurredChange(){
      this.isBlurred = !this.isBlurred;
    },
    flag3Change() {
      this.flag3 = !this.flag3
    },
    toggle() {
      this.flag = !this.flag
    },
    show() {
      this.flag = true
    },
    hide() {
      this.flag = false
    },
    consoleVal(val){
      console.log(val)
    },
    onLoadMore() {
      if(!this.busy){
        this.busy = true;

        // setTimeout(() => {
        //   for (let i = 0, j = 10; i < j; i++) {
        //     this.data.push({});
        //   }
        //   console.log(this.data.length);
        //   this.busy = false;
        // }, 1000);
      }
    }
  },
}
</script>

<style>
.scrollTo{
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.is-primary{
  display: inline-block;
  width: 120px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #666666;
  border-radius: 10px;
  cursor: pointer;

  user-select:none;
}
</style>

