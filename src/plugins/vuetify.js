import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: '#F8F8F2',
        primary: '#8BE9FD',
        accept: '#50FA7B',
        cancel: '#FF5555',
        back: '#FFB86C',
        highlight: '#44475A',
      },
      dark: {
        background: '#282A36',
        selected: '#282A36',
        primary: '#8BE9FD',
        accept: '#50FA7B',
        cancel: '#FF5555',
        back: '#FFB86C',
        highlight: '#FFEE51',
      },
    },
  },
});
