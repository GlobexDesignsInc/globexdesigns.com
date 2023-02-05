/* eslint-disable react/jsx-props-no-spreading */

import './_app.css';
import {SITE_AUTHOR, SITE_DESC, SITE_NAME, TWITTER_USER} from '../constants/seo';
import Analytics from '../components/Analytics';
import type {AppProps} from 'next/app';
import clsx from 'clsx';
import Head from 'next/head';
import {Lato} from '@next/font/google';
import React from 'react';

const lato = Lato({
	subsets: ['latin'],
	variable: '--font-lato',
	weight: '400',
});

const latoSemi = Lato({
	subsets: ['latin'],
	variable: '--font-lato-lighter',
	weight: '300',
});

const _app = ({Component, pageProps}: AppProps) => (
	<>
		<Head>
			<title>{SITE_NAME}</title>
			<meta charSet='utf-8' />
			<meta content='width=device-width,initial-scale=1,shrink-to-fit=no' name='viewport' />
			<meta content={SITE_NAME} name='application-name' />
			<meta content={SITE_DESC} name='description' />
			<meta content='next.js' name='generator' />
			<meta content='General' name='rating' />
			<meta content='#222' name='theme-color' />
			<meta content={SITE_AUTHOR} property='article:author' />
			<meta content={SITE_DESC} property='og:description' />
			<meta content='en_US' property='og:locale' />
			<meta content={SITE_NAME} property='og:site_name' />
			<meta content={SITE_NAME} property='og:title' />
			<meta content='website' property='og:type' />
			<meta content='summary' property='twitter:card' />
			<meta content={TWITTER_USER} property='twitter:creator' />
			<meta content={SITE_DESC} property='twitter:description' />
			<meta content={SITE_NAME} property='twitter:title' />
			<link href='/favicon.ico' rel='icon' type='image/x-icon' />
			<link href='https://www.google-analytics.com' rel='preconnect' />
		</Head>
		<div className={clsx(lato.variable, latoSemi.variable, 'fonts')}>
			<Component {...pageProps} />
			<Analytics />
		</div>
	</>
);

export default _app;
