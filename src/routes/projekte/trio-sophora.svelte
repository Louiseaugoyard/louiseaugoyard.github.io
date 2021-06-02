<script>
    import { fade } from 'svelte/transition';
    import Main from '../../components/Main.svelte';
    import { state } from '../../state.js';
    
    const CONTENT = {
        title: {
            de: 'Trio Sophora',
            fr: 'Trio Sophora',
            en: 'Trio Sophora',
        },
        text: {
            fr: [
            "Tekla Varga, Verena Curuti et Louise Augoyard se sont rencontrées en 2016 autour de la Sonate pour flûte, alto et harpe de Claude Debussy. Avec le soutien de leurs professeurs Janos Balint (flûte), Diemut Poppen (alto) et Godelieve Schrama (harpe), elles poursuivent leur collaboration et se produisent notamment à l’occasion des Detmolder Schlosskonzerte en 2018 et des Konzertreihe de Bergkirchen en 2019. Leur répertoire intègre aussi bien des œuvres originales de compositeurs impressionnistes et post-romantiques que des arrangements d’œuvres orchestrales, qui mettent en valeur la diversité des couleurs sonores de cette formation instrumentale hors du commun.",
            ],
            de: [
            "Tekla Varga (Flöte), Verena Weber (Viola) und Louise Augoyard (Harfe) spielen in der Besetzung als Trio seit 2016. Wichtige musikalische Impulse erhielten Sie von Prof. Godelive Schrama, Prof. Diemut Poppen und Prof. Janos Balint. Neben einigen Auftritten in der Hochschule für Musik Detmold absolvierte das Trio auch Konzerte im Rahmen der Detmolder Schlosskonzerte 2018 und der Konzertreihe Bergkirchen 2019. Besonders die Komponisten des Impressionismus und der Spätromantik erkannten den klanglichen Reiz dieser außergewöhnlichen Besetzung: drei Instrumente aus unterschiedlichen Instrumentengruppen, die zusammen ein besonders farbenreiches Klangspektrum scha­ffen.",
            ],
            en: [
            ],
        },
        repertoire: {
            title: {
                fr: 'Répertoire',
                de: 'Repertoire',
                en: 'Repertoire',
            },
            pieces: [
            {
                composer: {
                    name: 'Arnold Bax',
                    dates: [1883,1953],
                },
                title: 'Elegiac Trio'
            },
            {
                composer: {
                    name: 'Ludwig van Beethoven',
                    dates: [1770,1827],
                },
                arranger: {
                    name: 'Louise Augoyard',
                },
                title: {
                    en: 'Piano sonata in C-sharp minor op. 27 No. 1, first movement',
                    de: 'Klaviersonate cis-moll op. 27 Nr. 1, erster Satz',
                    fr: 'Sonate pour piano en do dièse mineur op. 27 nº 1, premier mouvement'
                },
            },
            {
                composer: {
                    name: 'Georges Bizet',
                    dates: [1838,1875],
                },
                title: 'Entracte de l’Opéra Carmen'
            },
            {
                composer: {
                    name: 'Mel Bonis',
                    dates: [1858,1937],
                },
                title: 'Scènes de la Forêt'
            },
            {
                composer: {
                    name: 'Claude Debussy',
                    dates: [1862,1918],
                },
                title: {
                    fr: 'Sonate pour Flûte, Alto et Harpe',
                    de: 'Sonate für Flöte, Viola und Harfe',
                    en: 'Sonata for Flute, Viola and Harp',
                },
            },
            {
                composer: {
                    name: 'Sofia Goubaïdoulina',
                    dates: [1931],
                },
                title: 'Garten von Freuden und Traurigkeiten'
            },
            {
                composer: {
                    name: 'Sergueï Prokofiev',
                    dates: [1891,1953],
                },
                arranger: {
                    name: 'Gilad Cohen'
                },
                title: 'Suite du Ballet Romeo et Juliette',
            },
            {
                composer: {
                    name: 'Sergej Rachmaninoff',
                    dates: [1873,1943],
                },
                title: 'Vocalise op. 34 Nr. 14'
            },
            {
                composer: {
                    name: 'Ladislas de Rohozinski',
                    dates: [1886,1938],
                },
                title: 'Suite brève'
            }
            ],
        },
    };
    
    /* Sadly, we cannot just read out `$state.language` directly in these getters, because then
    * the strings won't be updated reactively. For that to work we need to pass `$state.language`
    * with each function call in the markup below: then every time the language changes, the call
    * is repeated.
    */
    const get_title = (piece, language) => {
        if (typeof(piece.title) === 'string') {
            return piece.title;
        } else {
            return piece.title[language];
        }
    }
    
    const get_composer_name = (piece, language) => {
        if (typeof(piece.composer.name) === 'string') {
            return piece.composer.name;
        } else {
            return piece.composer.name[language];
        }
    }
    
    const get_composer_dates = (piece) => {
        if (piece.composer.dates.length === 2) {
            return `${piece.composer.dates[0]}–${piece.composer.dates[1]}`;
        } else {
            return `*${piece.composer.dates[0]}`;
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
    <div class='title-container'>
        <h1>{CONTENT.title[$state.language]}</h1>
        <!-- In future: Button row for different projects. -->
    </div>

    <div id='pictures-std'>
        <picture>
            <source srcset='/images/tekla-varga-512.jpg 512w'>
            <img src='/images/tekla-varga-1024.jpg' alt='Die Flötistin Tekla Varga.' class='pic-desktop' in:fade>
        </picture>
        <picture>
            <source srcset='/images/verena-weber-512.jpg 512w'>
            <img src='/images/verena-weber-1024.jpg' alt='Die Bratschistin Verena Weber.' class='pic-desktop' in:fade>
        </picture>
        <picture>
            <source srcset='/images/louise-augoyard-512.jpg 512w'>
            <img src='/images/louise-augoyard-1024.jpg' alt='Die Harfenistin Louise Augoyard.' class='pic-desktop' in:fade>
        </picture>
    </div>
                
    <div id='content'>
        <section id='biography'>         
            {#each CONTENT.text[$state.language] as paragraph, i}
            <p>{paragraph}</p>
            {/each}
        </section>
        
        <div id='pictures-mobile'>
            <picture>
                <source srcset='/images/tekla-varga-portrait-128.jpg 128w'>
                <img src='/images/tekla-varga-portrait-384.jpg' alt='Tekla Varga, Flöte' class='picture' in:fade>
            </picture>
            <picture>
                <source scrset='/images/verena-weber-portrait-128.jpg 128w'>
                <img src='/images/verena-weber-portrait-384.jpg' alt='Verena Weber, Bratsche' class='picture' in:fade>
            </picture>
            <picture>
                <source srcset='/images/louise-augoyard-portrait-128.jpg 128w'>
                <img  src='/images/louise-augoyard-portrait-384.jpg' alt='Louise Augoyard, Harfe' class='picture' in:fade>
            </picture>
        </div>
                    
        <section id='repertoire'>
            <h3>{CONTENT.repertoire.title[$state.language]}</h3>
            
            <ul class='repertoire-list'>
                {#each CONTENT.repertoire.pieces as piece, i}
                    <li class='repertoire--item'>
                        <span class='repertoire--item-composer'>{get_composer_name(piece, $state.language)}</span>
                        ({get_composer_dates(piece)})
                        <div class='repertoire--item-title'>{get_title(piece, $state.language)}</div>
                    </li>
                {/each}
            </ul>
        </section>
    </div>
</Main>
                        
                        
<style>
    #pictures-std {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1.5rem 0;
    }
    
    #pictures-std picture {
        width: 31%;
    }
    .picture {
        box-shadow: 2px 2px 6px rgba(0,0,0,.2);
    }
    
    #pictures-std picture:first-child {
        margin-left: 1rem;
    }
    #pictures-std picture:last-of-type {
        margin-right: 1rem;
    }
    
    #pictures-mobile {
        display: none;
        flex-direction: row;
        justify-content: space-between;
        margin: 1.5rem 1em;
    }
    
    #pictures-mobile picture {
        width: 31%;
    }
    
    #content {
        display: flex;
        flex-direction: row;
    }
    
    #biography {
        flex: 2;
    }
    
    #repertoire {
        font-size: .9em;
        background-color: #eeedf1;
        min-width: 22em;
        padding: 1.5rem;
        flex: 1;
        margin: 0 1rem;
        box-shadow: 1px 1px 6px rgba(0,0,0,.15);
    }
    
    #repertoire h3 {
        text-align: center;
        margin: 1rem 0 2rem 0;
    }
    
    .repertoire--item {
        text-align: center;
    }
    
    .repertoire--item + .repertoire--item {
        margin-top: 1rem;
    }
    
    .repertoire--item-composer {
        font-weight: 400;
    }
    
    @media (max-width: 440px) {
        #content {
            flex-direction: column;
        }
        
        #repertoire {
            font-size: .9em;
            background-color: #eeedf1;
            min-width: 100%;
            width: 100%;
            padding: 1.5rem;
            flex: 1;
            margin: 2rem 0;
            box-shadow: 1px 1px 6px rgba(0,0,0,.15);
        }
        
        #pictures-std {
            display: none;
        }
        
        #pictures-mobile {
            display: flex;
        }
    }
</style>