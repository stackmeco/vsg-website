import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    /* ===== TYPOGRAPHY SCALE (REPLACES DEFAULTS) ===== */
    /* All values in rem, calculated from 15px base (html font-size: 15px) */
    /* Formula: desired_px / 15 = rem value */
    fontSize: {
      /* Semantic tokens */
      "telemetry": ["0.8rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],    /* 12px - clocks only */
      "eyebrow": ["0.9333rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],    /* 14px - readable labels */
      "caption": ["0.8667rem", { lineHeight: "1.5" }],                             /* 13px */
      "body": ["0.9333rem", { lineHeight: "1.6" }],                                /* 14px */
      "body-lg": ["1.0667rem", { lineHeight: "1.65" }],                            /* 16px */
      /* Standard scale */
      "xs": ["0.8667rem", { lineHeight: "1.4" }],                                  /* 13px - minimum readable */
      "sm": ["0.9333rem", { lineHeight: "1.5" }],                                  /* 14px */
      "base": ["1rem", { lineHeight: "1.6" }],                                     /* 15px */
      "lg": ["1.2rem", { lineHeight: "1.5" }],                                     /* 18px */
      "xl": ["1.3333rem", { lineHeight: "1.4" }],                                  /* 20px */
      "2xl": ["1.6rem", { lineHeight: "1.3" }],                                    /* 24px */
      "3xl": ["2rem", { lineHeight: "1.25" }],                                     /* 30px */
      "4xl": ["2.4rem", { lineHeight: "1.2" }],                                    /* 36px */
      "5xl": ["3.2rem", { lineHeight: "1.1" }],                                    /* 48px */
    },
    extend: {
      borderRadius: {
        lg: "4px", /* Machined edges */
        md: "2px", /* Standard machined edge (spec default) */
        sm: "2px", /* Machined edge - updated to match spec (was 1px) */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flash": {
          "0%": { opacity: "0.2", color: "hsl(var(--primary))" },
          "50%": { opacity: "1", color: "#ffffff" },
          "100%": { opacity: "0.6", color: "hsl(var(--muted-foreground))" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 8px hsl(var(--primary) / 0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 4px hsl(var(--primary) / 0.2)" },
        },
        "data-tick": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "10%": { opacity: "0.7", filter: "brightness(1.2)" },
          "20%": { opacity: "1", filter: "brightness(1)" },
        },
        "heartbeat": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 4px hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 12px hsl(var(--primary) / 0.7)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flash": "flash 0.8s ease-out forwards",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "data-tick": "data-tick 4s ease-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "heartbeat": "heartbeat 1.2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        'mechanical': 'cubic-bezier(0.2, 0, 0, 1)',
        DEFAULT: 'cubic-bezier(0.2, 0, 0, 1)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
