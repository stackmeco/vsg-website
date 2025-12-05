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

  describe('Uniqueness Engine page v3.0 compliance', () => {
    const uniquenessPath = path.join(process.cwd(), 'client/src/pages/ventures/Uniqueness.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(uniquenessPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Personhood without exposure.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Uniqueness Engine"');
    });

    it('should have correct overline with domain label', () => {
      expect(content).toContain('Uniqueness Engine · Dignity · Venture');
    });

    it('should have "The problem Uniqueness Engine exists to solve" section', () => {
      expect(content).toContain('The problem Uniqueness Engine exists to solve');
    });

    it('should have "What the Uniqueness Engine is" section with context-bound proofs', () => {
      expect(content).toContain('What the Uniqueness Engine is');
      expect(content).toContain('Uniqueness, not biography');
      expect(content).toContain('Context-bound proofs');
      expect(content).toContain('Infrastructure role');
    });

    it('should have "Uniqueness Engine under Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('Uniqueness Engine under Truth, Capital, and Dignity');
    });

    it('should have "How the Uniqueness Engine uses AI" section', () => {
      expect(content).toContain('How the Uniqueness Engine uses AI');
      expect(content).toContain('Pattern detection');
      expect(content).toContain('Risk scoring under constraints');
      expect(content).toContain('Escalation, not judgment');
    });

    it('should have "What the Uniqueness Engine is / is not" section', () => {
      expect(content).toContain('What the Uniqueness Engine is / is not');
    });

    it('should have "Where the Uniqueness Engine sits in the broader studio" section', () => {
      expect(content).toContain('Where the Uniqueness Engine sits in the broader studio');
    });

    it('should have cross-links to ventures, approach, and standards', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/standards"');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not legal, compliance, or regulatory advice');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-problem',
        'section-what-uniqueness-is',
        'section-domains',
        'section-ai',
        'section-is-is-not',
        'section-studio-context',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Lumina page v3.0 compliance', () => {
    const luminaPath = path.join(process.cwd(), 'client/src/pages/ventures/Lumina.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(luminaPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Physics-aware grading infrastructure.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Lumina"');
    });

    it('should have correct overline with domain label', () => {
      expect(content).toContain('Lumina · Truth · Venture');
    });

    it('should have "The problem Lumina exists to solve" section', () => {
      expect(content).toContain('The problem Lumina exists to solve');
    });

    it('should have "What Lumina is" section with sensor-level rails', () => {
      expect(content).toContain('What Lumina is');
      expect(content).toContain('Sensor-level rails');
      expect(content).toContain('Evidence engine');
      expect(content).toContain('Infrastructure, not a marketplace');
    });

    it('should have "Lumina under Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('Lumina under Truth, Capital, and Dignity');
    });

    it('should have "How Lumina uses AI" section', () => {
      expect(content).toContain('How Lumina uses AI');
      expect(content).toContain('Computer vision');
      expect(content).toContain('Anomaly detection');
      expect(content).toContain('Replayable, not magical');
    });

    it('should have "What Lumina is / is not" section', () => {
      expect(content).toContain('What Lumina is / is not');
    });

    it('should have "Where Lumina sits in the broader studio" section', () => {
      expect(content).toContain('Where Lumina sits in the broader studio');
    });

    it('should have cross-links to ventures, process, and insights', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/process"');
      expect(content).toContain('href="/insights"');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not investment, legal, tax, or pricing advice');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-problem',
        'section-what-lumina-is',
        'section-domains',
        'section-ai',
        'section-is-is-not',
        'section-studio-context',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Ventures index page v3.0 compliance', () => {
    const venturesPath = path.join(process.cwd(), 'client/src/pages/Ventures.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(venturesPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Ventures, tested on our balance sheet first.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Ventures"');
    });

    it('should have correct overline', () => {
      expect(content).toContain('Ventures · Studio');
    });

    it('should have "Three questions, three proof points" section', () => {
      expect(content).toContain('Three questions, three proof points.');
      expect(content).toContain('what can be trusted');
      expect(content).toContain('how value should move');
      expect(content).toContain('how people can participate without overexposure');
    });

    it('should have correct venture data for Helios', () => {
      expect(content).toContain('Capital · Internal venture');
      expect(content).toContain('Treasury execution under explicit constraints.');
    });

    it('should have correct venture data for Lumina', () => {
      expect(content).toContain('Truth · Venture');
      expect(content).toContain('Physics-aware grading infrastructure.');
    });

    it('should have correct venture data for Uniqueness Engine', () => {
      expect(content).toContain('Dignity · Venture');
      expect(content).toContain('Personhood without exposure.');
    });

    it('should have warmth line in hero', () => {
      expect(content).toContain("You shouldn't have to trust untested rails");
    });

    it('should have supporting text below grid', () => {
      expect(content).toContain('We treat each venture as a live proof');
    });

    it('should have "What ventures are / are not" section', () => {
      expect(content).toContain('What ventures are / are not');
    });

    it('should have cross-links to approach, process, and insights', () => {
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/process"');
      expect(content).toContain('href="/insights"');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not investment, legal, tax, or compliance advice');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have NextStepBlock pointing to approach', () => {
      expect(content).toContain('<NextStepBlock');
      expect(content).toContain('nextPage="Approach"');
      expect(content).toContain('href="/approach"');
      expect(content).toContain('six-stage runway');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-three-questions',
        'section-ventures-grid',
        'section-supporting-text',
        'section-what-ventures-are',
        'section-cross-links',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Helios page v3.0 compliance', () => {
    const heliosPath = path.join(process.cwd(), 'client/src/pages/ventures/Helios.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(heliosPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Treasury execution under explicit constraints.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Helios"');
    });

    it('should have correct overline with domain label', () => {
      expect(content).toContain('Helios · Capital · Venture');
    });

    it('should have "The problem Helios exists to solve" section', () => {
      expect(content).toContain('The problem Helios exists to solve');
    });

    it('should have "What Helios is" section with internal-first emphasis', () => {
      expect(content).toContain('What Helios is');
      expect(content).toContain('Execution engine');
      expect(content).toContain('Constraint-first design');
      expect(content).toContain('Internal-first');
    });

    it('should have "Helios under Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('Helios under Truth, Capital, and Dignity');
    });

    it('should have "How Helios uses AI" section', () => {
      expect(content).toContain('How Helios uses AI');
      expect(content).toContain('Monitoring');
      expect(content).toContain('Simulation');
      expect(content).toContain('Escalation, not automation');
    });

    it('should have "What Helios is / is not" section', () => {
      expect(content).toContain('What Helios is / is not');
    });

    it('should have "Where Helios sits in the broader studio" section', () => {
      expect(content).toContain('Where Helios sits in the broader studio');
    });

    it('should have cross-links to ventures, process, and standards', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/process"');
      expect(content).toContain('href="/standards"');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not investment, legal, tax, or compliance advice');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-problem',
        'section-what-helios-is',
        'section-domains',
        'section-ai',
        'section-is-is-not',
        'section-studio-context',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Insights page v3.0 compliance', () => {
    const insightsPath = path.join(process.cwd(), 'client/src/pages/Insights.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(insightsPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Field notes from verifiable systems.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Insights"');
    });

    it('should have "you shouldn\'t need hype" line in hero', () => {
      expect(content).toContain("You shouldn't need hype to understand how a system behaves");
    });

    it('should have "What you\'ll find here" section', () => {
      expect(content).toContain("What you'll find here");
    });

    it('should have domain-tagged content examples', () => {
      expect(content).toContain('Helios: treasury drills, stress paths, exposure patterns.');
      expect(content).toContain('Lumina: grading flows, provenance issues, sensor behavior.');
      expect(content).toContain('Uniqueness Engine: personhood trade-offs, friction, revocation.');
    });

    it('should have "What counts as an insight" section', () => {
      expect(content).toContain('What counts as an insight');
    });

    it('should have "How to read these" section', () => {
      expect(content).toContain('How to read these');
    });

    it('should have "What Insights are / are not" section', () => {
      expect(content).toContain('What Insights are / are not');
    });

    it('should have proper empty state copy', () => {
      expect(content).toContain('Field notes are still being written.');
    });

    it('should have cross-links to ventures, approach, and standards', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/standards"');
    });

    it('should have proper disclaimer', () => {
      expect(content).toContain('not investment, legal, tax, or compliance advice');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-what-youll-find',
        'section-what-counts',
        'section-insights-list',
        'section-how-to-read',
        'section-what-insights-are',
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

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Verifiable Systems Group"');
    });

    it('should have canon hero heading', () => {
      expect(content).toContain('The infrastructure of verifiable autonomy.');
    });

    it('should have v3.0 hero overline', () => {
      expect(content).toContain('Verifiable Systems Group · Studio');
    });

    it('should have "Three questions we organize around" section', () => {
      expect(content).toContain('Three questions we organize around');
      expect(content).toContain('Instead of generic pillars');
    });

    it('should have Truth, Capital, Dignity questions with titles', () => {
      expect(content).toContain('Truth · What can be trusted?');
      expect(content).toContain('Capital · How should value move?');
      expect(content).toContain('Dignity · How do people participate?');
    });

    it('should have "What VSG is" section with canonical copy', () => {
      expect(content).toContain('What VSG is');
      expect(content).toContain('infrastructure-grade by design');
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

    it('should have "How the studio fits together" section', () => {
      expect(content).toContain('How the studio fits together');
      expect(content).toContain("don't ship in isolation");
      expect(content).toContain('six-stage runway');
    });

    it('should have all five studio cards (Ventures, Approach, Process, Standards, Insights)', () => {
      expect(content).toContain('href: "/ventures"');
      expect(content).toContain('href: "/approach"');
      expect(content).toContain('href: "/process"');
      expect(content).toContain('href: "/standards"');
      expect(content).toContain('href: "/insights"');
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
        'section-talk-studio',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('Connect page v3.0 compliance', () => {
    const connectPath = path.join(process.cwd(), 'client/src/pages/Connect.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(connectPath, 'utf-8');
    });

    it('should have correct v3.0 hero heading', () => {
      expect(content).toContain('Talk to us when verification matters.');
    });

    it('should have correct v3.0 overline format', () => {
      expect(content).toContain('Connect · Verifiable Systems Group');
    });

    it('should have v3.0 hero body copy about limited conversations', () => {
      expect(content).toContain("We're a studio for verifiable autonomy, not a high-volume agency");
      expect(content).toContain('core problem is structural');
    });

    it('should reference Truth, Capital, and Dignity in expectations', () => {
      expect(content).toContain('Truth, Capital, or Dignity');
    });

    it('should have expectations section with advice disclaimer', () => {
      expect(content).toContain('What to expect');
      expect(content).toContain("can't respond to every inquiry");
      expect(content).toContain('investment, legal, or tax advice');
    });

    it('should have sidebar guidance text', () => {
      expect(content).toContain("Tell us what you're trying to verify, protect, or build.");
      expect(content).toContain("what's at stake if this system is wrong");
    });

    it('should not contain hype phrases', () => {
      expect(content).not.toContain("Let's Build the Future");
      expect(content).not.toContain('revolutionary');
      expect(content).not.toContain('game' + '-' + 'changing');
    });

    it('should have proper data-testid attributes', () => {
      const expectedTestIds = [
        'section-hero',
        'text-overline',
        'text-hero-heading',
        'text-hero-body',
        'section-form',
        'text-expectations-heading',
        'text-disclaimer',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });

  describe('404 page v3.0 compliance', () => {
    const notFoundPath = path.join(process.cwd(), 'client/src/pages/not-found.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(notFoundPath, 'utf-8');
    });

    it('should have v3.0 heading', () => {
      expect(content).toContain("This page isn't wired up.");
    });

    it('should have v3.0 body copy', () => {
      expect(content).toContain("Either this page never existed or it hasn't been wired into the current site");
      expect(content).toContain("nothing verifiable here yet");
    });

    it('should have correct navigation labels per v3.0 spec', () => {
      expect(content).toContain('Go to overview');
      expect(content).toContain('Explore ventures');
      expect(content).toContain('See how we build');
    });

    it('should have correct navigation hrefs', () => {
      expect(content).toContain('href="/"');
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/approach"');
    });

    it('should not contain old brand language', () => {
      expect(content).not.toContain('StackMe');
      expect(content).not.toContain('VSP');
      expect(content).not.toContain('the' + ' ' + 'human');
    });

    it('should have proper data-testid attributes', () => {
      const expectedTestIds = [
        'section-404',
        'text-error-code',
        'text-heading-404',
        'text-body-404',
        'button-go-overview',
        'button-explore-ventures',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });
  });
});
