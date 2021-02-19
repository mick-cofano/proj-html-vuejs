new Vue({
  el: '#app',
  data: {

    // array nel quale inseriamo il nome dell'oggetto della "navbar centrale", che si può riempire e
    // modificare anche dinamicamente

    CenterNavbar: [
      {
        obj: 'Home',
        choices: '',
      },
      {
        obj: 'Pages',
        choices: '',
      },
      {
        obj: 'Courses',
        choices: '',
      },
      {
        obj: 'Features',
        choices: '',
      },
      {
        obj: 'Blog',
        choices: '',
      },
      {
        obj: 'Shop',
        choices: '',
      },

    ],

    selected: 'English',
    options: [
      { text: 'English', value: 'English' },
      { text: 'Deutsche', value: 'Deutsche' },

    ],

    JumbotronTexts: [
      {
        subtitle: 'New Challenges, New Skills',
        title: 'BUILD YOUR OWN LIFE COACHING BUSINESS',
        text: 'Whole-life Business Coaching for committed entrepreneurs',
      }
    ]


  },

  methods: {

  },
});
Vue.config.devtools = true;
