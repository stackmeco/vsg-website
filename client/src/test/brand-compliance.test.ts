import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

describe('Brand & Voice Compliance', () => {
  it('should pass brand lint with no banned phrases', () => {
    const result = execSync('node scripts/brandLint.js', { encoding: 'utf-8' });
    expect(result).toContain('Brand lint passed');
  });

  describe('Domain labels are correct', () => {
    const pagesDir = path.join(process.cwd(), 'client/src/pages');
    
    const checkFileForDomains = (filePath: string) => {
      const content = fs.readFileSync(filePath, 'utf-8');
      const oldDomains = ['Signal', 'Value', 'Human'];
      const newDomains = ['Truth', 'Capital', 'Dignity'];
      
      oldDomains.forEach(oldDomain => {
        const regex = new RegExp(`["']${oldDomain}["']\\s*(?:domain|Domain|label|Label)`, 'i');
        if (regex.test(content)) {
          throw new Error(`Found old domain label "${oldDomain}" in ${filePath}`);
        }
      });
      
      return true;
    };

    const getAllTsxFiles = (dir: string): string[] => {
      const files: string[] = [];
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files.push(...getAllTsxFiles(fullPath));
        } else if (entry.name.endsWith('.tsx')) {
          files.push(fullPath);
        }
      }
      
      return files;
    };

    it('should not contain old domain labels (Signal/Value/Human)', () => {
      const files = getAllTsxFiles(pagesDir);
      files.forEach(file => {
        expect(() => checkFileForDomains(file)).not.toThrow();
      });
    });
  });

  describe('Disclaimer presence', () => {
    const venturePages = [
      'client/src/pages/ventures/Lumina.tsx',
      'client/src/pages/ventures/Uniqueness.tsx',
      'client/src/pages/ventures/Helios.tsx',
    ];

    it('should have disclaimers on venture pages', () => {
      venturePages.forEach(pagePath => {
        const fullPath = path.join(process.cwd(), pagePath);
        if (fs.existsSync(fullPath)) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const hasDisclaimer = content.includes('not investment') || 
                               content.includes('not legal') || 
                               content.includes('not tax');
          expect(hasDisclaimer).toBe(true);
        }
      });
    });
  });

  describe('Six-stage runway names', () => {
    const expectedStages = ['Define', 'Validate', 'Build', 'Deploy', 'Evolve', 'Learn'];

    it('should use correct stage names in Approach page', () => {
      const approachPath = path.join(process.cwd(), 'client/src/pages/approach/Approach.tsx');
      const content = fs.readFileSync(approachPath, 'utf-8');
      
      expectedStages.forEach(stage => {
        expect(content).toContain(`"${stage}"`);
      });
    });
  });
});
