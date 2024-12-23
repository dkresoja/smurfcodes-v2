export function SpiderWeb() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 L100,100 M100,0 L0,100 M0,50 H100 M50,0 V100"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d="M25,0 L100,75 M0,75 L75,0 M0,25 L75,100 M25,100 L100,25"
        stroke="white"
        strokeWidth="0.3"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="white"
        strokeWidth="0.3"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke="white"
        strokeWidth="0.2"
        fill="none"
      />
    </svg>
  );
}
