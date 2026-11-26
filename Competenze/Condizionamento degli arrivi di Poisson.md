---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["conditioning", "statistiche d'ordine uniformi", "N(s) dato N(t) binomiale"]
tags: [competenza, area/probabilita]
---

# Condizionamento degli arrivi di Poisson

> Dato il numero di arrivi in $[0,t]$, gli istanti di arrivo sono uniformi e indipendenti su $[0,t]$, qualunque sia il tasso.

## Definizione / enunciato
**Teorema.** Dato $N(t)=n$, l'insieme $\{T_1,\dots,T_n\}$ dei tempi di arrivo in $[0,t]$ ha la stessa legge di un insieme $\{U_1,\dots,U_n\}$ di $n$ uniformi indipendenti su $[0,t]$. Equivalentemente (`.tex`), $(S_1,\dots,S_n)$ ha la legge delle statistiche d'ordine di $n$ uniformi.

**Corollario.** Per $s<t$, dato $N(t)=n$, $N(s)\sim\mathrm{Bin}(n,s/t)$.

**Caso non omogeneo.** Se $M$ è Poisson non omogeneo di tasso $\lambda(\cdot)$, dato $M(t)=n$ gli arrivi sono $n$ v.a. indipendenti su $[0,t]$ con densità $\lambda(\cdot)/\int_0^t\lambda(s)\,ds$.

## Formule chiave
Caso $n=1$, usando gli incrementi indipendenti:
$$\mathbb P(T_1>s\mid N(t)=1)=\frac{\mathbb P(N(s)=0)\,\mathbb P(N(t)-N(s)=1)}{\mathbb P(N(t)=1)}=\frac{e^{-\lambda s}e^{-\lambda(t-s)}\lambda(t-s)}{e^{-\lambda t}\lambda t}=1-\frac st.$$

## Intuizione
Fissato il numero di arrivi, il tasso non conta più. Ogni arrivo è "sparso a caso" nell'intervallo, quindi ognuno cade prima di $s$ con probabilità $s/t$, da cui la binomiale.

## Come si usa
Esempio (lezione 5): clienti con tasso 5/h. Sapendo che nei primi 30 minuti ne sono arrivati 3,
$$\mathbb P(N(1/6)=2\mid N(1/2)=3)=\binom32\Big(\frac13\Big)^2\frac23=\frac29.$$

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 5 ("Conditioning", "Conditioning and non-homogeneous Poisson process"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Processo di Poisson (ordine condizionato degli arrivi); argomento 2 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_05_06_10.pdf` (lezione 5); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processo di Poisson.

## Prerequisiti
- [[Processo di Poisson]]: incrementi indipendenti e poissoniani

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Processo di Poisson non omogeneo]]: arrivi condizionati con densità proporzionale a lambda
