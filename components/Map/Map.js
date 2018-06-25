// @flow

import React, {type Element, PureComponent} from 'react';
import BackgroundImage from './../BackgroundImage';

type PropsType = {};

export default class Map extends PureComponent<PropsType> {
	static displayName = 'Map';

	render (): Element<typeof BackgroundImage> {
		return (
			<BackgroundImage
				height={960}
				placeholder='map_small.jpg'
				src='map.jpg' />
		);
	}
}
