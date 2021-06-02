<script>
    import { fade, fly } from "svelte/transition";
    import Main from '../components/Main.svelte';
    import { state } from "./../state.js";
    
    let long_bio = false; // simple switch between long and short version

    const CONTENT = {
        title: {
            en: 'Biography',
            fr: 'Biographie',
            de: 'Biographie',
        },
        long: {
            button: {
                en: 'comprehensive',
                fr: 'approfondi',
                de: 'ausführlich',
            },
            text: {
                en: [],
                fr: [
                    "Louise Augoyard commence la harpe à l’âge de sept ans au Conservatoire de Brive-la-Gaillarde dans la classe de Sigrid Blanpain. Après s’être perfectionnée auprès de Marie-Monique Popesco, elle intègre en 2012 le Pôle supérieur d’enseignement artistique Paris-Boulogne-Billancourt dans la classe d’Anne Ricquebourg. En 2014, elle obtient une bourse pour étudier pendant un an à la Soochow University, School of Music (Shanghai) avec le harpiste Nicolas Tulliez, Harpe solo de l’Orchestre Philharmonique de Radio-France. En 2015, elle poursuit ses études à la Hochschule für Musik de Detmold, dont elle ressort diplômée d’un Bachelor of Arts Orchestermusiker en 2018 et d’un Master of Arts Instrumentalpädagogik en 2020. Parallèlement à son cursus universitaire, elle suit les masterclasses de grands maîtres tels qu’Isabelle Moretti, Germaine Lorenzini, Fabrice Pierre…",
                    "Sa passion pour la musique d’ensemble l’amène à jouer au sein de divers orchestres, sous la direction de Maxime Pascal (Orchestre Impromptu de Paris), Hans Richter (Smetana Philharmonic Orchestra of Prag), Vahan Mardirossian (Orchestre National de Chambre d’Arménie) … Elle se produit également en musique de chambre et fonde en 2016 le trio Sophora avec la flûtiste Tekla Varga et l’altiste Verena Curuti. Son répertoire soliste s’étend de la période baroque aux œuvres les plus contemporaines, avec un intérêt tout particulier pour la musique française du XXème siècle.",
                    "L’enseignement tient une place essentielle dans son activité artistique. A Paris, elle propose des cours privés aux élèves du Conservatoire à Rayonnement Régional de Boulogne-Billancourt. En 2018, elle intègre le cursus pédagogique de la Hochschule de Detmold où elle est encadrée par la professeure de harpe de la Musikschule de Bielefeld, Christiana Rathmer. Depuis 2018, elle enseigne la harpe à la Musikschule de Lage et a accompagné les élèves du Detmolder Jungstudierende Institut lors d’une académie de musique de chambre en Grèce.",
                    "Soucieuse de participer à la vie artistique et culturelle en France, elle occupe le poste de secrétaire générale de l’Association des Amis du Festival d’été de Gargilesse depuis 2017.",
                ],
                de: [
                    "Louise Augoyard begann das Harfenspiel mit sieben Jahren in der Klasse von Sigrid Blanpain am Conservatoire de Brive-la-Gaillarde. Später nahm sie Unterricht bei Marie-Monique Popesco, ehe sie 2012 ihr Studium im Pôle supérieur d’enseignement artistique Paris-Boulogne-Billancourt in der Klasse von Anne Ricquebourg aufnahm. 2014 erlaubte ihr ein Stipendium, für ein Jahr nach Shanghai zu gehen, um an der School of Music der Soochow University bei Nicolas Tulliez zu studieren, dem Soloharfenisten des Orchestre Philharmonique de Radio-France. 2015 setzte sie ihre Studien bei Godelieve Schrama an der Hochschule für Musik Detmold fort, wo sie 2018 den Bachelor of Arts als Orchestermusikerin und 2020 den Master of Arts in der Studienrichtung Instrumentalpädagogik abschloss. Parallel zu ihrer Hochschulausbildung nahm sie an Meisterkursen bei so renommierten Harfenisten wie Isabelle Moretti, Germaine Lorenzini und Fabrice Pierre teil.",
                    "Ihre Leidenschaft für Ensemblemusik führte sie als Mitglied in verschiedene Orchester. Dabei arbeitete sie mit renommierten Dirigenten wie Maxime Pascal (Orchestre Impromptu de Paris), Hans Richter (Smetana Philharmonic Orchestra of Prag) und Vahan Mardirossian (Orchestre National de Chambre d’Arménie) zusammen. Gleichermaßen aktiv ist sie auf dem Gebiet der Kammermusik. 2016 gründete sie das Trio Sophora mit der Flötistin Tekla Varga und der Bratschistin Verena Curuti. Ihr solistisches Repertoire umfasst Werke aus dem Barock bis hin zu neuesten zeitgenössischen Kompositionen – ihr besonderes Interesse gilt dabei der französischen Musik des 20. Jahrhunderts.",
                    "Das Unterrichten nimmt einen zentralen Platz in ihrem künstlerischen Schaffen ein. In Paris gab sie Privatunterricht für Schüler des Conservatoire à Rayonnement Régional de Boulogne-Billancourt. 2018 nahm sie ihre pädagogischen Studien an der HfM Detmold auf, unter der Anleitung von Christiana Rathmer, Harfenlehrerin an der Musikschule Bielefeld. Im gleichen Jahr übernahm sie eine Harfenklasse an der Musikschule Lage. Im Herbst 2019 begleitete sie eine Studienreise des Instituts für Jungstudierende der HfM Detmold (DJI) als Lehrkraft.",
                    "Ihr Wunsch, am künstlerischen und kulturellen Leben ihres Heimatlandes Frankreich aktiv mitzuwirken, brachte sie dazu, 2017 den Posten des Generalsekretärs der Association des Amis du Festival d’été de Gargilesse zu übernehmen, den sie bis heute innehat.",
                ],
            },
        },
        short: {
            button: {
                en: 'concise',
                fr: 'court',
                de: 'kurz',
            },
            text: {
                en: [],
                fr: [
                    "Louise Augoyard est une harpiste aux multiples facettes, riche d’expériences musicales aux quatre coins du monde (France, Chine, Allemagne). Elle a bénéficié de l’enseignement de professeurs de renommée internationale tels que Godelieve Schrama, Nicolas Tulliez… et se produit aussi bien en soliste qu’en orchestre et musique de chambre. Son répertoire s’étend de la période baroque aux œuvres les plus contemporaines, avec un intérêt particulier pour la musique française du XXème siècle. En tant qu’enseignante, elle cherche à transmettre sa passion pour la harpe à des musiciens de tous âges et de tous niveaux, à éveiller leur curiosité artistique et à leur permettre de développer leur potentiel musical. Secrétaire générale du Festival d’été de Gargilesse, elle participe activement à la programmation culturelle de son pays natal.",
                ],
                de: [
                    "Die Harfenistin Louise Augoyard kann auf vielfältige musikalische Erfahrungen zurückblicken. Engagements führten sie unter anderem nach Frankreich, China und Deutschland. Sie studierte bei renommierten Musikerpersönlichkeiten wie Godelieve Schrama und Nicolas Tulliez und ist heute als Solistin, versierte Kammermusikerin und Orchesterharfenistin aktiv. Ihr Repertoire umfasst Werke aus dem Barock bis hin zu neuesten zeitgenössischen Kompositionen – ihr besonderes Interesse gilt dabei der französischen Musik des 20. Jahrhunderts. Als Lehrerin ist es ihr ein Herzensanliegen, Schüler aller Alters- und Erfahrungsstufen mit ihrer eigenen Begeisterung für die Harfe anzustecken, ihre künstlerische Neugier zu wecken und ihnen dabei zu helfen, ihr musikalisches Potenzial zu entfalten. Als Generalsekretärin des Festival d’été in Gargilesse bringt sie sich aktiv in Entwicklung und Gestaltung des kulturellen Lebens in ihrem Heimatland ein.",
                ],
            },
        },
    }
