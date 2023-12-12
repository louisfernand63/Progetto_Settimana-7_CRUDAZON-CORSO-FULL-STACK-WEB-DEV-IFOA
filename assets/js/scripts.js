/*
 Stai creando la parte front-end di uno shop online. In particolare sarai responsabile della creazione di un back-office, dove gli amministratori possono aggiungere e modificare i prodotti.
L’obiettivo di oggi è connettere un’interfaccia statica alle API per poter ricevere prodotti, crearne di nuovi, modificarli una volta creati e cancellarli all’occorrenza.
Per creare nuovi prodotti dovrai partire da questo modello come riferimento, e formarlo con alcune delle proprietà richieste per poi inviarlo come payload della chiamata POST.
OGNI CHIAMATA DOVRÀ ESSERE AUTENTICATA! L’autenticazione di queste API è una “Token Based Authentication” per rendere privato l’accesso ai suoi contenuti. Senza essere autenticato non potrai ottenere i dati di cui hai bisogno.

OGNI CHIAMATA DOVRÀ ESSERE AUTENTICATA! L’autenticazione di queste API è una “Token Based Authentication” per rendere privato l’accesso ai suoi contenuti. Senza essere autenticato non potrai ottenere i dati di cui hai bisogno.

Il token dovrà venire utilizzato come "authorization" header.

Obiettivi generali:
Avere una pagina back-office, in cui si potranno inserire i prodotti specificando i parametri obbligatori e facoltativi.
Una homepage, dove l’utente possa vedere i prodotti disponibili
Una pagina di dettaglio in cui visualizzare tutti i dettagli del prodotto.
Task:
Nella pagina di back-office: usa POST su /product con un payload per creare una nuova risorsa.
Aggiungi un bottone per la funzionalità di modifica di un prodotto già creato in precedenza (usa una PUT su /product/[PRODUCT_ID]).
Aggiungi un bottone per la cancellazione di uno specifico prodotto già esistente (usa DELETE su /product/[PRODUCT_ID]).
I tasti “modifica” e “cancella”  dovranno essere visibili SOLO se si è in modalità di modifica della risorsa.
Aggiungi una validazione di base per la creazione/modifica del prodotto nel form.
Aggiungi un bottone “Reset” per resettare il form.
Nella Homepage: premendo un bottone “modifica” su un prodotto si dovrà poterlo modificare.
Nella pagina Dettaglio: A questa pagina ci si arriverà cliccando un bottone “Scopri di più” sulla card in homepage.
EXTRAS:
In back-office: I bottoni “reset” e “delete” dovranno chiedere conferma prima di procedere con l’operazione.
In homepage: aggiungi un indicatore di caricamento affianco al titolo principale della pagina durante il caricamento delle risorse.
Crea un sistema di gestione degli errori. Mostra all’utente un messaggio di errore specifico per le varie tipologie di problema, quando qualcosa va storto, attraverso l’utilizzo di componenti di Bootstrap appropriati.
*/

// CHIAVE DELL'API:
const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDEyM2MwNTgzNTAwMTg1MjMxOTYiLCJpYXQiOjE3MDIzNzk4MTEsImV4cCI6MTcwMzU4OTQxMX0.hhj8A5eygBpqgsddGE8HzNEHBuLLSCdLt8i4BHEFA8g';

// INIZIO ESERCIZIO:
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const resetBtn = document.querySelector('[data-reset]');
    const deleteBtn = document.querySelector('[data-delete]');
    const submitBtn = document.querySelector('[data-submit]');
    const formTitle = document.querySelector('[data-title]');
    const formError = document.querySelector('[data-error]');
    const formSuccess = document.querySelector('[data-success]');
    const formResults = document.querySelector('[data-results]');
    const formResultsTitle = document.querySelector('[data-results-title]');
    const formResultsList = document.querySelector('[data-results-list]');
    const formResultsListItem = document.querySelector('[data-results-list-item]');
    const formResultsListItemTitle = document.querySelector('[data-results-list-item-title]');
    const formResultsListItemBody = document.querySelector('[data-results-list-item-body]');

    // FUNZIONE DI AGGIUNTA:
    submitBtn.addEventListener('click', () => {
        const url = `${baseUrl}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDEyM2MwNTgzNTAwMTg1MjMxOTYiLCJpYXQiOjE3MDIzNzk4MTEsImV4cCI6MTcwMzU4OTQxMX0.hhj8A5eygBpqgsddGE8HzNEHBuLLSCdLt8i4BHEFA8g",
            },
            body: JSON.stringify({
                name: formName.value,
                description: formDescription.value,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    formError.innerHTML = data.error;
                } else {
                    formSuccess.innerHTML = data.success;
                    form.reset();
                }
            });
    });

    // FUNZIONE DI MODIFICA
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = `${baseUrl}/${formId.value}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDEyM2MwNTgzNTAwMTg1MjMxOTYiLCJpYXQiOjE3MDIzNzk4MTEsImV4cCI6MTcwMzU4OTQxMX0.hhj8A5eygBpqgsddGE8HzNEHBuLLSCdLt8i4BHEFA8g",
            },
            body: JSON.stringify({
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    formError.innerHTML = data.error;
                } else {
                    formSuccess.innerHTML = data.success;
                    form.reset();
                }
            });
    });

    // FUNZIONE DI ELIMINAZIONE:
    deleteBtn.addEventListener('click', () => {
        const id = deleteBtn.dataset.delete;
        const url = `${baseUrl}/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDEyM2MwNTgzNTAwMTg1MjMxOTYiLCJpYXQiOjE3MDIzNzk4MTEsImV4cCI6MTcwMzU4OTQxMX0.hhj8A5eygBpqgsddGE8HzNEHBuLLSCdLt8i4BHEFA8g",
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    formError.innerHTML = data.error;
                } else {
                    formSuccess.innerHTML = data.success;
                    form.reset();
                }
            });
    });

    // FUNZIONE DI RESTAURO:
    resetBtn.addEventListener('click', () => {
        form.reset();
        formTitle.innerHTML = 'Nuova ricerca';
        formError.innerHTML = '';
        formSuccess.innerHTML = '';
        formResults.classList.add('hidden');
    });



    /*
     fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDEyM2MwNTgzNTAwMTg1MjMxOTYiLCJpYXQiOjE3MDIzNzk4MTEsImV4cCI6MTcwMzU4OTQxMX0.hhj8A5eygBpqgsddGE8HzNEHBuLLSCdLt8i4BHEFA8g"
    }
    })
    */
}
)