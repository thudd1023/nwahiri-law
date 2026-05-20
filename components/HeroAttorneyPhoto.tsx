'use client';

import { useState, useRef, useEffect } from 'react';

const PATHS = [
  '/images/attorney/attorney-nwahiri-header.png',
  '/images/attorney/attorney-nwahiri-header.jpg',
  '/images/attorney/attorney-nwahiri-header.webp',
];

export default function HeroAttorneyPhoto() {
  const [pathIndex, setPathIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [pathIndex]);

  const handleError = () => {
    if (pathIndex < PATHS.length - 1) {
      setPathIndex(pathIndex + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div
      className="relative hidden md:flex items-end justify-center flex-shrink-0"
      style={{ width: '380px', minHeight: '500px' }}
    >
      {/* Gold offset frame */}
      <div
        className="absolute"
        style={{
          top: '12px',
          right: '-12px',
          width: '88%',
          height: '90%',
          border: '1px solid rgba(184,151,59,0.45)',
          zIndex: 0,
        }}
      />

      {/* Photo */}
      {!allFailed && (
        <img
          ref={imgRef}
          key={PATHS[pathIndex]}
          src={PATHS[pathIndex]}
          alt="Attorney Tobechuku Nwahiri"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '88%',
            height: '500px',
            objectFit: 'cover',
            objectPosition: 'top',
            display: loaded ? 'block' : 'none',
          }}
        />
      )}

      {/* Placeholder */}
      {(!loaded || allFailed) && (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '88%',
            height: '500px',
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <div style={{ width: '36px', height: '1px', backgroundColor: '#B8973B' }} />
          <p style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Montserrat, sans-serif', fontSize: '10px', letterSpacing: '0.2em' }} className="uppercase">
            Attorney Photo
          </p>
        </div>
      )}
    </div>
  );
}
