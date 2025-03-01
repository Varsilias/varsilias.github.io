// gitprofile.config.js

const config = {
  github: {
    username: 'Varsilias', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'daniel-okoronkwo',
    twitter: 'varsilias',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    medium: 'danielokoronkwo',
    dev: 'varsilias',
    stackoverflow: '19328120/daniel-okoronkwo', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://varsilias.github.io',
    phone: '',
    email: 'danielokoronkwo90@gmail.com',
  },
  resume: {
    fileUrl: '',
    // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'Golang',
    'Java',
    'React.js',
    'Node.js',
    'Nest.js',
    'Jest',
    'Mocha',
    'HTML5',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'TailwindCSS',
    'MUI',
    'PHP',
    'Laravel',
    'AWS',
    'Digital Ocean',
    'Heroku',
  ],
  experiences: [
    {
      company: 'Minerva Technologies Limited',
      position: 'Fullstack Engineer',
      from: 'April 2022',
      to: 'Present',
    },
    {
      company: 'Clapmi LLC - Contract',
      position: 'Senior Backend Engineer',
      from: 'Oct 2021',
      to: 'March 2022',
    },
    {
      company: 'Varscon',
      position: 'Fullstack Developer',
      from: 'Oct. 2019',
      to: 'Sept. 2021',
    },
    {
      company: 'Zuri Team, Inc',
      position: 'Backend Engineer',
      from: 'Aug 2019',
      to: 'Nov. 2019',
    },
    {
      company: 'Innovation Growth Hub',
      position: 'Fellow / Backend Developer Intern',
      from: 'June 2018',
      to: 'Dec 2018',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    // {
    //   institution: 'University of Nigeria, Nsukka',
    //   degree: 'BSc Computer Science',
    //   from: '2018',
    //   to: '2022',
    // },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Kanban Task Manager',
      description:
        'Kanban Task Manager also referred to as KTM is a trello-like Task Management application that incoporates modern paradigm for building web applications. it features an authentication mechanism, creation of custom boards and column names as well as individual task for each column',
      imageUrl: '/kanban-example.png',
      link: 'https://ktm-react.vercel.app',
    },
    {
      title: 'Invoicify',
      description:
        'Invoicify is an application that gives its users the ability to automatically create and send invoices to their client. It has built in support for users to create contact details that will automatically be attached to each invoice they send to clients',
      imageUrl: '/invoicify-example.png',
      link: 'https://invoicify-eight.vercel.app',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'danielokoronkwo', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
