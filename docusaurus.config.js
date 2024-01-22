// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
require('dotenv').config()

const organizationName = 'ernieyang09'
const projectName = 'learning-site'

const { NODE_ENV } = process.env

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learning Site',
  tagline: 'Work in progress',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ernieyang09/learning-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ernieyang09/learning-site/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // gtag: {
        //   trackingID: 'G-JW93XB3XXZ',
        // },
        googleTagManager: {
          containerId: 'GTM-5N2FB3B',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Learning Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'leetcodeSidebar',
            position: 'left',
            label: 'Leetcode',
          },
          {
            type: 'docSidebar',
            sidebarId: 'feSidebar',
            position: 'left',
            label: 'FE',
          },
          {
            type: 'docSidebar',
            sidebarId: 'beSidebar',
            position: 'left',
            label: 'BE',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designSystemSidebar',
            position: 'left',
            label: 'Design System',
          },
          {
            type: 'docSidebar',
            sidebarId: 'languagesSystemSidebar',
            position: 'left',
            label: 'Languages',
          },
          {
            type: 'docSidebar',
            sidebarId: 'blockchainSidebar',
            position: 'left',
            label: 'Block chain',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tgSidebar',
            position: 'left',
            label: 'Telegram & Ton',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: '/aboutme',
            label: 'About me',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Doc',
            items: [
              {
                label: 'Leetcode',
                to: '/docs/leetcode/binary-search',
              },
              {
                label: 'FE',
                to: '/docs/fe/browser/browser-type-url',
              },
              {
                label: 'BE',
                to: '/docs/be/DB/common',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity', 'rust'],
      },
    }),
}

if (NODE_ENV === 'production') {
  config.themeConfig.algolia = {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
    contextualSearch: true,
  }
}

module.exports = config
