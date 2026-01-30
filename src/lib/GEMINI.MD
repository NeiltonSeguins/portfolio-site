# React Best Practices — Project Guidance

This project follows React best practices inspired by Vercel’s
“Introducing React Best Practices”.

These rules exist to guide automated code generation, refactoring,
and PR suggestions made by Gemini CLI or Claude Code.

The goal is to optimize **real-world performance**, not micro-optimizations.

---

## Core Principles (Must Always Be Respected)

1. **Do not wait if you don’t need to**

   - Avoid unnecessary `await`
   - Prevent async waterfalls
   - Parallelize independent async work

2. **Do not do work earlier than necessary**

   - Delay computation until it is actually required
   - Prefer conditional execution over eager execution

3. **Do not repeat work that can be done once**

   - Cache results when possible
   - Deduplicate data fetching
   - Avoid recomputation across renders or requests

4. **Do not do work that is not necessary**
   - Every computation, render, and import has a cost
   - If the result is not used, the work should not exist

---

## Priority Levels

When suggesting improvements, follow this order of importance:

### 🔴 CRITICAL — Always prioritize

#### 1. Eliminate async waterfalls

- Avoid sequential `await` when operations are independent
- Prefer `Promise.all` or parallel data fetching
- Never block rendering on data that is not immediately required

#### 2. Reduce client bundle size

- Avoid barrel files that import entire modules
- Prefer direct imports
- Use dynamic imports for heavy or optional components

---

### 🟠 HIGH — Strongly recommended

#### 3. Server-side performance

- Deduplicate fetches on the server
- Cache expensive computations
- In Next.js, prefer built-in caching mechanisms when applicable

#### 4. Client-side data fetching

- Avoid duplicate requests for the same data
- Prefer shared caches over local component state
- Do not refetch data unnecessarily on re-renders

---

### 🟡 MEDIUM — Apply when relevant

#### 5. Avoid unnecessary re-renders

- Keep component responsibilities small
- Move state as close as possible to where it is used
- Avoid passing unstable object or function references

⚠️ Do NOT introduce `useMemo`, `useCallback`, or `React.memo`
unless there is a **clear performance problem**.

---

### 🟢 LOW — Nice to have

#### 6. JavaScript micro-optimizations

- Prefer clarity over premature optimization
- Micro-optimizations are acceptable only when backed by evidence

---

## Explicit Anti-Patterns (Avoid)

- Adding `useMemo` or `useCallback` “just in case”
- Optimizing render performance before fixing data loading issues
- Importing entire libraries when only one function is needed
- Performing async work before checking if it is required

---

## Expected Behavior from the AI Assistant

When generating or reviewing code, the assistant should:

- Explain _why_ a change improves real performance
- Prefer deleting unnecessary code over adding abstractions
- Suggest fewer hooks, not more
- Optimize data flow before render flow
- Default to simple, readable React code

If a tradeoff exists, prefer:
**simplicity > abstractions > micro-optimizations**

---

## Summary

Performance problems are usually caused by:

- Too much data
- Too many requests
- Too much JavaScript
- Work done too early or too often

This guide exists to prevent those issues by default.
