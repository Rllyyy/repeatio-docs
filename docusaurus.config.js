// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

export default async function createConfigAsync() {
  const { themes } = await import("prism-react-renderer");
  const math = await import("remark-math");
  const katex = await import("rehype-katex");

  const lightTheme = themes.github;
  const darkTheme = themes.dracula;

  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: "Repeatio - Docs",
    tagline: "These are the docs for Repeatio",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://rllyyy.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/repeatio-docs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "rllyyy",
    projectName: "repeatio-docs",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
      defaultLocale: "de",
      locales: ["de"],
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
          },
          blog: false,
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
            alt: "The logo of Repeatio, which is a side view of a brain",
            src: "img/logo.svg",
          },
          items: [
            {
              href: "https://www.repeatio.de",
              label: "repeatio.de",
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
              title: "Mehr",
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
          theme: lightTheme,
          darkTheme: darkTheme,
        },
      }),
  };

  return config;
}
