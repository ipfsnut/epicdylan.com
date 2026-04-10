/**
 * Post-build script: create pre-rendered HTML for each blog post with
 * OG meta tags baked in, so social crawlers see the right preview.
 *
 * Runs AFTER `react-scripts build` has generated build/index.html.
 */
import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/data/blogPosts';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.join(PROJECT_ROOT, 'build');
const INDEX_HTML_PATH = path.join(BUILD_DIR, 'index.html');
const SITE_URL = 'https://epicdylan.com';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildOgTags(post: { slug: string; title: string; description: string }): string {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = `${SITE_URL}/og/${post.slug}.png`;
  const title = escapeHtml(post.title);
  const description = escapeHtml(post.description);

  return `
    <title>${title} — epicdylan.com</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
  `.trim();
}

function injectMetaTags(html: string, ogTags: string): string {
  // Remove the default <title>
  html = html.replace(/<title>[^<]*<\/title>/gi, '');

  // Remove existing og: and twitter: meta tags
  html = html.replace(/<meta\s+property=["']og:[^"']*["'][^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name=["']description["'][^>]*\/?>/gi, '');

  // Clean up leftover empty lines
  html = html.replace(/\n\s*\n/g, '\n');

  // Inject right after <head> opening
  return html.replace(/<head>/i, `<head>\n    ${ogTags}`);
}

function main() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error(`Error: ${INDEX_HTML_PATH} not found. Run 'react-scripts build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');
  console.log(`Pre-rendering ${blogPosts.length} blog post pages...`);

  for (const post of blogPosts) {
    const ogTags = buildOgTags(post);
    const html = injectMetaTags(baseHtml, ogTags);

    const outDir = path.join(BUILD_DIR, 'blog', post.slug);
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'index.html');
    fs.writeFileSync(outPath, html);
    console.log(`  ✓ blog/${post.slug}/index.html`);
  }

  // Also pre-render the blog index page with a default OG image
  const indexOgTags = `
    <title>Blog — epicdylan.com</title>
    <meta name="description" content="Development log, essays, and experiments by Dylan." />
    <meta property="og:title" content="Blog — epicdylan.com" />
    <meta property="og:description" content="Development log, essays, and experiments by Dylan." />
    <meta property="og:image" content="${SITE_URL}/og/${blogPosts[0]?.slug || 'default'}.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_URL}/blog" />
    <meta name="twitter:card" content="summary_large_image" />
  `.trim();

  const blogIndexHtml = injectMetaTags(baseHtml, indexOgTags);
  const blogIndexDir = path.join(BUILD_DIR, 'blog');
  fs.mkdirSync(blogIndexDir, { recursive: true });
  fs.writeFileSync(path.join(blogIndexDir, 'index.html'), blogIndexHtml);
  console.log(`  ✓ blog/index.html`);

  console.log('Done.');
}

main();
