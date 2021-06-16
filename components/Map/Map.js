// @flow strict

import React, {type Element} from 'react';
import BackgroundImage from '../BackgroundImage';
import image from '../../public/map.jpg';

export const Map = (): Element<typeof BackgroundImage> => (
	<BackgroundImage alt='Map' image={image} />
);

export default Map;
