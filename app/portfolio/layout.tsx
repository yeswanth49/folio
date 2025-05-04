import type { Metadata } from 'next';
import localFont from "next/font/local";
// REMOVE: import './globals.css'; // Global styles only in root layout

// Keep imports for components used IN this layout
import { Header } from '../header';
import Footer from '../components/footer';
import { ThemeProvider } from 'next-themes'; // Keep if needed here


export const metadata: Metadata = {
  title: 'Portfolio - Your Name', // Change title for this route
  description: 'This is the portfolio section of my website.', // Change description
  // Add or override other metadata specific to the portfolio route here
};

const geistSans = localFont({
  src: [
    { path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2', weight: '500', style: 'normal' },
    // Add other weights/styles you need
  ],
  variable: '--font-geist-sans', // Use a distinct variable name
});

const geistMono = localFont({
  src: [
    { path: '../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2', weight: '400', style: 'normal' },
     // Add other weights/styles you need
  ],
  variable: '--font-geist-mono',
});

// Change function name to reflect it's a nested layout
export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // REMOVE: <html> and <body> tags

    // Start with the wrapper element(s) that structure this part of the page
    // If your root layout applies font classes to the <body>,
    // DO NOT add those same font classes here again.
    // If you want these fonts ONLY in the portfolio section, add the classes here.
    // Assuming root layout handles basic font classes on the body:
    <ThemeProvider // Or remove if ThemeProvider is in root layout
      enableSystem={true}
      attribute="class"
      storageKey="theme"
      defaultTheme="system"
    >
       <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
          {/* Components that wrap the page content specific to this layout */}
          <Header /> {/* Assuming this Header is part of the portfolio layout */}
          {children} {/* This is where the portfolio page content gets rendered */}
        </div>
      </div>
       {/* Components that appear after the main content in this layout */}
       <Footer /> {/* Assuming this Footer is part of the portfolio layout */}
    </ThemeProvider>
  );
}