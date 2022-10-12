import { defaultSEO, extendSEO } from './seo';

const routes = {
  home: {
    label: 'Home',
    path: '/',
    seo: defaultSEO
  },
  about: {
    label: 'About',
    path: '/about',
    seo: extendSEO({
      title: 'About',
      url: 'about'
    })
  },
  blog: {
    label: 'Blog',
    path: '/blog',
    seo: extendSEO({
      title: 'Blog',
      description: 'Thinking out loud about software design and development.',
      image: 'og/writing.png',
      url: 'blog'
    })
  },
  crit: {
    label: 'Crit',
    path: '/crit',
    seo: extendSEO({
      title: 'Crit',
      description: 'A comprehensive product design health report.',
      image: 'og/crit.png',
      url: 'crit'
    })
  },
  hn: {
    label: 'HN',
    path: '/hn',
    seo: extendSEO({
      title: 'HN',
      description: 'A better Hacker News.',
      image: 'og/hn.png',
      url: 'hn'
    })
  },
  bookmarks: {
    label: 'Bookmarks',
    path: '/bookmarks',
    seo: extendSEO({
      title: 'Bookmarks',
      description: 'Internet things, saved for later.',
      image: 'og/bookmarks.png',
      url: 'bookmarks'
    })
  },
  appDissection: {
    label: 'App Dissection',
    path: '/app-dissection',
    seo: extendSEO({
      title: 'App Dissection',
      description: 'In-depth design explorations.',
      image: 'og/app-dissection.png',
      url: 'app-dissection'
    })
  },
  ama: {
    label: 'AMA',
    path: '/ama',
    seo: extendSEO({
      title: 'AMA',
      description: 'Ask me anything.',
      image: 'og/ama.png',
      url: 'ama'
    })
  },
  security: {
    label: 'Security Checklist',
    path: '/security',
    seo: extendSEO({
      title: 'Security Checklist',
      description: 'Staying safe on the internet.',
      image: 'og/security.png',
      url: 'security'
    })
  },
  dashboard: {
    label: 'Dashboard',
    path: '/dashboard',
    seo: extendSEO({
      title: 'Dashboard',
      description: 'Just messing with all things tech.',
      image: 'og/stack.png',
      url: 'dashboard'
    })
  },
  settings: {
    label: 'Settings',
    path: '/settings',
    seo: extendSEO({
      title: 'Settings',
      description: 'Manage your profile.',
      image: 'og/settings.png',
      url: 'settings'
    })
  }
};

export default routes;
