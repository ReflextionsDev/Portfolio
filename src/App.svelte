<!-- The base app page. Loads splash page then uses routing in conjuction with navbar to display content.  -->
<script>
	// Pages
	import Splash from "./components/header/Splash.svelte";
	import Web from "./pages/Web.svelte";
	import Games from "./pages/Games.svelte";
	import GameShowcase from "./components/game/GameShowcase.svelte";
	import ProjectShowcase from "./components/web/ProjectShowcase.svelte";
	import Section from "./components/Section.svelte";
	import Modal from "svelte-simple-modal";
	import SectionBreak from "./components/SectionBreak.svelte";
	// Variables
	import { games, projects, url, theme } from "./stores";

	// Used to load game showcases, will probably need to be update when converted to modal
	let gameTitle = {};
	let gameProps = null;
	let projectTitle = {};
	let projectProps = null;

	// Adjust iconSize on small screens
	import Viewport from "svelte-viewport-info";
	import { iconSize } from "./stores.js";

	function updateIconSize() {
		if (Viewport.Width < 576) {
			iconSize.update(() => 48);
		} else {
			iconSize.update(() => 64);
		}
	}
	updateIconSize();

	// Reset content on new page
	import { onMount } from "svelte";
	onMount(() => {
		documentLoaded = true;
	});
	let firstLoad = true;
	let documentLoaded = false;
	function scrollToTop() {
		const main = document.querySelector("main");
		const navbar = document.querySelector(".navbar");

		if (documentLoaded && navbar && main && !firstLoad) {
			// elem.scrollIntoView({ behavior: "smooth" });
			const yOffset = -navbar.offsetHeight;
			const y =
				main.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		} else {
			firstLoad = false;
		}
	}

	// Routing
	import router from "page";
	let page = "";

	// Routes
	router("/", () => {
		page = "home";
		setTimeout(scrollToTop, 10);
	});
	router("/games", () => {
		page = "games";
		setTimeout(scrollToTop, 10);
	});
	// Game showcase
	router(
		"/games/:game",
		(ctx, next) => {
			// If game parameter matches object in store list, load props
			gameTitle = ctx.params.game;
			gameProps = games.find((gameObj) => {
				let cleanTitle = gameObj.title
					.split(" ")
					.join("")
					.toLowerCase();
				return cleanTitle === gameTitle;
			});
			// console.log("props", gameProps);
			next();
		},
		() => (page = "gameShowcase")
	);
	// Project showcase
	router(
		"/projects/:project",
		(ctx, next) => {
			// If game parameter matches object in store list, load props
			projectTitle = ctx.params.project;
			projectProps = projects.find((projectObj) => {
				let cleanTitle = projectObj.title
					.split(" ")
					.join("")
					.toLowerCase();
				return cleanTitle === projectTitle;
			});
			console.log("props", projectProps);
			next();
		},
		() => (page = "projectShowcase")
	);
	// 404 redirect
	router("/*", () => {
		page = "home";
		scrollToTop();
	});

	router.start();
</script>

<!-- Watch body for viewport changes -->
<svelte:body on:viewportchanged={updateIconSize} />

<div class="wrapper background">
	<Modal
		styleWindow={{
			boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.15)",
			width: "1200px",
			background: theme.bgColors.primary,
			color: "white",
		}}
		styleCloseButton={{
			cursor: "pointer",
			margin: "10px",
		}}
	>
		<!-- Header -->
		<Splash />

		<!-- Routed body -->
		<main>
			{#if page === "home"}
				<Web />
			{:else if page === "games"}
				<Games {games} />
			{:else if page === "gameShowcase"}
				<!-- Redirect to game page is props are missing -->
				{#if gameProps == null}
					{window.location.replace(`${url}/games`)}
				{:else}
					<Section
						top={false}
						bottom={true}
						bg={theme.bgColors.primary}
					>
						<GameShowcase {...gameProps} fullPage={true} />
					</Section>
					<SectionBreak />
				{/if}
			{:else if page === "projectShowcase"}
				<!-- Redirect to game page is props are missing -->
				{#if projectProps == null}
					{window.location.replace(`${url}/`)}
				{:else}
					<Section
						top={false}
						bottom={true}
						bg={theme.bgColors.primary}
					>
						<ProjectShowcase {...projectProps} fullPage={true} />
					</Section>
					<SectionBreak />
				{/if}
			{/if}
		</main>
	</Modal>
</div>

<style>
	.wrapper {
		text-align: center;
		display: flex;
		flex-direction: column;
		margin: auto;
		width: auto;
		height: inherit;
		/* Duplicate splash bg as page background */
		background-image: url("/assets/backgrounds/purplebgblur.jpg");
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
