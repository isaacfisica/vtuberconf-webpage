import { readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const membersDir = join(dirname(fileURLToPath(import.meta.url)), '../src/lib/members');

const names = readdirSync(membersDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => f.replace('.ts', ''))
  .sort();

const lines = [
  `import type { Member } from '../types';`,
  ``,
  ...names.map(n => `import ${n} from './${n}';`),
  ``,
  `export const MEMBERS: Member[] = [${names.join(', ')}];`,
  ``,
];

writeFileSync(join(membersDir, 'index.ts'), lines.join('\n'));
console.log(`[gen-members] ${names.join(', ')}`);
