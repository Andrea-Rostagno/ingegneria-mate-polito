---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [schema ER ristrutturato, analisi delle ridondanze, eliminazione degli attributi composti, eliminazione degli attributi multivalore, partizionamento di concetti, partizionamento di entità, scelta degli identificatori primari, attributi derivati]
tags: [competenza, area/informatica]
---

# Ristrutturazione dello schema ER

> Primo passo della progettazione logica: si semplifica lo schema ER eliminando i costrutti che il modello relazionale non rappresenta e lo si ottimizza per le operazioni.

## Definizione / enunciato
Progettazione logica: schema ER → **ristrutturazione** → schema ER ristrutturato → **traduzione** → schema logico relazionale. Lo schema ristrutturato tiene conto di aspetti realizzativi, quindi non è più uno schema concettuale. Obiettivi: eliminare i costrutti senza rappresentazione diretta nel modello relazionale; aumentare l'efficienza degli accessi.

Attività:
- **attributi composti**: si rappresentano i componenti separatamente (se servono accessi separati) oppure con un unico attributo concatenato (se basta l'informazione complessiva);
- **attributi multivalore**: si sostituiscono con una nuova entità legata all'entità iniziale, attenti alla cardinalità della nuova relazione;
- **generalizzazioni**: sostituite da entità e relazioni;
- **analisi delle ridondanze**: informazioni significative ma derivabili; si decide se conservarle;
- **partizionamento** di entità o relazioni: separa concetti distinti o attributi usati da operazioni diverse, per efficienza;
- **scelta degli identificatori primari**, necessaria per la chiave primaria.

## Formule chiave
Attributo multivalore Titolo di studio di Persona: con informazione **condivisa** (lo stesso titolo è di più persone) la nuova relazione Ha ha cardinalità $(1,N)$–$(1,N)$; con informazione **univoca** (un numero di telefono è di una sola persona) $(1,N)$–$(1,1)$.

## Intuizione
Una ridondanza velocizza le interrogazioni ma complica e rallenta gli aggiornamenti e occupa spazio: si tiene solo se l'operazione che la usa è frequente, e va dichiarata nello schema. Un buon identificatore primario non è nullo, ha pochi attributi (meglio uno), è possibilmente interno ed è usato da molte operazioni; altrimenti si introduce un codice.

## Come si usa
Esempio logico ASL svolto a lezione: si elimina l'attributo derivato Età (derivabile dalla data di nascita); si eliminano le generalizzazioni su Esame e su Personale per accorpamento nel padre; l'attributo multivalore Specializzazione del medico diventa un'entità con la relazione Ha, poi tabella `HaSpecializzazione(CodFisc, Specializzazione)`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER_ristrutturazione.pdf` (pp. 4-20, 42-49; esempi grafici solo come immagini); `triennale/ANNO 3/base di dati/Esempio_progettazione_logica.pdf` (pp. 6-23).

## Prerequisiti
- [[Fasi della progettazione di una base di dati]]: primo passo della progettazione logica
- [[Progettazione concettuale]]: lo schema ER da ristrutturare
- [[Identificatore ed entità debole]]: scelta dell'identificatore primario

## Porta a
- [[Eliminazione delle generalizzazioni]]: attività principale della ristrutturazione
- [[Traduzione dello schema ER nel modello relazionale]]: si traduce lo schema ristrutturato

## Collegati
- [[Documentazione di schemi ER]]: le regole di derivazione indicano le ridondanze
