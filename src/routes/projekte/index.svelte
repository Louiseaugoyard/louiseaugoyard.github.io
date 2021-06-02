<script>
    import { fly } from 'svelte/transition';
    import { state } from '../../state.js';
    import Main from '../../components/Main.svelte';

    const CONTENT = {
        title: {
            de: 'Projekte',
            fr: 'Projets',
            en: 'Projects',
        },
        projects: {
            "trio-sophora": {
                route: 'projekte/trio-sophora',
                title: {
                    de: 'Trio Sophora',
                    fr: 'Trio Sophora',
                    en: 'Trio Sophora',
                },
                description: {
                    de: 'Flöte, Viola und Harfe',
                    fr: 'Flûte, alto et harpe',
                    en: 'Flute, Viola and Harp'
                },
                image: 'images/monet-nenuphars-512.jpg',
            },
            "nachtigall": {
                route: 'projekte/nachtigall',
                title: {
                    de: 'Ein Lied für die Nachtigall',
                    fr: 'Une berceuse pour le rossignol',
                    en: 'A Chant for the Nightingale',
                },
                description: {
                    de: 'Kinderkonzert mit Harfe und Live-Malerei',
                    fr: 'Concert pour enfants avec harpe et dessin en direct',
                    en: 'Concert for children with Harp and Live Painting',
                },
                image: 'images/lerche-512.jpg',
            },
            /*"de-musica": {
                route: 'projekte/de-musica',
                title: {
                    de: 'De Musica',
                    fr: 'De Musica',
                    en: 'De Musica',
                },
                description: {
                    de: 'Konzert-Lektüre mit philosophischen Texten zur Musik',
                    fr: 'Concert-Lecture avec ???',
                    en: 'Concert lecture with philosophical texts',
                }
            }*/
        }
    };
</script>


<!-- This sets the window title in the tab bar. -->
<svelte:head>
    <title>Louise Augoyard | {CONTENT.title[$state.language]}</title>
    <meta name='description' content='Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.'/>
</svelte:head>


<Main>
    <img src='/images/projects-mobile.jpg' alt='Bild einer Harfe.' class='pic-mobile'>
    <h1>{CONTENT.title[$state.language]}</h1>

    <div id="projects-table">
        <a id="trio-sophora" class="project-cell" href={CONTENT.projects["trio-sophora"].route}>
            <h2 id="trio-sophora--title">{CONTENT.projects["trio-sophora"].title[$state.language]}</h2>
            <p id="trio-sophora--desc">{CONTENT.projects["trio-sophora"].description[$state.language]}</p>
        </a>
        <a id="nachtigall" class="project-cell" href={CONTENT.projects["nachtigall"].route}>
            <h2 id="nachtigall--title">{CONTENT.projects["nachtigall"].title[$state.language]}</h2>
            <p id="nachtigall--desc">{CONTENT.projects["nachtigall"].description[$state.language]}</p>
        </a>
    </div>

</Main>

<style>
    #projects-table {
        margin: 3em 0;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .project-cell {
        width: 25vw;
        height: 25vw;
        display: block;
        margin: 1rem;
        flex: 0 0 25vw;
        border: 1px solid #eeedf1;
        padding: 0;
        box-shadow: 1px 1px 6px rgba(0,0,0,.15);
        transition: box-shadow .5s ease;
    }
    .project-cell:hover,
    .project-cell:active,
    .project-cell:focus {
        box-shadow: 3px 3px 6px rgba(0,0,0,.2);
    }
    #trio-sophora {
        display: flex;
        flex-direction: column;
        justify-content: start;
        background-image: url("/images/monet-nenuphars-512.jpg");
        background-position: center;
        background-size: cover;
        padding: 4rem .5rem;
    }
    #trio-sophora--title {
        font-family: "Cormorant";
        font-size: 2em;
        color: white;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    #trio-sophora--desc {
        font-family: "Cormorant";
        font-size: 1.5em;
        font-style: italic;
        color: white;
        text-align: center;
    }

    #nachtigall {
        display: flex;
        flex-direction: column;
        justify-content: end;
        background-image: url("/images/lerche-512.jpg");
        background-position: top 15% right 15%;
        background-size: 60%;
        background-repeat: no-repeat;
        padding: 2rem 1.5rem;
    }
    #nachtigall--title {
        margin: 0 0 .3em 0;
        max-width: 80%;
        font-size: 1.2em;
        line-height: 1.2em;
        font-family: "Open Sans";
        font-weight: 600;
    }

    #nachtigall--desc {
        line-height: 1.25em;
    }

    @media (max-width: 440px) {
        #projects-table {
            flex-direction: column;
        }
        .project-cell {
            width: 90vw;
            height: 90vw;
            flex: 0 0 90vw;
        }
    }
</style>