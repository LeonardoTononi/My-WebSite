const projects = (prevImg1, prevImg2) => {
  return [
    {
      title: 'BestFive Bcn',
      name: 'A tourism web app',
      stack: ['JavaScript', 'Firebase', 'Google Maps', 'Google Analytics'],
      demo_url: 'https://bestfivebcn.com/',
      github_url: 'https://github.com/Easaaa/Bestfive-bcn',

      img: prevImg1 && prevImg1,
      slug: 'bestfive-bcn',
      intro:
        "I made this app to solve a problem that my girlfriend and I had before summer (2019), we thought that it would be cool have a simple app to find where to go in Barcelona, during a sunny day, and then we start adding more categories. At the moment I'm rebuilding this app, with a new style and new functionality.  ",
      why:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      learnt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: 'We Learn',
      name: 'A video/course learning platform',
      stack: [
        'Gatsby',
        'Netlify',
        'Apollo',
        'Firebase Firestore',
        'Firebase Auth',
      ],
      demo_url: 'https://app-welearn.netlify.app/',
      github_url: 'https://github.com/Easaaa/welearn',
      img: prevImg2 && prevImg2,
      slug: 'app-welearn',
      intro:
        "I made this app to solve a problem that my girlfriend and I had before summer (2019), we thought that it would be cool have a simple app to find where to go in Barcelona, during a sunny day, and then we start adding more categories. At the moment I'm rebuilding this app, with a new style and new functionality.  ",
      why:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      learnt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
};

module.exports = { projects };
