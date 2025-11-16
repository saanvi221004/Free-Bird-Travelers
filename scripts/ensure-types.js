#!/usr/bin/env node

/**
 * This script ensures .next/types directory exists with minimal required files
 * to prevent TypeScript errors when running npm run dev without building first.
 * These are temporary stubs that will be overwritten by Next.js when it generates the real types.
 */

const fs = require('fs');
const path = require('path');

const nextDir = path.join(process.cwd(), '.next');
const typesDir = path.join(nextDir, 'types');
const appTypesDir = path.join(typesDir, 'app');

// Minimal valid TypeScript stub that satisfies the type system
const typeStub = `// Temporary type stub - Next.js will regenerate this during compilation
// This file exists to prevent TypeScript errors before Next.js generates the real types
export {};
`;

// Ensure .next directory exists
if (!fs.existsSync(nextDir)) {
  fs.mkdirSync(nextDir, { recursive: true });
}

// Ensure types directory exists
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true });
}

// Ensure app types directory exists
if (!fs.existsSync(appTypesDir)) {
  fs.mkdirSync(appTypesDir, { recursive: true });
}

// Create minimal type files for common Next.js files if they don't exist
const typeFiles = [
  'layout.ts',
  'page.ts',
];

typeFiles.forEach(file => {
  const filePath = path.join(appTypesDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, typeStub);
  }
});

// Also ensure the general type files directory exists
const generalTypes = [
  'routes.d.ts',
  'cache-life.d.ts',
  'validator.ts',
];

generalTypes.forEach(file => {
  const filePath = path.join(typesDir, file);
  if (!fs.existsSync(filePath)) {
    // Only create routes.d.ts as a minimal stub - others are less critical
    if (file === 'routes.d.ts') {
      fs.writeFileSync(filePath, `// Temporary routes stub
export type Routes = string;
export type AppRoutes = string;
`);
    }
  }
});

console.log('✓ Type directories and stubs ensured');