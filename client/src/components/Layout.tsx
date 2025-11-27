import { Header } from "./Header";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none"
      >
        Skip to content
      </a>
      <Header />
      <CommandPalette />
      <main id="main-content" className="flex-1 pt-16 lg:pt-[72px]" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
