export default defineAppConfig({
  title: "InfoNet",
  description: "InfoNet",
  api: "https://infonet.icjia-api.cloud",
  root: "https://infonet.icjia.dev",
  isTranslationEnabled: true,
  homeNewsLimit: 2,
  footerMenu: [
    {
      main: "Debug",
      link: "/debug",
    },
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
    {
      main: "Resources",
      link: "/resources",
    },
    {
      main: "Upgrades",
      link: "/upgrades",
    },
    {
      main: "Publications",
      link: "/publications",
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
      children: [
        // {
        //   "section": "Illinois Statistical Analysis Center (SAC)"
        // },
        {
          title: "About InfoNet",
          link: "/about",
        },
        {
          title: "Frequently Asked Questions (FAQs)",
          link: "/faqs",
        },
        {
          title: "Infonet Partners",
          link: "/partners",
        },
        {
          divider: true,
        },
        {
          title: "News & Updates",
          link: "/news",
        },
        {
          title: "Screenshots",
          link: "/screenshots",
        },
      ],
    },
    {
      main: "Resources",
      children: [
        {
          title: "Data & Publications",
          link: "/publications",
        },
        {
          title: "Upgrades",
          link: "/upgrades",
        },
        {
          title: "User Info & Resources",
          link: "/resources",
        },
      ],
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
      children: [
        // {
        //   "section": "Illinois Statistical Analysis Center (SAC)"
        // },
        {
          title: "About InfoNet",
          link: "/about",
        },
        {
          title: "FAQs",
          link: "/faqs",
        },

        {
          title: "Infonet Partners",
          link: "/partners",
        },
        {
          title: "News & Updates",
          link: "/news",
        },
        {
          title: "Screenshots",
          link: "/screenshots",
        },
      ],
    },

    {
      main: "Resources",
      children: [
        {
          title: "Data & Publications",
          link: "/publications",
        },
        {
          title: "Upgrades",
          link: "/upgrades",
        },
        {
          title: "User Info & Resources",
          link: "/resources",
        },
      ],
    },
  ],
});
