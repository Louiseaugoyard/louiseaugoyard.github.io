<script>
    import { fly, fade } from 'svelte/transition';
    import Main from '../../components/Main.svelte';
    import { state } from '../../state.js';
    import { is_valid_email, is_valid_phone_number, has_links } from '../../tools/validate.js';
    import { MAILGUN_API } from './api.js';

    const CONTENT = {
        title: {
            de: 'Kontakt',
            fr: 'Contact',
            en: 'Contact',
        },
        intro: {
            de: 'Wenn Sie Fragen zu Unterricht oder Konzerten haben, oder gern zu mir Kontakt aufnehmen möchten, schreiben Sie mir einfach!',
            fr: 'Pour toute information concernant les cours ou les concerts, ou simplement pour prendre contact avec moi, vous pouvez m’écrire via le formulaire ci-dessous.',
            en: 'For information about concerts or lessons, or just to get in touch, feel free to write a message!',
        },
        'form-body': {
            de: 'Schreiben Sie hier Ihre Nachricht...',
            fr: 'Écrivez ici votre message...',
            en: 'Write your message here...'
        },
        'form-contact': {
            de: 'Email/Telefon',
            fr: 'Email/numéro de téléphone',
            en: 'Email/phone number',
        },
        'error-too-short': {
            de: 'Die Nachricht ist zu kurz',
            fr: 'Le message est trop court.',
            en: 'The message is too short',
        },
        'error-link': {
            de: 'Die Nachricht darf keine Links enthalten.',
            fr: 'Le message ne doit pas contenir de liens internet.',
            en: 'The message can’t contain links.',
        },
        'error-contact': {
            de: 'Bitte geben Sie eine gültige Emailadresse oder Telefonnummer ein.',
            fr: "Merci d'insérer une adresse e-mail ou un numéro de téléphone valide",
            en: 'Please enter a valid email address or phone number.',
        },
        'button-send': {
            de: 'Senden',
            fr: 'Envoyer',
            en: 'Send',
        },
        submitted: {
            de: 'Die Nachricht wird gesendet...',
            fr: "Le message est en cours d'expédition...",
            en: 'Sending message...',
        },
        sent: {
            de: 'Danke, ich habe ihre Nachricht erhalten und werde so bald wie möglich antworten.',
            fr: 'Merci, j’ai reçu votre message et vous contacterai dans les plus brefs délais.',
            en: 'Thank you. I’ve received your message and I will answer as soon as possible.',
        },
        error: {
            de: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder nutzen Sie die Kontaktdaten im Impressum.',
            fr: 'Une erreur est survenue. Merci de bien vouloir réessayer ultérieurement ou utiliser les coordonnées sur la page Mentions légales.',
            en: 'There has been an error. Please try again later or use the contact info on the Imprint page.',
        },
    }
    
    let message = {
        body: "",
        contact: ""
    };

    let message_status = null;
    
    let message_input_started = false;
    let message_error = '';
    $: message_error = validate_message(message.body);
    
    let contact_input_started = false;
    let contact_error = '';
    $: contact_error = validate_contact(message.contact);

    /* Check the message body.
     * Return the empty string if it is okay or an error message.
     */
    const validate_message = (body) => {
        let err = [];
        if (has_links(body)) {
            err.push(CONTENT['error-link'][$state.language]);
        }
//        if (body.split(/\W/).length < 15) {
//            err.push(CONTENT['error-too-short'][$state.language]);
//        }
        return err.join(' ');
    }

    /* Same here. */
    const validate_contact = (contact) => {
        if (!is_valid_email(contact) && !is_valid_phone_number(contact)) {
            return CONTENT['error-contact'][$state.language];
        }
        return '';
    }

    const send_message = () => {
        message_status = 'submitted';
        fetch(MAILGUN_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message),
        }).then(res => {
            if (!res.ok) {
                throw new Error('Something bad happened.');
            } else {
                message_status = 'sent';
            }
        }).catch(err => {
            console.log(err);
            message_status = 'error';
        });
    };

    /* Reposition the form when it gets focus so it is completely visible. */
    const reposition = () => {
        let h = document.documentElement.clientHeight;
        let bb = document.getElementById('contact-form')
                         .getBoundingClientRect();
        let pad = document.documentElement.clientWidth > 440 ? 80 : 15;
        let deltaY;

        if (bb.top < 0) {
            deltaY = bb.top - pad;
        } else if (bb.bottom - h > -14) {
            deltaY = bb.bottom - h + 15;
            if (bb.top < deltaY) {
                deltaY = bb.top - 15;
            }
        }
        
        if (deltaY) {
            window.scrollBy({
                left: 0,
                top: deltaY,
                behavior: 'smooth',
            });
        }
    };
</script>


<!-- This sets the window title in the tab bar. -->
<svelte:head>
    <title>Louise Augoyard | {CONTENT.title[$state.language]}</title>
    <meta name='robots' content='noindex nofollow'/>
