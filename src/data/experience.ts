export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  note?: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Navic',
    role: 'Web Developer',
    location: 'Taramani, Chennai - 600113',
    period: 'Nov 2025 — Present',
    note: 'Startup incubated at IITM',
    points: [
      'Built React (TypeScript) frontends for Autonomous Mobile Robots (Greeting and Shopping Assistance Robots) with real-time monitoring/control dashboards used in live fleet operations',
      'Built a reusable component library for robot status, mission execution, and navigation UI, cutting duplicate UI code and speeding up feature delivery',
      'Rendered live SLAM maps, LiDAR scans, battery status, and obstacle detection on responsive, cross-browser interfaces',
      'Integrated frontends with backend services over MQTT/REST for continuous telemetry, with debugging and performance optimization under real-time load',
      'Wrote Jest unit tests and did manual testing before release',
      'Collaborated via GitHub pull requests and version-controlled workflows',
    ],
  },
]

export interface EducationItem {
  school: string
  degree: string
  period: string
  detail: string
  languages: string[]
}

export const education: EducationItem[] = [
  {
    school: 'Mahendra Institutions (affiliated to Anna University)',
    degree: 'B.E. Computer Science',
    period: 'Apr 2025',
    detail: 'GPA 7.5',
    languages: ['Tamil', 'English'],
  },
]
