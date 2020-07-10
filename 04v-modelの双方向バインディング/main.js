new Vue({
  el: '#app',
  data: {
    message: 'こんにちは',
    counter: 0,
  },
  // dataにはプレーンな値しか設定できないため、動的な値はcomputedプロパティに登録する
  // methodでも同様な処理はできるが、二重波カッコのなかにmethodを書くと、不必要なタイミング（何かの値が変わって再描画されるたびに）でも反応してしまう
  computed: {
    lessThanThree: function() {
      return this.counter > 3 ? '3より上' : '3以下'
    }
  },
  // computedなどで実現できない非同期処理などはwatchプロパティを使う
  watch: {
    counter: function() {
      const vm = this;
      setTimeout(function() {
        vm.counter = 0
      }, 3000)
    }
  },
})
