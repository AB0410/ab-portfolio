import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Develope'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My name is',
  name: 'Arjit Basu',
  subtitle: 'I am a Data Analyst',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'HI, I am an aspiring data analyst currently pursuing my post graduation in data science. Even though I am a Mathematics major I have taught myself Data Analysis, Machine Learning, Data visualization and a few programming languages like Python, Java, C, C+. I did all this because I like challenges and becoming a data analyst is my biggest challenge yet.',
  paragraphTwo: 'I am very serious about my work so when I do not find an answer I make it my only goal to find an answer and this attitude has helped me learn a lot by myself. So with the right guidance and environment I can accomplish much more, all I need is a chance to show my skills and worth.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '',
    title: 'Cohort Analysis',
    info: 'To get a better understanding of the company performance, My employer gave me the responsiblity of calculating the retetion rate by using the invoice data. I found a better way of seeing the result and compare it at the same time. I wrote a code which outputs a heatmap showing the cohort analysis.',
    info2: '',
    url: 'https://github.com/AB0410/Cohort-Analysis',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Customer Segments',
    info: 'As a part of the marketing my task was to help the team make better business strategies. So to do so I decided to create a customer segmentation based on their values to us as a customer. This helped to make specific strategies as per needs.',
    info2: '',
    url: 'https://github.com/AB0410/Segmentation',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'Recommendation Logic',
    info: 'My employer had to impove the user experience and for which a recommendation system was proposed. I was tasked with creating the logic of getting the recommendations. I achieved this by analysing the basket and suggest items which were bought together.',
    info2: '',
    url: 'https://github.com/AB0410/Recommendation-Logic',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