</svelte:head>



<Main>
    
<img class='pic-mobile' src='/images/contact-mobile.jpg' alt='Louise Augoyard steht neben ihrer Harfe und lächelt freundlich.'>

<h1>{CONTENT.title[$state.language]}</h1>

<p id='contact-intro'>{CONTENT.intro[$state.language]}</p>
        
<form id='contact-form'>
        {#if !message_status}
            <textarea id='body'
                      name='msg_body'
                      placeholder={CONTENT['form-body'][$state.language]}
                      bind:value={message.body}
                      on:focus={reposition}
                      on:blur={() => { message_input_started = true; }}/>

            {#if message.body && message_error && message_input_started}
                <p transition:fly={{ x:100, duration: 500 }} id='message-error' class='contact-form--error'>{message_error}</p>
            {/if}

            <input id='contact'
                   name='msg_contact'
                   type='text'
                   placeholder={CONTENT['form-contact'][$state.language]}
                   bind:value={message.contact}
                   on:blur={() => { contact_input_started = true; }}/>
                      
            {#if message.contact && contact_error && contact_input_started}
                <p transition:fly={{ x:100, duration: 500 }} id='contact-error' class='contact-form--error'>{contact_error}</p>
            {/if}
   
            <button id='submit' disabled='{message_error || contact_error}' on:click|preventDefault={send_message}>{CONTENT['button-send'][$state.language]}</button>
                    
        {:else if message_status === 'submitted'}
            <p class='contact-feedback' in:fade>{CONTENT.submitted[$state.language]}</p>
        {:else if message_status === 'sent'}
            <p class='contact-feedback' in:fade>{CONTENT.sent[$state.language]}</p>
        {:else if message_status === 'error'}
            <p class='contact-feedback' in:fade>{CONTENT.error[$state.language]}</p>
        {/if}
    </form>
</Main> 
        
<style>
    .contact-form--error {
        background-color: #eeedf1;
        box-shadow: 2px 2px 8px rgba(0,0,0,.1);
        font-size: .8em;
        letter-spacing: .05em;
        padding: 1rem 1.5rem;
        position: absolute;
        width: 15rem;
    }

    #message-error {
        right: -2rem;
        top: 2rem;
    }
    #contact-error {
        bottom: 4rem;
        right: -2rem;
    }

    #contact-intro {
        margin-left: auto;
        margin-right: auto;
        max-width: 40em;
        text-align: center;
    }

    form {
        border-radius: 3px;
        border: 1px solid #eeedf1;
        box-shadow: 2px 2px 6px rgba(0,0,0,.1);
        margin: 4rem auto 0 auto;
        max-width: 45rem;
        min-height: 28rem;
        padding: 1.5rem;
        position: relative; /* establish positioning context for child elements */
        transition: border-color .5s ease;
    }

    form:focus-within {
        border-color: #d4d4d4;
    }


    input,
    textarea {
        background: none;
        border: none;
        box-sizing: border-box;
        font-family:'Courier New', Courier, monospace;
        font-size: .9rem;
        line-height: 1.5em;
        padding: 1rem 1.25rem;
        width: 100%;
    }

    input:focus,
    textarea:focus {
        border: none;
        outline: none;
    }

    input::placeholder,
    textarea::placeholder {
        color: #666;
    }

    #body {
        height: 20rem;
        overflow: auto;
        resize: none;
        width: 100%;
    }

    #contact {
        width: 25rem;
    }

    #submit {
        bottom: 1rem;
        position: absolute;
        right: 1rem;
    }

    #submit:disabled {
        color: #ddd;
    }

    .contact-feedback {
        font-family: 'Cormorant', 'Times New Roman', Times, serif;
        font-size: 1.75em;
        font-style: italic;
        font-weight: 300;
        line-height: 1.3em;
        margin: 5rem auto 0 auto;
        max-width: 25rem;
        text-align: center;
    }


    @media (max-width: 500px) {
        form {
            border-radius: 0;
            border: none;
            box-shadow: none;
            padding: 0 1rem;
            position: static;
            width: 100%;
        }

        form input,
        form textarea {
            border-radius: 3px;
            border: 1px solid #eeedf1;
            box-shadow: 2px 2px 4px rgba(0,0,0,.05);
            padding: .75rem 1rem;
            transition: border-color .5s ease;
            width: 100%;
        }
    
        input:focus,
        textarea:focus {
            border: 1px solid #d4d4d4;
            outline: none;
        }

        #body,
        #contact {
            display: block;
            margin: 1.5rem 0;
            width: 100%;
        }

        #submit {
            display: block;
            margin: 1.5rem 0 0 auto;
            position: static;
        }

        .contact-form--error {
            background-color: #eeedf1;
            box-shadow: 2px 2px 8px rgba(0,0,0,.1);
            display: block;
            font-size: .8em;
            letter-spacing: .05em;
            padding: 1rem 1.5rem;
            position: static;
            width: 100%;
        }
    }
</style>