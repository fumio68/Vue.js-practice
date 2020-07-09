new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    number: 3,
    ok: true
  },
  methods: {
    sayHi: function() {
      // インスタンスのプロパティにアクセスするにはthisをつける
      // return this.message;

      // messageを上書き可能
      this.message = 'Hello Vue.js'
    }
  }
})
