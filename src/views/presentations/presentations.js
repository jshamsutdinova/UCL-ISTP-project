import pdfInfo from '@/components/card/pdf-info/pdf-info.vue'

export default ({
  name: 'Presentation',

  components: {
    'pdf-info-card': pdfInfo
  },

  data: () => ({
    files: [
      {
        id: 1,
        name_conf: '16th annual meeting "Plasma Physics in the Solar System"',
        date_place: '8-12 February 2021, Space Research Institute, Russia',
        link_conf: 'https://plasma2021.cosmos.ru/',
        presentations: [
          {
            num: 1,
            type: 'Talk',
            title: 'On the origin of the QPPs in the weak Solar flare according to the observations of the new generation Radioheliographs',
            speaker: 'Kupriyanova E.G.',
            authors: 'Kolotkov D.Yu., Kashapova L.K., Kudryavtseva A.V., Tan C.-M., Reid H.A.S.',
            link: ''
          }
        ]
      },
      {
        id: 2,
        name_conf: 'National Astronomy Meeting, University of Bath',
        date_place: '19 - 23 July 2021, Great Britain',
        link_conf: 'https://nam2021.org/',
        presentations: [
          {
            num: 1,
            type: 'Poster',
            title: 'Possible microwave sources of type III storms on 10th April 2019',
            speaker: 'Hamish A.S. Reid',
            authors: 'Larisa K. Kashapova, Elena G. Kupriyanova, Jinge Zhang',
            link: 'https://ras.ac.uk/sites/default/files/NAM/P473%20-%20Reid.pdf'
          }
        ]
      },
      {
        id: 3,
        name_conf: 'Russian Astronomical Meeting',
        date_place: '23-28 August 2021, SAI Moscow University, Moscow, Russia',
        link_conf: 'https://www.vak2021.ru/',
        presentations: [
          {
            num: 1,
            type: 'Talk',
            title: 'On microwave sources of the type III noise storms on 10th of April, 2019',
            speaker: 'Elena G. Kupriyanova, ',
            authors: 'Larisa K. Kashapova, Anastasia V. Kudryavtseva, Hamish A.S. Reid, Jinge Zhang',
            link: 'https://drive.google.com/file/d/1-COes0BNwH6YpJPMjoOD_l_hSxQDZRCG/view?usp=sharing'
          },
          {
            num: 2,
            type: 'Talk',
            title: 'Relationship between microwave emission and type III radio bursts in weak transient events',
            main_author: 'Alexander T. Altyntsev, ',
            speaker: 'Dmitriy A. Zhdanov, ',
            authors: ' Nataliia C. Meshalkina, Ivan I. Myshyakov, Hamish A.S. Reid',
            link: 'https://drive.google.com/file/d/1l2B9P-cIGpeFjxZWssi7weXySZfofBi8/view?usp=sharing'
          }
        ]
      },
      {
        id: 4,
        name_conf: 'Meeting "Magnetism and Activity of the Sun and Stars"',
        date_place: '31 August - 3 September 2021, CrAO, Russia',
        link_conf: 'https://sun.crao.ru/conferences/magnetism-and-activity-of-the-sun-and-stars-2021',
        presentations: [
          {
            num: 1,
            type: 'Talk',
            title: 'Microwave source of the type III radio bursts according SRH and LOFAR data',
            speaker: 'Elena G. Kupriyanova, ',
            authors: 'Larisa K. Kashapova, Hamish A.S. Reid, Jinge Zhang',
            link: 'https://drive.google.com/file/d/1XaxSqjpftse6RmOxbGaHX9hLfwlIXOSt/view?usp=sharing'
          },
          {
            num: 2,
            type: 'Invited talk',
            title: 'Multiwave Radioheliograph: Weak Transient Phenomena in the Solar Corona',
            speaker: 'Alexander T. Altyntsev, ',
            authors: 'Sergey V. Lesovoy, Nataliia C. Meshalkina, Maria V. Globa, Dmitriy A. Zhdanov, Ivan I. Myshyakov, Hamish A.S. Reid',
            link: 'https://drive.google.com/file/d/1sktIZZjXp2utuXkh0jfy2McqmBECKM9Y/view?usp=sharing'
          }
        ]
      },
      {
        id: 5,
        name_conf: '16th European Solar Physics Meeting',
        date_place: '6-10 September 2021, Online',
        link_conf: 'https://indico.ict.inaf.it/event/794/',
        presentations: [
          {
            num: 1,
            type: 'Invited talk',
            title: 'Radio signatures of solar flares',
            speaker: 'Larisa Kashapova',
            authors: '',
            link: 'https://drive.google.com/file/d/11KPkKdDsq5Iu2cj0knaICMkhpE2wC-8L/view?usp=sharing'
          },
          {
            num: 2,
            type: 'Poster',
            title: 'Different properties of microwave and metric QPPs in a solar radio burst',
            speaker: 'Elena Kupriyanova, ',
            authors: 'Dmirtii Kolotkov, Larisa Kashapova, Anastasiya Kudryavtseva, Chengming Tan, Hamish Reid',
            link: 'https://drive.google.com/file/d/19PUXKjk_1mSW3MAJPb-MyZauakoipQNK/view?usp=sharing'
          }
        ]

      },
      {
        id: 6,
        name_conf: 'XXV Russian annual meeting "Solar and solar-terrestrial physics"',
        date_place: '4-8 October 2021, Pulkovo Observatory, Saint Petersburg, Russia',
        link_conf: 'http://www.gaoran.ru/russian/solphys/2020/',
        presentations: [
          {
            num: 1,
            type: 'Talk',
            title: 'Relationship between microwave sources in Solar flares and the Solar bursts in the decimeter and meter radio range',
            speaker: 'Kashapova L.K., ',
            authors: 'Kupriyanova E.G., Kolotkov D.Yu., Reid H.A.S., Kudryavtseva A.V., Tan C.-M., Zhang J.',
            link: ''
          }
        ]

      }
    ]
  }), // end data

  methods: {
    openFile: function (url) {
      window.open(url, '_blank')
    }
  },

  mounted () {
    this.files.sort((a, b) => b.id - a.id)
  }
})
