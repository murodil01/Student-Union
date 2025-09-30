import React from "react";

// CyberSlider.jsx
// To'xtovsiz — continuous infinite image slider (only images).
// Use: <CyberSlider images={[url1, url2, url3]} speed={20} />

export default function CyberSlider({ images = [], speed = 20 }) {
  // If no images provided, fallback to sample placeholders
  const sample = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500",
    "https://picsum.photos/id/1020/800/500",
  ];
  const imgs = images.length ? images : sample;

  // We duplicate the list so the animation can loop seamlessly
  const track = [...imgs, ...imgs];

  // Inline CSS in a template string so this single-file component works out of the box
  const style = `
    .cyber-slider { position: relative; overflow: hidden; width: 100%; }
    .cyber-slider__track { 
      display: flex; 
      gap: 12px; 
      align-items: center; 
      will-change: transform;
      /* animation duration controlled by --speed (seconds) */
      animation: cyber-scroll linear infinite;
    }
    .cyber-slider__item { flex: 0 0 auto; }
    .cyber-slider__img { 
      display: block; 
      width: 100%;
      max-width: 312px; 
      height: auto; 
      aspect-ratio: 312 / 370;
      object-fit: cover; 
      border-radius: 8px; 
    }

    /* The keyframe moves the track left by exactly 50% (because we duplicated items) */
    @keyframes cyber-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* Responsive sizes */
    @media (max-width: 640px) {
      .cyber-slider__img { max-width: 200px; aspect-ratio: 312 / 370; }
    }
    @media (min-width: 641px) and (max-width: 1024px) {
      .cyber-slider__img { max-width: 260px; aspect-ratio: 312 / 370; }
    }
    @media (min-width: 1025px) {
      .cyber-slider__img { max-width: 312px; aspect-ratio: 312 / 370; }
    }
  `;

  // Convert speed (pixels per second intuition) into animation duration.
  const animationDuration = `${speed}s`;

  return (
    <div className="cyber-slider" style={{ "--speed": animationDuration }}>
      <style>{style}</style>

      <div
        className="cyber-slider__track py-[100px]"
        style={{
          // set animation duration using the provided speed
          animationDuration,
        }}
      >
        {track.map((src, i) => (
          <div className="cyber-slider__item" key={`${src}-${i}`}>
            <img className="cyber-slider__img" src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
