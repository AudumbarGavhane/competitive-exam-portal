# AI Coding Agent Guidelines for Next.js

This project uses modern **Next.js (App Router)** and **React**. Follow these rules strictly when generating or refactoring code to prevent compilation errors and layout breakage.

## 1. Routing & Architecture
* **App Router Only:** All routes live inside `src/app/`. Do NOT use `src/pages/`.
* **Server Components by Default:** All files in `src/app/` are React Server Components (RSC) by default. Do not add hooks (`useState`, `useEffect`) here.
* **Client Component Boundary:** If a component requires user interaction (buttons, inputs, local state, or client hooks), you MUST place the `"use-client"` directive at the absolute top of the file.

## 2. Dynamic Routing Syntax
* Dynamic route parameters must be accessed asynchronously.
* **Good Syntax (Next.js 14/15+):**
  ```tsx
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // ...
  }
<!-- END:nextjs-agent-rules -->
