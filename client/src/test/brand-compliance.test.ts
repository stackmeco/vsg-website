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

  describe('Standards page v3.0 compliance', () => {
    const standardsPath = path.join(process.cwd(), 'client/src/pages/Standards.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(standardsPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('We encode guardrails before we write code.');
    });

    it('should have "Why standards exist here" section', () => {
      expect(content).toContain('Why standards exist here');
      expect(content).toContain('Prevent quiet drift');
      expect(content).toContain('Name stewards and limits');
      expect(content).toContain('Make behavior inspectable');
    });

    it('should have "What our standards cover" section with Truth/Capital/Dignity', () => {
      expect(content).toContain('What our standards cover');
      expect(content).toContain('Truth standards');
      expect(content).toContain('Capital standards');
      expect(content).toContain('Dignity standards');
    });

    it('should have "Standards and the three questions" section', () => {
      expect(content).toContain('Standards and the three questions');
    });

    it('should have "How standards show up in ventures" section', () => {
      expect(content).toContain('How standards show up in ventures');
      expect(content).toContain('In treasury work');
      expect(content).toContain('In grading flows');
      expect(content).toContain('In uniqueness checks');
    });

    it('should have "How we use AI inside standards" section', () => {
      expect(content).toContain('How we use AI inside standards');
      expect(content).toContain('Monitoring and alerts');
      expect(content).toContain('Simulations and drills');
      expect(content).toContain('Human veto preserved');
    });

    it('should have "What these standards are / are not" section', () => {
      expect(content).toContain('What these standards are / are not');
      expect(content).toContain('Our standards are');
      expect(content).toContain('Our standards are not');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not investment, legal, tax, or compliance advice');
    });

    it('should have cross-links to ventures, approach, and insights', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/insights"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-why-standards',
        'section-what-standards-cover',
        'section-three-questions',
        'section-ventures',
        'section-ai-standards',
        'section-is-not',
        'section-cross-links',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Ventures page v3.0 compliance', () => {
    const venturesPath = path.join(process.cwd(), 'client/src/pages/Ventures.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(venturesPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Each venture is a proof of how we think.');
    });

    it('should have correct domain labels for ventures', () => {
      expect(content).toContain('Capital · Venture');
      expect(content).toContain('Truth · Venture');
      expect(content).toContain('Dignity · Venture');
    });

    it('should have "How these ventures fit together" section', () => {
      expect(content).toContain('How these ventures fit together');
    });

    it('should have all three ventures defined correctly', () => {
      expect(content).toContain('slug: "helios"');
      expect(content).toContain('slug: "lumina"');
      expect(content).toContain('slug: "uniqueness"');
    });

    it('should have correct venture taglines', () => {
      expect(content).toContain('Treasury execution under explicit constraints.');
      expect(content).toContain('Physics-aware grading infrastructure.');
      expect(content).toContain('Personhood without exposure.');
    });

    it('should have primary and secondary domains', () => {
      expect(content).toContain('primaryDomain: "Capital"');
      expect(content).toContain('primaryDomain: "Truth"');
      expect(content).toContain('primaryDomain: "Dignity"');
      expect(content).toContain('secondaryDomains:');
    });

    it('should have internal-first note section', () => {
      expect(content).toContain('section-internal-first');
      expect(content).toContain('We run these ventures on our own balance sheet and infrastructure first');
    });

    it('should have "What ventures are / are not" section', () => {
      expect(content).toContain('What ventures are / are not');
      expect(content).toContain('Ventures are');
      expect(content).toContain('Ventures are not');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not investment, legal, tax, or compliance advice');
    });

    it('should have cross-links to approach, process, and insights', () => {
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/process"');
      expect(content).toContain('href="/insights"');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-fit-together',
        'section-ventures-grid',
        'section-internal-first',
        'section-what-ventures-are',
        'section-cross-links',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Overview page v3.0 compliance', () => {
    const overviewPath = path.join(process.cwd(), 'client/src/pages/Overview.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(overviewPath, 'utf-8');
    });

    it('should have correct canon line in hero heading', () => {
      expect(content).toContain('We engineer the infrastructure of verifiable autonomy.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Verifiable Systems Group"');
    });

    it('should have "Three questions we ask about every system" section', () => {
      expect(content).toContain('Three questions we ask about every system');
    });

    it('should have Truth, Capital, Dignity questions defined', () => {
      expect(content).toContain('label: "Truth"');
      expect(content).toContain('label: "Capital"');
      expect(content).toContain('label: "Dignity"');
    });

    it('should have "What VSG is" section', () => {
      expect(content).toContain('What VSG is');
      expect(content).toContain('AI-native studio');
      expect(content).toContain('Cryptography-grounded');
      expect(content).toContain('Internal-first and non-custodial');
    });

    it('should have "Ventures: proofs of how we think" section', () => {
      expect(content).toContain('Ventures: proofs of how we think');
    });

    it('should have correct venture meta lines', () => {
      expect(content).toContain('Helios · Capital · Venture');
      expect(content).toContain('Lumina · Truth · Venture');
      expect(content).toContain('Uniqueness Engine · Dignity · Venture');
    });

    it('should have "How we build" section with approach and process', () => {
      expect(content).toContain('How we build');
      expect(content).toContain('six-stage runway');
      expect(content).toContain('href: "/approach"');
      expect(content).toContain('href: "/process"');
    });

    it('should have "Governance and standards" section', () => {
      expect(content).toContain('Governance and standards');
      expect(content).toContain('href="/standards"');
    });

    it('should have "Field notes" section', () => {
      expect(content).toContain('Field notes');
      expect(content).toContain('href="/insights"');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-three-questions',
        'section-what-vsg-is',
        'section-ventures',
        'section-how-we-build',
        'section-governance',
        'section-field-notes',
        'section-talk-studio',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });
});
