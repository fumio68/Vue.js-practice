new Vue({
  el: '#app',
  data: {
    message: 'こんにちは',
    counter: 0,
  },
  methods: {

  },
  // dataにはプレーンな値しか設定できないため、動的な値はcomputedプロパティに登録する
  computed: {
    lessThanThree: function() {
      return this.counter > 3 ? '3より上' : '3以下'
    }
  }
})
