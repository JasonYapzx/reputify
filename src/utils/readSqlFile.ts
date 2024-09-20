import fs from 'fs';
import path from 'path';

// Read the SQL file and return its contents as a string
export function readSqlFile(filePath: string): string {
  const absolutePath = path.resolve(process.cwd(), filePath); // Resolve the absolute path
  return fs.readFileSync(absolutePath, { encoding: 'utf-8' });
}