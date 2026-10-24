import { writeFileSync } from 'node:fs'

const LINES = [
  ['JOTHISHRI B', 26, true],
  ['Frontend Developer — Chennai, India', 13, false],
  ['jothishri03@gmail.com  |  github.com/Jothi-shri', 11, false],
  ['', 8, false],
  ['EXPERIENCE', 13, true],
  ['Web Developer, Navic (IITM-incubated startup) — Nov 2025 to Present', 11, true],
  ['- React/TypeScript frontends for AMRs (Greeting, Shopping Assistance Robots)', 10, false],
  ['- Real-time monitoring and control dashboards; reusable status/mission/nav components', 10, false],
  ['- Live SLAM maps, LiDAR scans, battery and obstacle detection; responsive, cross-browser', 10, false],
  ['- MQTT/REST telemetry integration with performance tuning under real-time load', 10, false],
  ['', 8, false],
  ['PROJECTS', 13, true],
  ['- Fleet Management Dashboard (React, Leaflet, FastAPI, MQTT, PostgreSQL, MongoDB)', 10, false],
  ['- AMR Navigation System (React, Leaflet, Konva, Flask, SQL)', 10, false],
  ['- SHOBOTFLOW no-code Docker deployment platform (React, Vercel)', 10, false],
  ['- SaaS Workspace Platform (React 19, FastAPI, PostgreSQL, JWT) — live on Netlify', 10, false],
  ['', 8, false],
  ['EDUCATION', 13, true],
  ['BE Computer Science, Mahendra Institutions (affiliated to Anna University) — 2025', 11, false],
  ['', 8, false],
  ['SKILLS', 13, true],
  ['React, TypeScript, Vite, Zustand, React Router, Tailwind; Leaflet, Konva;', 10, false],
  ['REST, MQTT, WebSocket, JWT; FastAPI, Flask, PostgreSQL, MongoDB; Docker, CI/CD', 10, false],
]

function escapePdf(s) {
  return s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

let y = 750
let content = ''
for (const [text, size, bold] of LINES) {
  if (!text) {
    y -= size
    continue
  }
  const font = bold ? '/F2' : '/F1'
  content += `BT ${font} ${size} Tf 56 ${y} Td (${escapePdf(text)}) Tj ET\n`
  y -= size + 7
}

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>',
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}endstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
]

let pdf = '%PDF-1.4\n'
const offsets = [0]
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`
}
const xrefAt = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF`

writeFileSync(new URL('../public/Jothishri_B_Resume.pdf', import.meta.url), pdf)
console.log('Wrote public/Jothishri_B_Resume.pdf')
