---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["partitions of a finite set", "set partitions", "scatole non numerate", "oggetti distinti in scatole indistinguibili", "suddividere un insieme in gruppi"]
tags: [competenza, area/algebra-geometria]
---

# Partizioni di un insieme finito

> Conta in quanti modi si spezza un insieme di $n$ elementi in blocchi di cardinalità assegnata quando i blocchi non sono numerati. Si parte dal coefficiente multinomiale e si divide per le permutazioni dei blocchi della stessa taglia.

## Definizione / enunciato
Si vogliono distribuire oggetti **distinti** in scatole **non numerate** con numerosità assegnate. Se le scatole fossero numerate, il conteggio sarebbe il coefficiente multinomiale. Con scatole indistinguibili, due distribuzioni che differiscono solo per uno scambio fra scatole della stessa cardinalità coincidono.

**Regola** (lezione 4): se nella partizione compaiono due o più blocchi con la stessa cardinalità, il conteggio multinomiale è un multiplo del numero delle partizioni. Il fattore è il numero di permutazioni dei blocchi con la stessa cardinalità.

## Formule chiave
Se ci sono $r$ blocchi della stessa taglia e gli altri hanno taglie diverse:
$$\#\text{partizioni}=\frac{1}{r!}\binom{n}{n_1,\dots,n_k}.$$
Con più gruppi di taglie ripetute si divide per il prodotto dei fattoriali corrispondenti.

## Intuizione
Numerare le scatole aggiunge informazione: per ogni partizione ci sono $r!$ modi di assegnare le etichette ai blocchi uguali. Togliere le etichette significa dividere per $r!$. I blocchi di taglia diversa sono già distinguibili dalla taglia, quindi non vanno divisi.

## Come si usa
- **Scacchi** (lezione 4): 4 persone formano 2 coppie. Con tavoli numerati i modi sono $\binom42=6$. Con tavoli non numerati $2x=6$, quindi $x=3$: le partizioni $\{a,b\}\cup\{c,d\}$, $\{a,c\}\cup\{b,d\}$, $\{a,d\}\cup\{b,c\}$.
- **Insieme di 15 elementi** diviso in 3 blocchi da 2, uno da 3 e uno da 6. I blocchi di uguale taglia sono 3, quindi
$$x=\frac{1}{3!}\binom{15}{2,2,2,3,6}.$$
- **Esercizio della lezione 5:** 5 matematici divisi in 3 gruppi non vuoti per 3 problemi diversi A, G, P. Prima si contano le partizioni di $\{a,b,c,d,e\}$ in 3 blocchi (tipi 1+1+3 e 1+2+2), poi si assegnano i problemi ai blocchi.

## Nei corsi
- **Matematica discreta** (triennale): fine della parte di conteggio della lezione 4 ("Partizioni, distribuzioni di oggetti in scatole"); esercizio ripreso nella lezione 5. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 27-28); `triennale/ANNO 1/Matematica discreta/teoria/05 - Successioni ricorsive lineari.pdf` (p. 22).

## Prerequisiti
- [[Permutazioni con ripetizione]]: il conteggio con scatole numerate è multinomiale

## Porta a
- Nessuno nel corso.

## Collegati
- [[Combinazioni con ripetizione]]: oggetti identici in scatole numerate, l'altro caso della tabella oggetti/scatole
- [[Relazione di equivalenza]]: una partizione è l'insieme delle classi di un'equivalenza
