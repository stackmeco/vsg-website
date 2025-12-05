import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GlobalNav } from '@/components/layout/GlobalNav';
import { NAV_ITEMS } from '@/config/navigation';

vi.mock('wouter', () => ({
  Link: ({ href, children, className, ...props }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className} {...props}>{children}</a>
  ),
  useLocation: () => ['/'],
}));

describe('GlobalNav Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Desktop Navigation', () => {
    it('renders header with correct role and test id', () => {
      render(<GlobalNav />);
      const header = screen.getByTestId('header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveAttribute('role', 'banner');
    });

    it('renders logo link with correct accessibility', () => {
      render(<GlobalNav />);
      const logoLink = screen.getByTestId('link-home');
      expect(logoLink).toBeInTheDocument();
      expect(logoLink).toHaveAttribute('aria-label', 'Verifiable Systems Group - Go to homepage');
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('renders company name in logo', () => {
      render(<GlobalNav />);
      expect(screen.getByText('Verifiable Systems Group')).toBeInTheDocument();
    });

    it('renders desktop navigation with correct aria label', () => {
      render(<GlobalNav />);
      const desktopNav = screen.getByTestId('nav-desktop');
      expect(desktopNav).toBeInTheDocument();
      expect(desktopNav).toHaveAttribute('aria-label', 'Primary navigation');
    });

    it('renders Overview link with correct test id', () => {
      render(<GlobalNav />);
      const overviewLink = screen.getByTestId('nav-overview');
      expect(overviewLink).toBeInTheDocument();
      expect(overviewLink).toHaveAttribute('href', '/');
    });

    it('renders dropdown triggers for items with children', () => {
      render(<GlobalNav />);
      expect(screen.getByTestId('nav-ventures')).toBeInTheDocument();
      expect(screen.getByTestId('nav-approach')).toBeInTheDocument();
      expect(screen.getByTestId('nav-studio')).toBeInTheDocument();
    });

    it('renders Insights link with uppercase styling', () => {
      render(<GlobalNav />);
      const insightsLink = screen.getByTestId('nav-insights');
      expect(insightsLink).toBeInTheDocument();
      expect(insightsLink.textContent).toBe('INSIGHTS');
      expect(insightsLink).toHaveClass('uppercase', 'tracking-[0.2em]');
    });

    it('renders Connect link with CTA styling', () => {
      render(<GlobalNav />);
      const connectLink = screen.getByTestId('nav-connect');
      expect(connectLink).toBeInTheDocument();
      expect(connectLink.textContent).toBe('CONNECT');
      expect(connectLink).toHaveClass('bg-primary', 'text-primary-foreground');
    });

    it('renders command palette button with correct accessibility', () => {
      render(<GlobalNav />);
      const searchButton = screen.getByTestId('button-command-palette');
      expect(searchButton).toBeInTheDocument();
      expect(searchButton).toHaveAttribute('aria-label', 'Open command palette (Cmd+K)');
    });

    it('dispatches keyboard event when search button clicked', () => {
      render(<GlobalNav />);
      const dispatchEventSpy = vi.spyOn(document, 'dispatchEvent');
      
      const searchButton = screen.getByTestId('button-command-palette');
      fireEvent.click(searchButton);
      
      expect(dispatchEventSpy).toHaveBeenCalled();
      dispatchEventSpy.mockRestore();
    });
  });

  describe('Mobile Navigation', () => {
    it('renders mobile menu toggle button with correct test id', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      expect(mobileButton).toBeInTheDocument();
    });

    it('mobile menu button has correct accessibility attributes when closed', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      expect(mobileButton).toHaveAttribute('aria-expanded', 'false');
      expect(mobileButton).toHaveAttribute('aria-label', 'Open navigation menu');
    });

    it('mobile menu button toggles on click', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      expect(mobileButton).toHaveAttribute('aria-expanded', 'true');
      expect(mobileButton).toHaveAttribute('aria-label', 'Close navigation menu');
    });

    it('shows mobile navigation when menu is opened', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      
      expect(screen.getByTestId('mobile-nav-overview')).toBeInTheDocument();
      const mobileNavVentures = screen.getAllByTestId('mobile-nav-ventures');
      expect(mobileNavVentures.length).toBeGreaterThan(0);
      const mobileNavApproach = screen.getAllByTestId('mobile-nav-approach');
      expect(mobileNavApproach.length).toBeGreaterThan(0);
      const mobileNavStudio = screen.getAllByTestId('mobile-nav-studio');
      expect(mobileNavStudio.length).toBeGreaterThan(0);
    });

    it('mobile navigation has collapsible sections for dropdown items', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      
      const venturesButtons = screen.getAllByTestId('mobile-nav-ventures');
      const venturesButton = venturesButtons[0];
      expect(venturesButton).toHaveAttribute('aria-expanded', 'false');
      
      fireEvent.click(venturesButton);
      expect(venturesButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('shows dropdown children when section is expanded', async () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      
      const venturesButtons = screen.getAllByTestId('mobile-nav-ventures');
      fireEvent.click(venturesButtons[0]);
      
      expect(screen.getByTestId('mobile-nav-all-ventures')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-nav-helios')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-nav-lumina')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-nav-uniqueness-engine')).toBeInTheDocument();
    });

    it('mobile submenu has aria-controls linking to submenu', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      
      const venturesButtons = screen.getAllByTestId('mobile-nav-ventures');
      expect(venturesButtons[0]).toHaveAttribute('aria-controls', 'mobile-submenu-ventures');
    });

    it('renders mobile Insights and Connect links', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      
      expect(screen.getByTestId('mobile-nav-insights')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-nav-connect')).toBeInTheDocument();
    });

    it('renders mobile search button', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      
      fireEvent.click(mobileButton);
      
      expect(screen.getByTestId('mobile-button-search')).toBeInTheDocument();
    });
  });

  describe('Navigation Config Integration', () => {
    it('renders all primary nav items from config', () => {
      render(<GlobalNav />);
      
      const primaryItems = NAV_ITEMS.filter(
        item => item.key !== 'insights' && item.key !== 'connect'
      );
      
      primaryItems.forEach(item => {
        expect(screen.getByTestId(`nav-${item.key}`)).toBeInTheDocument();
      });
    });

    it('has correct href values from config', () => {
      render(<GlobalNav />);
      
      const overviewLink = screen.getByTestId('nav-overview');
      expect(overviewLink).toHaveAttribute('href', '/');
      
      const insightsLink = screen.getByTestId('nav-insights');
      expect(insightsLink).toHaveAttribute('href', '/insights');
      
      const connectLink = screen.getByTestId('nav-connect');
      expect(connectLink).toHaveAttribute('href', '/connect');
    });
  });

  describe('Accessibility', () => {
    it('header has correct landmark role', () => {
      render(<GlobalNav />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('primary navigation has correct nav role and label', () => {
      render(<GlobalNav />);
      const nav = screen.getByRole('navigation', { name: 'Primary navigation' });
      expect(nav).toBeInTheDocument();
    });

    it('mobile toggle has minimum touch target size', () => {
      render(<GlobalNav />);
      const mobileButton = screen.getByTestId('button-mobile-menu');
      expect(mobileButton).toHaveClass('min-w-[44px]', 'min-h-[44px]');
    });

    it('dropdown triggers have aria-haspopup attribute', () => {
      render(<GlobalNav />);
      const venturesButton = screen.getByTestId('nav-ventures');
      expect(venturesButton).toHaveAttribute('aria-haspopup', 'true');
    });
  });

  describe('Premium Styling', () => {
    it('header has sticky positioning with backdrop blur', () => {
      render(<GlobalNav />);
      const header = screen.getByTestId('header');
      expect(header).toHaveClass('fixed', 'top-0', 'z-50', 'backdrop-blur-sm');
    });

    it('desktop nav has proper gap spacing', () => {
      render(<GlobalNav />);
      const desktopNav = screen.getByTestId('nav-desktop');
      expect(desktopNav).toHaveClass('gap-1');
    });

    it('insights link has tracking for premium appearance', () => {
      render(<GlobalNav />);
      const insightsLink = screen.getByTestId('nav-insights');
      expect(insightsLink).toHaveClass('tracking-[0.2em]');
    });

    it('connect link has primary CTA styling', () => {
      render(<GlobalNav />);
      const connectLink = screen.getByTestId('nav-connect');
      expect(connectLink).toHaveClass('bg-primary', 'rounded-sm', 'px-4', 'py-2');
    });
  });
});

describe('Navigation Config', () => {
  it('has all required nav items', () => {
    const requiredKeys = ['overview', 'ventures', 'approach', 'studio', 'insights', 'connect'];
    const configKeys = NAV_ITEMS.map(item => item.key);
    
    requiredKeys.forEach(key => {
      expect(configKeys).toContain(key);
    });
  });

  it('ventures has correct children', () => {
    const ventures = NAV_ITEMS.find(item => item.key === 'ventures');
    expect(ventures?.children).toHaveLength(4);
    expect(ventures?.children?.map(c => c.label)).toEqual([
      'All Ventures', 'Helios', 'Lumina', 'Uniqueness Engine'
    ]);
  });

  it('approach has correct children', () => {
    const approach = NAV_ITEMS.find(item => item.key === 'approach');
    expect(approach?.children).toHaveLength(4);
    expect(approach?.children?.map(c => c.label)).toEqual([
      'Approach', 'Pillars', 'Process', 'Standards'
    ]);
  });

  it('studio has correct children', () => {
    const studio = NAV_ITEMS.find(item => item.key === 'studio');
    expect(studio?.children).toHaveLength(4);
    expect(studio?.children?.map(c => c.label)).toEqual([
      'Studio', 'Purpose', 'Vision', 'Mission'
    ]);
  });

  it('all children have descriptions', () => {
    NAV_ITEMS.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          expect(child.description).toBeDefined();
          expect(child.description?.length).toBeGreaterThan(0);
        });
      }
    });
  });

  it('all hrefs are valid paths starting with /', () => {
    NAV_ITEMS.forEach(item => {
      expect(item.href).toMatch(/^\//);
      if (item.children) {
        item.children.forEach(child => {
          expect(child.href).toMatch(/^\//);
        });
      }
    });
  });
});
