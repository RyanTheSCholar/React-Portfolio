/* eslint-disable no-unused-vars */
import * as React from "react"

function Github(props) {
  return (
    <svg
      height= {70}
      viewBox="0 0 512 512"
      width={70}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={256} cy={256} r={240} fill="#6879d9" />
      <path
        d="M258.099 110.074c-81.752 0-148.047 66.507-148.047 148.55 0 65.621 42.422 121.288 101.277 140.947 7.403 1.373 10.105-3.212 10.105-7.153 0-3.533-.127-12.874-.205-25.267-41.18 8.972-49.878-19.919-49.878-19.919-6.719-17.163-16.438-21.73-16.438-21.73-13.456-9.21 1.001-9.022 1.001-9.022 14.861 1.051 22.671 15.311 22.671 15.311 13.216 22.693 34.669 16.145 43.107 12.336 1.332-9.6 5.163-16.144 9.404-19.861-32.872-3.757-67.448-16.501-67.448-73.408 0-16.22 5.777-29.479 15.251-39.874-1.535-3.756-6.605-18.866 1.445-39.304 0 0 12.439-3.992 40.716 15.223 11.811-3.293 24.47-4.937 37.074-4.993 12.567.076 25.242 1.7 37.071 5.013 28.264-19.216 40.683-15.223 40.683-15.223 8.069 20.456 2.998 35.55 1.48 39.301 9.494 10.396 15.215 23.656 15.215 39.878 0 57.056-34.611 69.614-67.592 73.291 5.312 4.59 10.047 13.648 10.047 27.504 0 19.865-.183 35.881-.183 40.746 0 3.974 2.664 8.599 10.178 7.137 58.766-19.681 101.15-75.326 101.15-140.931.003-82.045-66.293-148.552-148.084-148.552zm0 0"
        fill="#fff"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="a"
        x1={256}
        x2={256}
        y1={39.5459}
        y2={472.4546}
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={0.1413} stopColor="#fff" stopOpacity={0.8587} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <circle cx={256} cy={256.001} r={216.455} fill="url(#a)" />
    </svg>
  )
}

export default Github

