export default defineAppConfig({
  title: "InfoNet",
  description: "InfoNet",
  api: "https://infonet.icjia-api.cloud",
  root: "https://infonet.illinois.gov",
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
      main: "FAQs",
      link: "/faqs",
    },
    {
      main: "News & Updates",
      link: "/news",
    },
    // {
    //   main: "Meetings",
    //   link: "/meetings",
    // },

    // {
    //   main: "Privacy",
    //   link: "/privacy",
    // },

    // {
    //   main: "Resources",
    //   link: "/resources",
    // },

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
      main: "Home",
      link: "/",
    },
    {
      main: "About",
      link: "/about",
    },

    {
      main: "News & Updates",
      link: "/news",
    },
  ],
  sidebarMenu: [
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
      main: "FAQs",
      link: "/faqs",
    },
  ],
});
