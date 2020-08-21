<script>
    import { fly } from 'svelte/transition';
    import { state } from '../../state.js';
    import Main from '../../components/Main.svelte';
    import Trio from './_projects/Trio.svelte';

    const CONTENT = {
        title: {
            de: 'Projekte',
            fr: 'Projets',
            en: 'Projects',
        },
    }
</script>


<!-- This sets the window title in the tab bar. -->
<svelte:head>
	<title>Louise Augoyard | {CONTENT.title[$state.language]}</title>
</svelte:head>


<Main>
    <img src='/images/projects-mobile.jpg' alt='Louise Augoyard' class='pic-mobile'>
    <div class='title-container'>
        <h1>{CONTENT.title[$state.language]}</h1>
        <!-- In future: Button row for different projects. -->
    </div>
    
    <Trio/>    
</Main>