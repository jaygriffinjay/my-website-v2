import type { ComponentType } from 'react';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { RunningPage } from './pages/Running/RunningPage';
import { ProjectsPage } from './pages/Projects/ProjectsPage';
import { ThemeEditorPage } from './pages/ThemeEditor/ThemeEditorPage';
import { DocsPage } from './pages/Docs/DocsPage';
import { DocsPage2 } from './pages/Docs/DocsPage2';
import { DocsPage3 } from './pages/Docs/DocsPage3';
import { DevLinksPage } from './pages/Dev/DevLinksPage';

export interface Route {
  path: string;
  component: ComponentType;
  label: string;
}

// Production routes
export const productionRoutes: Route[] = [
  {
    path: '/',
    component: HomePage,
    label: 'Home',
  },
  {
    path: '/about',
    component: AboutPage,
    label: 'About',
  },
  {
    path: '/running',
    component: RunningPage,
    label: 'Running',
  },
  {
    path: '/projects',
    component: ProjectsPage,
    label: 'Projects',
  },
];

// Dev routes - only populated in dev mode
export const devRoutes: Route[] = import.meta.env.DEV ? [
  {
    path: '/dev',
    component: DevLinksPage,
    label: 'Dev Links',
  },
  {
    path: '/theme-editor',
    component: ThemeEditorPage,
    label: 'Theme Editor',
  },
  {
    path: '/docs',
    component: DocsPage,
    label: 'Documentation',
  },
  {
    path: '/docs/build-log',
    component: DocsPage2,
    label: 'Build Log',
  },
  {
    path: '/docs/layout-test',
    component: DocsPage3,
    label: 'Layout Components',
  },
] : [];

// All routes combined
export const routes: Route[] = [...productionRoutes, ...devRoutes];