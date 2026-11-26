---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [identificatore, identificatore interno, identificatore esterno, identificatore semplice, identificatore composto, entità debole, weak entity, ciclo di identificazione]
tags: [competenza, area/informatica]
---

# Identificatore ed entità debole

> L'identificatore è l'insieme di attributi e/o entità che individua univocamente le occorrenze di un'entità; un'entità senza attributi interni sufficienti è debole e si identifica tramite altre entità.

## Definizione / enunciato
Ogni entità deve avere **almeno un** identificatore e può averne più di uno. Un identificatore può essere:
- **interno** (solo attributi dell'entità) o **esterno** (coinvolge altre entità tramite relazioni);
- **semplice** (un attributo) o **composto** (più attributi).

Un'entità che non dispone internamente di attributi sufficienti è un'**entità debole**: deve partecipare con cardinalità $(1,1)$ a ognuna delle relazioni che forniscono parte dell'identificatore. Le relazioni non hanno identificatori.

## Formule chiave
Esempio delle slide: Studente (Matricola, Nome, Cognome) partecipa con $(1,1)$ a Iscrizione con Università (Nome, Città); Matricola da sola non basta, l'identificatore è {Matricola, Università}. Traduzione relazionale di un'entità debole: `Sala(Numero, CodC, Capienza)` con `Cinema(CodC, Nome, Indirizzo)`: la relazione è rappresentata insieme all'identificatore.

## Intuizione
La matricola è univoca solo dentro un'università: l'entità "prende in prestito" la chiave di quella da cui dipende. Un identificatore esterno può coinvolgere un'entità a sua volta identificata esternamente, ma **non si devono generare cicli di identificazione**.

## Come si usa
Nel caso ASL il Reparto è identificato da un codice "univoco all'interno dell'ospedale" e il Laboratorio da un codice univoco nell'ospedale: entrambi sono entità deboli identificate esternamente tramite Ospedale, e nello schema logico diventano `Reparto(CodR, CodO, ...)` e `Laboratorio(CodLab, CodO, NomeLab, Piano, Stanza)`. Nella ristrutturazione si sceglie l'identificatore primario: non nullo, con pochi attributi (meglio uno), possibilmente interno, usato da molte operazioni; si possono introdurre codici identificativi.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER-1.pdf` (pp. 53-57); `triennale/ANNO 3/base di dati/Progettazione_modello_logico.pdf` (p. 21); `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (pp. 72-80); `triennale/ANNO 3/base di dati/Progettazione_ER_ristrutturazione.pdf` (p. 49).

## Prerequisiti
- [[Modello Entità-Relazione]]: identifica le occorrenze delle entità
- [[Cardinalità nel modello ER]]: l'entità debole partecipa con (1,1)

## Porta a
- [[Gestione del tempo nello schema ER]]: entità evento e storicizzata come entità deboli
- [[Ristrutturazione dello schema ER]]: scelta degli identificatori primari

## Collegati
- [[Chiave di una relazione]]: l'identificatore diventa chiave primaria
- [[Traduzione dello schema ER nel modello relazionale]]: traduzione delle entità con identificatore esterno
