/**
 * Fixed starfield + extra nebula / comet / twinkle layers (pointer-events: none).
 */
export const CosmicBackdrop = () => (
    <>
        <div aria-hidden="true" className="site-backdrop" />
        <div aria-hidden="true" className="cosmic-overlays" />
    </>
);
