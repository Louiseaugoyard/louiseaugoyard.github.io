<script>
	import { state } from './../state.js';

	// We need to dispatch events up the component hierarchy with `dispatch`.
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/* In order to keep things organized, both the navigation on the landing page and
	 * in the normal header are generated in this component: depending on the value of
	 * `is_landing_page`. `segment` comes all the way down from `_layout` and is used
	 * to highlight the current sub-page.
	 */
	export let is_landing_page = false;
	export let segment;

	let CONTENT = [
		{
			route: 'biographie',
			de: 'Biographie',
			fr: 'Biographie',
			en: 'Biography',
		},{
			route: 'projekte',
			de: 'Projekte',
			fr: 'Projets',
			en: 'Projects',
		},{
			route: 'unterricht',
			de: 'Unterricht',
			fr: 'Enseignement',
			en: 'Lessons',
/*		},{
			route: 'medien',
			de: 'Medien',
			fr: '???',
			en: 'Media',
		},{
			route: 'termine',
			de: 'Termine',
			fr: '???',
			en: 'Dates' */
		},{
			route: 'kontakt',
			de: 'Kontakt',
			fr: 'Contact',
			en: 'Contact',
		}
	];
</script>

<nav class='{is_landing_page ? 'nav-landing-page' : 'nav-std'}'>
	<ul id='nav-list'>
		{#each CONTENT as entry, i}
			<li class='nav-list--item'>
				<!-- `rel='prefetch'` instructs sapper to preload the page when the user
					 hovers over the link. No pictures popping in late, how awesome is that!! -->
				<a rel='prefetch'
				   class={segment === entry.route ? 'current' : undefined}
				   href={entry.route}
				   on:click={() => { dispatch('navigate'); }}>
					{entry[$state.language]}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	#nav-list {
		padding: 0;
	}

	.nav-landing-page #nav-list {
		padding-left: 2em;
	}

	.nav-landing-page li + li {
		margin-top: 1em;
	}
	
	.nav-landing-page a {
		text-transform: uppercase;
		letter-spacing: .15em;
		font-size: 1.2rem;
		font-weight: 300;
		padding: .5em .8em;
		transition: background-color .5s ease, color .5s ease;
	}

	.nav-landing-page a:hover,
	.nav-landing-page a:focus,
	.nav-landing-page a:active {
		background-color: rgba(255,255,255,.2);
	}

	.nav-std li {
		display: inline-block;
	}

	.nav-std li + li {
		margin-left: .25rem;
	}

	.nav-std a {
		font-size: .9em;
		font-weight: 300;
		letter-spacing: .1em;
		padding: .5em .8em;
		text-transform: uppercase;
		transition: background-color .5s ease;
	}
	
	.nav-std a.current,
	.nav-std a:hover,
	.nav-std a:focus,
	.nav-std a:active {
		background-color: #eeedf1;
	}


	/* Switch to vertical layout on narrow viewports. */
	@media (max-width: 500px) {
		.nav-std {
			padding: 2rem 1rem;
			text-align: center;
			width: 100%;
		}

		.nav-std li {
			display: block;
		}

		.nav-std li + li {
			margin-left: 0;
			margin-top: 1rem;
		}
	}
</style>