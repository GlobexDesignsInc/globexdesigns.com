// @flow

export const SITE_AUTHOR = 'Globex Designs, Inc.';

export const SITE_NAME = 'Globex Designs, Inc. - Vancouver Web Design & Media Production';

export const SITE_DESC = 'Globex Designs provides web design, graphics, development and media production from Vancouver, Canada.';

export const TWITTER_USER = '@globex';

export const DEFAULT_META = [
	{charSet: 'utf-8'},
	{content: 'ie=edge', httpEquiv: 'x-ua-compatible'},
	{name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no'},

	{content: SITE_NAME, name: 'application-name'},
	{content: SITE_DESC, name: 'description'},
	{content: 'next.js', name: 'generator'},
	{content: 'General', name: 'rating'},
	{content: '#222', name: 'theme-color'},

	{content: SITE_AUTHOR, property: 'article:author'},
	{content: SITE_DESC, property: 'og:description'},
	{content: 'en_US', property: 'og:locale'},
	{content: SITE_NAME, property: 'og:site_name'},
	{content: SITE_NAME, property: 'og:title'},
	{content: 'website', property: 'og:type'},

	{content: 'summary', property: 'twitter:card'},
	{content: TWITTER_USER, property: 'twitter:creator'},
	{content: SITE_DESC, property: 'twitter:description'},
	{content: SITE_NAME, property: 'twitter:title'},
];
