<script>
	import Header from './../components/Header.svelte';
	import Main from './../components/Main.svelte';
	import Footer from './../components/Footer.svelte';
	
	import { onMount } from 'svelte';
	import { state } from './../state';
	
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';

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
	
</script>


<svelte:head>
	<title>Louise Augoyard | {status}</title>
</svelte:head>


<Header segment='error'/>

<Main>
	<h1>{status}</h1>

	<p>{error.message}</p>
	
	<!-- Error reporting. Visitors should never see this.
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
	-->
</Main>

<Footer on:set-language={(event) => { set_language(event.detail.language); }}/>