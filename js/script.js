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
        description: 'We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization.',
      },

    ],

    MainFirstSectionBoxes: [
      {
        imgID: '-1',
        boxTitle: 'One to One',
        boxDescription: 'Getting the necessary clarity about the current state to help you improve your game.',
      },
      {
        imgID: '-2',
        boxTitle: 'Anywhere',
        boxDescription: 'Access to valuable and portable program which allow you to setup and live anywhere you want.',
      },
      {
        imgID: '-3',
        boxTitle: 'On Time',
        boxDescription: 'Puntuality is our top priority because it\'s an essencial criteria to assess a program quality.',
      },
      {
        imgID: '-4',
        boxTitle: 'Online Coures',
        boxDescription: 'Online business coaching now offers you a very powerful way to empower your business into success.',
      },
      {
        imgID: '-5',
        boxTitle: 'Consulting',
        boxDescription: 'You will get a clear sense of direction for your business, thorough assessment and faster results.',
      },
      {
        imgID: '-6',
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

    MainFifthSectionBoxes: [
      {
        location: 'Texas, US',
        title: 'Storytelling Workshop',
        dateNum: '22',
        dateMon: 'NOV',
      },
      {
        location: 'New York, US',
        title: 'Painting Art Contest 2020',
        dateNum: '10',
        dateMon: 'OCT',
      },
      {
        location: 'Hamburg, Germany',
        title: 'International Art Fair 2020',
        dateNum: '23',
        dateMon: 'NOV',
      },
      {
        location: 'Illinois, US',
        title: 'Street Performance: Call for Artist',
        dateNum: '15',
        dateMon: 'DEC',
      },
      {
        location: 'Illinois, US',
        title: 'Consumer Food Safety Education Conference',
        dateNum: '22',
        dateMon: 'JUL',
      },
      {
        location: 'Dubai',
        title: 'How meditation improve your mental health?',
        dateNum: '12',
        dateMon: 'AUG',
      },
    ],

    MainSixthSectionBoxes: [
      {
        title: 'It\'s a choice of quality for people with special needs',
        description: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
        profileImg: '-01',
        profileName: 'FLORENCE THEMES',
        profileProf: '/ Multimedia Admin',
      },
      {
        title: 'High level of efficiency and scientific teaching methods',
        description: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        profileImg: '-02',
        profileName: 'MINA HOLLACE',
        profileProf: '/ Freelancer',
      },
      {
        title: 'Professional team of specialists and passionate mentors at reach',
        description: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        profileImg: '-03',
        profileName: 'MADLEY PONDOR',
        profileProf: '/ IT Specialist',
      },
    ],

  },

  methods: {

  },
});

// **************************************************************
var footer= new Vue({
  el:"#footer",
  data: {
    contact: {
      address: "382 NE 191st St # 87394 Miami, FL 33179 - 33899",
      telephone: "+1(305)547-99(9am - 5pm EST, Monday - Friday)",
      email: "support@maxcoach.com"
    },
    firstcolumn: [
      {
        text: "Start here",
        link:"#"
      },
      {
        text: "Blog",
        link:"#"
      },
      {
        text: "About us",
        link:"#"
      }
    ],
    secondcolumn:[
      {
        text: "Success story",
        link: "#"
      },
      {
        text: "Courses",
        link: "#"
      },
      {
        text: "Contact us",
        link: "#"
      }
    ],
    thirdcolumn:[
      {
        text: "Membership",
        link: "#"
      },
      {
        text: "Purchase guide",
        link: "#"
      },
      {
        text: "Privacy policy",
        link: "#"
      },
      {
        text: "Terms of service",
        link: "#"
      }
    ],
    social:[
      {
        icon:"fa fa-facebook-official",
        link:"#"
      },
      {
        icon:"fa fa-twitter",
        link:"#"
      },
      {
        icon:"fa fa-instagram",
        link:"#"
      },
      {
        icon:"fa fa-linkedin-square",
        link:"#"
      }
    ]
  }
});
Vue.config.devtools = true;
