import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout';
import Seo from '@lekoarts/gatsby-theme-cara/src/components/seo';
import Svg from '@lekoarts/gatsby-theme-cara/src/components/svg';
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content';
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider';
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner';
import {
	UpDown,
	UpDownWide,
} from '@lekoarts/gatsby-theme-cara/src/styles/animations';
import { Parallax } from '@react-spring/parallax';
import { Link } from 'gatsby';
import * as React from 'react';
import { Themed } from 'theme-ui';

function NotFound() {
	return (
		<Layout>
			<Seo title="404 - Not Found" />
			<Parallax pages={1}>
				<div>
					<Divider factor={1} offset={0} speed={0.2}>
						<UpDown>
							<Svg
								color="icon_orange"
								hiddenMobile
								icon="triangle"
								left="10%"
								stroke
								top="20%"
								width={48}
							/>
							<Svg
								color="icon_red"
								icon="hexa"
								left="60%"
								stroke
								top="70%"
								width={48}
							/>
							<Svg
								color="icon_darker"
								icon="box"
								left="60%"
								top="15%"
								width={6}
							/>
						</UpDown>
						<UpDownWide>
							<Svg
								color="icon_blue"
								hiddenMobile
								icon="arrowUp"
								left="80%"
								top="10%"
								width={16}
							/>
							<Svg
								color="icon_brightest"
								icon="triangle"
								left="90%"
								stroke
								top="50%"
								width={12}
							/>
							<Svg
								color="icon_darker"
								icon="circle"
								left="70%"
								top="90%"
								width={16}
							/>
							<Svg
								color="icon_darkest"
								icon="triangle"
								left="30%"
								stroke
								top="65%"
								width={16}
							/>
							<Svg
								color="icon_pink"
								icon="cross"
								left="28%"
								stroke
								top="15%"
								width={16}
							/>
							<Svg
								color="icon_darkest"
								icon="circle"
								left="75%"
								top="10%"
								width={6}
							/>
							<Svg
								color="icon_darkest"
								hiddenMobile
								icon="upDown"
								left="45%"
								top="10%"
								width={8}
							/>
						</UpDownWide>
						<Svg
							color="icon_darker"
							hiddenMobile
							icon="circle"
							left="5%"
							top="70%"
							width={24}
						/>
						<Svg
							color="icon_darkest"
							icon="circle"
							left="4%"
							top="20%"
							width={6}
						/>
						<Svg
							color="icon_darkest"
							icon="circle"
							left="50%"
							top="60%"
							width={12}
						/>
						<Svg
							color="icon_darkest"
							icon="upDown"
							left="95%"
							top="90%"
							width={8}
						/>
						<Svg
							color="icon_darker"
							hiddenMobile
							icon="upDown"
							left="40%"
							top="80%"
							width={24}
						/>
						<Svg
							color="icon_darker"
							icon="triangle"
							left="25%"
							stroke
							top="5%"
							width={8}
						/>
						<Svg
							color="icon_green"
							icon="circle"
							left="95%"
							top="5%"
							width={64}
						/>
						<Svg
							color="icon_purple"
							hiddenMobile
							icon="box"
							left="5%"
							top="90%"
							width={64}
						/>
						<Svg
							color="icon_darkest"
							icon="box"
							left="10%"
							top="10%"
							width={6}
						/>
						<Svg
							color="icon_darkest"
							icon="box"
							left="40%"
							top="30%"
							width={12}
						/>
						<Svg
							color="icon_darker"
							icon="hexa"
							left="10%"
							stroke
							top="50%"
							width={16}
						/>
						<Svg
							color="icon_darker"
							icon="hexa"
							left="80%"
							stroke
							top="70%"
							width={8}
						/>
					</Divider>
					<Content
						factor={1}
						offset={0}
						speed={0.4}
						sx={{ variant: `texts.bigger` }}
					>
						<Inner>
							<Themed.h1>404 - Page not found</Themed.h1>
							<Themed.p>
								Go back to <Link to="/">homepage</Link>.
							</Themed.p>
						</Inner>
					</Content>
				</div>
			</Parallax>
		</Layout>
	);
}

export default NotFound;
