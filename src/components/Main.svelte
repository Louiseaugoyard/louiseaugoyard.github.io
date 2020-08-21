<script>
    import { fly } from 'svelte/transition';
</script>

<main in:fly={{ y: -25, duration: 1000 }}>
    <slot></slot>
</main>


<style>
    main {
    	flex: 2;
    	margin: 0 auto;
    	max-width: 60rem;
    	padding: 0 0 12rem 0;
    }

    @media (max-width: 500px) {
    	main {
    		padding: 0 0 6rem 0;
    	}
    }
</style>
