---
name: Kinetic Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#006e2f'
  on-secondary: '#ffffff'
  secondary-container: '#6bff8f'
  on-secondary-container: '#007432'
  tertiary: '#565e74'
  on-tertiary: '#ffffff'
  tertiary-container: '#9ba2bb'
  on-tertiary-container: '#31394d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#6bff8f'
  secondary-fixed-dim: '#4ae176'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005321'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  mono-stats:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for elite performance tracking and AI-driven recovery. It merges the technical rigorm of high-end developer tools with the holistic, human-centric aesthetic of premium health platforms. The brand personality is **authoritative yet supportive**, acting as a silent, intelligent partner in a user's fitness journey.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive white space, precision-engineered typography, and sophisticated translucent layers to create a sense of depth and focus. The interface should feel "light as air" yet "solid as a tool," evoking a professional, high-performance atmosphere that motivates through clarity and calm rather than aggressive "gym-culture" visuals.

## Colors

The palette is anchored by a sophisticated **Emerald and Green gradient** system representing vitality and growth. 

- **Primary & Secondary:** Emerald (#10b981) and Green (#22c55e) are used exclusively for progress indicators, primary actions, and "AI Active" states. These should often be applied as a subtle 45-degree linear gradient to create a sense of motion.
- **Neutrals:** The background is a crisp White (#ffffff). Typography utilizes Slate/Gray tones (ranging from #0f172a for headings to #64748b for secondary text) to maintain a high-end, editorial feel.
- **Accents:** Use a very soft "AI Glow" (Emerald at 10-15% opacity) for background decorative elements or behind glass cards to indicate AI-driven insights.

## Typography

This design system relies on **Inter** for its neutral, systematic clarity. The hierarchy is strictly enforced to guide users through complex health data without cognitive load.

- **Display & Headlines:** Use tight letter-spacing and bold weights to create a "Linear-inspired" look for high-level metrics and coach greetings.
- **Body:** Standardized at 16px for optimal legibility. Use a slightly larger 18px variant for recovery instructions.
- **Data Points:** For technical metrics (e.g., Heart Rate, HRV), utilize **Geist** or a similar clean sans-serif at medium weights to provide a developer-tool aesthetic to the fitness data.
- **Labels:** Use uppercase for small metadata labels to create a distinct visual separation from body content.

## Layout & Spacing

The layout philosophy follows a **fixed-width central container** for desktop to ensure data remains scannable, while transitioning to a **fluid grid** for mobile.

- **Grid:** A 12-column grid is used for desktop dashboards. Components typically span 3, 4, or 6 columns.
- **Rhythm:** An 8px base unit governs all spacing.
- **Safe Zones:** Generous margins (64px on desktop) are essential to maintain the "premium" feel. Content should never feel cramped; if in doubt, increase the white space.
- **Mobile:** Transition to a single-column stack with 20px side margins. Use horizontal scrolling "cards" for secondary data sets (e.g., daily activity logs).

## Elevation & Depth

Elevation is achieved through a combination of **Glassmorphism** and **Ambient Shadows**, avoiding heavy solid fills.

- **Surface Layers:** The base is pure White. The secondary layer consists of translucent glass cards (Background Blur: 16px, Opacity: 70% White).
- **Borders:** Every card must have a 1px solid border. Use a high-contrast white border at 10-20% opacity to "cut" the card out from the background.
- **Shadows:** Use extremely soft, long-spread shadows (0 20px 50px rgba(0,0,0,0.04)) to make cards appear as if they are floating gently above the surface. 
- **AI State:** When the AI coach is active, apply a subtle inner-glow to the card using the Primary Emerald color at 5% opacity.

## Shapes

The design system utilizes a **Rounded** shape language to feel approachable and modern.

- **Primary Radius:** A consistent 20px (1.25rem) radius is applied to all main dashboard cards and containers.
- **Secondary Radius:** Buttons and input fields use a slightly smaller 12px radius to feel more precise.
- **Buttons:** Primary call-to-actions can optionally use a full-pill shape (999px) if they contain only an icon or short text to emphasize the "floating" UI concept.

## Components

### Buttons
- **Primary:** Gradient fill (Emerald to Green), white text, 12px radius. On hover: subtle scale-up (1.02x) and increased glow.
- **Secondary/Glass:** Translucent background (White 10%), 1px border, 12px radius. Text in Primary Emerald.

### Glass Cards
The core container for all insights. Features 20px rounded corners, 16px backdrop blur, and a 1px border (#ffffff 10%). Padding should be a generous 24-32px.

### Progress Bars
Ultra-slim (4px or 6px height). The "track" is a light gray (#f1f5f9), while the "progress" is the Primary Emerald gradient. Motion: use an `ease-out` transition of 0.8s for filling.

### Floating Navigation
A bottom-centered navigation bar on mobile and a top-fixed bar on desktop. It should be a pill-shaped glass element with a 1px border, containing minimalist 2pt stroke-weight icons.

### Inputs
Minimalist style. No background fill, just a bottom border (1px #e2e8f0). On focus, the border transitions to Primary Emerald with a 2px thickness.

### AI Floating Element
A small, circular glass orb with a slow "breathing" Emerald glow animation, used to trigger the AI Coach chat interface.