---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["renewal process", "counting process", "processo di conteggio", "legge dei grandi numeri per i rinnovi"]
tags: [competenza, area/probabilita]
---

# Processo di rinnovo

> Processo di conteggio con tempi inter-arrivo i.i.d.; la sua legge dei grandi numeri trasforma la durata media di un ciclo in un tasso di lungo periodo.

## Definizione / enunciato
Un **processo di conteggio** ha valori in $\{0,1,2,\dots\}$, cresce solo di uno alla volta e non decresce mai. Un **processo di rinnovo** è un processo di conteggio i cui tempi tra arrivi consecutivi $t_1,t_2,\dots$ sono i.i.d. Gli istanti di arrivo sono $T_0=0$, $T_\ell=\inf\{i:X_i=\ell\}$, con $t_{\ell+1}=T_{\ell+1}-T_\ell$. Nella notazione del `.tex`: $S_n=\sum_{k\le n}\tau_k$ e $N(t)=\max\{n\ge0:S_n\le t\}$.

**Teorema (LGN per i rinnovi).** Se $0<\mathbb E[t_1]$ e $\mathbb P(t_1<\infty)=1$, allora con probabilità 1
$$\lim_{i\to\infty}\frac{X_i}{i}=\frac1{\mathbb E[t_1]}.$$

## Formule chiave
$$\frac{N(t)}{t}\xrightarrow[t\to\infty]{\text{q.c.}}\frac1{\mathbb E[\tau_1]}.$$

## Intuizione
Nel lungo periodo il numero di rinnovi per unità di tempo è l'inverso della durata media di un ciclo. L'idea viene dalla [[Legge dei grandi numeri|legge forte dei grandi numeri]] applicata a $T_n/n\to\mathbb E[t_1]$: i tempi inter-arrivo indipendenti sono il "punto dolce" tra i.i.d. e processo interessante (lezione 1).

## Come si usa
- Lezione 1: le richieste a un server arrivano con tempi i.i.d. di media 5 secondi. Dopo un giorno le richieste al secondo sono circa $1/5$.
- Lo stesso schema "ciclo i.i.d." si usa per le visite di una DTMC a uno stato (frequenza asintotica) e per il paradosso dell'ispezione.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 1 ("Counting processes", "Renewal processes"). Esercizi: `magistrale/Processi stocastici/suggested_exercises_RP.pdf` (Durrett 3.1-3.18). Il `.tex` (§ Processi di rinnovo) usa l'ipotesi $0<\mathbb E[\tau_1]<\infty$, mentre la slide chiede solo $\mathbb E[t_1]>0$ e $t_1<\infty$ q.c. Fonti principali: `magistrale/Processi stocastici/lezione_01_23_09.pdf` (lezione 1); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processi di rinnovo e renewal reward.

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Teorema renewal reward]]: ricompense associate ai cicli di rinnovo
- [[Paradosso dell'ispezione]]: intervallo di rinnovo contenente un istante
- [[Processo di Poisson]]: rinnovo con inter-arrivi esponenziali

## Collegati
- [[Proprietà di rinnovo del moto browniano]]: analogia con la ripartenza dei rinnovi
- [[Legge dei grandi numeri|Legge forte dei grandi numeri]]: la LGN per i rinnovi ne è una conseguenza
