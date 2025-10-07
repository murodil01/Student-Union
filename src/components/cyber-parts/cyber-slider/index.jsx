import slider1 from "../../../assets/game-slider/slider1.png";
import slider2 from "../../../assets/game-slider/slider2.png";
import slider3 from "../../../assets/game-slider/slider3.png";
import slider4 from "../../../assets/game-slider/slider4.png";
import slider5 from "../../../assets/game-slider/slider5.png";

export default function CyberSlider({ images = [], speed = 30 }) {
  const sample = [slider1, slider2, slider3, slider4, slider5];
  const imgs = images.length ? images : sample;
  const track = [...imgs, ...imgs]; // duplicated list for seamless infinite scroll

  const style = `
    .cyber-slider {
      position: relative;
      overflow: hidden;
      width: 100%;
      background: transparent;
    }
    .cyber-slider__track {
      display: flex;
      gap: 12px;
      align-items: center;
      will-change: transform;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
      animation: scroll var(--speed) linear infinite;
    }
    .cyber-slider__item {
      flex: 0 0 auto;
    }
    .cyber-slider__img {
      display: block;
      width: 100%;
      max-width: 312px;
      height: auto;
      aspect-ratio: 312 / 370;
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.3s ease;
      border: 1px solid #D1D5DB;
    }
    .cyber-slider__img:hover {
      transform: scale(1.05);
    }

    @keyframes scroll {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }

    /* Responsive */
    @media (max-width: 640px) {
      .cyber-slider__img { max-width: 200px; }
    }
    @media (min-width: 641px) and (max-width: 1024px) {
      .cyber-slider__img { max-width: 260px; }
    }
  `;

  const duration = `${speed}s`;

  return (
    <div className="cyber-slider" style={{ "--speed": duration }}>
      <style>{style}</style>

      <div
        className="cyber-slider__track py-[100px]"
        style={{
          animationDuration: duration,
        }}
      >
        {track.map((src, i) => (
          <div className="cyber-slider__item rounded-[8px]" key={`${src}-${i}`}>
            <img className="cyber-slider__img" src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
