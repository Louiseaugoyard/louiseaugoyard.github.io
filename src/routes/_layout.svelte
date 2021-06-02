<script>
	import Header from './../components/Header.svelte';
	import Footer from './../components/Footer.svelte';

	/* The display language is saved in a writable store in `./src/state.js`.
	 * Child components can read the value and select strings accordingly.
	 * Any attempt to change the language via the UI results in an event
	 * being forwarded here, because this is the only place where we subscribe
	 * for write access to the store.
	 */
	import { onMount } from 'svelte';   			// lifecycle hook, see below
	import { state } from './../state'; 			// the store

	const unsubscribe = state.subscribe(() => {});	// subscribe for write access

	// This gets called on startup and when a language change event is registered.
	const set_language = (lang) => {
		let key = lang.slice(0,2);
		if (!['de','fr'].includes(key)) {
			key = 'de';
			console.log(`Language '${lang}' is not supported. Using german instead.`);
		}
		state.update(settings => { return {...settings, language: key }; });
	}
	
	/* The `_layout` component lives for the whole session. We read out the client's
	 * preferred language when the session starts and try to use it.
	 */
	onMount(() => {
		set_language(navigator.language);
	});
	
	/* Sapper feeds this prop to the `_layout` component. It contains the current sub-route
	 * if any, otherwise it's undefined. We use it to make layout decisions here and in
	 * sub-components (Header/Nav).
	 */
	export let segment;
</script>

<Header {segment}/>

<slot></slot>

<!-- If `segment` is defined, we're not on the landing page, display the footer. -->
{#if segment}
	<Footer on:set-language={(event) => { set_language(event.detail.language); }}/>
{/if}