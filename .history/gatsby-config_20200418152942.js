module.exports = {
	siteMetadata: {
		title: `Leonardo Tononi`,
		author: {
			name: `Leonardo Tononi`,
			summary: `A React Developer.`
		},
		description: `Hi, this is my website where I show what I can do.`,
		siteUrl: `https://leonardotononi.netlify.com/`,
		social: {
			twitter: `_Easaaa_`
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets`,
				name: `component-image`
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://leonardotononi.us19.list-manage.com/subscribe/post?u=0e17379be535600a870fd35b5&amp;id=fb07199113'
			}
		},

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-scroll-reveal`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [ '/preview/**', '/do-not-track/me/too/' ],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Enables Google Optimize using your container Id
				optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
				// Enables Google Optimize Experiment ID
				experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
				// Set Variation ID. 0 for original 1,2,3....
				variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'example.com'
			}
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Leonardo Tononi`,
				short_name: `LT`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/favicon.png`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		{
			resolve: 'gatsby-plugin-page-progress',
			options: {
				includePaths: [ '/', { regex: '^/blog' } ],
				excludePaths: [],
				height: 3,
				prependToBody: false,
				color: `#3F3D56`
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
