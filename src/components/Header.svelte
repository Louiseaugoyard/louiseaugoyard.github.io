<script>
	import { slide, fade } from 'svelte/transition';
	import { state } from './../state.js';
	import Nav from './Nav.svelte';
	
	export let segment;

	let show_mobile_header = false;
	const toggle_mobile_header = () => { show_mobile_header = !show_mobile_header; }

	const CONTENT = {
        de: {
            title: 'Louise Augoyard',
            subtitle: 'Harfenistin',
        },
        fr: {
            title: 'Louise Augoyard',
            subtitle: 'Harpiste',
        },
        en: {
            title: 'Louise Augoyard',
            subtitle: 'Harpist'
        }
    };
</script>


<!-- The nav button on mobile is hidden on the landing page. -->
{#if segment}
<button id='header-mobile-toggle' on:click={toggle_mobile_header}
		transition:fade>
	<div class='header-mobile-toggle--dot'/>
	<div class='header-mobile-toggle--dot'/>
	<div class='header-mobile-toggle--dot'/>
</button>
{/if}

<!-- `show_mobile_header` is false by default, so we don't need the segment check. -->
{#if show_mobile_header}
	<!-- The underlay slightly tones down the content and registers when the user
		 taps out of the nav to close it. -->
	<div id='header-mobile--underlay'
		 transition:fade
		 on:click={toggle_mobile_header}/>
	
	<header id='header-mobile'
			transition:slide={{y: -100, duration: 750}}>
    	<!-- We need this container to keep title and subtitle relatively aligned while centering the whole block. -->
		<div id='header-mobile--title-container'>
			<a href='/' on:click={toggle_mobile_header}>
				<h1 class='title'>
					{CONTENT[$state.language].title}
				</h1>
				<h2 class='subtitle {'subtitle-' + $state.language}'>
					{CONTENT[$state.language].subtitle}
				</h2>
			</a>
		</div>
	
		<Nav on:navigate={toggle_mobile_header} {segment}/>
	</header>
{/if}

{#if segment}
<header id='header-std'>
	<h1 class='logo'><a href='/'>LA</a></h1>	
	<Nav {segment}/>
</header>
{/if}


<style>
	header {
		background-color: white;
		z-index: 5;
	}
	
	#header-mobile-toggle {
		align-items: center;
		background-color: #eeedf1;
		box-shadow: 1px 1px 5px rgba(0,0,0,.1);
		display: none;
		flex-direction: row;
		height: 45px;
		justify-content: space-evenly;
		padding: 5px;
		position: fixed;
		right: 1rem;
		top: 1rem;
		width: 45px;
		z-index: 20;
	}

	.header-mobile-toggle--dot {
		background-color: #ccc;
		border-radius: 50%;
		height: 5px;
		width: 5px;
	}
	#header-mobile--underlay {
		background-color: rgba(255,255,255,.1);
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
	}
	
	#header-mobile {
		box-shadow: 2px 2px 6px rgba(0,0,0,.1);
		display: none;
		left: 0;
		padding: 6rem 0 3rem 0;
		position: fixed;
		top: 0;
		width: 100%;
	}
	
	#header-mobile--title-container {
		display: block;
		margin: 0 auto 2rem auto;
		width: max-content;
	}

	.title {
		margin: 0;
        font-size: 3rem;
        text-align: left;
	}

	.subtitle {
		font-size: 2.5rem;
		font-weight: 300;
		line-height: .5em;
        font-style: italic;
        margin: 0;
	}
	
    .subtitle-de {
        padding-left: 2rem;
    }
    
    .subtitle-fr {
        padding-left: 4.5rem;
	}

	#header-mobile .title {
		font-size: 2.75rem;
		font-weight: 700;
	}
	#header-mobile .subtitle {
		font-size: 2.25rem;
	}

    #header-std {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin: 0 auto;
		max-width: 60rem;
		padding: 1rem;
		position: sticky;
		top: 0;
		width: 100%;
	}

	.logo {
		flex: 1;
		font-size: 2rem;
		font-weight: 300;
		margin: 0;
		padding: 0;
		text-align: left;
	}

	.logo > a {
		transition: background-color .5s ease;
		padding: .1em .25em;
	}

	.logo > a:hover,
	.logo > a:active,
	.logo > a:focus {
		background-color: #eeedf1;
	}
		
    /* Switch to the mobile version when viewport (!) width is at most 500. */
	@media (max-width: 500px) {
		#header-mobile-toggle {
			display: flex;
		}
		#header-mobile {
			display: block;
		}
		#header-std {
			display: none;
		}
	}
</style>