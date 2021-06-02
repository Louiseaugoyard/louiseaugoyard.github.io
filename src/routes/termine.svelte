<script>
    import { fade, fly } from 'svelte/transition';
    import Main from '../components/Main.svelte';
    import { state } from './../state.js';

    const CONTENT = {
        title: {
            de: "Termine",
            fr: "Agenda",
            en: "Events"
        },
        pastEventsHeading: {
            de: "Vergangene Termine",
            fr: "Représentations passées",
            en: "Past Events"
        },
        intro: {
            de: "Hier finden Sie meine geplanten Konzerte und Auftritte in der nächsten Zeit. Wenn Sie Fragen dazu haben, wenden Sie sich gerne über das <a href='/kontakt'>Kontaktformular</a> an mich.",
            fr: "Vous trouverez sur cette page les dates des futures représentations. Pour toute demande d’information, merci de m’écrire via la page <a href='/kontakt'>Contact</a>.",
        },
        events: [
            // Achtung: das 2. Argument zu `new Date()` ist Monat - 1, also Januar = 0 etc.
            {
                dates: [
                    new Date(2021,8,19,19,30),
                ],
                title: "Richard Strauss - Eine Alpensinfonie",
                location: "Bühnenhaus Kevelear",
                project: "orchester",
                description: {
                    de: "Landesbläserphilharmonie Nordrhein-Westfalen",
                    fr: "Landesbläserphilharmonie Nordrhein-Westfalen"
                }
            },
            {
                dates: [
                    new Date(2021,8,18,17,0),
                ],
                title: "Richard Strauss - Eine Alpensinfonie",
                location: "Marien-Gymnasium, Essen",
                project: "orchester",
                description: {
                    de: "Landesbläserphilharmonie Nordrhein-Westfalen",
                    fr: "Landesbläserphilharmonie Nordrhein-Westfalen"
                }
            },
            {
                dates: [
                    new Date(2021,6,18,18,0),
                ],
                title: "De Musica",
                location: "Eglise Notre-Dame de l'Assomption, Domme (France)",
                project: "de-musica",
                description: {
                    de: "Konzert-Lektüre, Musik und Philosophie. <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",
                    fr: "Concert-lecture, musique et philosophie<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."
                }
            },
            {
                dates: [
                    new Date(2021,6,13,18,0),
                ],
                title: "De Musica",
                location: "Cour d'honneur de la mairie, Brive-la-Gaillarde (France)",
                project: "de-musica",
                description: {
                    de: "Konzert-Lektüre, Musik und Philosophie. <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",
                    fr: "Concert-lecture, musique et philosophie<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."
                }
            },
            {
                dates: [
                    new Date(2021,6,1,15,0),
                ],
                title: "Ein Lied für die Nachtigall",
                project: "nachtigall",
                location: "Frauenhaus, Bochum",
                description: {
                    de: "Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",
                    fr: "Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"
                }
            },
            {
                dates: [
                    new Date(2021,5,24,9,30),
                    new Date(2021,5,25,9,30),
                ],
                title: "Ein Lied für die Nachtigall",
                project: "nachtigall",
                location: "Musik-Kindergarten Gedulderweg, Sprockhövel",
                description: {
                    de: "Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Private Veranstaltung",
                    fr: "Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a><br>Manifestation privée<br>."
                }
            },
            {
                dates: [
                    new Date(2021,5,18,9,30),
                ],
                title: "Ein Lied für die Nachtigall",
                project: "nachtigall",
                location: "Evangelische Kita Eislebener Str., Bochum",
                description: {
                    de: "Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",
                    fr: "Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"
                }
            },
            {
                dates: [
                    new Date(2021,5,8,15,45),
                ],
                title: "Eindrücke der Natur",
                location: "Belia Seniorenresidenz Wattenscheid",
                description: {
                    de: "Harfe solo, Werke von Bach, Beethoven, Fauré...",
                    fr: "Harpe seule, œuvres de Bach, Beethoven, Fauré..."
                }
            },
            {
                dates: [
                    new Date(2021,5,1,9,0),
                ],
                title: "Ein Lied für die Nachtigall",
                project: "nachtigall",
                location: "Musik-KiTa, Detmold",
                description: {
                    de: "Kinderkonzert mit Harfe und Live-Malerei.<br><a href='/projekte/nachtigall'>Weitere Informationen</a> <br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur.</a><br>Private Veranstaltung",
                    fr: "Concert pour enfants avec harpe et peinture en direct<br><a href='/projekte/nachtigall'>Plus d'informations</a><br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.<br>Manifestation privée"
                }
            },
            {
                dates: [
                    new Date(2021,4,30,14),
                ],
                title: "10+1 Jahre Autobahnkirche RUHR - Dankstelle an der A40",
                location: "Autobahnkirche RUHR",
                description: {
                    de: "Musikalische Gestaltung des ökumenischen Gottesdienstes",
                    fr: "Accompagnement musical de la célébration œcuménique"
                }
            },
            {
                dates: [
                    new Date(2021,3,21,10,30),
                ],
                title: "Harfenklänge zur Osterzeit: Eine musikalische Reise durch Europa",
                location: "Propsteikirche St. Peter und Paul, Bochum",
                description: {
                    de: "Werke von Bach, Glinka, Berio u.a.<br>Liturgische Leitung: Diakon Winfried Rottenecker.<br>Gefördert durch <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>.",
                    fr: "Harpe solo avec des oeuvres de Bach, Glinka, Berio... <br>Direction liturgique: Diakon Winfried Rottenecker.<br>Soutenu par le programme <a href='https://neustartkultur.de/' target='_blank'>Neustart Kultur</a>."
                }
            },
            {
                dates: [
                    new Date(2021,3,3,20),
                ],
                title: "Radiogottesdienst aus der Propsteikirche St. Peter und Paul, Bochum",
                location: "Live-Übertragung bei Radio Bochum und auf <a href='https://www.youtube.com/watch?v=_5IlHF71XTE' target='_blank'>YouTube</a>.",
                description: {
                    de: "Musikalische Gestaltung des Gottesdienstes mit Gesang, Flöte, Harfe und Orgel",
                    fr: "Chant, flûte et harpe"
                }
            }
        ],
    };

    const projectLinks = {
        nachtigall: "/projekte/nachtigall",
    };

    const projectImages = {
        "nachtigall": "/images/lerche-128.jpg",
        "de-musica": "/images/socrates-128.jpg",
        "kirche": "/images/kirche-128.jpg",
        "altenheim": "/images/baum-128.jpg",
    };

    const months = {
        de: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
        fr: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
        en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
    };

    const makeDateString = (date, lang="de") => {
        let s = String(date.getDate());
        if (lang == "de") {
            s += ".";
        }
        s += ` ${months[lang][date.getMonth()]} ${date.getFullYear()} ${date.getHours()}`;
        if (date.getMinutes()) {
            s += (lang == "fr" ? "h" : ":") + date.getMinutes();
        } else {
            if (lang == "fr") s += "h";
        }
        if (lang == "de") {
            s += " Uhr";
        }
        return s;
    };

    const isFuture = (date) => {
        return date.getTime() > new Date().getTime();
    }

    let futureEvents = [];
    let pastEvents = [];
    for (let e of CONTENT.events) {
        let isFutureEvent = false;
        for (const date of e.dates) {
            if (isFuture(date)) {
                isFutureEvent = true;
                break;
            }
        }
        if (isFutureEvent)      futureEvents.push(e);
        else                    pastEvents.push(e);
    }
    futureEvents.sort((e1,e2) => e1.dates[0].getTime() - e2.dates[0].getTime());
    pastEvents.sort((e1,e2) => e2.dates[0].getTime() - e1.dates[0].getTime());

