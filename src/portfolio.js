import cv from '../src/Assets/pdf/cv_tom_tardivon.pdf'


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tom-tardivon-portfolio.netlify.app/',
  title: 'Tom Tardivon',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tom Tardivon',
  role: 'Développeur / Designer ',
  description:
    'Diplômé d’un Baccalauréat Technologique STI2D (Sciences et technologies de l’industrie et du développement durable) option SIN (Système d’Information et Numérique) avec mention. Ainsi qu’un BTS SIO (Services Informatiques aux Organisations) en option SLAM (Solutions Logicielles et Applications Métiers) qui est la partie orientée dans la programmation. J’ai continué sur une licence 3 information - communication parcours information, communication, création numérique. Pour enchainer sur un master en création numérique parcours Design d’expérience et Design d’Interface où je suis actuellement en 2e année',
  resume: cv,
  social: {
    linkedin: 'https://www.linkedin.com/in/4572285217447qsfggted/',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Blender 3D',
  'React',
  'After effect',
  'Adobe XD',
  'PHP',
  'InDesign',
  'Git',
  'Laravel',
  'Unity 3D',
  'SQL',
  'React Native',
  'Bootstrap',
  'Premiere Pro'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tomtardivon@hotmail.fr',
}

export { header, about, projects, skills, contact }
