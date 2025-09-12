import { useEffect, useRef } from 'react';

type Options = {
  radius?: number; // 커서 반응 반경(px)
  strength?: number; // 끌림 세기 (0~1)
  ease?: number; // 0~1, 클수록 천천히 따라감
};

export function useMouseEvent<T extends HTMLElement>(options: Options = {}) {
  const { radius = 160, strength = 0.25, ease = 0.12 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0,
      targetY = 0;
    let curX = 0,
      curY = 0;

    const rectOf = () => el.getBoundingClientRect();

    function onMove(e: MouseEvent) {
      console.log({ e });

      const rect = rectOf();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        // 0~1 비율로 세기 적용 (가까울수록 강하게)
        const k = (1 - dist / radius) * strength;
        targetX = dx * k;
        targetY = dy * k;
      } else {
        targetX = 0;
        targetY = 0;
      }
      loop();
    }

    function loop() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // 부드러운 보간
        curX += (targetX - curX) * ease;
        curY += (targetY - curY) * ease;

        if (el) {
          el.style.transform = `translate(${curX}px, ${curY}px)`;
          el.style.willChange = 'transform';

          // 거의 안정화되면 루프 중단
          if (
            Math.abs(targetX - curX) > 0.1 ||
            Math.abs(targetY - curY) > 0.1
          ) {
            loop();
          }
        }
      });
    }

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      el.style.transform = '';
      el.style.willChange = '';
    };
  }, [radius, strength, ease]);

  return ref;
}
