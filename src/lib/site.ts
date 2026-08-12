/**
 * Canonical origin for the site.
 *
 * Must be the www host: the apex domain 301-redirects to www, so listing
 * non-www URLs in the sitemap would point crawlers at redirects.
 */
export const SITE_URL = "https://www.ginandjackbar.com";

/**
 * Date the page content was last meaningfully changed. Bump this when copy,
 * services, or pricing are updated so `lastmod` stays truthful — deliberately
 * not `new Date()`, which would claim every page changed on every deploy.
 */
export const CONTENT_LAST_UPDATED = "2026-08-12";
