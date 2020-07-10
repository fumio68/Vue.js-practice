new Vue({
  el: '#app',
  data: {
    number: 0,
    x:0,
    y:0,
    event: 'click',
  },
  methods: {
    countUp: function(times) {
      this.number += 1 * times
    },
    // eventを引数に渡すと、eventの中身を取得することができる
    changeMousePosition: function(divideNumber, event) {

      this.x = event.clientX / divideNumber;
      this.y = event.clientY / divideNumber;
    },
    myAlert() {
      alert('アラート');
    }
  }
})
