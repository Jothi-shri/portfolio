export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
      'Component-Driven Development',
      'Design Systems',
    ],
  },
  {
    title: 'React',
    skills: [
      'Reusable Components',
      'Hooks',
      'Zustand',
      'React Router',
      'Performance Optimization',
      'Accessibility (a11y)',
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'REST APIs',
      'JWT Auth',
      'SQL',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLAlchemy',
      'Alembic',
    ],
  },
  { title: 'Visualization', skills: ['Leaflet', 'Three.js', 'Konva'] },
  { title: 'Real-time', skills: ['REST', 'MQTT (telemetry)', 'WebSocket'] },
  { title: 'Testing', skills: ['Jest', 'Manual Testing'] },
  {
    title: 'Tooling',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Vite',
      'npm',
      'Postman',
      'Vercel',
      'Netlify',
      'Render',
    ],
  },
]

export const contact = {
  email: 'jothishri03@gmail.com',
  phone: '9360216541',
  tel: 'tel:+919360216541',
  github: 'https://github.com/Jothi-shri',
  githubLabel: 'github.com/Jothi-shri',
  linkedin: 'https://www.linkedin.com/in/jothishrib3',
  linkedinLabel: 'linkedin.com/in/jothishrib3',
  location: 'Taramani, Chennai - 600113',
  locationShort: 'Chennai, IN',
} as const
