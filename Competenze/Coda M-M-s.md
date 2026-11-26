---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: [M/M/s queue, M/M/s, code con più server, s server paralleli, formula di Erlang, Erlang's formula, M/M/n/n]
tags: [competenza, area/probabilita]
---

# Coda M-M-s

> Coda markoviana con $s$ server in parallelo: tasso di servizio $j\mu$ finché i server non sono tutti occupati, poi $s\mu$; stabile se e solo se $\lambda<s\mu$.

## Definizione / enunciato
Arrivi Poisson di tasso $\lambda$, servizi i.i.d. $\mathrm{Exp}(\mu)$, $s$ server paralleli (es. banca con $s$ sportelli). $X_t$ = clienti nel sistema:
$$q(j,j+1)=\lambda,\qquad q(j,j-1)=\begin{cases}j\mu&1\le j\le s\\ s\mu& j>s\end{cases}\quad(\text{cioè }\min(j,s)\mu).$$
**Teorema (riassunto).** Sempre non esplosiva ($\lambda(j)\le\lambda+s\mu$). Inoltre
- $\lambda<s\mu$: ricorrente positiva, unica stazionaria $\pi=\gamma/M$;
- $\lambda=s\mu$: ricorrente nulla;
- $\lambda>s\mu$: transiente.

## Formule chiave
$$\gamma(j)=\prod_{n=0}^{j-1}\frac{q(n,n+1)}{q(n+1,n)}=\begin{cases}\big(\frac\lambda\mu\big)^j\frac1{j!}& j\le s\\[2pt] \big(\frac\lambda\mu\big)^j\frac1{s!}\frac{1}{s^{j-s}}& j>s\end{cases}$$
$$M=\sum_{j=0}^{s}\Big(\frac\lambda\mu\Big)^j\frac1{j!}+\Big(\frac\lambda\mu\Big)^s\frac1{s!}\sum_{j>s}\Big(\frac{\lambda}{s\mu}\Big)^{j-s}<\infty\iff\lambda<s\mu .$$

## Intuizione
Con $j\le s$ clienti tutti sono serviti e il primo a finire è il minimo di $j$ esponenziali $\mathrm{Exp}(\mu)$, cioè $\mathrm{Exp}(j\mu)$. Per $\lambda>s\mu$ si confronta con una M/M/1 "potenziata" di tasso $s\mu$, più efficiente e già transiente. Per $\lambda=s\mu$ sopra lo stato $j>s$ la dinamica coincide con quella di una M/M/1 ricorrente, sotto ci sono finiti stati comunicanti: ricorrente, ma senza stazionaria, quindi nulla.

## Come si usa
Es. B (banca, 5 sportelli, arrivi 30/ora, servizio medio 10 minuti, impazienza 2/ora): $q(n,n+1)=30$, $q(n,n-1)=6n$ per $1\le n\le5$, $q(n,n-1)=30+2(n-5)$ per $n>5$. Come nodo di una rete di Jackson con tasso effettivo $\lambda_2$ serve $\lambda_2<s\mu_2$. Stabilità nel `.tex`: $\rho=\lambda/(s\mu)<1$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 9. Fonti: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10, tassi), `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14, p. 33 per $\gamma$ e $M$, verificate sull'immagine della slide), `magistrale/Processi stocastici/Lezione_15_10_11.pdf` (lezione 15), `riassunto_del_corso.tex` §Code markoviane e reti di Jackson, `suggested_exercises_CTMC.pdf` (es. B).
- **Dinamiche su network** (magistrale): versione con capacità finita, "M/M/n-queue" sugli stati $\{0,\dots,n\}$ con $n$ server (nessuna sala d'attesa), tassi di arrivo $\lambda$ e di servizio $k\mu$ nello stato $k$ (la riga dei tassi nella slide è stampata in modo confuso: da verificare sul PDF). Stazionaria $\pi_i=\frac{\rho^i/i!}{\sum_{j=0}^n\rho^j/j!}$ e probabilità di trovare la coda piena $\pi_n=\frac{\rho^n/n!}{\sum_{j=0}^n\rho^j/j!}$: **formula di Erlang**. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (p. 55).

## Prerequisiti
- [[Coda M-M-1]]: generalizza a $s$ server paralleli
- [[Corsa di esponenziali]]: primo servizio concluso fra paralleli

## Porta a
- [[Rete di Jackson]]: nodi della rete

## Collegati
- [[Coda M-M-infinito]]: M-M-infinito è M-M-s con infiniti server
- [[Catena di nascita e morte continua]]: la formula di Erlang è la stazionaria di una nascita-morte finita (Dinamiche su network)
