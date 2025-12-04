import { Header } from "./Header";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";
import { OrganizationJsonLd } from "./JsonLd";
import { ErrorBoundary } from "@/components/ErrorBoundary";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <OrganizationJsonLd />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:shadow-lg"
        data-testid="link-skip-to-content"
      >
        Skip to main content
      </a>
      <Header />
      <CommandPalette />
      <main id="main-content" className="flex-1 pt-16 lg:pt-[72px]" tabIndex={-1}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
