module.exports = {
	pathPrefix: `/gutchom-danshu-memorial`,
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// You can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
		siteTitle: `ぐっちょむ断酒成功おめでとう記念`,
		siteTitleAlt: `🎉ぐっちょむ断酒成功おめでとう！🎉`,
		siteHeadline: `🎉ぐっちょむ断酒成功おめでとう！🎉`,
		siteUrl: `https://shakakibi.github.io/gutchom-danshu-memorial/`,
		siteDescription: `ぐっちょむ断酒成功おめでとう記念メモリアルサイト`,
		siteLanguage: `ja`,
		siteImage: `/banner.jpg`,
		author: `@shakakibi`,
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			// See the theme's README for all available options
			options: {},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Shakakibi - @shakakibi`,
				short_name: `Shakakibi`,
				description: `🎉ぐっちょむ断酒成功おめでとう！🎉`,
				start_url: `/`,
				background_color: `#141821`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-gatsby-cloud`,
	].filter(Boolean),
};
