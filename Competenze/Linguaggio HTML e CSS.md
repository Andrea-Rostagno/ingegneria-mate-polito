---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [HTML, HyperText Markup Language, CSS, fogli di stile, tag HTML, attributi HTML, Bootstrap, frontend, design responsivo, Content Management System, CMS]
tags: [competenza, area/informatica]
---

# Linguaggio HTML e CSS

> HTML descrive struttura e contenuto di una pagina web con tag; i fogli di stile CSS ne descrivono la presentazione, separata dal contenuto.

## Definizione / enunciato
**HTML** (HyperText Markup Language), standard de facto, fornisce una descrizione strutturata di un documento ipertestuale indipendente dai programmi; si usa per struttura, contenuto e layout delle pagine. È un linguaggio di **markup**, non di programmazione. Il testo si annota con **tag** tra `<` e `>`, di solito a coppie (`<h1>Titolo</h1>`); gli **attributi** caratterizzano meglio un tag assegnando un valore a una variabile.

| tag | uso |
|---|---|
| `<head>` | informazioni sul documento |
| `<body>` | contenuto della pagina |
| `<h1>`, `<h2>`, ... | titoli di sezione |
| `<p>` | paragrafo |
| `<table>` | tabella |

HTML crea soprattutto pagine **statiche** (immagini, audio, video, tabelle, form, collegamenti); le pagine **dinamiche** usano linguaggi come JavaScript, oppure sono generate lato server e restituite statiche al client.

## Formule chiave
**Fogli di stile** (introdotti con HTML 4): separano presentazione e contenuto. Tre posizioni: **esterni** (file separati), **interni** (tag `<style>` nel documento), **in-line** (attributo `style` di un tag). Ordine di applicazione: esterno, interno, in-line; in caso di conflitto vince la regola **più interna**.

## Intuizione
Contenuto e aspetto si cambiano indipendentemente: lo stesso HTML con un altro CSS cambia volto. **Bootstrap** è un framework front-end open source con classi CSS e funzioni JavaScript pronte (griglia, tabelle, form) e segue il design responsivo.

## Come si usa
Per siti senza codice esistono i CMS (WordPress, Wix, Drupal); per applicazioni si usano framework frontend (React, Angular, Vue.js, Flutter) e backend. In Streamlit si scrive markdown e, abilitandolo esplicitamente (`unsafe_allow_html`), anche HTML, disattivato per default per evitare codice non sicuro.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/applicazioni_web.pdf` (pp. 12-21; esempi di codice solo come immagini); `triennale/ANNO 3/base di dati/streamlit.pdf` (pp. 25-28).

## Prerequisiti
- [[Protocollo HTTP]]: le pagine sono le risorse restituite dal server

## Porta a
- Nessuno.

## Collegati
- [[Streamlit]]: pagine web generate da Python senza scrivere HTML
- [[Object-Relational Mapping]]: i framework web generano le pagine da template
