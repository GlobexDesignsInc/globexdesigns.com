// @flow

// TODO: Blocked by https://github.com/zeit/next-plugins/issues/149
// import './_document.css';
import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';

const SITE_NAME = 'Globex Designs, Inc. - Vancouver Web Design & Media Production';
const SITE_DESC = 'Globex Designs provides web design, graphics, development and media production from Vancouver, Canada.';

export default class MyDocument extends Document {
	render (): Element<'html'> {
		return (
			<html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<meta content='ie=edge' httpEquiv='x-ua-compatible' />
					<meta content='Globex Designs, Inc.' name='application-name' />
					<meta content={SITE_DESC} name='description' />
					<meta content='next.js' name='generator' />
					<meta content='General' name='rating' />
					<meta content='#0C1011' name='theme-color' />
					<meta content='width=device-width,initial-scale=1' name='viewport' />

					<meta content='Globex Designs, Inc.' property='article:author' />
					<meta content={SITE_DESC} property='og:description' />
					<meta content='en_US' property='og:locale' />
					<meta content={SITE_NAME} property='og:site_name' />
					<meta content={SITE_NAME} property='og:title' />
					<meta content='website' property='og:type' />

					<meta content='summary' name='twitter:card' />
					<meta content='@globex' name='twitter:creator' />
					<meta content={SITE_DESC} name='twitter:description' />
					<meta content='Globex Designs Twitter' name='twitter:title' />

					<link href='https://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' />
					<link href='/static/favicon.ico' rel='icon' type='image/x-icon' />
					<link href='/_next/static/style.css' rel='stylesheet' />

					<title>{SITE_NAME}</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
