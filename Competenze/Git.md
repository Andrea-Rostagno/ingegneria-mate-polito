---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico, Base di dati]
livello: [triennale]
aliases: [version control, controllo di versione, git clone, git commit, git push, git pull, branch, pull request, conflitti di merge, GitHub, git checkout, git merge]
tags: [competenza, area/informatica]
---

# Git

> Sistema di controllo di versione: tiene la storia dei file di un progetto in un repository e permette a più persone di lavorare in parallelo su copie locali sincronizzate con un server remoto.

## Definizione / enunciato
Un **repository** è la cartella del progetto con la sua storia. Si lavora su una copia locale e si pubblicano le modifiche sul server remoto (nel corso GitHub). Le modifiche si registrano con un **commit**, accompagnato da un commento che descrive le azioni. Un **branch** è una linea di sviluppo separata; una **pull request** (su GitHub) integra il codice di un branch nel ramo principale (`main` o `master`).

## Formule chiave
Flusso base (parte 1):
```text
git clone <link>          # scarica il repository
git status                # stato del repository (da usare sempre)
git add <new_file>        # aggiunge un nuovo file;  git add -u  per i file modificati
git commit -m "<comment>" # conferma le modifiche
git push                  # pubblica sul server
git pull                  # aggiorna il repository locale
git restore               # annulla le azioni di add
```
Branch (parte 2): si crea il branch su GitHub, poi `git pull` e `git checkout <branch>`; finita la pull request: `git checkout main`, `git pull`, `git fetch --prune`, `git branch -D <branch>`.

## Intuizione
Ogni membro del gruppo lavora sul proprio branch senza disturbare gli altri; il ramo principale riceve solo codice completo, tramite pull request. I **conflitti** nascono quando si modifica in parallelo lo stesso file: git li segnala con i marcatori `<<<`, `===`, `>>>`, si sceglie la parte di codice da tenere e poi si fa commit e push ("DON'T PANIC").

## Come si usa
Nel corso serve per scrivere codice in gruppo: la scheda chiede di saper "scrivere un codice complesso individuale e di gruppo" e "collaborare in un team".

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): due dispense di esercitazione (1/3/2024 e 15/4/2024); la scheda lo colloca in "Introduzione al Version Control, Introduzione a Git". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/git.pdf` (p. 1-2); `triennale/ANNO 3/Programmazione e calcolo scientifico/Git_Parte2.pdf` (p. 1-2).
- **Base di dati** (triennale): strumento del live coding Streamlit. Git come sistema di controllo di versione distribuito, GitHub come piattaforma dei repository; in breve commit (nuova versione registrata nella cronologia), pull e push (sincronizzazione con il remoto), branch (ramo separato) e merge (combinazione di un branch in un altro). Il repository del tutorial ha tre branch (`base`, `live_coding`, `live_coding_complete`) e si cambia con `git checkout branch_name`; il database gira in container Docker (`docker-compose up -d`). Fonti: `triennale/ANNO 3/base di dati/live_coding.pdf` (pp. 4-5, 9, 11).

## Prerequisiti
- Nessuno nel corso.

## Porta a
- Nessuno nel corso.

## Collegati
- [[Compilazione e interpretazione]]: nel repository si versionano i file sorgente da compilare
- [[Raffinamenti successivi]]: ogni funzionalità si sviluppa su un branch e si integra per passi
- [[Streamlit]]: il progetto del live coding è distribuito come repository con branch
