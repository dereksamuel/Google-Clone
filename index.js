Vue.component({
  props: 'todo',
  template: '<li>Hola Mundo</li>'
});

const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    change: '',
    messageTrue: false,
  },
  computed: {
    setMessage: function () {
      return this.messageTrue = !this.messageTrue;
    }
  },
  methods: {
    onSubmit: function () {
      this.message = this.change + ' OK';
    }
  }
});
