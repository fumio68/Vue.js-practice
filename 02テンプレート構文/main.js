new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    number: 3,
    ok: true,
    html: '<h1>h1です</h1>',
    url: 'http://google.com',
    attribute: 'href',
    twitterObject: {
      href: 'https://twitter.com',
      id: 31
    }
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
