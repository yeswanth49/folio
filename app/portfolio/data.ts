type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'PEC.UP',
    description:
      'Resource Hub for college students',
    link: 'https://pecup.in',
    video:
      'https://raw.githubusercontent.com/yeswanth49/blogs/main/technical_blogs/arc-agi-2/images/benchmarks.png',
    id: 'project1',
  },
  {
    name: 'starBOT',
    description: 'Chatbot for Providing queries related to PEC.UP',
    link: 'https://chat.pecup.in',
    video:
      'https://raw.githubusercontent.com/yeswanth49/blogs/main/technical_blogs/arc-agi-2/images/benchmarks.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'OpenBook',
    title: 'Founder & CTO',
    start: '2025',
    end: 'Present',
    link: 'https://twitter.com/GoOpenBook',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/yeswanth49',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/Yeshh49',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yeswanth-madasu-41525b297/',
  },
]

export const EMAIL = 'work.yeswanth@gmail.com'
