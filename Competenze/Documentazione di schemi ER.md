---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [dizionario dei dati ER, dizionario delle entità, dizionario delle relazioni, regole di derivazione dei dati, vincoli d'integrità sui dati, business rules, documentazione dello schema concettuale]
tags: [competenza, area/informatica]
---

# Documentazione di schemi ER

> Lo schema ER si accompagna con un dizionario dei dati, un elenco di vincoli di integrità e un elenco di regole di derivazione, scritti in linguaggio naturale.

## Definizione / enunciato
Tre strumenti:
- **Dizionario dei dati**: arricchisce lo schema con descrizioni in linguaggio naturale di entità (descrizione, attributi, identificatore) e relazioni (descrizione, entità coinvolte con cardinalità, attributi).
- **Vincoli d'integrità sui dati**: non sempre si possono indicare esplicitamente nello schema; si descrivono in linguaggio naturale.
- **Regole di derivazione**: esplicitano che un concetto dello schema si ottiene da altri, per inferenza o calcolo aritmetico.

## Formule chiave
Esempio di tabella delle entità: Studente — "Studente dell'università" — Matricola, Cognome, Nome, Crediti acquisiti, Media voti — identificatore Matricola. Tabella delle relazioni: Esame — "Associa uno studente agli esami che ha sostenuto e memorizza il voto" — Studente $(0,N)$, Corso $(0,N)$, Tempo $(1,N)$ — Voto.

## Intuizione
Il diagramma dice la struttura; la documentazione dice il significato e le regole che il diagramma non sa esprimere. Le regole di derivazione individuano i dati ridondanti, che la progettazione logica deciderà se tenere.

## Come si usa
Esempi delle slide:
- **RV1** il voto di un esame può assumere solo valori tra 0 e 30; **RV2** uno studente non può superare due volte con esito positivo lo stesso esame; **RV3** uno studente non può sostenere più di tre volte l'esame dello stesso corso nello stesso anno accademico.
- **RD1** i crediti acquisiti si ottengono sommando i crediti dei corsi superati; **RD2** la media voti è la media dei voti degli esami superati.

Nell'analisi delle ridondanze l'attributo Media_voti è ridondante: utile per le interrogazioni sulla media, ma se conservato va segnalato nello schema.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER-1.pdf` (pp. 74-81); `triennale/ANNO 3/base di dati/Progettazione_ER_ristrutturazione.pdf` (p. 43).

## Prerequisiti
- [[Modello Entità-Relazione]]: documenta uno schema ER

## Porta a
- Nessuno.

## Collegati
- [[Vincoli di integrità]]: i vincoli descritti diventano vincoli dello schema logico o trigger
- [[Ristrutturazione dello schema ER]]: le regole di derivazione guidano l'analisi delle ridondanze
