// @flow strict

/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/html-has-lang */

import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import {type Context} from 'next';
import {Helmet} from 'react-helmet';

export default class _document extends Document {
	static async getInitialProps (...args: Context): Promise<any> {
		const documentProps = await super.getInitialProps(...args);
		return {...documentProps, helmet: Helmet.renderStatic()};
	}

	render (): Element<'html'> {
		const {helmet} = this.props;
		const htmlArgs = helmet.htmlAttributes.toComponent();
		const bodyArgs = helmet.bodyAttributes.toComponent();
		const headElements = Object.keys(this.props.helmet)
			.filter((el: string): boolean => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map((el: string): Element<any> => helmet[el].toComponent());

		return (
			<html {...htmlArgs}>
				<Head>
					{headElements}
					<link href='https://fonts.googleapis.com/css?family=Montserrat:200,400' rel='stylesheet' />
					<link href='/favicon.ico' rel='icon' type='image/x-icon' />
				</Head>
				<body {...bodyArgs}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
