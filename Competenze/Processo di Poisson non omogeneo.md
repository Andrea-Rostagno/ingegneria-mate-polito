---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["non-homogeneous Poisson process", "NHPP", "intensità cumulata", "time change", "thinning non omogeneo", "simulazione"]
tags: [competenza, area/probabilita]
---

# Processo di Poisson non omogeneo

> Processo di Poisson con tasso variabile nel tempo $\lambda(t)$: incrementi indipendenti con legge Poisson di media $\int\lambda$. Si ottiene per cambio di tempo o per thinning.

## Definizione / enunciato
$(M(s))_{s\ge0}$ è un processo di Poisson con funzione di intensità $\lambda(u)\ge0$ se
1. $M(0)=0$;
2. ha incrementi indipendenti;
3. $M(t)-M(s)\sim\mathrm{Pois}\big(m(t)-m(s)\big)$, con $m(t)=\int_0^t\lambda(u)\,du$.

Non è un Poisson in senso stretto: gli inter-arrivi non sono esponenziali e gli incrementi non sono stazionari.

**Teorema (cambio di tempo).** Se $N$ è Poisson di tasso 1, allora $M(t)=N\big(\int_0^t\lambda(u)\,du\big)$ è Poisson non omogeneo di tasso $\lambda(t)$. Se $\lambda$ è costante, $N(\lambda t)$ è Poisson di tasso $\lambda$.

**Thinning non omogeneo.** Dato un Poisson di tasso $\lambda$, si tiene l'arrivo al tempo $s$ con probabilità $p(s)$, indipendentemente. Gli arrivi tenuti formano un Poisson non omogeneo di tasso $\lambda p(s)$.

## Formule chiave
$$\Lambda(t)=m(t)=\int_0^t\lambda(u)\,du,\qquad M(t)-M(s)\sim\mathrm{Pois}\Big(\int_s^t\lambda(u)\,du\Big).$$
Simulazione: si prende $\bar\lambda=\max_s\lambda(s)$ e $p(s)=\lambda(s)/\bar\lambda$.

## Intuizione
Il tempo "interno" scorre alla velocità $\lambda(t)$. Dove l'intensità è alta il processo vede più tempo e quindi più arrivi, e l'intensità cumulata sostituisce $\lambda t$ in tutte le formule.

## Come si usa
- Rane (lezione 4): $\lambda(t)=2+\sin(t\pi/12)$ (ore dalle 8), quindi $m(t)=2t+\frac{12}{\pi}\big(1-\cos\frac{t\pi}{12}\big)$. Si ottiene $\mathbb P(N(3)\le1)\approx0.0066$ e $\mathbb P(N(12)-N(9)\le1)\approx0.0463$.
- Simulazione dei primi 150 minuti con $\lambda(t)=50/(t+1)$ o $2+\sin(t\pi/12)$: si fa thinning di un Poisson di tasso $\bar\lambda$.
- Regola pratica (`.tex`): se il tasso dipende dal tempo, si sostituisce $\lambda t$ con $\Lambda(t)$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 4 ("The non-homogeneous Poisson Process", "Simulation of non-homogeneous Poisson process", "Non-homogeneous thinning"), lezione 5 (condizionamento); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Processo di Poisson; argomento 2 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_04_30_09.pdf` (lezione 4), `magistrale/Processi stocastici/Lezione_05_06_10.pdf` (lezione 5); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processo di Poisson.

## Prerequisiti
- [[Processo di Poisson]]: tasso costante sostituito da lambda(t)
- [[Thinning di Poisson]]: simulazione tramite thinning non omogeneo

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Condizionamento degli arrivi di Poisson]]: arrivi condizionati con densità proporzionale a lambda
