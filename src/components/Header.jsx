import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

export function Header() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xf4619c,
      color2: 0xffd4e8,
      size: 2,
      backgroundColor: 0x32153c,
      THREE: THREE,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <header ref={vantaRef} className="bg-light py-5 position-relative vanta-pos">
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Picture Column */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img 
              src="images/me.png" 
              alt="Amy Feng"
              className="img-thumbnail rounded-circle shadow-sm"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Name and Details Column */}
          <div className="col-md-9">
            <h1 className="display-4 fw-bold text-light text-shadow">Amy Feng</h1>
            <p className="lead text-pink fw-bold mb-3 text-shadow">SMIC Highschool Sophomore</p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-pink">Optimistic</span>
              <span className="badge bg-pink">Outgoing</span>
              <span className="badge bg-pink">Collaborating</span>
              <span className="badge bg-pink">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
