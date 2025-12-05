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
                               content.includes('not tax') ||
                               content.includes('investment, legal') ||
                               content.includes('legal, tax');
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

  describe('Approach page v3.0 compliance', () => {
    const approachPath = path.join(process.cwd(), 'client/src/pages/approach/Approach.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(approachPath, 'utf-8');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Approach"');
    });

    it('should have correct overline', () => {
      expect(content).toContain('How we build and govern');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('A governed approach to AI-native systems.');
    });

    it('should have warmth line in hero', () => {
      expect(content).toContain("You shouldn't have to reverse-engineer how a critical system behaves");
    });

    it('should have "Three beams: Truth, Capital, Dignity" section', () => {
      expect(content).toContain('Three beams: Truth, Capital, Dignity');
      expect(content).toContain('Everything in the studio hangs off three beams');
    });

    it('should have correct beam descriptions with ventures', () => {
      expect(content).toContain('Lumina lives here');
      expect(content).toContain('Helios lives here');
      expect(content).toContain('The Uniqueness Engine lives here');
    });

    it('should have "Three layers of the approach" section', () => {
      expect(content).toContain('Three layers of the approach');
      expect(content).toContain('Pillars set the non-negotiables');
    });

    it('should have correct three layers cards with links', () => {
      expect(content).toContain('title: "Pillars"');
      expect(content).toContain('title: "Process"');
      expect(content).toContain('title: "Standards"');
      expect(content).toContain('href: "/pillars"');
      expect(content).toContain('href: "/process"');
      expect(content).toContain('href: "/standards"');
    });

    it('should have "The six stages at a glance" section', () => {
      expect(content).toContain('The six stages at a glance');
      expect(content).toContain('Process is where ambition meets discipline');
    });

    it('should have "What we refuse to do" section', () => {
      expect(content).toContain('What we refuse to do');
      expect(content).toContain('We do not pool client funds');
      expect(content).toContain('We do not treat identity or behaviour data');
      expect(content).toContain('We do not ship systems whose failure modes');
      expect(content).toContain('We do not hide risk in opaque models');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-three-beams',
        'section-three-layers',
        'section-stages',
        'section-refuse',
        'section-disclaimer',
        'section-cross-links',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });
  });

  describe('Standards page v3.0 compliance', () => {
    const standardsPath = path.join(process.cwd(), 'client/src/pages/Standards.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(standardsPath, 'utf-8');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Standards and guardrails for verifiable systems.');
    });

    it('should have "What these standards are for" section', () => {
      expect(content).toContain('What these standards are for');
      expect(content).toContain('prevent silent failure');
    });

    it('should have "Core dimensions of our standards" section', () => {
      expect(content).toContain('Core dimensions of our standards');
      expect(content).toContain('Limits');
      expect(content).toContain('Stewards');
      expect(content).toContain('Evidence');
      expect(content).toContain('Escalation');
    });

    it('should have "How standards relate to Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('How standards relate to Truth, Capital, and Dignity');
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
      expect(content).toContain('not investment, legal, or tax advice');
    });

    it('should have cross-links to ventures, approach, and insights', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/insights"');
    });

    it('should have Internal-first, not advice disclaimer section', () => {
      expect(content).toContain('Internal-first, not advice');
      expect(content).toContain('make our own guardrails inspectable');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-why-standards',
        'section-core-dimensions',
        'section-three-questions',
        'section-ventures',
        'section-ai-standards',
        'section-is-not',
        'section-disclaimer',
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
      expect(content).toContain('Uniqueness Engine: personhood without overexposure.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Uniqueness Engine"');
    });

    it('should have correct overline with domain label', () => {
      expect(content).toContain('Venture — Dignity systems');
    });

    it('should have warmth line in hero', () => {
      expect(content).toContain("You shouldn't have to expose everything about yourself just to prove you're real");
    });

    it('should have "What the Uniqueness Engine does" section', () => {
      expect(content).toContain('What the Uniqueness Engine does');
      expect(content).toContain('infrastructure for personhood');
    });

    it('should have "Why the Uniqueness Engine exists" section', () => {
      expect(content).toContain('Why the Uniqueness Engine exists');
      expect(content).toContain('give systems a third option');
    });

    it('should have "Inside the Uniqueness Engine" section with feature cards', () => {
      expect(content).toContain('Inside the Uniqueness Engine');
      expect(content).toContain('Uniqueness, not dossiers');
      expect(content).toContain('Controlled disclosure');
      expect(content).toContain('Abuse visibility');
      expect(content).toContain('Composable for many systems');
    });

    it('should have "Uniqueness Engine under Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('Uniqueness Engine under Truth, Capital, and Dignity');
    });

    it('should have "What the Uniqueness Engine is / is not" section', () => {
      expect(content).toContain('What the Uniqueness Engine is / is not');
    });

    it('should have "Where the Uniqueness Engine sits in the studio" section', () => {
      expect(content).toContain('Where the Uniqueness Engine sits in the studio');
      expect(content).toContain('owns the Dignity beam');
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
        'section-what-uniqueness-does',
        'section-why-uniqueness-exists',
        'section-inside-uniqueness',
        'section-domains',
        'section-is-is-not',
        'section-studio-context',
        'section-disclaimer',
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
      expect(content).toContain('Lumina: verifiable grading infrastructure.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Lumina"');
    });

    it('should have correct overline with domain label', () => {
      expect(content).toContain('Venture — Truth systems');
    });

    it('should have infrastructure-first hero copy', () => {
      expect(content).toContain('grading infrastructure for physical assets like trading cards');
      expect(content).toContain('what is actually true about this object');
    });

    it('should have warmth line in hero', () => {
      expect(content).toContain("You shouldn't have to ship a card into a black box");
    });

    it('should have "What Lumina does" section', () => {
      expect(content).toContain('What Lumina does');
      expect(content).toContain('Lumina turns condition into evidence instead of opinion');
    });

    it('should have "Why Lumina exists" section', () => {
      expect(content).toContain('Why Lumina exists');
      expect(content).toContain('Grading has become a bottleneck and a blind spot');
    });

    it('should have "Inside Lumina" section with feature cards', () => {
      expect(content).toContain('Inside Lumina');
      expect(content).toContain('Evidence-first');
      expect(content).toContain('Consistent procedures');
      expect(content).toContain('Audit-ready outputs');
      expect(content).toContain('Composable rails');
    });

    it('should have "Lumina under Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('Lumina under Truth, Capital, and Dignity');
    });

    it('should have "What Lumina is / is not" section with correct items', () => {
      expect(content).toContain('What Lumina is / is not');
      expect(content).toContain('Not a grading house you ship cards to.');
      expect(content).toContain('Not a marketplace or auction platform.');
      expect(content).toContain('Not a one-size-fits-all score or investment recommendation.');
    });

    it('should have "Where Lumina sits in the studio" section with correct copy', () => {
      expect(content).toContain('Where Lumina sits in the studio');
      expect(content).toContain('Lumina owns the Truth beam');
    });

    it('should have cross-links to ventures and approach', () => {
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/approach"');
    });

    it('should have proper disclaimer about grading infrastructure', () => {
      expect(content).toContain('Lumina is grading infrastructure, not an offer to grade or insure assets');
      expect(content).toContain('Nothing on this page is investment, legal, tax, or compliance advice');
    });

    it('should not contain old domain labels', () => {
      expect(content).not.toContain('"Signal"');
      expect(content).not.toContain('"Value"');
      expect(content).not.toContain('"Human"');
    });

    it('should have NextStepBlock pointing to ventures', () => {
      expect(content).toContain('<NextStepBlock');
      expect(content).toContain('nextPage="Ventures"');
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('three concrete proofs of Truth, Capital, and Dignity');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-what-lumina-does',
        'section-why-lumina-exists',
        'section-inside-lumina',
        'section-domains',
        'section-is-is-not',
        'section-studio-context',
        'section-disclaimer',
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
      expect(content).toContain('A small portfolio built on our own balance sheet first.');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Ventures"');
    });

    it('should have correct overline', () => {
      expect(content).toContain('All ventures');
    });

    it('should have "How the portfolio fits together" section', () => {
      expect(content).toContain('How the portfolio fits together');
      expect(content).toContain('Ventures don\'t live in separate silos');
      expect(content).toContain('Helios keeps capital resilient');
    });

    it('should have correct venture data for Helios', () => {
      expect(content).toContain('Capital · Internal venture');
      expect(content).toContain("VSG's internal capital engine.");
    });

    it('should have correct venture data for Lumina', () => {
      expect(content).toContain('Truth · Venture');
      expect(content).toContain('Verifiable grading infrastructure.');
    });

    it('should have correct venture data for Uniqueness Engine', () => {
      expect(content).toContain('Dignity · Venture');
      expect(content).toContain('Personhood without overexposure.');
    });

    it('should have hero body copy about proof not pitch deck', () => {
      expect(content).toContain('Each venture in the studio is a proof, not a pitch deck');
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
      expect(content).toContain("Helios: VSG's internal capital engine.");
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Helios"');
    });

    it('should have correct overline with domain label', () => {
      expect(content).toContain('Internal venture — Capital systems');
    });

    it('should have "What Helios does" section', () => {
      expect(content).toContain('What Helios does');
      expect(content).toContain('AI-native execution system');
    });

    it('should have "How we keep control" section', () => {
      expect(content).toContain('How we keep control');
      expect(content).toContain('capital should not disappear into black boxes');
    });

    it('should have "Inside the mechanism" section with cards', () => {
      expect(content).toContain('Inside the mechanism');
      expect(content).toContain('Monitoring');
      expect(content).toContain('Guardrails');
      expect(content).toContain('Playbooks');
    });

    it('should have "Helios under Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('Helios under Truth, Capital, and Dignity');
    });

    it('should have "What Helios is / is not" section', () => {
      expect(content).toContain('What Helios is / is not');
    });

    it('should have "Where Helios sits in the studio" section', () => {
      expect(content).toContain('Where Helios sits in the studio');
      expect(content).toContain('Helios owns the Capital beam');
    });

    it('should have warmth line in hero', () => {
      expect(content).toContain("You shouldn't have to choose between liquidity and control");
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
        'section-what-helios-does',
        'section-how-we-keep-control',
        'section-mechanism',
        'section-domains',
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
      expect(content).toContain('We engineer the infrastructure of verifiable autonomy.');
    });

    it('should have v3.0 hero overline', () => {
      expect(content).toContain('AI-native venture studio');
    });

    it('should have "Three beams: Truth, Capital, Dignity" section', () => {
      expect(content).toContain('Three beams: Truth, Capital, Dignity');
      expect(content).toContain('Every venture in the studio exists to answer one of three questions');
    });

    it('should have Truth, Capital, Dignity beams with proper body text', () => {
      expect(content).toContain('What can we actually know, and show, about the world');
      expect(content).toContain('How should capital behave under stress');
      expect(content).toContain('How do people prove who they are without giving everything away');
    });

    it('should have "What VSG is" section with canonical copy', () => {
      expect(content).toContain('What VSG is');
      expect(content).toContain("architect's office for digital infrastructure");
      expect(content).toContain('AI-native systems, not bolt-on features');
      expect(content).toContain('Non-custodial rails for capital and identity');
      expect(content).toContain('Tested on our own balance sheet first');
    });

    it('should have "Ventures inside the studio" section', () => {
      expect(content).toContain('Ventures inside the studio');
    });

    it('should have correct venture meta lines', () => {
      expect(content).toContain('Helios · Capital');
      expect(content).toContain('Lumina · Truth');
      expect(content).toContain('Uniqueness Engine · Dignity');
    });

    it('should have "How we build and govern systems" section', () => {
      expect(content).toContain('How we build and govern systems');
      expect(content).toContain("do not ship one-off experiments");
      expect(content).toContain('six stages');
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
        'section-three-beams',
        'section-what-vsg-is',
        'section-ventures',
        'section-how-we-build',
        'section-why-we-exist',
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

  describe('Values page v3.0 compliance', () => {
    const valuesPath = path.join(process.cwd(), 'client/src/pages/Values.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(valuesPath, 'utf-8');
    });

    it('should have correct PageMeta title and description', () => {
      expect(content).toContain('title="Values & Operating Code"');
      expect(content).toContain('The values that guide how Verifiable Systems Group designs');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('How we operate when it actually matters.');
    });

    it('should have correct overline', () => {
      expect(content).toContain('Values · Operating Code');
    });

    it('should have all six v3.0 values from studio.ts', () => {
      expect(content).toContain('values.map');
    });

    it('should have "Six values that govern how we work" section', () => {
      expect(content).toContain('Six values that govern how we work');
      expect(content).toContain('Each value is a constraint');
    });

    it('should have "How these values show up in decisions" section', () => {
      expect(content).toContain('How these values show up in decisions');
      expect(content).toContain('Intelligence Augmented');
      expect(content).toContain('Seek the Signal');
      expect(content).toContain('Engineered Ambition');
      expect(content).toContain('Own the Engine');
      expect(content).toContain('Value is a Mirror');
      expect(content).toContain('Force Multiplier');
    });

    it('should have "How values relate to Truth, Capital, and Dignity" section', () => {
      expect(content).toContain('How values relate to Truth, Capital, and Dignity');
      expect(content).toContain('What can be trusted?');
      expect(content).toContain('How should value move?');
      expect(content).toContain('How do people participate?');
    });

    it('should have cross-links to approach, ventures, and standards', () => {
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/ventures"');
      expect(content).toContain('href="/standards"');
    });

    it('should have NextStepBlock pointing to approach', () => {
      expect(content).toContain('nextPage="Approach"');
      expect(content).toContain('six-stage runway');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'text-overline',
        'text-heading',
        'text-hero-body',
        'button-see-approach',
        'button-explore-ventures',
        'section-values',
        'heading-values',
        'section-decisions',
        'heading-decisions',
        'section-domains',
        'heading-domains',
        'card-domain-truth',
        'card-domain-capital',
        'card-domain-dignity',
        'section-cross-links',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });

    it('should have value cards with proper data-testid pattern', () => {
      expect(content).toContain('data-testid={`card-value-${value.id}`}');
      expect(content).toContain('data-testid={`heading-value-${value.id}`}');
      expect(content).toContain('data-testid={`quote-value-${value.id}`}');
      expect(content).toContain('data-testid={`text-value-${value.id}`}');
    });

    it('should not contain old brand language', () => {
      expect(content).not.toContain('"Anchor to Evidence"');
      expect(content).not.toContain('StackMe');
      expect(content).not.toContain('Axiom');
    });
  });

  describe('Pillars page v3.0 compliance', () => {
    const pillarsPath = path.join(process.cwd(), 'client/src/pages/approach/Pillars.tsx');
    let content: string;

    beforeAll(() => {
      content = fs.readFileSync(pillarsPath, 'utf-8');
    });

    it('should have correct PageMeta title', () => {
      expect(content).toContain('title="Pillars"');
    });

    it('should have correct PageMeta description with v3.0 domains', () => {
      expect(content).toContain('AI-native, non-custodial systems across Truth, Capital, and Dignity');
    });

    it('should have correct overline', () => {
      expect(content).toContain('What we will not trade away');
    });

    it('should have correct hero heading', () => {
      expect(content).toContain('Pillars that hold under stress.');
    });

    it('should have hero body copy with v3.0 language', () => {
      expect(content).toContain('lines we do not cross');
      expect(content).toContain('across Truth, Capital, and Dignity');
    });

    it('should have warmth line in hero', () => {
      expect(content).toContain("You shouldn't have to guess what we stand for");
    });

    it('should have primary and secondary CTAs', () => {
      expect(content).toContain('See how we apply this');
      expect(content).toContain('View the six-stage process');
      expect(content).toContain('href="/approach"');
      expect(content).toContain('href="/process"');
    });

    it('should have "How to read these pillars" section', () => {
      expect(content).toContain('How to read these pillars');
      expect(content).toContain('survive contact with real risk');
    });

    it('should have all six v3.0 pillar names', () => {
      expect(content).toContain('Intelligence Augmented (IA)');
      expect(content).toContain('Seek the Signal');
      expect(content).toContain('Engineered Ambition');
      expect(content).toContain('Own the Engine');
      expect(content).toContain('Value is a Mirror');
      expect(content).toContain('Force Multiplier');
    });

    it('should have all six v3.0 pillar mantras', () => {
      expect(content).toContain('Let the machine compute. Let the human decide.');
      expect(content).toContain('Make decisions rest on evidence, not stories.');
      expect(content).toContain('Dream in decades, execute in milliseconds.');
      expect(content).toContain('Master the mechanics to rewrite the rules.');
      expect(content).toContain('Serve first, succeed second.');
      expect(content).toContain('Level the playing field.');
    });

    it('should have "Where these pillars show up" section', () => {
      expect(content).toContain('Where these pillars show up');
      expect(content).toContain('constraints on design');
    });

    it('should have Truth, Capital, Dignity domain items', () => {
      expect(content).toContain('Truth');
      expect(content).toContain('Evidence, provenance, and inspectable decisions');
      expect(content).toContain('Capital');
      expect(content).toContain('Non-custodial control, limits, and rollback');
      expect(content).toContain('Dignity');
      expect(content).toContain('Personhood, eligibility, and privacy by design');
    });

    it('should have "What these pillars rule out" section', () => {
      expect(content).toContain('What these pillars rule out');
    });

    it('should have all five constraint bullets', () => {
      expect(content).toContain('We do not treat AI as a black box that replaces judgment');
      expect(content).toContain('We do not base critical decisions on information that cannot be inspected');
      expect(content).toContain('We do not pursue speed or yield at the expense of clear limits');
      expect(content).toContain('We do not profit from users\' confusion, lock-in, or overexposure');
      expect(content).toContain('We do not design systems where only one party can see the whole flow');
    });

    it('should have closing constraint sentence', () => {
      expect(content).toContain('pillars require us to redesign it—or decline it');
    });

    it('should have NextStepBlock pointing to approach', () => {
      expect(content).toContain('nextPage="Approach"');
      expect(content).toContain('href="/approach"');
    });

    it('should have NextStepBlock description', () => {
      expect(content).toContain('See how we apply these pillars across our approach');
    });

    it('should have pillar descriptions explaining AI and governance', () => {
      expect(content).toContain('machine intelligence for scale, patterning, and monitoring');
      expect(content).toContain('tightly governed experiments');
      expect(content).toContain('verifiable autonomy');
    });

    it('should use Cards for pillar display', () => {
      expect(content).toContain('<Card');
      expect(content).toContain('<CardContent');
    });

    it('should have proper data-testid attributes for key sections', () => {
      const expectedTestIds = [
        'section-hero',
        'section-explainer',
        'section-pillars',
        'section-domains',
        'section-constraints',
        'text-overline',
        'text-hero-heading',
        'text-hero-body-1',
        'text-hero-body-2',
        'button-primary-cta',
        'button-secondary-cta',
        'text-explainer-heading',
        'text-explainer-body',
        'text-domains-heading',
        'text-domain-truth',
        'text-domain-capital',
        'text-domain-dignity',
        'text-constraints-heading',
      ];
      
      expectedTestIds.forEach(testId => {
        expect(content).toContain(`data-testid="${testId}"`);
      });
    });

    it('should have pillar cards with proper data-testid pattern', () => {
      expect(content).toContain('data-testid={`card-pillar-${index}`}');
      expect(content).toContain('data-testid={`text-pillar-name-${index}`}');
      expect(content).toContain('data-testid={`text-pillar-mantra-${index}`}');
    });

    it('should have constraint items with proper data-testid pattern', () => {
      expect(content).toContain('data-testid={`text-constraint-${index}`}');
    });

    it('should not contain old pillar names as section headers', () => {
      expect(content).not.toContain('1 · Verifiable Systems');
      expect(content).not.toContain('2 · Non-custodial Rails');
      expect(content).not.toContain('3 · Governed Experiments');
      expect(content).not.toContain('section-pillar-1');
      expect(content).not.toContain('section-pillar-2');
      expect(content).not.toContain('section-pillar-3');
    });

    it('should not contain banned phrases', () => {
      expect(content).not.toContain('Signal / Value / Human');
      expect(content).not.toContain('validate the signal');
      expect(content).not.toContain('protect the human');
      expect(content).not.toContain('AI-powered platform');
      expect(content).not.toContain('StackMe');
      expect(content).not.toContain('Axiom');
    });
  });
});
