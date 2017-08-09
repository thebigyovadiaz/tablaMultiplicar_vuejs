var vm = new Vue({
  el: '#app',
  data: {
    numero: 0,
    envio: false,
    disable: {
      'disabled': true
    }
  },
  computed: {
    pTop: function() {
      return {'padding-top': '25px'};
    },
    saludo: function() {
      return this.gender == 'M' ? 'Bienvenido' : 'Bienvenida';
    }
  },
  methods: {
    generar: function() {
      if(this.disable['disabled'] == false) {
        this.envio = true;
        this.disable['disabled'] = true;
      }
    },
    regresar: function() {
      this.envio = false;
      this.numero = 0;
    },
    inputState: function() {
      if(this.numero > 0 && this.numero.length > 0) {
        this.disable['disabled'] = false;
      } else {
        this.disable['disabled'] = true;
      }
    }
  }
});