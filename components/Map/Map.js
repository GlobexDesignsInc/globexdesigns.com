// @flow strict

import React, {type Element} from 'react';
import BackgroundImage from '../BackgroundImage';

export const Map = (): Element<typeof BackgroundImage> => (
	<BackgroundImage src='/map.jpg' />
);

export default Map;