</script>


<!-- This sets the window title in the tab bar. -->
<svelte:head>
    <title>Louise Augoyard | {CONTENT.title[$state.language]}</title>
    <meta name='description' content='Louise Augoyard studierte Harfe in Paris, Detmold und Suzhou. Sie spielt als Orchesterharfenistin mit renommierten Dirigenten und ist Mitglied des Trios Sophora.'/>
</svelte:head>


<Main>

<img class='pic-mobile' src='images/bio-mobile.jpg' alt='Louise Augoyard sitzt an der Harfe.'>

<div class='title-container'>
    <h1>{CONTENT.title[$state.language]}</h1>
    
    <div class='button-row'>
        <button class={!long_bio ? 'button-active' : 'button-inactive'} on:click={() => { long_bio = false; }}>
            {CONTENT.short.button[$state.language]}
        </button>
        <button class={long_bio ? 'button-active' : 'button-inactive'} on:click={() => { long_bio = true; }}>
            {CONTENT.long.button[$state.language]}
        </button>
    </div>
</div>

<picture>
    <source srcset='images/bio-512.jpg 512w'>
    <source srcset='images/bio-1024.jpg 2x'>
    <img class='pic-right pic-desktop' in:fade src='images/bio-1024.jpg' alt='Louise Augoyard sitzt an der Harfe.'>
</picture>

<!-- For what it's worth, we could do this with a single subscript if we had a string variable that was either 'long'
     or 'short', but then Sapper would just replace the text content of the first <p> instead of generating a new
     element, and so it wouldn't get the transition like the subsequent ones do. -->
{#if long_bio}
    {#each CONTENT.long.text[$state.language] as paragraph, i}
        <p in:fly={{y: -10, duration: 500}}>{paragraph}</p>
    {/each}
{:else}
    {#each CONTENT.short.text[$state.language] as paragraph, i}
        <p in:fly={{y: -10, duration: 500}}>{paragraph}</p>
    {/each}
{/if}

</Main>


<style>
    img.pic-right {
        width: 30%;
        min-width: 22rem;
    }

    .button-row {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>