# Next.js 15 App Router Dynamic Route Bug

This repository demonstrates a bug encountered in Next.js 15's App Router when using dynamic routes.  The initial render works correctly, but subsequent navigation (refresh or direct access) to the dynamic route causes unexpected behavior, such as a 404 error or rendering of the wrong content.

## Bug Description

The provided `pages/index.js` is a minimal example. The issue arises with any dynamic route in the app directory structure that works initially but fails when the page is refreshed or accessed directly.