<script>
	import { createEventDispatcher } from 'svelte';
	import { state } from './../state.js';
	const dispatch = createEventDispatcher();
	
	const CONTENT = {
		languages: {
			de: 'Sprachen',
			fr: 'Langues',
			en: 'Languages',
		},
		imprint: {
			de: 'Impressum',
			fr: 'Mentions légales',
			en: 'Imprint',
		},
		privacy: {
			de: 'Datenschutzerklärung',
			fr: 'Déclaration de protection des données',
			en: 'Data protection declaration',
		},
		pictures: {
			de: 'Fotos',
			fr: 'Photos',
			en: 'Pictures',
		},
		design: {
			de: 'Design und Implementierung',
			fr: 'Design et réalisation',
			en: 'Design and implementation',
		},
		fonts: {
			de: 'Verwendete Schriftarten',
			fr: 'Polices utilisées',
			en: 'Fonts',
		},
	};
</script>

<footer>
	<h1 class='logo'><a href='/'>LA</a></h1>

	<p id='languages'>{CONTENT.languages[$state.language]}:
        <button class='inline' on:click={() => { dispatch('set-language', { language: 'de' }); }}>Deutsch</button> |
		<button class='inline' on:click={() => { dispatch('set-language', { language: 'fr' }); }}>Français</button> <!-- |
		<button class='inline' on:click={() => { dispatch('set-language', { language: 'en' }); }}>English</button>
		-->
	</p>
	<p id='copyright'>Copyright 2020 Louise Augoyard | <a href='impressum'>{CONTENT.imprint[$state.language]}</a>
	                                                 | <a href='datenschutz'>{CONTENT.privacy[$state.language]}</a></p>
	<p>
		{CONTENT.pictures[$state.language]}: <a href='https://www.fotografie-jelinski.de/' target='_blank'>Jutta Jelinski</a>
		| {CONTENT.design[$state.language]}: Florian Kretlow
	</p>
	<p>{CONTENT.fonts[$state.language]}: Cormorant (Christian Thalmann) und Open Sans (Steve Matteson)</p>
</footer>

<style>
    footer {
		background-color: #333;
		color: #ccc;
		font-size: .6em;
		font-weight: 400;
		letter-spacing: .05em;
		min-height: 6rem;
		padding: 3rem 0 6rem;
		width: 100%;
    }
    
    .logo {
		color: #ccc;
		flex: 1;
		font-size: 2rem;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		padding: 0;
		text-align: center;
	}

	.logo a {
		padding: .1em .25em;
		transition: background-color .5s ease;
	}

	.logo a:hover,
	.logo a:active,
	.logo a:focus {
		background-color: rgba(255,255,255,.05);
		border: none;
	}

	p {
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}

	p a,
	p button {
		background: none;
		border-bottom: 1px solid #333;
		color: inherit;
		font: inherit;
		letter-spacing: inherit;
		margin: 0;
		padding: 0;
		text-transform: inherit;
		transition: border .5s ease;
	}

	a:hover,
	a:active,
	button:hover,
	button:active {
		border-bottom: 1px solid #ccc;
	}

	#copyright,
	#languages {
		margin-bottom: 1rem;
	}

	@media screen and (any-hover: none) {
		p a,
		p button {
			border-bottom: 1px solid #ccc;
		}
	}
</style>