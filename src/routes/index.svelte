<script>
    import { fly, fade } from 'svelte/transition';
    import Nav from '../components/Nav.svelte';
    import { state } from './../state.js';
    
    export let segment;

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

<div id='landing-page-std' in:fly={{ y: -25, duration: 1000}}>
    <h1 class='title'>
        {CONTENT[$state.language].title}
    </h1>
    <h2 class='subtitle {'subtitle-' + $state.language}'>
        {CONTENT[$state.language].subtitle}
    </h2>
    
    <Nav {segment} is_landing_page={true}/>
</div>

<div id='landing-page-mobile' in:fly={{ y: -25, duration: 1000}}>
    <img class='landing-page-mobile--img' src='/images/landing-page-mobile.jpg' alt='Louise Augoyard'>
    <!-- We need this container to keep title and subtitle relatively aligned while centering the whole block. -->
    <div id='landing-page-mobile--title-container'>
        <a href='/'>
            <h1 class='title'>
                {CONTENT[$state.language].title}
            </h1>
            <h2 class='subtitle {'subtitle-' + $state.language}'>
                {CONTENT[$state.language].subtitle}
            </h2>
        </a>
    </div>
    
    <Nav {segment}/>
</div>



<style>
    #landing-page-std {
        background-image: url('/images/landing-page-1024.jpg');
        background-position: center;
        background-size: cover;
        height: 100vh;
        left: 0;
        padding: 6rem 4.5rem 3rem 10%;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10000;
    }

    /* Align title and image according to viewport width. */
    @media (max-width: 1400px) {
        #landing-page-std {
            padding: 4.5rem 10%;
        }
    }

    @media (max-width: 900px) {
        #landing-page-std {
            background-position: right -250px top 0px;
            background-size: cover;
            padding: 3rem 10%;
        }
    }
    
    @media (max-width: 700px) {
        #landing-page-std {
            background-position: right -420px top 0px;
            padding: 3rem 10%;

        }
    }
    
    @media (max-width: 550px) {
        #landing-page-std {
            background-position: right -440px top 0px;
            padding: 3rem 7%;
        }
    }

    /* Select image size according to device width. */
    @media only screen and (min-device-width: 1025px) {
        #landing-page-std {
            background-image: url('/images/landing-page-1366.jpg');
        }
    }
   
    @media only screen and (min-device-width: 1367px) {
        #landing-page-std {
            background-image: url('/images/landing-page-1680.jpg');
        }
    }
    
    @media only screen and (min-device-width: 1681px) {
        #landing-page-std {
            background-image: url('/images/landing-page-1920.jpg');
        }
    }

    .title {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0;
        text-align: left;
        padding: 0;
    }

    .subtitle {
        font-size: 2.75rem;
        font-style: italic;
        font-weight: 300;
        line-height: .5em;
        margin: 0 0 4rem 0;
        padding: 0;
    }
    
    /* Harpiste is shorter than Harfenistin. */
    .subtitle-de {
        padding-left: 2rem;
    }
    
    .subtitle-fr {
        padding-left: 4.5rem;
    }
    

    #landing-page-mobile {
        display: none;
        height: 100vh;
        padding: 0;
        width: 100%;
        z-index: 10;
    }

    .landing-page-mobile--img {
        margin-top: 0;
    }
    
    /* We need this one to center the whole but keep title and subtitle aligned to each other. */
    #landing-page-mobile--title-container {
        display: block;
        margin: 2rem auto 1.5rem auto;
        width: max-content;
    }
    
    #landing-page-mobile .title {
        font-size: 2.75rem;
    }

    #landing-page-mobile .subtitle {
        font-size: 2.25rem;
        margin: 0;
    }

    #landing-page-mobile .subtitle-de {
        padding-left: 1.5rem;
    }
    
    #landing-page-mobile .subtitle-fr {
        padding-left: 3rem;
    }

    /* Switch to the mobile version when viewport (!) width is at most 500. */
    @media (max-width: 440px) {
        #landing-page-std {
            display: none;
        }
        
        #landing-page-mobile {
            display: block;
        }
    }
    
</style>