export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top left - Pastel Blue */}
      <div
        className="blob-1 absolute top-20 -left-40 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(180, 231, 255, 0.25) 0%, rgba(180, 231, 255, 0.08) 70%, transparent 100%)',
        }}
      />

      {/* Blob 2 - Top right - Pastel Cyan */}
      <div
        className="blob-2 absolute -top-20 -right-40 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(160, 231, 229, 0.25) 0%, rgba(160, 231, 229, 0.08) 70%, transparent 100%)',
        }}
      />

      {/* Blob 3 - Bottom center - Pastel Teal */}
      <div
        className="blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(127, 229, 212, 0.2) 0%, rgba(127, 229, 212, 0.05) 70%, transparent 100%)',
        }}
      />

      {/* Blob 4 - Middle right - Pastel Mint */}
      <div
        className="blob-1 absolute top-1/2 -right-20 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(184, 243, 214, 0.25) 0%, rgba(184, 243, 214, 0.08) 70%, transparent 100%)',
          animationDelay: '3s',
        }}
      />

      {/* Blob 5 - Middle left - Blue glow */}
      <div
        className="blob-2 absolute top-1/3 -left-32 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 161, 0.1) 0%, rgba(0, 102, 161, 0.02) 70%, transparent 100%)',
          animationDelay: '4s',
        }}
      />

      {/* Blob 6 - Bottom right - Cyan accent */}
      <div
        className="blob-3 absolute bottom-20 right-0 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 204, 0.15) 0%, rgba(0, 180, 204, 0.03) 70%, transparent 100%)',
          animationDelay: '5s',
        }}
      />
    </div>
  )
}
