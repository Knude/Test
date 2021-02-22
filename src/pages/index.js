import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Button, Icon, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Header"
			justify-content="center"
			height="60px"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="75%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link" />
					<Text font="25px --fontFamily-googleNotoSansJp">
						<Strong>
							Frisør Karina Rahr
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="50%" display="block" quarkly-title="Menu" md-width="25%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" md-justify-content="flex-end" />
					{"        "}{"    "}
				</StackItem>
				<StackItem display="flex" quarkly-title="Side" width="25%" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Button
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						z-index="5"
						background="--color-primary"
						md-display="none"
						white-space="nowrap"
						border-radius="0px"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Bestil tid
					</Button>
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="75%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link" />
				</StackItem>
				<StackItem width="50%" display="block" quarkly-title="Menu" md-width="25%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" md-justify-content="flex-end" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="#191C23 url(https://uploads.quarkly.io/6033e1b0877fae002289eeef/images/pexels-cottonbro-3992874.jpg?v=2021-02-22T17:29:05.639Z) center center/cover repeat scroll padding-box"
				height="620px"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				md-margin="0px 16px 0px 16px"
				margin="0px 32px 0px 32px"
				min-width="auto"
			/>
			<Text
				color="--light"
				font="--headline1"
				margin="16px 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
				border-color="#0d0e0f"
			>
				Karina Rahr
			</Text>
			<Text
				font="--headline3"
				color="--light"
				margin="10px 0px 35px 0px"
				sm-text-align="center"
				sm-width="80%"
				opacity="0.8"
				md-text-align="center"
				border-color="#0a0b0c"
				border-width="2px"
				border-style="none"
			>
				Bliv klippet efter dit skema
			</Text>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline2" md-font="--headline2" margin="20px 0 0 0">
				PROFESSIONEL, PASSIONERET, PERSONLIG{"\n\n"}
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0" text-align="center">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
				<br />
				<br />
				{"\n"}
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Hos mig får du:
				</Strong>
				<br />
				• Professionel og personlig rådgivning
				<br />
				• En behandling som passer til dig og din livsstil
				<br />
				• En behandling med bæredygtige produkter
				<br />
				• Afslappet og hyggelig atmosfære
				<br />
				• Nærvær, grundighed og god tid{"\n\n"}
				<br />
				<br />
				{"\n\n"}
			</Text>
			<StackItem display="flex" quarkly-title="Side" width="25%" md-display="none">
				<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
				{"   "}
			</StackItem>
			<Button
				padding="8px 18px 8px 18px"
				font="--base"
				letter-spacing="0.5px"
				z-index="5"
				background="--color-primary"
				md-display="none"
				white-space="nowrap"
				border-radius="0px"
				hover-transform="translateY(-4px)"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
			>
				Bestil tid
			</Button>
		</Section>
		<Section color="--dark">
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				text-align="center"
			>
				Spørgmål?
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Hvornår kører jeg ud?
				</Text>
				<Text
					as="p"
					font="normal 300 20px/1.5 --fontFamily-sans"
					margin="10px 0"
					color="--greyD2"
					text-align="center"
					width="1150px"
				>
					<Strong>
						Mandag{" "}
					</Strong>
					Lukket{" "}
					<br />
					<Strong>
						Tirsdag{"\n"}
					</Strong>
					10.00-17.00{"\n\n"}
					<br />
					<Strong>
						Onsdag{" \n"}
					</Strong>
					10.00-17.00{"\n\n"}
					<br />
					<Strong>
						Torsdag{" \n"}
					</Strong>
					10.00-17.00{"\n\n"}
					<br />
					<Strong>
						Fredag{" \n"}
					</Strong>
					10.00-17.00{"\n\n"}
					<br />
					<Strong>
						Lørdag{" \n"}
					</Strong>
					10.00-17.00{"\n\n"}
					<br />
					<Strong>
						Søndag{"  "}
					</Strong>
					Lukket
					<br />
					<br />
					<Strong>
						Hveranden lørdag lukket.
						<br />
					</Strong>
					<br />
					<Strong>
						Tider efter 17.00/19.00
						<br />
					</Strong>
					Ring +45 XXXXXXXX
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Hvor kører jeg til?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Hvorfor en kørende frisør?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
				</Text>
			</Box>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="50%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					<Image width="28px" height="28px" src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" />
					<Link
						href="https://quarkly.io/"
						font="--base"
						color="--dark"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						hover-text-decoration-line="underline"
						white-space="nowrap"
					>
						Made on Quarkly
					</Link>
					{"        "}
				</StackItem>
				<StackItem display="flex" quarkly-title="Side" width="75%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw">
						<Override slot="link" background="none" border-radius="50%" />
						<Override slot="icon" color="--dark" />
					</SocialMedia>
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});