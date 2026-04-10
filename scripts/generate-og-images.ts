import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/data/blogPosts';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const FONTS_DIR = path.join(PROJECT_ROOT, 'public/fonts');
const OUT_DIR = path.join(PROJECT_ROOT, 'public/og');

const fontRegular = fs.readFileSync(path.join(FONTS_DIR, 'JetBrainsMono-Regular.ttf'));
const fontBold = fs.readFileSync(path.join(FONTS_DIR, 'JetBrainsMono-Bold.ttf'));

const WIDTH = 1200;
const HEIGHT = 630;

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s;
}

async function generate(post: { slug: string; title: string; date: string; description: string }) {
  // Dynamic font sizing: longer titles get smaller text
  const titleLen = post.title.length;
  const titleSize = titleLen > 60 ? 56 : titleLen > 40 ? 68 : 82;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: `${WIDTH}px`,
          height: `${HEIGHT}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          backgroundColor: '#000000',
          color: '#00ff41',
          fontFamily: 'JetBrains Mono',
          position: 'relative',
        },
        children: [
          // Top bar: site identifier
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                fontSize: '22px',
                opacity: 0.6,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#00ff41',
                    },
                  },
                },
                {
                  type: 'div',
                  props: { children: '> epicdylan.com // dev log' },
                },
              ],
            },
          },
          // Title
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                flex: 1,
                justifyContent: 'center',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: `${titleSize}px`,
                      fontWeight: 700,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    },
                    children: truncate(post.title, 90),
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '22px',
                      opacity: 0.5,
                      lineHeight: 1.4,
                      maxWidth: '900px',
                    },
                    children: truncate(post.description, 160),
                  },
                },
              ],
            },
          },
          // Bottom bar: date + divider + meta
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                borderTop: '1px solid rgba(0, 255, 65, 0.15)',
                paddingTop: '24px',
                fontSize: '20px',
                opacity: 0.5,
                letterSpacing: '0.05em',
              },
              children: [
                { type: 'div', props: { children: post.date } },
                { type: 'div', props: { style: { opacity: 0.3 }, children: '|' } },
                { type: 'div', props: { children: 'BASE MAINNET' } },
                {
                  type: 'div',
                  props: {
                    style: {
                      marginLeft: 'auto',
                      fontWeight: 700,
                      color: '#00ff41',
                      opacity: 0.8,
                    },
                    children: '$EPIC',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: 'JetBrains Mono', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: fontBold, weight: 700, style: 'normal' },
      ],
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } });
  const png = resvg.render().asPng();

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, `${post.slug}.png`);
  fs.writeFileSync(outPath, png);
  console.log(`  ✓ og/${post.slug}.png (${(png.length / 1024).toFixed(1)}kb)`);
}

async function main() {
  console.log(`Generating OG images for ${blogPosts.length} posts...`);
  for (const post of blogPosts) {
    await generate(post);
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
