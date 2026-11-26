---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: ["discrete birth and death chain", "passeggiata parzialmente riflessa"]
tags: [competenza, area/probabilita]
---

# Catena di nascita e morte discreta

> DTMC su interi consecutivi con salti di al più un'unità; la stazionaria, se esiste, è in bilancio dettagliato e ha forma prodotto esplicita.

## Definizione / enunciato
Una DTMC è di **nascita e morte** se $S$ è un insieme di interi consecutivi limitato inferiormente ($\{a,\dots,b\}$ oppure $\{x\ge a\}$) e $p(x,y)=0$ per $|x-y|>1$. Si scrive
$$p(x,x+1)=p_x,\quad p(x,x-1)=q_x,\quad p(x,x)=r_x,\qquad p_x+q_x+r_x=1.$$
**Teorema.** Se ha una distribuzione stazionaria $\pi$, allora $\pi$ è in bilancio dettagliato: $\pi(x)p_x=\pi(x+1)q_{x+1}$ (prova per induzione da $x=a$, dove $q_a=0$).

## Formule chiave
$$\pi(x)=\pi(a)\prod_{i=a}^{x-1}\frac{p_i}{q_{i+1}},\qquad M=\sum_{x=a}^{b}\prod_{i=a}^{x-1}\frac{p_i}{q_{i+1}},\qquad\pi(a)=\frac1M.$$
La stazionaria esiste ed è unica se e solo se $0<M<\infty$. Che $M>0$ non è mai un problema; spesso $M=\infty$.

## Intuizione
Su una "linea" il flusso netto tra $x$ e $x+1$ deve essere nullo all'equilibrio. Per questo si ricava ogni $\pi(x)$ dal precedente con un solo rapporto, utile soprattutto con infiniti stati.

## Come si usa
Passeggiata parzialmente riflessa (lezione 10): $p_x=p$, $q_x=q$ per $x\ge1$, $p(0,0)=q$.
- $M=\sum_x(p/q)^x<\infty$ se e solo se $p<1/2$, e allora
$$\pi(x)=\Big(1-\frac pq\Big)\Big(\frac pq\Big)^x,$$
una geometrica traslata.
- Per $p=1/2$ è ricorrente nulla, per $p>1/2$ transiente (confronto con la passeggiata non riflessa).
- La passeggiata completamente riflessa ($p(0,1)=1$) ha la stessa classificazione.
- Anche il modello del giocatore è una nascita-morte.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 10 ("Discrete time birth and death chains", "1d partially reflected Random Walk", "1d fully reflected Random Walk"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Reversibilità e birth-death discrete; argomento 8 di `magistrale/Processi stocastici/topics_2025_26.pdf` (parte a tempo discreto). Fonti principali: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Reversibilità e birth-death discrete.
- **Dinamiche su network** (magistrale): random walk su un grafo-linea pesato $\{0,\dots,n\}$ con $P_{i,i+1}=p_i$, $P_{i,i-1}=q_i$, $P_{ii}=r_i$; irriducibile se e solo se $p_i>0$ per $i<n$ e $q_i>0$ per $i>0$; sempre reversibile con $\pi_k\propto\prod_{j=1}^kp_{j-1}/q_j$. Caso $p_k=p$, $q_k=q$, $\rho=p/q$: $\pi_k=\rho^k/(1+\rho+\dots+\rho^n)$ (uniforme per $\rho=1$, decrescente esponenzialmente da 0 per $\rho<1$). Probabilità di assorbimento in $n$ con $\mathcal S=\{0,n\}$:
$$H_{k,n}=1-H_{k,0}=\frac{\sum_{1\le h\le k}\prod_{1\le j<h}q_j/p_j}{\sum_{1\le h\le n}\prod_{1\le j<h}q_j/p_j}.$$
(Nella slide le condizioni al bordo sono scritte $H_{0,n}=0$, $H_{1,n}=1$; dal contesto è $H_{n,n}=1$: da verificare sul PDF.) Nel corso il processo $N(t)$ del numero di 1 in un sistema binario a coppie è una nascita-morte in casi speciali, come il grafo completo. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 41-43).

## Prerequisiti
- [[Bilancio dettagliato]]: stazionaria come prodotto di rapporti
- [[Ricorrenza della passeggiata aleatoria]]: passeggiata riflessa come caso particolare

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.
- [[Dinamica evolutiva su rete]]: la catena dei salti del numero di mutanti è una nascita-morte (Dinamiche su network)

## Collegati
- [[Catena di nascita e morte continua]]: versioni a tempo discreto e continuo
