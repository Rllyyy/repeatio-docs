// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// TODO https://docusaurus.io/blog/releases/3.0#esm-ts-configs

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Repeatio - Docs",
  tagline: "These are the docs for Repeatio",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Rllyyy", // Usually your GitHub org/user name.
  projectName: "repeatio-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: "https://github.com/Rllyyy/repeatio-docs/tree/main/",
          /* editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: false /* {
          showReadingTime: true,
          editUrl: "https://github.com/Rllyyy/repeatio-docs/tree/main/",
        }, */,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "repeatio",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "right",
          //   label: "Tutorial",
          // },
          /* Uncomment this if you want to link the blog */
          /* { to: "/blog", label: "Blog", position: "left" }, */
          {
            href: "https://www.repeatio.de",
            label: "Start Learning",
            position: "right",
          },
          {
            href: "https://github.com/Rllyyy/repeatio-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "repeatio.de",
                href: "https://www.repeatio.de",
              },
              {
                label: "GitHub - Repeatio",
                href: "https://github.com/Rllyyy/repeatio",
              },
              {
                label: "GitHub - Docs ",
                href: "https://github.com/Rllyyy/repeatio-docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Personal Website",
                href: "https://www.niklasfischer.dev",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
