// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Scholarships and Awards"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Achievement Award Giving Tree Funds',
    description: '',
    date: '2023-2024',
    location: 'University of Hawaii',
  },
  {
    name: 'Nabumoto Tanahashi Peace Graduate Fellowship',
    description: '',
    date: '2022-2023',
    location: 'University of Hawaii',
  },
  {
    name: 'Research Corporation of the University of Hawaii Graduate Fellowship Fund',
    description: '',
    date: '2022-2023',
    location: 'University of Hawaii',
  },
  {
    name: 'Frances Davis Award for Excellence in Undergraduate Teaching (nominee)',
    description: '',
    date: '2022-2023',
    location: 'University of Hawaii',
  },
  {
    name: 'Dai Ho Chun Fund for Graduate Fellowships',
    description: '',
    date: '2021-2022',
    location: 'University of Hawaii',
  },
  {
    name: 'East -West Center Foundation Scholarship',
    description: '',
    date: '2019-2020',
    location: 'University of Hawaii',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'mEMA Feasibility Study in NHPI Communities',
    description: 'Feasibility of Mobile-Based Ecological Momentary Assessment for Substance Use Monitoring in Native Hawaiian, Filipino, and Pacific Islander Communities.',
    link: { href: '', label: 'GitHub Cards' },
    tags: ['mEMA', 'DigitalHealth', 'PrecisionHealth', 'PersonalizedArtificialIntelligence', 'MachineLearning', 'AI', 'Healthcare', 'PublicHealth']
  },
  {
    name: 'Self-Supervised Models for Hypertension Prediction',
    description: 'The development of personalized machine learning models using self-supervised learning and human-computer interaction techniques to predict adverse health events in adults with hypertension',
     link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
    tags: ['SelfSupervisedLearning', 'HumanComputerInteraction', 'Machine Learning', 'AI', 'DigitalHealth']
  },
  {
    name: 'Healthy Buckeyes',
    description: 'Designing a Dyad-Based mHealth Intervention for Colorectal Cancer Survivors and Caregivers.',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
    tags: ['mHealth', 'HumanCenteredDesign', 'DigitalHealthIntervention', 'CancerSurvivorship']
  },

  {
    name: 'Ethics of Generative AI in Education',
    description: 'Developed a comprehensive AI curriculum for engineering students, incorporating real-world projects and startup concepts.',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: 'View Course' },
    tags: ['Education', 'AI']
  },
]


// Hobbies & Volunteer
export const activitiesHeadLine = "Service & Volunteer"
export const activitiesIntro = "Professional/Institutional Contributions & Community Service."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Reviewer of International Joint Conference on Artificial Intelligence (IJCAI)',
    description:
      'Providing feedback on research papers related to artificial intelligence and machine learning.',
    date: '2025',
    location: 'Unitied States',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'Reviewer of New Media and Society',
    description:
      'Providing feedback on research papers related to social media, affordances, and ethical implication.',
    date: '2022-2025',
    location: 'United States',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Reviewer of Hawaii International Conference on System Science (HICSS)',
    description:
      'Providing feedback on research papers related to system science and its applications.',
    date: '2020-2025',
    location: 'United States',
  },
  {
    name: 'Reviewer of Conference on Human Factors in Computing Systems (CHI)',
    description:
      'Providing feedback on research papers related to digital health and medical internet research.',
    date: '2023',
    location: 'United States',
  },
  {
    name: 'Reviewer of The East-West Center International Graduate Student Conference',
    description:
      'Providing feedback on research papers related to social media studies and human computer interaction.',
    date: '2019-2023',
    location: 'United States',
  },
  {
    name: 'Conference on Human Factors in Computing Systems (CHI) Volunteer',
    description:
      'Providing support and assistance during the conference.',
    date: '2024',
    location: 'Honolulu, United States',
  },
]

