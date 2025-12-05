import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageMeta } from '@/components/PageMeta';
import { NextStepBlock } from '@/components/NextStepBlock';
import { HelmetProvider } from 'react-helmet-async';

const renderWithHelmet = (component: React.ReactNode) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
};

describe('PageMeta Component', () => {
  it('renders without crashing', () => {
    renderWithHelmet(
      <PageMeta 
        title="Test Page" 
        description="Test description" 
      />
    );
  });

  it('sets page title correctly', () => {
    renderWithHelmet(
      <PageMeta 
        title="Standards Page" 
        description="Standards description" 
      />
    );
    expect(document.title).toContain('Standards Page');
  });
});

describe('NextStepBlock Component', () => {
  it('renders with correct content', () => {
    render(
      <NextStepBlock
        nextPage="Ventures"
        description="Explore our ventures"
        href="/ventures"
      />
    );
    
    expect(screen.getByText('Ventures')).toBeInTheDocument();
    expect(screen.getByText('Explore our ventures')).toBeInTheDocument();
  });

  it('has correct link href', () => {
    render(
      <NextStepBlock
        nextPage="Approach"
        description="See how we work"
        href="/approach"
      />
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/approach');
  });
});

describe('Data Test IDs', () => {
  it('ensures test IDs follow naming conventions', async () => {
    const fs = await import('fs');
    const path = await import('path');
    
    const pagesDir = path.join(process.cwd(), 'client/src/pages');
    
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

    const files = getAllTsxFiles(pagesDir);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf-8');
      const testIdMatches = content.match(/data-testid="([^"]+)"/g) || [];
      
      testIdMatches.forEach(match => {
        const testId = match.replace('data-testid="', '').replace('"', '');
        expect(testId).toMatch(/^[a-z]+-[a-z0-9-]+$/);
      });
    });
  });
});
