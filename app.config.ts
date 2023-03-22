export default defineAppConfig({
  title: "Illinois Domestic Violence Fatality Review",
  description: "Illinois Domestic Violence Fatality Review",
  api: "https://dvfr.icjia-api.cloud",
  root: "https://dvfr.illinois.gov",
  isTranslationEnabled: true,
  footerMenu: [
    {
      main: "Home",
      link: "/",
    },
    {
      main: "About",
      link: "/about",
    },
    {
      main: "Contact",
      link: "/contact",
    },
    {
      main: "Meetings",
      link: "/meetings",
    },

    {
      main: "Privacy",
      link: "/privacy",
    },

    {
      main: "Resources",
      link: "/resources",
    },

    {
      main: "Search",
      link: "/search",
    },
    {
      main: "Translate",
      link: "/translate",
    },
  ],

  navMenu: [
    {
      main: "About",
      link: "/about",
    },
    {
      main: "Meetings",
      link: "/meetings",
    },

    {
      main: "Resources",
      link: "/resources",
    },
    // {
    //   main: "Contact",
    //   link: "/contact",
    // },
  ],
});