</script>

<Main>
    <img class="pic-mobile" src="/images/events-mobile.jpg" alt="Louise Augoyard steht neben ihrer Harfe.">

    <h1>{CONTENT.title[$state.language]}</h1>

    <p id="events-intro">{@html CONTENT.intro[$state.language]}</p>
    
    <div id="events-container">
            {#if futureEvents.length > 0}
            <ul class="event-list">
                {#each futureEvents as entry, i}
                    <li class={`event-list--item`}>
                        <div class="event-list--item--text">
                            <h2 class='event-list--title'>{entry.title}</h2>
                            <p class='event-list--time-location'>{#each entry.dates as date, j}{makeDateString(date, $state.language)}, {/each}{@html entry.location}</p>
                            <p class='event-list--description'>{@html entry.description[$state.language]}</p>
                        </div>
                        {#if entry.project !== undefined && projectImages[entry.project] !== undefined}
                            <a class="project-icon" href={projectLinks[entry.project]}>
                                <img src={projectImages[entry.project]} width="128px" height="128px" alt={$state.language === "de" ? "Projektinfo" : "Info sur le projet"}/>
                            </a>
                        {/if}
                    </li>
                {/each}
            </ul>
            {/if}

            {#if pastEvents.length > 0}
                <h2 class="event-list--section-heading">{CONTENT.pastEventsHeading[$state.language]}</h2>
                <ul class="event-list past-events">
                    {#each pastEvents as entry, i}
                        <li class='event-list--item'>
                            <div class="event-list--item--text">
                                <h2 class='event-list--title'>{entry.title}</h2>
                                <p class='event-list--time-location'>{#each entry.dates as date, j}{makeDateString(date, $state.language)}, {/each}{@html entry.location}</p>
                                <p class='event-list--description'>{@html entry.description[$state.language]}</p>
                            </div>
                            {#if entry.project !== undefined && projectImages[entry.project] !== undefined}
                                <a class="project-icon" href={projectLinks[entry.project]}>
                                    <img src={projectImages[entry.project]} width="128px" height="128px" alt={$state.language === "de" ? "Projektinfo" : "Info sur le projet"}/>
                                </a>
                            {/if}
                        </li>
                    {/each}            
                </ul>
            {/if}

    </div>

</Main>

<style>
    #events-intro {
        margin: 0 auto;
        max-width: 40em;
        text-align: center;
    }

    #events-container {
        margin-top: 4rem;
        flex-direction: column;
    }

    .event-list--section-heading {
        margin-top: 0;
        margin-bottom: 1em;
        text-align: center;
        font-size: 2em;
        font-weight: 300;
        font-style: italic;
    }

    .event-list {
        width: 100%;
    }

    .event-list + .event-list--section-heading {
        margin-top: 2em;
    }

    .event-list--title {
        margin: 0 0 .3em 0;
        font-size: 1.2em;
        line-height: 1.2em;
        font-family: "Open Sans";
        font-weight: 600;
    }

    .event-list--time-location {
        line-height: 1.3em;
        font-size: .9em;
        text-transform: uppercase;
        letter-spacing: .075em;
    }

    .event-list--description {
        line-height: 1.35em;
    }

    .event-list--item {
        display: flex;
        flex-direction: row;
        position: relative;
        width: 100%;
        max-width: 40em;
        margin: 0 auto;
        background-color: white;
        padding: 2em 1.5em;
        border-radius: 3px;
        border: 1px solid #eeedf1;
        box-shadow: 2px 2px 4px rgba(0,0,0,.05);
    }

    .event-list--item--text {
        flex: 1 1;
    }

    .project-icon {
        display: block;
        position: relative;
        flex: 0 1 128px;
    }

    .project-icon img {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .past-events .event-list--item {
        opacity: 75%;
        transition: opacity 1s ease;
    }

    .past-events .event-list--item:hover {
        opacity: 100%;
    }

    .event-list--item + .event-list--item {
        margin-top: 1rem;
    }

    @media (max-width: 440px) {
        .project-icon {
            display: none;
        }
    }
</style>