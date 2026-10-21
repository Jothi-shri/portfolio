export interface Project {
  slug: string
  title: string
  tagline: string
  tags: string[]
  stack: string[]
  featured?: boolean
  liveUrl?: string
  repoUrl?: string
  proprietary?: boolean
  visual?: 'fleet' | 'slam' | 'pipeline'
  problem: string
  role: string
  built: string[]
  challenges: string[]
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'fleet-management-dashboard',
    title: 'Fleet Management - Multi-Robot Operations Dashboard (Team)',
    tagline: 'One screen to monitor and command a fleet of AMRs in real time.',
    tags: ['Real-time', 'Robotics', 'Dashboard'],
    stack: ['React', 'Leaflet', 'Tailwind CSS', 'FastAPI', 'MQTT', 'PostgreSQL', 'MongoDB', 'SQLAlchemy', 'Alembic'],
    featured: true,
    proprietary: true,
    visual: 'fleet',
    problem:
      'Operators juggling several autonomous mobile robots had no single view of fleet health: robot status, live position, battery, and active missions lived in separate tools, so slow reactions to stuck or low-battery robots were the norm.',
    role: 'Frontend Developer — owned the React/TypeScript dashboard: fleet overview, robot detail views, and mission execution UI.',
    built: [
      'Fleet overview grid with live status, battery, and mission per robot',
      'Real-time monitoring and control dashboards over MQTT with REST fallback',
      'Reusable component library for robot status, mission execution, and navigation UI',
      'Alembic migrations and seeding for PostgreSQL + MongoDB backed services',
      'Responsive, cross-browser layouts for control-room screens and tablets',
      'Performance tuning to keep telemetry-heavy views smooth under real-time load',
    ],
    challenges: [
      'Merging high-frequency MQTT telemetry into React state without re-render storms — batched updates and memoised selectors',
      'Keeping map, list, and detail views consistent when messages arrive out of order',
      'Designing dense data UI that stays legible on small screens',
    ],
    outcome:
      'Real-time monitoring/control dashboards used in live fleet operations, with a reusable component library cutting duplicate UI code and speeding up feature delivery.',
  },
  {
    slug: 'amr-navigation-system',
    title: 'Autonomous Mobile Robot (AMR) Navigation System (Team)',
    tagline: 'Live SLAM maps, LiDAR scans, and obstacle overlays in the browser.',
    tags: ['Real-time', 'Mapping', 'Visualisation'],
    stack: ['React', 'Leaflet', 'Konva', 'Flask', 'SQL'],
    featured: true,
    proprietary: true,
    visual: 'slam',
    problem:
      'Navigation debugging needed expensive on-site sessions: SLAM maps, LiDAR scans, and obstacle detections were only visible on the robot or in desktop tooling, invisible to the web team.',
    role: 'Frontend Developer — built the web navigation UI for mission planning and execution: live map rendering, scan overlays, and battery/obstacle indicators.',
    built: [
      'Live SLAM map rendering with LiDAR scan and obstacle-detection overlays',
      'Mission planning and execution UI backed by a SQL schema with Flask APIs',
      'Battery status and navigation-state indicators alongside the map',
      'Robot pose and goal markers with path visualisation',
      'Responsive layouts that hold up on field tablets and desktops',
    ],
    challenges: [
      'Rendering streaming scan data at interactive frame rates — canvas layering and throttled paints',
      'Aligning robot-frame coordinates with the web map projection',
      'Graceful degradation when telemetry drops mid-mission',
    ],
    outcome:
      'Navigation UI rendering live SLAM maps, LiDAR scans, battery status, and obstacle detection on responsive, cross-browser interfaces.',
  },
  {
    slug: 'shobotflow',
    title: 'SHOBOTFLOW - No-Code/Low-Code Deployment Platform (Team)',
    tagline: 'Build, tag, and deploy containerised apps without touching a CLI.',
    tags: ['Platform', 'DevOps', 'No-code'],
    stack: ['React', 'Docker', 'Git', 'GitHub', 'CI/CD-style workflows', 'Vercel'],
    featured: true,
    visual: 'pipeline',
    problem:
      'Shipping robot-adjacent web services meant hand-rolled Docker commands and tribal deploy knowledge — slow and error-prone for a small team.',
    role: 'Frontend Developer — designed and built the React UI for no-code/low-code build, tag, and deploy workflows, including Docker image/registry management.',
    built: [
      'Docker image/registry management UI with build-tag-deploy workflows',
      'Visual pipeline for build → tag → deploy with live stage status',
      'Service configuration forms with client-side validation',
      'Deployment history and log views',
      'Deployed the platform frontend on Vercel',
    ],
    challenges: [
      'Modelling async multi-stage pipelines as clear, recoverable UI states',
      'Keeping long-running deploy views live without polling storms',
      'Making Docker concepts approachable for non-expert users',
    ],
    outcome:
      'No-code/low-code deployment platform with Docker image/registry management and build-tag-deploy workflows, deployed on Vercel.',
  },
  {
    slug: 'saas-workspace-platform',
    title: 'SaaS Workspace Platform (Personal)',
    tagline: 'Multi-workspace SaaS starter: auth, roles, and data-dense UI.',
    tags: ['Full-stack', 'SaaS', 'Personal project'],
    stack: [
      'React 19',
      'Vite',
      'Tailwind v4',
      'Zustand',
      'React Router',
      'FastAPI',
      'SQLAlchemy 2',
      'Alembic',
      'PostgreSQL',
      'JWT (HttpOnly refresh cookie)',
    ],
    featured: true,
    liveUrl: 'https://saasproject-app.netlify.app',
    problem:
      'Every new product idea restarted the same plumbing: authentication, workspaces, roles, and a data-dense admin UI. I wanted one clean reference implementation done properly.',
    role: 'Sole builder — React 19 + Vite + Tailwind v4 frontend with Zustand and React Router, backed by FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL.',
    built: [
      'JWT auth with HttpOnly refresh cookie and protected routes',
      'Six modules with workspace scoping and role-aware UI',
      'Data-dense tables, filters, and forms with client-side validation',
      'Full-stack TypeScript/Python typing discipline and migration-managed schema',
      'Frontend deployed on Netlify, API deployed on Render',
    ],
    challenges: [
      'Secure token handling in an SPA — HttpOnly refresh cookie plus short-lived access tokens',
      'Keeping Zustand state slices small and derived data memoised',
      'Production deployment split across Netlify (frontend) and Render (API)',
    ],
    outcome: 'Live at https://saasproject-app.netlify.app with six modules; frontend on Netlify and API on Render.',
  },
]

export const projectFilters = ['All', 'Real-time', 'Robotics', 'Platform', 'Full-stack'] as const

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
