---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [ORM, mappatura oggetto-relazionale, Flask, Django, Model View Template, MVT, framework web Python, micro-framework]
tags: [competenza, area/informatica]
---

# Object-Relational Mapping

> Tecnica che mappa gli oggetti di un linguaggio di programmazione sulle tabelle di un DBMS relazionale, così l'applicazione lavora con oggetti invece che con SQL scritto a mano.

## Definizione / enunciato
L'**ORM** integra i sistemi RDBMS nel paradigma della programmazione orientata agli oggetti: offre un'astrazione ad alto livello che semplifica lo sviluppo rispetto all'uso diretto di SQL e dà **portabilità** tra un DBMS e un altro, con il **rischio di ridurre le prestazioni**. Compare tra i linguaggi di accesso ai dati insieme a SQL interattivo e linguaggi ospite.

## Formule chiave
Framework backend Python presentati:
- **Flask**: micro-framework, web server locale su `localhost` (porta di default 5000), approccio pythonico e flessibile; l'ORM è gestito da altri pacchetti.
- **Django**: framework di alto livello "con batterie incluse", pattern **MVT**: *Models* (struttura dei dati e interrogazione del database, `models.py`), *Views* (funzioni che ricevono una richiesta HTTP e restituiscono la risposta, `views.py`), *Templates* (layout dei risultati, es. HTML, cartella `/templates`), *URLs* (mappatura delle richieste sulla view giusta, `urls.py`); ORM, autenticazione e interfaccia admin inclusi.

## Intuizione
L'ORM sposta il lavoro dal programmatore al framework: meno SQL da scrivere e codice indipendente dal DBMS, ma meno controllo sulle query effettivamente eseguite, e quindi sulle prestazioni.

## Come si usa
Nel corso il codice di laboratorio non usa un ORM: esegue SQL esplicito con SQLAlchemy (slide) o `mysql.connector` (script dell'homework) e mostra i risultati con Streamlit. L'ORM resta l'alternativa per applicazioni più grandi costruite con Django.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/applicazioni_web.pdf` (pp. 22-25; tabella di confronto dei framework e codice Flask solo come immagini); `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (p. 31).

## Prerequisiti
- [[Linguaggio SQL]]: l'ORM genera SQL al posto del programmatore

## Porta a
- Nessuno.

## Collegati
- [[Accesso a un DBMS da Python]]: alternativa con SQL esplicito
- [[Linguaggio HTML e CSS]]: i template generano le pagine HTML
