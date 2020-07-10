new Vue({
  el: '#app',
  data: {
    isActive: true,
    color: 'red',
    bg: 'bg-blue',
    textColor: 'yellow',
    bgColor: 'green',
    styleObject: {
      color: 'yellow',
      'background-color': 'green',
    }
  },
  computed: {
    classObject: function() {
      return {
        red: this.isActive,
        'bg-blue': !this.isActive }
    }
  }
})
