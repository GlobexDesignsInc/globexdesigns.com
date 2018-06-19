// @flow

import React, {type Element, PureComponent} from 'react';
import Map from './Map';
import styles from './MapWrapper.css';

type PropsType = {};

export default class MapWrapper extends PureComponent<PropsType> {
	static displayName = 'MapWrapper';

	render (): Element<typeof Map> {
		return (
			<Map
				containerElement={<div className={styles.container} />}
				googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places'
				loadingElement={<div className={styles.loading} />}
				mapElement={<div className={styles.map} />} />
		);
	}
}
