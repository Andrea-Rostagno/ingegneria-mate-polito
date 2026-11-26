---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [cardinalità delle relazioni, cardinalità delle relazioni binarie, cardinalità minima e massima, uno a uno, uno a molti, molti a molti, partecipazione opzionale, partecipazione obbligatoria, cardinalità di un attributo, attributo multivalore, "(0,N)", "(1,1)"]
tags: [competenza, area/informatica]
---

# Cardinalità nel modello ER

> Coppia (min, max) che dice a quante occorrenze di una relazione può partecipare ogni occorrenza di un'entità, o quanti valori può avere un attributo.

## Definizione / enunciato
Per ogni entità che partecipa a una relazione binaria si specificano il numero **minimo** e **massimo** di occorrenze della relazione a cui può partecipare una sua occorrenza:
- minimo **0** (partecipazione opzionale) o **1** (partecipazione obbligatoria);
- massimo **1** (al più una occorrenza) o **N** (numero arbitrario).

Tipi di corrispondenza secondo le massime: **1 a 1** (professore–università come rettore), **1 a N** (persona–città di residenza), **N a N** (studente–corso per l'esame).

**Cardinalità di un attributo** (di entità o relazione): numero minimo e massimo di valori per occorrenza. Omessa vale $(1,1)$; minima 0 significa che l'attributo ammette il valore nullo; massima N significa **attributo multivalore** (Titolo di studio $(0,N)$ di Persona, Professione $(0,1)$).

## Formule chiave
Notazione: $(\min, \max)$ sul ramo tra entità e relazione. Esempio delle slide (p. 50): Persona $(1,1)$ — Residenza — $(1,N)$ Comune e Persona $(1,1)$ — Nascita — $(0,N)$ Comune; nella ternaria Esame: Studente $(0,N)$, Corso $(0,N)$, Tempo $(1,N)$. Nelle relazioni n-arie le cardinalità minime raramente sono 1 per tutte le entità e le massime sono (praticamente) sempre N.

## Intuizione
La cardinalità si legge dal punto di vista della singola occorrenza: "una persona risiede in esattamente un comune" $(1,1)$; "in un comune risiede almeno una persona" $(1,N)$, mentre in un comune possono essere nate zero o più persone $(0,N)$. È l'informazione che decide la traduzione nel modello relazionale (attributo o tabella separata, NULL ammessi o no).

## Come si usa
Nel caso ASL si discutono le cardinalità di ogni relazione (Lavora in tra Personale e Reparto, Effettuato da tra Esame specialistico e Medico, Prenota, Di servizio in) partendo dalle specifiche: "ogni paziente può effettuare più prenotazioni dello stesso esame in date diverse" spinge verso massime N e verso una rappresentazione del tempo. Un'entità debole partecipa con $(1,1)$ alle relazioni che la identificano.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER-1.pdf` (pp. 32-43, 50, 52; cardinalità di p. 50 lette sull'immagine); `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (pp. 51-54, 63-65, 86-88, 93-96).

## Prerequisiti
- [[Modello Entità-Relazione]]: le cardinalità annotano relazioni e attributi

## Porta a
- [[Identificatore ed entità debole]]: l'entità debole partecipa con (1,1)
- [[Gestione del tempo nello schema ER]]: cardinalità delle relazioni con l'entità Tempo
- [[Traduzione dello schema ER nel modello relazionale]]: le regole dipendono dalle cardinalità

## Collegati
- Nessuno.
