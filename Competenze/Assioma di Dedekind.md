---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["Dedekind axiom", "assioma di continuità", "principio di Dedekind", "completezza di R", "completeness axiom", "assioma di separazione"]
tags: [competenza, area/analisi]
---

# Assioma di Dedekind

> L'assioma di continuità dei reali: due insiemi non vuoti, uno tutto a sinistra dell'altro, sono separati da almeno un numero reale.

## Definizione / enunciato
**Assioma di continuità (o di Dedekind).** Siano $A,B\subseteq\mathbb R$, $A,B\ne\emptyset$. Se
$$\forall a\in A,\ \forall b\in B\qquad a\le b,$$
allora
$$\exists\,c\in\mathbb R:\quad \forall a\in A,\ \forall b\in B\qquad a\le c\le b .$$

## Formule chiave
$$A,B\neq\emptyset,\ \ a\le b\ \ \forall a\in A,\,b\in B\quad\Longrightarrow\quad \exists c\in\mathbb R:\ a\le c\le b\ \ \forall a\in A,\,b\in B .$$

## Intuizione
È l'unico assioma che distingue $\mathbb R$ dagli altri campi ordinati: gli assiomi di somma, prodotto e ordine valgono anche in $\mathbb Q$, ma in $\mathbb Q$ possono mancare gli elementi separatori. Geometricamente, la retta reale "non ha buchi".

## Come si usa
Il programma lo elenca come "Principio di Dedekind". Va letto con attenzione all'ordine dei quantificatori: prima si fissano gli insiemi, poi l'esistenza di $c$ è **una sola** per tutte le coppie $(a,b)$ ($\exists c\,\forall a\,\forall b$, non $\forall a\,\forall b\,\exists c$). Il programma lo colloca subito prima di "Insiemi limitati, estremi, massimi e minimi", che nel materiale non sono sviluppati.

## Nei corsi
- **Analisi 1** (triennale): "Principio di Dedekind". Fonti: `triennale/ANNO 1/analisi 1/Assiomi dei numeri reali.pdf` (p. 2, scansione manoscritta); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma). Il confronto con $\mathbb Q$ nell'intuizione non è nella scansione (da verificare sul testo del corso).
- **Analisi 1** (seconda passata, 2026-11-24): Mazzi lo chiama "assioma di completezza" e lo usa per dimostrare che ogni insieme superiormente limitato ha estremo superiore (prop. 1.6), mentre Morandotti prende direttamente l'esistenza del sup come assioma (def. 1.5.18). Il confronto con $\mathbb Q$ è confermato da Mazzi: $(-\infty,\sqrt2]\cap\mathbb Q$ non ha sup in $\mathbb Q$ (oss. 1.1). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.3.5, prop. 1.6, pp. 15-19); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 1.5.18, PDF p. 26).

## Prerequisiti
- [[Assiomi dei numeri reali]]: completa gli assiomi di campo ordinato

## Porta a
- [[Estremo superiore e inferiore]]: garantisce l'esistenza del sup

## Collegati
- [[Quantificatori]]: esempio di enunciato con $\forall$ ed $\exists$ annidati
