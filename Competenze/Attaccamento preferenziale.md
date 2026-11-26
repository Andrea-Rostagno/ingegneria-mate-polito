---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["preferential attachment", "modello di Barabási-Albert", "Barabasi-Albert model", "regola di Price", "Price rule", "rete in crescita", "growing network", "legge di potenza dei gradi", "power law degree distribution", "rich get richer"]
tags: [competenza, area/network]
---

# Attaccamento preferenziale

> Modello di rete che cresce un nodo alla volta, con i nuovi nodi che si collegano di preferenza ai nodi già molto connessi: genera una distribuzione dei gradi a legge di potenza, $p_k\asymp k^{-3}$ nel caso di Barabási-Albert.

## Definizione / enunciato
Si parte da $\mathcal G_1=(\mathcal V_1,\mathcal E_1)$ e a ogni $t\ge2$ si aggiunge un nodo collegandolo ad alcuni nodi di $\mathcal V_{t-1}$ secondo una regola. Scelta standard: $\mathcal G_1$ con due nodi $\{0,1\}$ e $c\ge1$ archi paralleli; al tempo $t$ il nodo $t$ si collega a $c$ nodi di $\mathcal V_{t-1}$:
- **attaccamento uniforme:** $c$ nodi scelti uniformemente;
- **attaccamento preferenziale (regola di Price, 1955):** il nodo $t$ si collega a $j$ con probabilità $\propto a+w_j(t-1)$, $a>-1$, con $w_j(t-1)$ grado di $j$ in $\mathcal G_{t-1}$;
- **Barabási-Albert (1999):** caso $a=0$.

## Formule chiave
**Teorema** ($a=0$). Quasi certamente $p_k(t)\to p_k$ con
$$p_k=\begin{cases}0&k<c\\[2pt]\dfrac2{2+c}&k=c\\[4pt]\dfrac{2c(c+1)}{k(k+1)(k+2)}&k\ge c.\end{cases}$$
**Corollario:** $p_k\asymp k^{-3}$ per $k\to\infty$. **Generalizzazione:** $p_k\asymp k^{-(3+a)}$.
Varianti: con $a>0$ la regola di Price genera grafi orientati (collegamento $\propto a+w^-_j$, in-degree); con out-degree del nuovo nodo aleatorio invece che costante $c$ si ottengono distribuzioni di out-degree arbitrarie.

## Intuizione
"Chi è ricco diventa più ricco": un nodo con grado alto attira nuovi link in proporzione al proprio grado, e l'effetto cumulativo crea pochi hub molto connessi e una coda pesante dei gradi, come nelle reti reali (web, citazioni).

## Come si usa
È la risposta a uno dei limiti di Erdős-Rényi (gradi Poisson, senza code pesanti). Per confrontarlo con dati reali si guarda la pendenza della distribuzione dei gradi in scala log-log.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "Preferential Attachment", "PA generates power law degree distribution", "Preferential Attachment: generalizations". Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 35-38).

## Prerequisiti
- [[Grafo di Erdős-Rényi]]: modello di confronto e suoi limiti

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Modello di configurazione]]: legge di potenza imposta invece che generata
- [[Modello small-world]]: altro modello che corregge Erdős-Rényi
