import React from 'react'

export const Logo = () => {
  return (
    <svg
      width="40"
      height="27"
      viewBox="0 0 40 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M4.79 9.32C2.2 9.43 1.52 8.56 1.52 6.89C1.52 5.47 2.02 4.55 4.73 4.52L4.68 3.72C1.64 3.82 0.66 5.3 0.66 7C0.66 8.86 1.55 10.25 4.72 10.03L4.79 9.32ZM9.79805 10.03L10.638 9.97C10.068 7.9 9.47805 5.86 8.82805 3.78H7.66805C7.01805 5.87 6.42805 7.93 5.85805 10H6.68805C6.85805 9.37 7.01805 8.73 7.18805 8.1H9.27805C9.45805 8.74 9.62805 9.39 9.79805 10.03ZM8.19805 4.49H8.27805C8.56805 5.48 8.83805 6.48 9.10805 7.47H7.35805C7.63805 6.48 7.90805 5.49 8.19805 4.49ZM14.8961 3.8C14.8961 3.8 13.9161 7.4 13.7761 7.92H13.7361C13.5961 7.4 12.5961 3.8 12.5961 3.8H11.6561V10H12.4161L12.3761 5.19H12.4161L13.4561 8.92H14.0161L15.0361 5.19H15.0761L15.0361 10H15.8261V3.8H14.8961ZM19.6541 4.46H21.1941V3.8H17.2941V4.46H18.8241V9.34H17.2941V10H21.1741L21.2341 9.34H19.6541V4.46ZM30.6702 10V7.94L32.6602 3.8H31.8002L30.2702 7.14L28.7102 3.78L27.8202 3.82L29.8302 7.94V10H30.6702ZM4.3 22.03L5.14 21.97C4.57 19.9 3.98 17.86 3.33 15.78H2.17C1.52 17.87 0.93 19.93 0.36 22H1.19C1.36 21.37 1.52 20.73 1.69 20.1H3.78C3.96 20.74 4.13 21.39 4.3 22.03ZM2.7 16.49H2.78C3.07 17.48 3.34 18.48 3.61 19.47H1.86C2.14 18.48 2.41 17.49 2.7 16.49ZM10.398 22L10.478 21.29H7.46805V15.8H6.62805V22H10.398ZM15.8561 21.29H12.8761V19.18H15.4061V18.55H12.8761V16.51H15.8061V15.8H12.0461V22H15.7761L15.8561 21.29Z"
        fill="black"
      />
      <path d="M21.9922 22.45H31.9922V12.45H21.9922V22.45Z" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0"
          width="64"
          height="64"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}
