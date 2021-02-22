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
    ],

    MainFirstSectionText: [
      {
        title: 'Let\'s Dream Big Together',
        description: 'We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization',
      },

    ],

    MainFirstSectionBoxes: [
      {
        boxTitle: 'One to One',
        boxDescription: 'Getting the necessary clarity about the current state to help you improve your game.',
      },
      {
        boxTitle: 'Anywhere',
        boxDescription: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
      },
      {
        boxTitle: 'On Time',
        boxDescription: 'Puntuality is our top priority because it\'s an essencial criteria to assess a program quality.',
      },
      {
        boxTitle: 'Online Coures',
        boxDescription: 'Online business coaching now offers you a very powerful way to empower your business into success.',
      },
      {
        boxTitle: 'Consulting',
        boxDescription: 'You will get a clear sense of direction for your business, thorough assessment and faster results.',
      },
      {
        boxTitle: 'Self Development',
        boxDescription: 'Business Coaching often keep your focus and develop you both in a professional and personal way.',
      },
    ],

    MainSecondSectionText: [
      {
        title: 'Let\'s Dream Big Together',
        description: 'Explore How can I help you',
      }
    ],

    MainSecondSectionBoxes: [
      {
        img: '-01',
        boxTitle: 'Consultative Training',
        boxDescription: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.'
      },
      {
        img: '-02',
        boxTitle: 'Real Deal Coaching',
        boxDescription: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.'
      },
      {
        img: '-03',
        boxTitle: 'Advisor Training Program',
        boxDescription: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.'
      },
    ],

    MainThirdSectionBoxes: [
      {
        img: '-1',
        price: '$40.00',
        description: 'Learning to Write as a Professional Author',
      },
      {
        img: '-2',
        price: 'Free',
        description: 'Customer-centric-Info-Tech Strategies',
      },
      {
        img: '-3',
        price: '$19.00',
        description: 'Open Programming Courses for Everyone: Python',
      },
      {
        img: '-4',
        price: '$26.00',
        description: 'Academic Listening and Note-taking',
      },
    ],

  },

  methods: {

  },
});
Vue.config.devtools = true;
