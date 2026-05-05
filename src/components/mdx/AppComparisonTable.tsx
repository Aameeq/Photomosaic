import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const features = [
  { name: 'Watermark-Free', photomosaic: true, competitors: false },
  { name: 'Privacy-First (No Data Stored)', photomosaic: true, competitors: false },
  { name: 'High-Res Download', photomosaic: true, competitors: 'Paid only' },
  { name: 'Cloud Processing (No App Needed)', photomosaic: true, competitors: false },
  { name: 'Creation Speed', photomosaic: '< 2 mins', competitors: '10-30 mins' },
];

export default function AppComparisonTable() {
  const tableRef = useRef<HTMLTableElement>(null);
  const rowsRef = useRef<HTMLTableRowElement[]>([]);

  useEffect(() => {
    if (!tableRef.current) return;

    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div className="my-10 overflow-x-auto">
      <table ref={tableRef} className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-stroke text-muted">
            <th className="py-4 px-4 font-body font-medium">Feature</th>
            <th className="py-4 px-4 font-display italic text-accent text-xl">Photomosaic.work</th>
            <th className="py-4 px-4 font-body font-medium">Typical Apps</th>
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr
              key={f.name}
              ref={(el) => {
                if (el) rowsRef.current[i] = el;
              }}
              className="border-b border-stroke/50 hover:bg-surface/30 transition-colors"
            >
              <td className="py-4 px-4 text-white font-medium">{f.name}</td>
              <td className="py-4 px-4">
                {f.photomosaic === true ? (
                  <span className="inline-flex items-center justify-center bg-accent/20 text-accent rounded-full w-6 h-6">✓</span>
                ) : (
                  <span className="text-accent">{f.photomosaic}</span>
                )}
              </td>
              <td className="py-4 px-4 text-muted">
                {f.competitors === false ? '❌' : f.competitors}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
