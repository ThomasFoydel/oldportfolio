const IndividualProjectData = [
  {
    matchParam: 'chatapp',
    title: 'Chat App Project',
    description: 'A live chat app built in MERN stack with socket.io: ',
    featuresList: [
      'manage profile info and pictures',
      'send live chat messages through websockets',
      'upload/send images',
      'private message other users',
      'see currently online users'
    ],
    technologiesList1: [
      'Node',
      'React',
      'Context',
      'Grid-FS',
      'Express',
      'Mongo DB'
    ],
    technologiesList2: [
      'SCSS',
      'Multer',
      'Socket.io',
      'Mongoose',
      'React-Spring'
    ],
    githubLink: 'https://github.com/ThomasFoydel/chat',
    herokuLink: 'http://socketchat.xyz',
    screenCaptureFile: '../../img/chatappscreencap.gif',
    backgroundClass: 'chatappbackground'
  },
  {
    matchParam: 'socialmediaapp',
    title: 'Social Media Project',
    description: 'A MERN stack app with basic social media functionality: ',
    featuresList: [
      'manage profile info and pictures',
      'write posts with or without images',
      'comment on posts',
      'post statuses',
      'edit posts or comments',
      'like/dislike posts, comments, or statuses',
      'send/accept/reject friend requests',
      'send private chat messages to friends',
      'de-friend'
    ],
    technologiesList1: [
      'Node',
      'React',
      'Redux',
      'Grid-FS',
      'Express',
      'Mongo DB'
    ],
    technologiesList2: [
      'SCSS',
      'Multer',
      'Socket.io',
      'Mongoose',
      'React-Spring',
      'JSON Web Token'
    ],
    githubLink: 'https://github.com/ThomasFoydel/socialmedia',
    herokuLink: 'http://mernsocialmedia.xyz',
    screenCaptureFile: '../../img/socialmediascreencapture.gif',
    backgroundClass: 'socialmediabackground'
  },
  {
    matchParam: 'flashcardapp',
    title: 'Flash Card Project',
    description: 'A flash card app built in MERN stack ',
    featuresList: [
      'create new flash cards',
      'create new subjects',
      'drop cards or subjects',
      'register/login',
      'save cards to database',
      'log in again later and get back to studying'
    ],
    technologiesList1: ['Node', 'React', 'Redux', 'Express', 'Mongo DB'],
    technologiesList2: ['SCSS', 'Mongoose', 'React-Spring', 'JSON Web Token'],
    githubLink: 'https://github.com/ThomasFoydel/flashcards',
    herokuLink: 'https://mern-flashcards.herokuapp.com/',
    screenCaptureFile: '../../img/flashcardscreencapture.gif',
    backgroundClass: 'flashcardbackground'
  }
];

export default IndividualProjectData;
