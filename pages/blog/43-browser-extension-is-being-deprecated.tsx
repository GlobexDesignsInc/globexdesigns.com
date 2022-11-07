/* eslint-disable filenames/match-exported */

import React from 'react';

export const BlogHelp = () => (
	<div style={{
		display: 'flex',
		flexDirection: 'column',
		margin: '32px auto',
		width: 600,
	}}>
		<h1>Sorry for the inconvenince</h1>
		<p>If you are seeing this page everytime you launch your browser, you have a legacy &quot;Google Redesigned&quot; extension installed on your browser that should be removed.</p>

		<p>To get rid of this page once and for all, please follow these steps:</p>

		<h2>If you are using Google Chrome</h2>

		<ul>
			<li>In your Chrome toolbar menu, click the &quot;...&quot; menu button in the top right, and choose &quot;More Tools &gt; Extensions&quot;, or simply paste the following into your URL bar and press Enter: <code>chrome://extensions/</code></li>
			<li>There you will see a list of all installed extensions. Find the one called &quot;Google Redesigned&quot; and click on the &quot;Remove&quot; button next to it.</li>
		</ul>

		<h2>If you are using Mozilla Firefox</h2>

		<ul>
			<li>In your Firefox toolbar menu, click the menu button in the top right, and choose &quot;Add-ons&quot;, or simply paste the following into your URL bar and press Enter: <code>about:addons</code></li>
			<li>On the page that loads, click &quot;Extensions&quot; on the left-hand menu</li>
			<li>There you will see a list of all installed extensions. Find the one called &quot;Google Designed and click on the &quot;Remove&quot; button next to it.</li>
		</ul>

		<p>We apologize for the annoyance this message has caused you in the past. After you follow the steps above, you can close this page and it should never come up again.</p>

		<p>
			<em>
				Sincerely,<br />
				- the team at Globex Designs.
			</em>
		</p>
	</div>
);

export default BlogHelp;
