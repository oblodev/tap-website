/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://www.tierarztpraxis-quehenberger.at/",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
