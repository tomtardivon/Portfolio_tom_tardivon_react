const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Tom Tardivon',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tom Tardivon',
  role: 'Front End Engineer',
  description:
    ' Diplômé d un Baccalauréat Technologique STI2D (Sciences et technologies de l industrie et du développement durable) option SIN (Système dInformation et Numérique) avec mention, ainsi qu’un BTS SIO (Services Informatiques aux Organisations) en option SLAM (Solutions Logicielles et Applications Métiers) qui est la partie orientée dans la programmation informatique. Je continué sur une licence 3 information - communication parcours information, communication, création numérique. Pour enchainer sur un master création numérique ou je suis actuellement ',
  resume: 'https://example.com',
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
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
