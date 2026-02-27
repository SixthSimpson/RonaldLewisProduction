// Classic 1950s/60s CRT television set
// viewBox: 0 0 280 265

// 12 channel tick marks around the CH selector knob
const CH_TICKS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
  return {
    x1: 228 + 17 * Math.cos(angle),
    y1: 100 + 17 * Math.sin(angle),
    x2: 228 + 20 * Math.cos(angle),
    y2: 100 + 20 * Math.sin(angle),
  }
})

function CameraAsset({ size = 280 }) {
  const aspect = 265 / 280
  const height = Math.round(size * aspect)

  return (
    <div className="camera-asset-wrap" style={{ width: size, height }}>
      <svg
        viewBox="0 0 280 265"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-label="Classic television set"
      >
        <defs>
          {/* Phosphor screen glow */}
          <radialGradient id="screenGlow" cx="50%" cy="48%" r="58%">
            <stop offset="0%"   stopColor="#c8e098" stopOpacity="0.92" />
            <stop offset="45%"  stopColor="#7aaa50" stopOpacity="0.6"  />
            <stop offset="100%" stopColor="#0a1408" stopOpacity="0.85" />
          </radialGradient>

          {/* Cabinet gradient — dark top to slightly lighter bottom */}
          <linearGradient id="cabinetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#161820" />
            <stop offset="100%" stopColor="#0e0f14" />
          </linearGradient>

          {/* Knob face gradient — subtle bevel */}
          <radialGradient id="knobFace" cx="35%" cy="32%" r="60%">
            <stop offset="0%"   stopColor="#22263a" />
            <stop offset="100%" stopColor="#0c0e18" />
          </radialGradient>

          {/* Scanline pattern */}
          <pattern id="scanlines" x="0" y="0" width="2" height="4"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="2" height="2" fill="rgba(0,0,0,0.18)" />
          </pattern>

          {/* Clip to screen bounds */}
          <clipPath id="screenClip">
            <rect x="29" y="76" width="158" height="128" rx="7" />
          </clipPath>

          {/* Clip to cabinet */}
          <clipPath id="cabinetClip">
            <rect x="12" y="58" width="256" height="168" rx="18" />
          </clipPath>

          {/* Screen bloom filter */}
          <filter id="screenBloom" x="-8%" y="-8%" width="116%" height="116%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for power LED */}
          <filter id="ledGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── ANTENNA MOUNT ───────────────────────────────── */}
        <rect x="118" y="44" width="44" height="18" rx="6"
          fill="#131520" stroke="#1c2232" strokeWidth="1.2" />
        <rect x="127" y="48" width="26" height="8" rx="3"
          fill="#0e1018" stroke="#181e2e" strokeWidth="0.7" />

        {/* ── RABBIT EAR ANTENNAS ──────────────────────────── */}
        {/* Left ear */}
        <line x1="131" y1="50" x2="75" y2="7"
          stroke="#1c2438" strokeWidth="3.5" strokeLinecap="round" />
        {/* Right ear */}
        <line x1="149" y1="50" x2="205" y2="7"
          stroke="#1c2438" strokeWidth="3.5" strokeLinecap="round" />
        {/* Tip balls */}
        <circle cx="75" cy="7" r="5.5" fill="#161c2c" stroke="#222e44" strokeWidth="1.2" />
        <circle cx="205" cy="7" r="5.5" fill="#161c2c" stroke="#222e44" strokeWidth="1.2" />

        {/* ── CABINET BODY ─────────────────────────────────── */}
        <rect x="12" y="58" width="256" height="168" rx="18"
          fill="url(#cabinetGrad)" stroke="#1c2030" strokeWidth="1.5" />

        {/* Top strip accent */}
        <rect x="12" y="58" width="256" height="14"
          fill="#191c28" clipPath="url(#cabinetClip)" />
        <line x1="12" y1="72" x2="268" y2="72"
          stroke="#12161f" strokeWidth="0.8" />

        {/* Vertical divider — screen | controls */}
        <line x1="200" y1="68" x2="200" y2="222"
          stroke="#13161e" strokeWidth="1" />

        {/* ── SCREEN BEZEL ─────────────────────────────────── */}
        <rect x="20" y="67" width="174" height="150" rx="12"
          fill="#0b0c12" stroke="#161922" strokeWidth="1.2" />
        {/* Inner bezel shadow ring */}
        <rect x="25" y="72" width="164" height="140" rx="9"
          fill="none" stroke="#080a0f" strokeWidth="3" />

        {/* ── CRT SCREEN ───────────────────────────────────── */}
        {/* Screen base (dark phosphor off-state) */}
        <rect x="29" y="76" width="158" height="128" rx="7"
          fill="#060b05" />

        {/* Phosphor glow — ANIMATED */}
        <rect x="29" y="76" width="158" height="128" rx="7"
          fill="url(#screenGlow)"
          className="tv-screen-pulse"
          filter="url(#screenBloom)" />

        {/* Scanlines — clipped to screen */}
        <rect x="29" y="76" width="158" height="128" rx="7"
          fill="url(#scanlines)" opacity="0.55"
          clipPath="url(#screenClip)" />

        {/* Sweep line — ANIMATED, clipped to screen */}
        <rect
          x="29" y="76" width="158" height="4" rx="1"
          fill="rgba(190,240,130,0.28)"
          className="tv-scanline-sweep"
          clipPath="url(#screenClip)"
          style={{ transformOrigin: '29px 76px' }}
        />

        {/* Screen glass glint (top-left highlight) */}
        <ellipse cx="65" cy="93" rx="34" ry="18"
          fill="rgba(255,255,255,0.035)"
          transform="rotate(-18 65 93)"
          clipPath="url(#screenClip)" />
        <ellipse cx="50" cy="84" rx="14" ry="7"
          fill="rgba(255,255,255,0.06)"
          transform="rotate(-18 50 84)"
          clipPath="url(#screenClip)" />
        <circle cx="44" cy="81" r="3"
          fill="rgba(255,255,255,0.09)"
          clipPath="url(#screenClip)" />

        {/* ── SPEAKER GRILLE (below screen inside bezel) ───── */}
        {[0, 5, 10, 15, 20, 25].map(dy => (
          <rect key={dy}
            x="34" y={208 + dy} width="148" height="2.5" rx="1.2"
            fill="#0a0b10" stroke="#101318" strokeWidth="0.4" />
        ))}

        {/* ── CONTROLS PANEL (right of divider) ────────────── */}

        {/* CH — channel selector (large notched knob) */}
        {/* Housing recess */}
        <circle cx="228" cy="100" r="22"
          fill="#0a0b10" stroke="#161922" strokeWidth="1" />
        {/* Tick marks for 12 channels */}
        {CH_TICKS.map((t, i) => (
          <line key={i}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={i % 3 === 0 ? '#1e2a3e' : '#131826'}
            strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
          />
        ))}
        {/* Knob face */}
        <circle cx="228" cy="100" r="14"
          fill="url(#knobFace)" stroke="#1e2438" strokeWidth="1" />
        {/* Knob indicator line */}
        <line x1="228" y1="89" x2="228" y2="96"
          stroke="#2e3e58" strokeWidth="1.5" strokeLinecap="round" />
        {/* Label */}
        <text x="228" y="124"
          fontSize="5.5" fill="#1e2a3e" textAnchor="middle"
          fontFamily="monospace" letterSpacing="1.5">
          CH
        </text>

        {/* VOL — volume knob */}
        <circle cx="228" cy="152" r="17"
          fill="#090a0f" stroke="#14161e" strokeWidth="1" />
        <circle cx="228" cy="152" r="11"
          fill="url(#knobFace)" stroke="#1a1e2e" strokeWidth="1" />
        <line x1="228" y1="143" x2="228" y2="148"
          stroke="#2a3650" strokeWidth="1.5" strokeLinecap="round" />
        <text x="228" y="173"
          fontSize="5.5" fill="#1a2438" textAnchor="middle"
          fontFamily="monospace" letterSpacing="1.5">
          VOL
        </text>

        {/* TUNE — fine tuning knob */}
        <circle cx="228" cy="200" r="13"
          fill="#090a0f" stroke="#14161e" strokeWidth="1" />
        <circle cx="228" cy="200" r="8"
          fill="url(#knobFace)" stroke="#181c2c" strokeWidth="1" />
        <line x1="228" y1="193" x2="228" y2="197"
          stroke="#222e44" strokeWidth="1.2" strokeLinecap="round" />
        <text x="228" y="217"
          fontSize="5" fill="#161e30" textAnchor="middle"
          fontFamily="monospace" letterSpacing="1">
          TUNE
        </text>

        {/* Power LED — green, animated PULSE */}
        <circle cx="214" cy="78" r="3.5"
          fill="#22c55e" opacity="0.7"
          filter="url(#ledGlow)"
          className="tv-screen-pulse" />

        {/* ── BRAND NAMEPLATE ──────────────────────────────── */}
        <rect x="82" y="222" width="96" height="11" rx="2"
          fill="#0e1016" stroke="#181e2c" strokeWidth="0.6" />
        <text x="130" y="230"
          fontSize="5" fill="#222e48" textAnchor="middle"
          fontFamily="serif" letterSpacing="2.5">
          RONALD LEWIS
        </text>

        {/* ── STAND ────────────────────────────────────────── */}
        <rect x="52" y="226" width="176" height="9" rx="4"
          fill="#0e0f14" stroke="#181e2c" strokeWidth="1" />
        {/* Feet */}
        <rect x="58" y="235" width="26" height="18" rx="5"
          fill="#0b0c10" stroke="#161a24" strokeWidth="1" />
        <rect x="196" y="235" width="26" height="18" rx="5"
          fill="#0b0c10" stroke="#161a24" strokeWidth="1" />
        {/* Foot ridge lines */}
        <line x1="63" y1="241" x2="79" y2="241" stroke="#12161e" strokeWidth="0.8" />
        <line x1="63" y1="246" x2="79" y2="246" stroke="#12161e" strokeWidth="0.8" />
        <line x1="201" y1="241" x2="217" y2="241" stroke="#12161e" strokeWidth="0.8" />
        <line x1="201" y1="246" x2="217" y2="246" stroke="#12161e" strokeWidth="0.8" />
      </svg>
    </div>
  )
}

export default CameraAsset
