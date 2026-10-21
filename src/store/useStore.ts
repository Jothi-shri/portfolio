import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'dark' | 'light'

interface PortfolioState {
  theme: Theme
  projectFilter: string
  setTheme: (t: Theme) => void
  toggleTheme: () => void
  setProjectFilter: (f: string) => void
}

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('jb-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

export const useStore = create<PortfolioState>()(
  persist(
    (set) => ({
      theme: initialTheme(),
      projectFilter: 'All',
      setTheme: (theme) => {
        applyTheme(theme)
        set({ theme })
      },
      toggleTheme: () =>
        set((s) => {
          const theme: Theme = s.theme === 'dark' ? 'light' : 'dark'
          applyTheme(theme)
          return { theme }
        }),
      setProjectFilter: (projectFilter) => set({ projectFilter }),
    }),
    {
      name: 'jb-portfolio',
      partialize: (s) => ({ theme: s.theme, projectFilter: s.projectFilter }),
    },
  ),
)
