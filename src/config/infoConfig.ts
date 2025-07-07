export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Yinan SUN'
export const headline = 'Postdoctoral Research Fellow at George Mason University.'
export const introduction =
  "Aloha! I earned my Ph.D. in Communication and Information Sciences from the University of Hawaiʻi at Mānoa and am currently a Postdoctoral Research Fellow at George Mason University."
export const email = 'sunyinan@hawaii.edu'
export const githubUsername = 'Teek101'

// about page
export const aboutMeHeadline = 'Background and Research Interests'
export const aboutParagraphs = [
  "My name is Yinan Sun. I'm from China and an alumna of the University of Hawaiʻi at Mānoa, where I earned my Ph.D. in Communication and Information Sciences. I'm currently a Postdoctoral Research Fellow in Information Sciences & Technology at George Mason University.",
  'Currently, I am working on projects that combine AI, digital health, and ethics of technology, developing AI-driven prediction models for personalized health interventions and exploring the societal impact of generative AI in health and education.',
  "I started this blog to share the insights I learn every day. Most blogs focus on digital health, AI ethics, and technology in education, while others reflect on the personal and professional lessons I’ve picked up along the way.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "A better way to solve a problem that hasn’t happened yet."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
