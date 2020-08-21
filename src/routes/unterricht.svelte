<script>
    import { fly } from 'svelte/transition';
    import { state } from './../state.js';
    import Main from '../components/Main.svelte';

    const CONTENT = {
        title: {
            de: 'Unterricht',
            fr: 'Enseignement',
            en: 'Lessons',
        },
        quote: {
            de: 'Musik gibt dem Herzen Seele, verleiht den Gedanken Flügel und lässt die Phantasie erblühen. – Platon',
            fr: 'La musique donne une âme à nos cœurs, des ailes à la pensée, un essor à l’imagination. – Platon',
            en: '???',
        },
        text: {
            de: [
                'Ein Instrument zu spielen ist die beste Möglichkeit, unser künstlerisches Potenzial und unsere Kreativität zu entfalten, und unsere Gefühle und den Reichtum unserer Vorstellungskraft auszudrücken. Mich hat das Harfenspiel mit leidenschaftlichen Künstlern zusammengebracht, es hat mir ermöglicht, fremde Kulturen zu erkunden, und intensive Erfahrungen mit meinem Publikum, meinen Schülern und meinen musikalischen Partnern zu teilen!',
                'Es ist nie zu früh oder zu spät, ein Instrument zu lernen! Unsere Arbeitsmethoden und Ziele sind sind immer individuell auf die Bedürfnisse und Wünsche des Schülers abgestimmt. Ich kann Ihnen beibringen, Noten zu lesen, eine solide Spieltechnik zu erlernen und Ihre musikalische Kreativität zu verfeinern. Eine gesunde Haltung am Instrument wird Ihnen erlauben, mit Leichtigkeit zu spielen und ihren Körper in dieser anspruchsvollen Aktivität respektvoll und bewusst einzusetzen.',
                'Wenn Sie das wünschen, können wir gemeinsam die Grundlagen der Harmonielehre erarbeiten und eine Basis fürs Improvisieren legen. Gemeinsam werden wir das Repertoire suchen, das Ihnen am meisten Freude bereitet, und Ihre eigenen Ziele für den Unterricht definieren. Dann können wir gemeinsam effiziente Übemethoden entwickeln, auf Basis derer sich eine langfristige kreative und bereichernde Beziehung mit dem Instrument entwickeln kann. Natürlich kann ich Sie auch bei der Wahl und dem Kauf eines Instruments beraten, und Ihnen helfen, wann immer Sie etwa neue Seiten benötigen oder Noten kaufen wollen.',
                'Ich unterrichte in Bochum. Bitte zögern Sie nicht, <a href="/kontakt">mich anzusprechen</a>, wenn Sie weitere Fragen haben!',
            ],
            fr: [
                'Jouer d’un instrument de musique est l’occasion privilégiée de développer son potentiel artistique, d’épanouir sa créativité, de se connecter à ses sentiments et à son imagination… La pratique de la harpe m’a amenée à rencontrer des artistes passionnés, à découvrir de nouvelles cultures et à vivre d’intenses moments de partage avec mon public, mes élèves et mes partenaires de jeu. ',
                'Il n’est jamais ni trop tôt ni trop tard pour s’initier à la pratique d’un instrument ! Les méthodes de travail et les objectifs seront définis en fonction des besoins et des désirs de chacun. Je peux vous apprendre à lire une partition, à construire une technique solide et à affiner votre créativité musicale. Une bonne posture à l’instrument vous permettra de jouer avec aisance et dans le respect de votre corps.',
                'Selon vos souhaits, vous pouvez vous familiariser avec les principes harmoniques élémentaires et acquérir des bases d’improvisation. Ensemble, nous pouvons chercher le répertoire qui vous procure le plus de plaisir, définir vos objectifs d’apprentissage et réfléchir à une organisation de travail aussi efficace que satisfaisante. Je suis naturellement disposée à vous conseiller dans vos recherches pour l’acquisition d’un instrument, l’achat de partitions, de cordes de harpe...',
                'Lieu: Bochum. Pour de plus amples renseignements, merci de me <a href="/kontakt">contacter via la page contact</a>',
            ],
            en: [
                '???',
            ],
        },
    };
</script>

<!-- This sets the window title in the tab bar. -->
<svelte:head>
	<title>Louise Augoyard | {CONTENT.title[$state.language]}</title>
</svelte:head>

<Main>

    <img class="pic-mobile" src="/images/lessons-mobile.jpg" alt="Louise Augoyard">

    <h1>{CONTENT.title[$state.language]}</h1>
    <blockquote>{CONTENT.quote[$state.language]}</blockquote>

    <picture>
        <source srcset="/images/lessons-512.jpg 512w">
        <source srcset="/images/lessons-1024.jpg 2x">
        <img src="/images/lessons-1024.jpg" class="pic-right" alt="Louise Augoyard">
    </picture>

    {#each CONTENT.text[$state.language] as paragraph,i}
        <p>{@html paragraph}</p>
    {/each}

</Main>


<style>
    img.pic-right {
        width: 30%;
        min-width: 20rem;
    }

    h1 {
        margin-bottom: 1.5rem;
    }

    blockquote {
        text-align: center;
        line-height: 1.3em;
        font-family: "Cormorant";
        font-weight: 300;
        font-style: italic;
        font-size: 1.75em;
        margin: 1rem auto 4rem auto;
        max-width: 35rem;
    }
</style>