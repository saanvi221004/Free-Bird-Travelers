'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

interface Point { x: number; y: number }

export default function Layout({ children }: LayoutProps) {
  const [points, setPoints] = useState<Point[]>([]);
  const [enabled, setEnabled] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastPosRef = useRef<Point | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion and only enable on precise pointers
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqPointer = window.matchMedia('(pointer: fine)');
    const compute = () => setEnabled(!mqReduce.matches && mqPointer.matches);
    compute();
    mqReduce.addEventListener?.('change', compute);
    mqPointer.addEventListener?.('change', compute);
    return () => {
      mqReduce.removeEventListener?.('change', compute);
      mqPointer.removeEventListener?.('change', compute);
    };
  }, []);

  // Always start at top on navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname]);

  useEffect(() => {
    if (!enabled) return;

    // Show plane immediately at center
    setHasMoved(true);
    setPoints([{ x: window.innerWidth / 2, y: window.innerHeight / 2 }]);

    const onMove = (e: MouseEvent) => {
      const p = { x: e.clientX, y: e.clientY };
      lastPosRef.current = p;
      // schedule an update per frame to avoid flooding
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          setPoints(prev => {
            const next = [...prev, lastPosRef.current as Point];
            // keep last N points for a short trail
            return next.slice(-24);
          });
        });
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [enabled]);

  const plane = points[points.length - 1];
  const prev = points[points.length - 2];
  const angleDeg = useMemo(() => {
    if (!plane || !prev) return 0;
    const dx = plane.x - prev.x;
    const dy = plane.y - prev.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }, [plane, prev]);

  const pathD = useMemo(() => {
    if (points.length < 2) return '';
    const cmds = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 1; i < points.length; i++) cmds.push(`L ${points[i].x} ${points[i].y}`);
    return cmds.join(' ');
  }, [points]);

  const hideNative = false; // disable overlay; using icon cursor instead
  return (
    <div className={`min-h-screen flex flex-col`}>
      {/* Site-wide photographic background image (visible above body background) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 select-none bg-center bg-cover bg-fixed will-change-transform"
        style={{ backgroundImage: "url('/images/image copy 6.png')", filter: 'blur(4px) brightness(1.02)', transform: 'scale(1.02)' }}
        aria-hidden
      />
      {/* Soft ambient gradient to gently tint the image */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-hero-gradient opacity-12" aria-hidden />
      {/* Scattered travel icons as faint watermarks */}
      <div className="pointer-events-none fixed inset-0 z-20 select-none" aria-hidden>
        {[
          '/images/icons/image.png',
          '/images/icons/image copy.png',
          '/images/icons/image copy 2.png',
          '/images/icons/image copy 3.png',
          '/images/icons/image copy 4.png',
          '/images/icons/image copy 5.png',
          '/images/icons/image copy 6.png',
          '/images/icons/image copy 7.png',
          '/images/icons/image copy 8.png',
        ].map((src, i) => (
          <div
            key={src}
            className="absolute opacity-10"
            style={{
              top: ["8%","18%","30%","45%","60%","72%","15%","38%","82% "][i],
              left: ["6%","85%","14%","78%","10%","50%","32%","58%","70% "][i],
              transform: `rotate(${[-8,10,-6,8,-12,5,9,-7,6][i]}deg)`,
            }}
          >
            <img
              src={src}
              width={[64,56,60,50,72,60,54,58,66][i]}
              height={[64,56,60,50,72,60,54,58,66][i]}
              alt="decorative travel icon"
              style={{ filter: 'grayscale(100%)', opacity: 0.5 }}
            />
          </div>
        ))}

        {/* Extra layer for denser icon field (smaller icons) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const srcs = [
            '/images/icons/image.png',
            '/images/icons/image copy.png',
            '/images/icons/image copy 2.png',
            '/images/icons/image copy 3.png',
            '/images/icons/image copy 4.png',
            '/images/icons/image copy 5.png',
            '/images/icons/image copy 6.png',
            '/images/icons/image copy 7.png',
            '/images/icons/image copy 8.png',
            '/images/icons/image copy 9.png',
            '/images/icons/image copy 10.png',
            '/images/icons/image copy 11.png',
            '/images/icons/image copy 12.png',
            '/images/icons/image copy 14.png',
            '/images/icons/image copy 15.png',
            '/images/icons/image copy 16.png',
            '/images/icons/image copy 17.png',
          ];
          const src = srcs[i % srcs.length];
          const tops = [
            '12%','22%','34%','48%','62%','76%',
            '18%','28%','42%','56%','70%','84%'
          ];
          const lefts = [
            '22%','36%','68%','12%','44%','80%',
            '28%','62%','16%','52%','74%','38%'
          ];
          const sizes = [48,44,46,42,50,40,46,44,42,48,46,40];
          const angle = [-6,5,-4,7,-3,4,-5,6,-7,3,-2,5][i % 12];
          return (
            <div
              key={`extra-icon-${i}`}
              className="absolute opacity-10"
              style={{ top: tops[i], left: lefts[i], transform: `rotate(${angle}deg)` }}
            >
              <img
                src={src}
                width={sizes[i]}
                height={sizes[i]}
                alt="decorative travel icon"
                style={{ filter: 'grayscale(100%)', opacity: 0.45 }}
              />
            </div>
          );
        })}

        {/* Third layer: extra-small icons for highest density */}
        {Array.from({ length: 20 }).map((_, i) => {
          const srcs = [
            '/images/icons/image.png',
            '/images/icons/image copy.png',
            '/images/icons/image copy 2.png',
            '/images/icons/image copy 3.png',
            '/images/icons/image copy 4.png',
            '/images/icons/image copy 5.png',
            '/images/icons/image copy 6.png',
            '/images/icons/image copy 7.png',
            '/images/icons/image copy 8.png',
            '/images/icons/image copy 9.png',
            '/images/icons/image copy 10.png',
            '/images/icons/image copy 11.png',
            '/images/icons/image copy 12.png',
            '/images/icons/image copy 14.png',
            '/images/icons/image copy 15.png',
            '/images/icons/image copy 16.png',
            '/images/icons/image copy 17.png',
          ];
          const src = srcs[i % srcs.length];
          const tops = ['6%','14%','20%','26%','32%','38%','44%','50%','56%','62%','68%','74%','80%','12%','24%','36%','48%','60%','72%','84%'];
          const lefts = ['10%','22%','34%','46%','58%','70%','82%','18%','30%','42%','54%','66%','78%','26%','38%','50%','62%','74%','12%','86%'];
          const sizes = [32,30,28,34,30,28,32,30,28,34,30,28,32,30,28,34,30,28,32,28];
          const angle = [-4,3,-2,5,-3,4,-5,2,-1,4,-2,3,-4,5,-3,2,-1,4,-2,3][i % 20];
          return (
            <div
              key={`extra2-icon-${i}`}
              className="absolute opacity-10"
              style={{ top: tops[i], left: lefts[i], transform: `rotate(${angle}deg)` }}
            >
              <img
                src={src}
                width={sizes[i]}
                height={sizes[i]}
                alt="decorative travel icon"
                style={{ filter: 'grayscale(100%)', opacity: 0.35 }}
              />
            </div>
          );
        })}

        {/* Grid-distributed tiny icons to cover the whole page area */}
        {Array.from({ length: 100 }).map((_, i) => {
          const srcs = [
            '/images/icons/image.png',
            '/images/icons/image copy.png',
            '/images/icons/image copy 2.png',
            '/images/icons/image copy 3.png',
            '/images/icons/image copy 4.png',
            '/images/icons/image copy 5.png',
            '/images/icons/image copy 6.png',
            '/images/icons/image copy 7.png',
            '/images/icons/image copy 8.png',
            '/images/icons/image copy 9.png',
            '/images/icons/image copy 10.png',
            '/images/icons/image copy 11.png',
            '/images/icons/image copy 12.png',
            '/images/icons/image copy 14.png',
            '/images/icons/image copy 15.png',
            '/images/icons/image copy 16.png',
            '/images/icons/image copy 17.png',
          ];
          const src = srcs[(i * 3) % srcs.length];
          const row = Math.floor(i / 10);
          const col = i % 10;
          const top = `${row * 10 + 5}%`;
          const left = `${col * 10 + 5}%`;
          const size = 22 + ((i % 3) * 4); // 22, 26, 30
          const angle = [-4, 3, -2, 5, -3, 4][i % 6];
          return (
            <div
              key={`grid-icon-${i}`}
              className="absolute opacity-10"
              style={{ top, left, transform: `rotate(${angle}deg)` }}
            >
              <img
                src={src}
                width={size}
                height={size}
                alt="decorative travel icon"
                style={{ filter: 'grayscale(100%)', opacity: 0.3 }}
              />
            </div>
          );
        })}
      </div>

      {/* Content above overlays */}
      <div className="relative z-30">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
