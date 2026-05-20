'use client';

import { useState, useRef, useEffect } from 'react';

const PATHS = [
  '/images/attorney/attorney-nwahiri.jpg',
  '/images/attorney/attorney-nwahiri.jpeg',
  '/images/attorney/attorney-nwahiri.png',
  '/images/attorney/attorney-nwahiri.webp',
];

export default function AttorneyIntroPhoto() {
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
    <div className="relative w-full max-w-sm mx-auto md:mx-0" style={{ aspectRatio: '3/4' }}>
      {/* Gold offset frame */}
      <div
        className="absolute"
        style={{
          bottom: '-16px',
          right: '-16px',
          width: '100%',
          height: '100%',
          border: '1px solid #B8973B',
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
            width: '100%',
            height: '100%',
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
            width: '100%',
            height: '100%',
            backgroundColor: '#e8e3dc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <div style={{ width: '48px', height: '1px', backgroundColor: '#B8973B' }} />
          <p style={{ color: '#9ca3af', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.15em' }} className="uppercase">
            Attorney Photo
          </p>
        </div>
      )}
    </div>
  );
}
