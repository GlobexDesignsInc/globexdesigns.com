import './globals.css';
import Analytics from '../components/Analytics';
import {clsx} from 'clsx';
import {Lato} from 'next/font/google';
import {type Metadata} from 'next';
import React from 'react';
import styles from './layout.module.css';

type PropsType = {
	children?: React.ReactNode,
};

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

const Layout = ({ children }: PropsType) => (
	<html className={clsx(styles.main, lato.variable, latoSemi.variable)} lang='en'>
		<body className={styles.body}>
			{children}
			<Analytics />
		</body>
	</html>
);

const SITE_AUTHOR = 'Globex Designs, Inc.';
const SITE_NAME = 'Globex Designs, Inc. - Vancouver Web Design & Software Development';
const SITE_DESC = 'Globex Designs provides web design, software development and media production from Vancouver, Canada.';

export const metadata: Metadata = {
	applicationName: SITE_NAME,
	authors: [{name: SITE_AUTHOR}],
	creator: SITE_AUTHOR,
	description: SITE_DESC,
	generator: 'Next.js',
	keywords: ['globex', 'designs', 'vancouver', 'web', 'design', 'software', 'development', 'media', 'production', 'agency', 'company'],
	metadataBase: new URL('https://globexdesigns.com'),
	openGraph: {
		description: SITE_DESC,
		locale: 'en-US',
		siteName: SITE_NAME,
		title: SITE_NAME,
		type: 'website',
	},
	publisher: SITE_AUTHOR,
	themeColor: '#222',
	title: SITE_NAME,
	twitter: {
		card: 'summary',
		creator: '@globex',
		description: SITE_DESC,
		title: SITE_NAME,
	},
};

export default Layout;
