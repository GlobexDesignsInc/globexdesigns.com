// @flow strict

import React, {type Element} from 'react';

type PropsType = {
	+className?: ?string,
};

export const Logo = ({className}: PropsType): Element<'svg'> => (
	<svg className={className} viewBox='0 0 2004 343' xmlns='http://www.w3.org/2000/svg'>
		<defs>
			<linearGradient gradientUnits='userSpaceOnUse' id='a' x1='483.265' x2='483.265'
				y1='251.5'>
				<stop offset='0' stopColor='#a7a8a8' />
				<stop offset='1' stopColor='#fefefe' />
			</linearGradient>
			<linearGradient gradientUnits='userSpaceOnUse' id='b' x1='1492.86' x2='1492.86'
				y1='213.438' y2='38.125'>
				<stop offset='0' stopColor='#1f8cd8' />
				<stop offset='.3' stopColor='#368ad3' />
				<stop offset='.713' stopColor='#47aef3' />
				<stop offset='1' stopColor='#399ce1' />
			</linearGradient>
		</defs>
		<path d='M633.2 342.306v-51.861h-7.067v51.861h7.067zm47.415 0v-4.741h-22.842v-47.12h-7.066v51.861h29.9zm43.525 0v-4.741H701.3v-47.12h-7.066v51.861h29.9zm48.646-15.558v-36.3h-7.066v36.36q0 5.64-2.766 8.606t-8.5 2.969q-5.837 0-8.807-3.006t-2.97-8.645v-36.287h-7.067v36.377q0 7.854 4.8 12.076t13.687 4.223q8.986 0 13.838-4.26t4.852-12.113zM820.4 325.5a14.615 14.615 0 00-2.612-4.49 23.665 23.665 0 00-4.66-4.154 52.588 52.588 0 00-6.964-4.008 56 56 0 01-5.684-3.264 17.563 17.563 0 01-3.431-2.9 7.629 7.629 0 01-1.638-2.781 10.168 10.168 0 01-.41-2.931 5.931 5.931 0 01.514-2.375 6.468 6.468 0 011.544-2.152 7.29 7.29 0 012.626-1.521 11.456 11.456 0 013.759-.557A11.141 11.141 0 01809.78 296a17.974 17.974 0 014.581 4.742l6.145-2.519a25.125 25.125 0 00-2.868-3.583 15.542 15.542 0 00-7.988-4.428 26.4 26.4 0 00-5.837-.583 22.778 22.778 0 00-6.555.89 15.15 15.15 0 00-5.018 2.487 11.447 11.447 0 00-3.175 3.747 9.909 9.909 0 00-1.126 4.673 13.926 13.926 0 00.717 4.639 11.759 11.759 0 002.355 3.9 21.129 21.129 0 004.3 3.6 69.126 69.126 0 006.452 3.672q7.067 3.636 9.73 6.9a10.944 10.944 0 012.662 7.049 6.188 6.188 0 01-2.662 5.231 12.01 12.01 0 01-7.272 1.966 10.875 10.875 0 01-6.554-1.927 16.653 16.653 0 01-4.711-5.7L786.4 332.9a17.781 17.781 0 006.606 7.557q4.248 2.667 11.009 2.667a26.089 26.089 0 007.217-.927 16.614 16.614 0 005.446-2.6 11.086 11.086 0 004.543-9.09 15.06 15.06 0 00-.821-5.007zm46.6-30.314v-4.741h-36.048v4.741h14.44v47.12h7.067v-47.12H867zm48.645 47.12l-11.265-24.819a17.252 17.252 0 008.039-4.779 11.967 11.967 0 003.021-8.409 12.087 12.087 0 00-5.311-10.446 17.738 17.738 0 00-5.768-2.556 28.915 28.915 0 00-7.2-.852h-17.155v51.861h7.067V318.82h5.146q1.647 0 3.087-.037t1.751-.037l10.806 23.56h7.783zm-10.307-30.672q-3.036 2.445-8.9 2.445h-9.364v-18.893h9.776q5.556 0 8.541 2.371a8.364 8.364 0 012.985 6.964 8.6 8.6 0 01-3.037 7.113zm62.333 30.672l-17-51.861h-7.579l-17 51.861h7.067l4.3-13.484H956.2l4.2 13.484h7.271zm-13.006-18.225h-15.771l3.994-12.926q1.126-3.64 2.253-7.5a65.488 65.488 0 001.639-6.761q.613 2.9 1.69 6.687t2.2 7.5zm53.564-28.9v-4.741h-36.051v4.741h14.44v47.12h7.067v-47.12h14.545zm20.58 47.12v-51.856h-7.07v51.861h7.07zm54.79 0v-51.856h-6.76v32.413c0 .963.02 1.915.05 2.853s.07 1.815.11 2.63.05 1.47.05 1.963c-.41-.741-.9-1.593-1.48-2.556s-1.19-2.012-1.84-3.149-1.32-2.3-2.04-3.482-1.41-2.371-2.09-3.556l-16.21-27.116h-7.07v51.861h6.86v-33.747c0-.963-.01-1.913-.05-2.852s-.05-1.815-.05-2.63v-1.964c.88 1.63 2.01 3.619 3.37 5.964s2.69 4.607 3.98 6.779l17.15 28.45h6.02zm53.66-18.077v-8.3h-16.69v4.89h9.63v3.943q0 13.617-11.62 13.616a10.766 10.766 0 01-9.62-5.538q-3.45-5.538-3.44-16.467 0-10.853 3.33-16.429t9.37-5.575a9.854 9.854 0 016.09 1.816c1.6 1.21 3.16 3.4 4.66 6.556l6.45-2.074a26.046 26.046 0 00-2.61-4.48 15.506 15.506 0 00-3.53-3.5 16.144 16.144 0 00-4.71-2.262 21.4 21.4 0 00-6.15-.8 19.847 19.847 0 00-8.81 1.852 16.471 16.471 0 00-6.26 5.334 24.485 24.485 0 00-3.69 8.446 51.567 51.567 0 00.02 22.3 24.453 24.453 0 003.7 8.409 16.671 16.671 0 006.16 5.3 19.256 19.256 0 008.73 1.852 22.667 22.667 0 008.37-1.407 15.787 15.787 0 009.44-9.891 23.22 23.22 0 001.18-7.594zm68.42 18.077v-4.741h-22.84v-47.12h-7.07v51.861h29.91zm21.19 0v-51.856h-7.06v51.861h7.06zm54.79-51.861h-7.17l-9.52 31.561q-1.125 3.557-2.05 7.15t-1.53 6.482q-.615-2.889-1.49-6.445t-2-7.187l-9.52-31.561h-7.27l16.79 51.861h6.97zm45.37 51.861v-4.741h-24.68v-20.518h14.75v-4.89h-14.75v-16.966h23.45v-4.741h-30.52v51.861h31.75zm44.35-16.807a14.564 14.564 0 00-2.62-4.49 23.271 23.271 0 00-4.66-4.154 52.391 52.391 0 00-6.96-4.008 55.232 55.232 0 01-5.68-3.264 17.524 17.524 0 01-3.43-2.9 7.594 7.594 0 01-1.64-2.781 9.965 9.965 0 01-.41-2.931 5.976 5.976 0 01.51-2.375 6.4 6.4 0 011.55-2.152 7.245 7.245 0 012.62-1.521 11.5 11.5 0 013.76-.557 11.123 11.123 0 016.33 1.63 17.833 17.833 0 014.58 4.742l6.15-2.519a25.56 25.56 0 00-2.87-3.583 15.516 15.516 0 00-7.99-4.428 26.345 26.345 0 00-5.84-.583 22.748 22.748 0 00-6.55.89 15.219 15.219 0 00-5.02 2.487 11.5 11.5 0 00-3.17 3.747 9.936 9.936 0 00-1.13 4.673 13.9 13.9 0 00.72 4.639 11.692 11.692 0 002.35 3.9 21.259 21.259 0 004.3 3.6 69.486 69.486 0 006.46 3.672q7.065 3.636 9.73 6.9a10.963 10.963 0 012.66 7.049 6.2 6.2 0 01-2.66 5.231 12.028 12.028 0 01-7.28 1.966 10.865 10.865 0 01-6.55-1.927 16.551 16.551 0 01-4.71-5.7l-6.56 2.148a17.816 17.816 0 006.61 7.557q4.245 2.667 11.01 2.667a26.131 26.131 0 007.22-.927 16.551 16.551 0 005.44-2.6 11.125 11.125 0 004.55-9.09 15.189 15.189 0 00-.819-5.002z' data-name='Illustrating Lives' fill='#ddd' fillRule='evenodd' />
		<path d='M.014 125.791c0 49.321 39.947 87.652 90.349 87.652 65.417 0 90.35-54.682 90.35-82.29V108.9H90.095v29.485h57.374c-6.7 28.682-29.223 45.569-57.106 45.569-30.3 0-57.641-25.465-57.641-58.167s27.346-58.162 57.641-58.162c19.035 0 35.39 8.846 46.114 24.392l25.737-19.3C143.447 49.13 117.173 38.14 90.363 38.14 39.96 38.14.014 76.471.014 125.791zm197.322 84.167h128.421v-49.692h-31.1v20.207h-66.221V41.625h-31.1v168.333zm223.6 3.485c-50.4 0-90.35-38.331-90.35-87.652s39.947-87.651 90.35-87.651 90.35 38.331 90.35 87.651-39.951 87.652-90.354 87.652zm66.39-109.863a3.223 3.223 0 01-.626 1.146c.32-.2.6-.354.856-.484-.075-.221-.156-.442-.23-.662zm-15.845 12.944c-1.7.408-2.843-.59-4.683-2.359-5.753-5.535-13.384-.781-17.56-3.54-4.166-2.268-6.236-12.152-12.153-1.405-1.618 2.938-8.335 2.388-10.091 1.405s-1.951-1.376-2.341-4.719.775-5.317 5.853-8.259c1.428-2.343 4.481-5.073 1.171-9.439-.955-1.259 0-4.129 1.17-4.719 2.185-1.1 3.07-3.325 4.684-4.719 2.521-2.178 5.673-3.721 3.511 8.258-.39 2.163 1.757 2.753 3.513 2.36 2.287-.512 3.829-5.064 3.512-7.079-.258-1.634 6.37-10.393 10.759-15.4a69.312 69.312 0 00-38.268-11.783c-21.061 0-40.952 10.091-54.236 26.168 6.3-1.828 12.136-.178 14.6 5.951.606 1.5 4.288.546 4.348 3.5s-2.35 3.525-.557 7.154c3.085 6.243 1.268 10.153 1.116 12.929s-4.513 2.173-6.49 6.491-.8 6.583.608 7.052 2.088 7.268-1.622 8.432c-5.541 4.116-19.909 15.01-27.9 2.591 4.371 36.043 35.686 63.024 70.132 63.024a67.266 67.266 0 0019.262-2.856c-2.754-.074-4.331-.541-4.122-.739-.751-2.528 6.439-14.551-2.342-17.7s-13.853-6.489-17.56-11.8-1.951-10.815 0-15.337 7.805-5.506 9.366-5.9 5.268-6.095 8.194-5.9 3.282 2.666 7.025 1.18c6.439-2.556 10.146-.393 12.878 0s1.756 4.719 5.853 7.079 6.439 1.377 7.024 0 7.367-1.466 8.2 2.36c2.6 4.293 7.261 8.284 6.279 15.339a71.031 71.031 0 007.608-57.817c-2.292 3.093-8.354 8.18-16.741 10.197zm177.069 3.638c17.427 5.629 30.027 19.568 30.027 41.011 0 30.022-22.252 48.785-51.743 48.785h-95.98v-.838c-11.732 10.4-25.866 21.541-39.346 28.395-28.5 14.49-47.086 14-60.4 14-49.035 0-84.112-27.561-84.112-27.561s20.419 10.382 34.857 12.37c5.538.762 28.423 4.925 49.146 1.3 18.62-3.255 35.724-9.549 47.2-17.8 10.886-7.823 50.807-35.2 50.807-94.076 0-58.372-39.921-86.253-50.807-94.076-11.475-8.247-28.579-14.54-47.2-17.8-20.723-3.623-43.608.539-49.146 1.3-14.438 1.988-34.857 12.37-34.857 12.37S382.068-.009 431.1-.009c13.319 0 31.906-.493 60.4 14 13.48 6.854 27.614 17.992 39.346 28.395v-.761h89.814c25.737 0 48.526 15.011 48.526 45.032.008 15.543-8.035 27.876-20.636 33.505zM617.182 71.11h-55.229v37.79h55.229c13.674 0 20.912-8.845 20.912-19.031 0-9.914-7.238-18.759-20.912-18.759zm6.167 67.279h-61.4v42.084h61.4c13.941 0 24.129-9.113 24.129-20.908 0-12.065-10.188-21.176-24.129-21.176zm62.924 71.569H815.5v-29.485h-98.127v-42.084h68.366V108.9h-68.366V71.11H815.5V41.625H686.273v168.333zm141.37 0H862.5l34.585-57.094 32.44 57.094h37l-51.743-84.167 51.743-84.166h-34.859l-34.584 57.094-32.441-57.094h-37l51.744 84.167z' fill='url(#a)' fillRule='evenodd' /><path d='M1291.91 180.473v29.485h-129.22v-71.569h-20.52c-5.91 39.12-39.21 71.569-89.4 71.569h-71.047V41.625h71.047c49.51 0 81.32 30.106 88.7 67.28h21.22v-67.28h129.22V71.11h-98.12v37.79h68.37v29.485h-68.37v42.084h98.12zM1052.77 71.11h-39.95v109.363h39.95c36.19 0 59.25-24.928 59.25-54.682s-23.06-54.681-59.25-54.681zm242.9 111.239a99.807 99.807 0 0072.12 31.094c38.6 0 74.26-21.176 74.26-56.29 0-69.96-108.58-32.166-108.58-69.96 0-10.186 9.65-22.784 35.39-22.784 16.36 0 30.3 5.093 45.58 20.1l23.05-20.64c-16.62-16.887-39.14-25.733-67.02-25.733-38.34 0-69.71 20.64-69.71 50.661 0 68.62 108.58 32.434 108.58 69.96 0 16.083-16.62 24.928-40.21 25.2-19.57 0-37.27-9.382-49.87-22.784zm165.42 27.609h31.1V41.625h-31.1v168.333zm48.26-84.167c0 49.321 39.94 87.652 90.35 87.652 65.41 0 90.35-54.682 90.35-82.29V108.9h-80.62v29.485h47.37c-6.7 28.682-29.22 45.569-57.1 45.569-30.3 0-57.64-25.465-57.64-58.167s27.34-58.166 57.64-58.166c19.03 0 35.39 8.846 46.11 24.392l25.74-19.3c-18.77-23.588-45.04-34.578-71.85-34.578-50.41.005-90.35 38.336-90.35 87.656zm335.39 87.652V41.625h-31.1v103.2L1705.06 38.14v171.818h31.1V106.76zm12.87-31.094a99.807 99.807 0 0072.12 31.094c38.61 0 74.27-21.176 74.27-56.29 0-69.96-108.59-32.166-108.59-69.96 0-10.186 9.66-22.784 35.39-22.784 16.36 0 30.3 5.093 45.58 20.1l23.06-20.64c-16.62-16.887-39.15-25.733-67.03-25.733-38.34 0-69.7 20.64-69.7 50.661 0 68.62 108.58 32.434 108.58 69.96 0 16.083-16.63 24.928-40.22 25.2-19.57 0-37.26-9.382-49.86-22.784z' fill='url(#b)' fillRule='evenodd' />
	</svg>
);

Logo.displayName = 'Logo';

export default Logo;
