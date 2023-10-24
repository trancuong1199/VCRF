import { createRouter, createWebHistory } from 'vue-router';
const loadView = (view) => import(`@/views/${view}.vue`);
const loadChildrenView = (parent, child) =>
  import(`@/components/pages/${parent}/${child}.vue`);
const loadDetails = (details) => import(`@/components/details/${details}.vue`);
const routes = [
  {
    path: '/',
    name: 'App',
    component: () => loadView('_main'),
    children: [
      {
        path: 'home',
        alias: '/',
        name: 'Home',
        component: () => loadView('home'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => loadView('about'),
      },
      {
        path: 'genre',
        name: 'Genre',
        component: () => loadView('genre'),
        redirect: { name: 'GenreCanoeing'},
        children: [
          {
            path: 'genre-canoeing',
            name: 'GenreCanoeing',
            component: () => loadChildrenView('genre', '_genre-canoeing'),
          },
          {
            path: 'genre-rowing',
            name: 'GenreRowing',
            component: () => loadChildrenView('genre', '_genre-rowing'),
          },
          {
            path: 'genre-sailing',
            name: 'GenreSailing',
            component: () => loadChildrenView('genre', '_genre-sailing'),
          },
        ],
      },
      {
        path: 'event',
        name: 'Event',
        component: () => loadView('event'),
        redirect: { name: 'EventSchedule' },
        children: [
          {
            path: 'event-schedule',
            name: 'EventSchedule',
            component: () => loadChildrenView('event', '_event-schedule'),
          },
          {
            path: 'upcoming-events',
            name: 'UpcomingEvents',
            component: () => loadChildrenView('event', '_upcoming-events'),
          },
          {
            path: 'upcoming-events/:id',
            name: 'UpcomingEventsDetails',
            component: () => loadDetails('_upcoming-events-details'),
          },
          {
            path: 'competition-results',
            name: 'CompetitionResults',
            component: () => loadChildrenView('event', '_competition-results'),
          },
          {
            path: 'competition-results/:id',
            name: 'CompetitionsResultsDetails',
            component: () => loadDetails('_competition-results-details'),
          },
          {
            path: 'athlete-ranking',
            name: 'AthleteRanking',
            component: () => loadChildrenView('event', '_athlete-ranking'),
          },
        ],
      },
      {
        path: 'news',
        name: 'News',
        component: () => loadView('news'),
        redirect: { name: 'Domestic' },
        children: [
          {
            path: 'domestic',
            name: 'Domestic',
            component: () => loadChildrenView('news', '_domestic'),
          },
          {
            path: 'international',
            name: 'International',
            component: () => loadChildrenView('news', '_international'),
          },
          {
            path: ':category/:id',
            name: 'NewsDetails',
            component: () => loadDetails('_news-details'),
          },
        ],
      },
      {
        path: 'member',
        name: 'Member',
        component: () => loadView('member'),
        redirect: { name: 'Personal' },
        children: [
          {
            path: 'personal',
            name: 'Personal',
            component: () => loadChildrenView('member', '_personal'),
          },
          {
            path: 'organization',
            name: 'Organization',
            component: () => loadChildrenView('member', '_organization'),
          },
          {
            path: 'personal-details/:id',
            name: 'PersonalDetails',
            component: () => loadDetails('_personal-details'),
          },
          {
            path: 'organization-details/:id',
            name: 'OrganizationDetails',
            component: () => loadDetails('_organization-details'),
          },
        ],
      },
      {
        path: 'library',
        name: 'Library',
        component: () => loadView('library'),
        redirect: { name: 'LegalDocument' },
        children: [
          {
            path: 'legal-document',
            name: 'LegalDocument',
            component: () => loadChildrenView('library', '_legal-doc'),
          },
          {
            path: 'law-regulations',
            name: 'LawRegulations',
            component: () => loadChildrenView('library', '_law-regulations'),
          },
          {
            path: 'references',
            name: 'References',
            component: () => loadChildrenView('library', '_references'),
          },
          {
            path: 'photo-gallery',
            name: 'PhotoGallery',
            component: () => loadChildrenView('library', '_photo-gallery'),
          },
          {
            path: 'video-gallery',
            name: 'VideoGallery',
            component: () => loadChildrenView('library', '_video-gallery'),
          },
        ],
      },
      {
        path: 'photo-gallery/:id',
        name: 'PhotoGalleryDetails',
        component: () => loadDetails('_photo-details'),
      },
      {
        path: 'video-gallery/:id',
        name: 'VideoGalleryDetails',
        component: () => loadDetails('_video-details'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => loadView('contact'),
        redirect: { name: 'Federation' },
        children: [
          {
            path: 'federation',
            name: 'Federation',
            component: () => loadChildrenView('contact', '_federation'),
          },
          {
            path: 'alliance',
            name: 'Alliance',
            component: () => loadChildrenView('contact', '_alliance'),
          },
        ],
      },
      {
        path: 'search',
        name: 'Search',
        component: () => loadView('search'),
      },
      {
        path: ':catchAll(.*)*',
        name: 'NotFound',
        component: () => loadView('not-found'),
      },
    ],
  },
];

const router = createRouter({
  linkActiveClass: 'vue-active-class',
  history: createWebHistory(import.meta.VITE_BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});
export default router;
