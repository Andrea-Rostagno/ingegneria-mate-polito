---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [algorithm, problem solving, soluzione formale]
tags: [competenza, area/informatica]
---

# Algoritmo

> Descrizione passo-passo, non ambigua, eseguibile e finita, di come risolvere un problema: il primo passo prima di scrivere qualunque programma.

## Definizione / enunciato
Prima definizione: un algoritmo è una descrizione passo-passo di come risolvere un problema; una sequenza ordinata di azioni (istruzioni) per raggiungere un obiettivo, come una ricetta.

**Definizione formale** (P1 p. 31): una sequenza di passi con tre caratteristiche:
- **non ambigua**: istruzioni precise, nessuna assunzione sulla conoscenza di chi esegue;
- **eseguibile**: può essere svolta in pratica;
- **termina**: prima o poi si ferma.

Lo sviluppo di un programma procede per raffinamenti: problema, soluzione informale, soluzione formale (pseudocodice o flow chart), programma.

## Intuizione
Programmare non ha soluzioni universali: lo stesso problema ha molte soluzioni e si cerca la più efficiente ed efficace. La regola del corso: immaginare di avere solo carta (memoria) e penna, scrivendo ogni informazione da ricordare.

## Come si usa
Esempi delle slide: massimo tra A e B (max = A se A > B, altrimenti B); MCD per tentativi; scelta tra due auto (costo totale = prezzo + durata × prezzo al litro × km annui / efficienza, con 1,40 dollari al litro, 15.000 km all'anno, 10 anni); conto al 5% annuo da 10.000 dollari: quanti anni per raddoppiare (si moltiplica il saldo per 1,05 finché è sotto 20.000). L'esempio della pasta mostra un algoritmo quotidiano incompleto (manca il sale).

## Nei corsi
- **Informatica** (triennale): unità P1, sezione 1.7 e 3.5. Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 25-45).
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi. L'algoritmo è l'"essenza computazionale di un programma che ne descrive i passi fondamentali"; i suoi ingredienti sono sequenze, alberi e grafi, che strutturano i dati elementari (bit, caratteri, interi, reali, stringhe). Da qui il corso passa a decidibilità, costo e correttezza degli algoritmi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 2).

## Prerequisiti
- Nessuno nel corso: è un punto di partenza.

## Porta a
- [[Pseudocodice]]: formalizza i passi dell'algoritmo
- [[Diagramma di flusso]]: rappresentazione grafica dell'algoritmo
- [[Casi di test]]: verifica che l'algoritmo dia l'output atteso
- [[Definizione di funzione]]: incapsula un sotto-algoritmo con un nome
- [[Problema della fermata]]: non ogni problema ammette un algoritmo (Programmazione e calcolo scientifico)
- [[Costo computazionale di un algoritmo]]: tempo e spazio in funzione di n (Programmazione e calcolo scientifico)

## Collegati
- [[Compilazione e interpretazione]]: il programma è l'algoritmo scritto in un linguaggio
- [[Invariante di ciclo]]: strumento per dimostrare che un algoritmo è corretto (Programmazione e calcolo scientifico)
