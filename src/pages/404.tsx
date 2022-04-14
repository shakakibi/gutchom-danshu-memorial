import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner';
import { Link } from 'gatsby';
import * as React from 'react';
import { Themed } from 'theme-ui';
import Foundation from '../components/Foundation';

function NotFound() {
	return (
		<Foundation>
			<Inner>
				<Themed.h1>404 - Page not found</Themed.h1>
				<Themed.p>
					Go back to <Link to="/">homepage</Link>.
				</Themed.p>
			</Inner>
		</Foundation>
	);
}

export default NotFound;
