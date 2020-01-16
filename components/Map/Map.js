// @flow strict

import React, {type Element} from 'react';
import BackgroundImage from '../BackgroundImage';

export const Map = (): Element<typeof BackgroundImage> => (
	<BackgroundImage
		height={960}
		placeholder='map_small.jpg'
		src='map.jpg' />
);

Map.displayName = 'Map';

export default Map;
