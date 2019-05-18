// @flow

import React, {type Element, memo} from 'react';
import classnames from 'classnames';
import styles from './Icon.css';

type PropsType = {|
	className?: ?string,
	color: 'yellow' | 'orange' | 'red' | 'blue' | 'green',
	name: 'design' | 'technology' | 'web' | 'identity' | 'dev' | 'music',
|};

export const Icon = ({
	className,
	color,
	name,
}: PropsType): Element<'svg'> => {
	const classes = classnames(
		styles.main,
		styles[color],
		className
	);

	let icon;
	switch (name) {
		case 'design':
			icon = (
				<path d='M58.666 61.331h-4a1.333 1.333 0 0 1-1.333-1.334v-6.671h-11.83l.772.772c.52.522.52 1.366 0 1.887l-7.619 7.623a1.33 1.33 0 0 1-1.885 0L22.494 53.326H9.331a4.002 4.002 0 0 1-4.001-4.003V36.152L.388 31.207a1.334 1.334 0 0 1 0-1.887l4.942-4.946v-9.739a4.002 4.002 0 0 1 4.001-4.003h31.253l9.513-9.518a4.034 4.034 0 0 1 5.572 0l1.843 1.844a3.943 3.943 0 0 1 .002 5.573l-.002.002-2.098 2.099h3.252A5.335 5.335 0 0 1 64 15.969v40.025a5.335 5.335 0 0 1-5.334 5.337zM7.997 49.323c0 .737.597 1.335 1.334 1.335h10.496L7.997 38.821v10.502zm-4.781-19.06l30.497 30.516 5.734-5.737-3.638-3.64-2.868 2.87-1.886-1.886 2.869-2.871-3.451-3.452-2.868 2.87-1.886-1.887 2.869-2.87-3.447-3.448-2.867 2.868-1.885-1.887 2.867-2.868-3.449-3.45-2.866 2.868-1.886-1.887 2.867-2.868-3.45-3.452-2.868 2.871-1.886-1.887 2.869-2.87-3.638-3.64-5.733 5.737zm29.433-7.918l3.644 3.646 14.704-14.712-3.644-3.646-14.704 14.712zm-1.3 2.472l-1.239 3.719 3.715-1.241-2.476-2.478zM55.628 6.645a1.274 1.274 0 0 0 0-1.801v-.001l-1.845-1.842a1.301 1.301 0 0 0-1.8 0l-2.744 2.745 3.644 3.646 2.745-2.747zm5.705 9.324a2.668 2.668 0 0 0-2.667-2.669h-5.918L37.236 28.821c-.15.15-.335.245-.533.309l.006.018-.487.163h11.777v2.668H27.998a1.335 1.335 0 0 1-1.265-1.756l2.765-8.3.014.005c.063-.192.157-.374.309-.526l8.097-8.102H9.331c-.737 0-1.334.598-1.334 1.335v7.071l.01-.01c.52-.52 1.364-.52 1.885 0l28.944 28.962h19.83c.977 0 1.88.281 2.667.74V15.969zm-2.667 37.357H56v5.337h2.666a2.668 2.668 0 0 0 0-5.337zM56 29.311h2.666v2.668H56v-2.668zm-5.334 0h2.667v2.668h-2.667v-2.668z' />
			);
			break;
		case 'dev':
			icon = (
				<path d='M62.933 54.4h-1.871c-.058.148-.119.295-.185.444l1.324 1.323a1.066 1.066 0 0 1 0 1.509l-4.525 4.525a1.068 1.068 0 0 1-1.509 0l-1.323-1.324c-.149.066-.296.127-.444.185v1.871c0 .59-.477 1.067-1.067 1.067h-6.4c-.59 0-1.066-.477-1.066-1.067v-1.871a9.928 9.928 0 0 1-.444-.185l-1.324 1.324a1.067 1.067 0 0 1-1.508 0l-4.525-4.525a1.066 1.066 0 0 1 0-1.509l1.324-1.323a12.726 12.726 0 0 1-.186-.444h-1.871c-.59 0-1.066-.477-1.066-1.067H13.333A3.738 3.738 0 0 1 9.6 49.6a3.737 3.737 0 0 1 3.733-3.733H15.223l4.03-7.467H5.333A5.34 5.34 0 0 1 0 33.066V5.333A5.339 5.339 0 0 1 5.333 0H54.4a5.339 5.339 0 0 1 5.333 5.333v27.733c0 2.043-1.168 3.8-2.858 4.697.289-.014.58.082.801.303l4.525 4.525a1.065 1.065 0 0 1 0 1.508l-1.324 1.324c.066.148.127.295.185.444h1.871c.59 0 1.067.476 1.067 1.066v6.4c0 .59-.477 1.067-1.067 1.067zm-48-6.4h-1.6c-.882 0-1.6.718-1.6 1.6 0 .882.718 1.6 1.6 1.6h22.934V48H14.933zm2.714-2.135h21.557c.059-.148.12-.295.186-.443l-1.324-1.324a1.065 1.065 0 0 1 0-1.508l1.736-1.736-1.673-2.454H21.677l-4.03 7.465zM57.6 5.333c0-1.764-1.436-3.2-3.2-3.2H5.333a3.204 3.204 0 0 0-3.2 3.2v22.4H57.6v-22.4zm0 27.733v-3.199H2.133v3.199a3.204 3.204 0 0 0 3.2 3.201H54.4c1.764 0 3.2-1.436 3.2-3.201zM40.71 38.4l.627.919.919-.919H40.71zm3.723 0l.99.99c.148-.066.295-.127.444-.186V38.4h-1.434zm9.967 0v.804c.148.059.295.12.444.186l1.31-1.31a5.27 5.27 0 0 1-1.754.32zm7.467 9.6H60.31c-.466 0-.876-.302-1.018-.747a9.57 9.57 0 0 0-.651-1.556 1.067 1.067 0 0 1 .192-1.248l1.105-1.105-3.016-3.017-1.105 1.105a1.066 1.066 0 0 1-1.249.192 9.564 9.564 0 0 0-1.556-.65 1.067 1.067 0 0 1-.745-1.018V38.4H48v1.556c0 .466-.302.877-.747 1.019a9.57 9.57 0 0 0-1.556.651 1.067 1.067 0 0 1-1.248-.192l-1.105-1.106-3.017 3.017 1.105 1.105c.33.33.408.834.192 1.248a9.653 9.653 0 0 0-.65 1.556 1.068 1.068 0 0 1-1.018.746H38.4v4.267h1.556c.466 0 .877.301 1.019.746a9.57 9.57 0 0 0 .651 1.556 1.07 1.07 0 0 1-.192 1.249l-1.105 1.105 3.016 3.016 1.105-1.105c.33-.33.834-.406 1.248-.192a9.66 9.66 0 0 0 1.556.651c.444.141.746.551.746 1.017v1.557h4.267V60.31c0-.466.301-.876.746-1.018a9.617 9.617 0 0 0 1.557-.651 1.068 1.068 0 0 1 1.248.192l1.105 1.105 3.016-3.017-1.105-1.105a1.068 1.068 0 0 1-.192-1.248 9.57 9.57 0 0 0 .651-1.556 1.066 1.066 0 0 1 1.017-.745h1.557V48zm-11.734 8.533c-3.529 0-6.4-2.87-6.4-6.4 0-3.529 2.871-6.4 6.4-6.4 3.53 0 6.4 2.871 6.4 6.4 0 3.53-2.87 6.4-6.4 6.4zm0-10.666a4.27 4.27 0 0 0-4.266 4.266 4.27 4.27 0 0 0 4.266 4.267 4.272 4.272 0 0 0 4.267-4.267 4.27 4.27 0 0 0-4.267-4.266zM19.512 6.712l1.509 1.509-6.713 6.712 6.713 6.713-1.509 1.508-7.466-7.467a1.065 1.065 0 0 1 0-1.508l7.466-7.467zm14.505-1.963l-9.598 19.195-1.908-.954 9.598-19.194 1.908.953zm3.004 1.963l7.466 7.467a1.065 1.065 0 0 1 0 1.508l-7.466 7.467-1.509-1.508 6.713-6.713-6.713-6.712 1.509-1.509zm6.712 16.755H41.6v-2.134h2.133v2.134zm4.267 0h-2.133v-2.134H48v2.134zm4.267 0h-2.134v-2.134h2.134v2.134zm-44.8 31.999c4.116 0 7.466 3.351 7.466 7.467 0 .59-.477 1.067-1.066 1.067h-12.8C.477 64 0 63.523 0 62.933c0-4.116 3.35-7.467 7.467-7.467zm5.225 6.401a5.34 5.34 0 0 0-4.159-4.15v2.016H6.4v-2.016a5.342 5.342 0 0 0-4.159 4.15h10.451z' />
			);
			break;
		case 'identity':
			icon = (
				<path d='M47.999 14.667a5.334 5.334 0 1 1 0 10.667 5.334 5.334 0 0 1 0-10.667zm0 8a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334zM62.667 24h-3.363c-.141.396-.303.785-.484 1.164l2.38 2.378c.52.521.52 1.365 0 1.886L57.428 33.2c-.521.52-1.365.52-1.886 0l-2.378-2.377c-.38.18-.768.341-1.164.482v3.362c0 .736-.597 1.333-1.334 1.333h-5.333a1.333 1.333 0 0 1-1.334-1.333v-3.363a12.297 12.297 0 0 1-1.164-.483L40.457 33.2c-.521.52-1.365.52-1.886 0l-3.772-3.772a1.335 1.335 0 0 1 0-1.886l2.379-2.378A12.19 12.19 0 0 1 36.695 24h-3.363v-2.667h4.35a1.334 1.334 0 0 1 1.289 1c.219.843.554 1.651.996 2.4.31.524.224 1.192-.206 1.622l-2.134 2.133 1.886 1.885 2.133-2.133a1.333 1.333 0 0 1 1.621-.205c.75.441 1.558.776 2.4.993.589.152 1 .683 1 1.291v3.014h2.667v-3.016c0-.607.411-1.138 1-1.29a9.367 9.367 0 0 0 2.4-.993 1.331 1.331 0 0 1 1.621.205l2.134 2.133 1.885-1.885-2.133-2.133a1.334 1.334 0 0 1-.207-1.622 9.31 9.31 0 0 0 .996-2.4 1.334 1.334 0 0 1 1.29-1h3.013v-2.665h-3.016a1.334 1.334 0 0 1-1.289-1 9.346 9.346 0 0 0-.996-2.4 1.331 1.331 0 0 1 .206-1.621l2.134-2.134-1.887-1.882-2.133 2.133a1.334 1.334 0 0 1-1.622.205 9.352 9.352 0 0 0-2.4-.993 1.332 1.332 0 0 1-.997-1.292V6.667h-2.667v3.016c0 .608-.411 1.138-1 1.291a9.296 9.296 0 0 0-2.4.993l-1.355-2.296a11.91 11.91 0 0 1 2.088-.975V5.334c0-.737.597-1.334 1.334-1.334h5.333C51.403 4 52 4.597 52 5.334v3.362c.396.141.784.302 1.164.483L55.542 6.8a1.335 1.335 0 0 1 1.886 0l3.772 3.772c.52.521.52 1.365 0 1.886l-2.379 2.378c.181.38.343.768.484 1.164h3.362c.736 0 1.333.597 1.333 1.334v5.333c0 .736-.597 1.333-1.333 1.333zm-40.002-2.667v1.334a2.61 2.61 0 0 1-2.666 2.666h-4a2.61 2.61 0 0 1-2.667-2.666v-1.334h2.667v1.334h4v-1.334h2.666zm12.001-3.999a4 4 0 0 1-4-4 3.988 3.988 0 0 1 2.667-3.756V4a1.226 1.226 0 0 0-1.35-1.333h-5.317C17.097 2.678 9.343 10.432 9.332 20v2.584c0 .225-.057.447-.165.644L2.693 34.961A1.171 1.171 0 0 0 3.998 36a7.702 7.702 0 0 1 4.884 2.031c.286.253.45.617.45.998V44a2.513 2.513 0 0 0 2.667 2.667h8a1.221 1.221 0 0 0 1.333-1.334v-6.911a3.989 3.989 0 0 1-2.667-3.755 4 4 0 0 1 8.001 0 3.989 3.989 0 0 1-2.667 3.755v6.911a3.887 3.887 0 0 1-4 4h-8A5.182 5.182 0 0 1 6.665 44v-4.335a4.779 4.779 0 0 0-2.667-.998 3.89 3.89 0 0 1-4-4c.001-.225.057-.447.166-.644l6.501-11.782V20C6.678 8.96 15.625.013 26.666 0h5.333a3.89 3.89 0 0 1 4 4.001v5.577a3.989 3.989 0 0 1 2.667 3.756 4 4 0 0 1-4 4zM22.666 36a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667zm12-24a1.334 1.334 0 1 0 0 2.667 1.334 1.334 0 0 0 0-2.667zM23.999 54.666h-2.667V52h2.667v2.666zm4-33.333h2.667V24h-2.667v-2.667zm2.667 8h-2.667v-2.666h2.667v2.666zm-6.667 32h25.334v-8c0-.736.597-1.333 1.333-1.333 3.856 0 5.142-4.684 5.334-5.48V44a1.22 1.22 0 0 0-1.334-1.333H41.088a3.988 3.988 0 0 1-3.755 2.666 4 4 0 1 1 0-8A3.989 3.989 0 0 1 41.088 40h13.578a3.887 3.887 0 0 1 4 4v2.667a1.25 1.25 0 0 1-.026.266c-.486 2.431-2.472 6.828-6.64 7.616v8.117c0 .737-.597 1.334-1.334 1.334h-28a1.334 1.334 0 0 1-1.334-1.334v-5.333h2.667v4zM37.333 40a1.333 1.333 0 1 0-.001 2.667A1.333 1.333 0 0 0 37.333 40z' />
			);
			break;
		case 'music':
			icon = (
				<path d='M57 14.097V1.812c0-.577-.278-1.127-.728-1.462A1.8 1.8 0 0 0 54.67.082L18.537 11.709a1.814 1.814 0 0 0-1.245 1.73v35.822c-1.893-1.328-4.316-2.052-6.859-2.052-2.687 0-5.243.818-7.189 2.293C1.152 51.098 0 53.257 0 55.605c0 2.346 1.152 4.506 3.244 6.102C5.19 63.182 7.732 64 10.433 64c2.701 0 5.244-.818 7.19-2.293 2.092-1.596 3.244-3.756 3.244-6.102v-28.54l32.558-10.487V37.58c-1.893-1.328-4.316-2.052-6.858-2.052-2.688 0-5.244.818-7.19 2.293-2.092 1.596-3.244 3.755-3.244 6.102 0 2.347 1.152 4.506 3.244 6.102 1.946 1.476 4.488 2.294 7.19 2.294 2.701 0 5.243-.818 7.189-2.294C55.848 48.429 57 46.27 57 43.923V14.11v-.013zM10.433 60.379c-3.72 0-6.858-2.186-6.858-4.774 0-2.589 3.138-4.775 6.858-4.775 3.721 0 6.859 2.186 6.859 4.775 0 2.601-3.138 4.774-6.859 4.774zm10.434-37.123v-8.502L53.425 4.279v8.503L20.867 23.256zM46.58 48.698c-3.721 0-6.859-2.186-6.859-4.775 0-2.588 3.138-4.774 6.859-4.774 3.72 0 6.858 2.186 6.858 4.774-.013 2.589-3.151 4.775-6.858 4.775z' />
			);
			break;
		case 'technology':
			icon = (
				<path d='M60.136 46.567H40.853v2.81a4.679 4.679 0 0 0 4.674 4.673h4.25a1.475 1.475 0 1 1 0 2.95H14.223a1.476 1.476 0 0 1 0-2.95h4.249a4.679 4.679 0 0 0 4.674-4.673v-2.81H3.864A3.868 3.868 0 0 1 0 42.704V3.862A3.868 3.868 0 0 1 3.864-.001h56.272A3.868 3.868 0 0 1 64 3.862v38.842a3.868 3.868 0 0 1-3.864 3.863zM39.51 54.05a7.579 7.579 0 0 1-1.607-4.673v-2.81H26.097v2.81c0 1.76-.601 3.381-1.607 4.673h15.02zM2.951 42.704c0 .503.409.913.913.913h56.272c.504 0 .913-.41.913-.913v-7.752H2.951v7.752zM61.049 3.862a.913.913 0 0 0-.913-.912H3.864a.913.913 0 0 0-.913.912v28.14h58.098V3.862zM36.556 22.44a1.467 1.467 0 0 1-1.043.432 1.474 1.474 0 0 1-1.044-2.517l4.154-4.153a1.476 1.476 0 0 1 2.087 2.086l-4.154 4.152zm-12.453.232a1.474 1.474 0 1 1-2.087-2.086l10.427-10.425a1.476 1.476 0 0 1 2.087 2.086L24.103 22.672zM32 40.877a1.592 1.592 0 1 1 0-3.185 1.592 1.592 0 0 1 0 3.185z' />
			);
			break;
		case 'web':
			icon = (
				<path d='M60.136 46.567H40.853v2.81a4.679 4.679 0 0 0 4.674 4.673h4.25a1.475 1.475 0 1 1 0 2.95H14.223a1.475 1.475 0 1 1 0-2.95h4.249a4.679 4.679 0 0 0 4.674-4.673v-2.81H3.864A3.868 3.868 0 0 1 0 42.704V3.862A3.867 3.867 0 0 1 3.864 0h56.272A3.867 3.867 0 0 1 64 3.862v38.842a3.868 3.868 0 0 1-3.864 3.863zM39.51 54.05a7.578 7.578 0 0 1-1.607-4.672v-2.811H26.097v2.811a7.578 7.578 0 0 1-1.607 4.672h15.02zM2.951 42.704c0 .504.409.913.913.913h56.272a.913.913 0 0 0 .913-.913v-7.752H2.951v7.752zM61.049 3.862a.913.913 0 0 0-.913-.912H3.864a.913.913 0 0 0-.913.912v28.14h58.098V3.862zM36.556 22.441a1.474 1.474 0 1 1-2.087-2.086l4.154-4.153a1.477 1.477 0 0 1 2.087.001 1.474 1.474 0 0 1 0 2.085l-4.154 4.153zm-12.453.231a1.474 1.474 0 1 1-2.087-2.086l10.427-10.424a1.476 1.476 0 0 1 2.087 2.086L24.103 22.672zM32 40.877a1.592 1.592 0 1 1 0-3.185 1.592 1.592 0 0 1 0 3.185z' />
			);
			break;
	}

	return (
		<svg className={classes} viewBox='0 0 64 64'>
			{icon}
		</svg>
	);
};

Icon.displayName = 'Icon';

export default memo<PropsType>(Icon);
