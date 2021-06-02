<script>
    import { fade } from 'svelte/transition';
    import Main from '../../components/Main.svelte';
    import { state } from '../../state.js';
    
    const CONTENT = {
        title: {
            de: 'Ein Lied für die Nachtigall',
            fr: 'Une berceuse pour le rossignol',
            en: 'A Chant for the Nightingale',
        },
        subtitle: {
            de: 'Kinderkonzert mit Harfe und Live-Malerei',
            fr: 'Concert pour enfants avec harpe et dessin en direct',
            en: 'Concert for Children with Harp and Live Painting'
        },
        intro: {
            de: 'Eine Nachtigall singt in der Nacht und schläft bei Tagesanbruch ein, in Schlaf gewiegt durch die Klänge der Natur und den Gesang der Vögel, die einer nach dem anderen sanft aufwachen.',
            fr: 'Un rossignol chante dans la nuit et s’endort au lever du jour, bercé par les sons de la nature et le chant des oiseaux qui s’éveillent doucement les après les autres.',
            en: '???',
        },
        text: {
            fr: [
                '« Une berceuse pour le rossignol » est un concert pour enfants original mêlant récit, musique et dessin au pastel. Les sons de la harpe évoquent tour à tour une forêt, un ruisseau et des oiseaux dessinés au fil de l’histoire sur trois grands tableaux. Dans ce concept, le dessin n’est pas une image figée, mais un art vivant où le geste de l’artiste accompagne les vibrations des cordes et rend visible les plus fines impressions musicales. Les enfants sont également invités participer au processus créatif en coloriant et assemblant des oiseaux en papier quelques jours avant le concert (matériel fourni par les artistes). Ces oiseaux personnalisés seront ensuite accrochés aux tableaux au cours de la représentation. (<a href="/nachtigall.pdf" target="_blank">Informations pratiques</a>)',
            ],
            de: [
                '„Ein Lied für die Nachtigall“ ist ein Konzert für Kinder, das Rezitation, Musik und Live-Malerei in Pastellkreide verbindet. Die Klänge der Harfe evozieren nach und nach einen Wald, einen Bach und verschiedene Vögel, die im Lauf der Geschichte auf drei große Bilder gemalt werden. In diesem Konzept ist die Malerei nicht ein fixiertes Bild, sondern lebendige Kunst, in der die Bewegungen der Künstlerin die Vibrationen der Saiten begleiten, und die feinsten musikalischen Impressionen sichtbar machen. Auch die Kinder sind eingeladen, am kreativen Prozess teilzunehmen, indem sie ein paar Tage vor dem Konzert Papiervögel anmalen und zusammensetzen (das Material dafür wird von den Künstlerinnen zur Verfügung gestellt). Die einzelnen Vögel werden dann im Lauf des Konzerts in die Bilder eingefügt. (<a href="/nachtigall.pdf" target="_blank">Praktische Informationen</a>)',
            ],
            en: [
                '???',
            ],
        },
        laura: {
            fr: '<span style="font-weight: 600">Laura Hedon</span> est une auteure-illustratrice française qui travaille principalement pour l’édition jeunesse. Après des études dans le domaine de la biologie qui l’ont rendue amoureuse de la nature, elle se lance finalement dans la réalisation de livres illustrés pour représenter ce qu’elle aime : le monde du vivant. Pour ses illustrations, elle affectionne les techniques traditionnelles, et c’est en particulier le pastel sec qu’elle a choisi pour accompagner la harpe lors de ce concert-dessiné. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',
            de: '<span style="font-weight: 600">Laura Hedon</span> ist eine französische Buchillustratorin, die primär im Bereich der Jugendliteratur arbeitet. Nach einem Biologiestudium, das ihre Liebe zur Natur weckte, widmet sie sich nun ganz der Realisation von Buchillustrationen, in denen sie abbildet, was sie liebt: die Welt des Lebendigen. Für ihre Illustration bevorzugt sie traditionelle Techniken. Daraus hat sie die Pastellkreide gewählt, um bei diesem Bild-Konzert die Harfe zu begleiten. <span style="color: rgba(0,0,0,.5)">(Photo &#169; Anja Wozikowki)</span>',
            en: '???'
        }
    };
</script>

<!-- This sets the window title in the tab bar. -->
<svelte:head>
    <title>Louise Augoyard | {CONTENT.title[$state.language]}</title>
    <meta name='description' content='Louise Augoyard (Harfe), Tekla Varga (Flöto) und Verena Weber (Viola) spielen im Trio Sophora Werke des französischen Impressionismus, neue Musik und Arrangements bekannter Stücke.'/>
</svelte:head>

<Main>
    <img src='/images/rossignol-mobile.jpg' alt='Eine Nachtigall in Pastell' class='pic-mobile'>

    <h1 id='title'>{CONTENT.title[$state.language]}</h1>
    <h2 id='subtitle'>{CONTENT.subtitle[$state.language]}</h2>

    <picture id="nightingale-picture">
        <source srcset="/images/rossignol-800.jpg 800w">
        <source srcset="/images/rossignol-1372.jpg 2x">
        <img src="/images/rossignol-1372.jpg" class="pic-desktop pic-no-shadow" in:fade alt="Eine Nachtigall in Pastell">
    </picture>

    <p id="intro">{CONTENT.intro[$state.language]}</p>

    <picture>
        <source srcset="/images/laura-louise-512.jpg 512w">
        <img src="/images/laura-louise-512.jpg" class="pic-desktop pic-right" in:fade alt="Laura Hedon.">
    </picture>
    {#each CONTENT.text[$state.language] as par, i}
        <p>{@html par}</p>
    {/each}

    <div id="laura">
        <p>{@html CONTENT.laura[$state.language]}</p>
    </div>
</Main>
                        
                        
<style>
    #title {
        margin-bottom: .5rem;
    }
    #subtitle {
        margin-top: 0;
        margin-bottom: 4rem;
        font-style: italic;
        font-weight: normal;
        font-size: 2em;
        text-align: center;
    }
    #intro {
        max-width: 50rem;
        margin: 0 auto 3rem auto;
        text-align: center;
        font-style: italic;
    }

    #nightingale-picture {
        display: block;
        margin: 1.5rem auto;
        max-width: 600px;
    }

    #laura {
        margin-top: 2rem;
    }

    img.pic-right {
        width: 30%;
        min-width: 20rem;
    }

    @media (max-width: 440px) {
        #nightingale-picture {
            display: none;
        }
        .pic-right {
            display: block;
            float: none;
	}
    }
</style>