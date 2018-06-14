// @flow

import {
	GoogleMap,
	Marker,
	withGoogleMap,
	withScriptjs,
} from 'react-google-maps';
import React, {type Element, PureComponent} from 'react';
import styles from './MapStyle';

type PropsType = {};

export class Map extends PureComponent<PropsType> {
	static displayName = 'Map';

	render (): Element<typeof GoogleMap> {
		const location = {lat: 49.1763611, lng: -123.1431989};
		const defaultOptions = {
			disableDefaultUI: true,
			gestureHandling: 'none',
			styles,
		};

		return (
			<GoogleMap
				defaultCenter={location}
				defaultOptions={defaultOptions}
				defaultZoom={11}>
				<Marker position={location} />
			</GoogleMap>
		);
	}
}

export default withScriptjs(withGoogleMap(Map));
