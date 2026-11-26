---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [libreria Streamlit, st.write, st.markdown, widget Streamlit, st.session_state, session state, st.form, st.columns, st.tabs, st.sidebar, st.expander, st.metric, st.dataframe, applicazione multipagina, streamlit run]
tags: [competenza, area/informatica]
---

# Streamlit

> Libreria Python open source per costruire applicazioni web interattive di analisi dati con poche righe di codice, senza competenze di front-end: il corso la usa come interfaccia verso un database MySQL.

## Definizione / enunciato
Si installa con `pip install streamlit` e si lancia con `streamlit run your_script.py` (server sulla porta 8501). **Modello di esecuzione**: ogni volta che qualcosa va aggiornato a schermo, incluse le interazioni dell'utente, Streamlit riesegue **l'intero script dall'alto in basso**; salvando il file l'app si aggiorna con Rerun (o Always rerun).

Struttura del progetto: un file **entrypoint** (pagina principale) e le altre pagine come file `.py` nella sottocartella `pages/`; i nomi dei file diventano i nomi delle pagine, ordinati dal prefisso numerico (non mostrato) o alfabeticamente. `st.set_page_config(...)` dev'essere il primo comando Streamlit, una sola volta. Configurazione in `config.toml` (globale o per progetto) o da riga di comando (`--server.port 80`).

## Formule chiave
Categorie di elementi (argomenti comuni `label`, `label_visibility`, `disabled`, `use_container_width`, `key`, che deve essere unica):
- **testo**: titolo, intestazioni, `st.markdown`, `st.write` (widget universale che rende testo, dataframe, figure, dizionari);
- **input**: `st.button`, `st.checkbox` (True/False), `st.radio`, `st.selectbox`, `st.multiselect`, `st.slider` (valore o range), `st.text_input`, `st.number_input`, `st.date_input`, `st.form` con pulsante Submit;
- **dati**: `st.metric(label, value, delta)`, `st.dataframe`, `st.line_chart`, `st.bar_chart`, `st.map` (colonne lat/lon);
- **altro**: `st.session_state`, messaggi `st.error/warning/info/success`, `st.progress`, `st.spinner`;
- **layout**: `st.sidebar`, `st.columns(spec)`, `st.tabs([...])`, `st.expander(label)`.

## Intuizione
Poiché lo script riparte da capo a ogni interazione, le variabili normali si perdono: il **session state**, simile a un dizionario, conserva valori tra esecuzioni e pagine (va inizializzato prima dell'accesso; ogni widget con una `key` vi entra in automatico).

## Come si usa
Live coding a lezione: dashboard multipagina (Home, Analisi, Aggiungi, Info) sul database MySQL `classicmodels`, eseguito in container Docker con phpMyAdmin; connessione dalla sidebar, metriche e grafici per prodotti, staff e clienti, form con widget per inserire un nuovo prodotto ed eseguire la INSERT. Nello script dell'homework (`HW base di dati/home.py`, `pages/`) le query sullo schema `palestra` alimentano `st.bar_chart`, `st.area_chart`, `st.metric` e `st.selectbox`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/streamlit.pdf` (pp. 10-62; alcuni esempi solo come immagini); `triennale/ANNO 3/base di dati/live_coding.pdf` (pp. 2-18); `triennale/ANNO 3/base di dati/HW base di dati/home.py` (esempio di codice).

## Prerequisiti
- [[Accesso a un DBMS da Python]]: i dati mostrati vengono da interrogazioni SQL
- [[DataFrame di pandas]]: tabelle e grafici partono da DataFrame

## Porta a
- Nessuno.

## Collegati
- [[Linguaggio HTML e CSS]]: markdown e HTML dentro l'app
- [[Git]]: il progetto del live coding è un repository con branch
