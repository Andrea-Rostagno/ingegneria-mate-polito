---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["superposition", "merging"]
tags: [competenza, area/probabilita]
---

# Sovrapposizione di processi di Poisson

> La somma di processi di Poisson indipendenti è un processo di Poisson con tasso uguale alla somma dei tassi.

## Definizione / enunciato
**Teorema.** Se $N_1,\dots,N_k$ sono processi di Poisson indipendenti di tassi $\lambda_1,\dots,\lambda_k$, allora
$$N(t)=N_1(t)+\dots+N_k(t)$$
è un processo di Poisson di tasso $\lambda_1+\dots+\lambda_k$.

## Formule chiave
Prova con la seconda definizione:
1. $N(0)=\sum N_i(0)=0$;
2. gli incrementi sono indipendenti perché lo sono quelli dei singoli processi;
3. gli incrementi sono Poisson perché la somma di Poisson indipendenti è Poisson, $\sum_i\mathrm{Pois}(\lambda_i t)=\mathrm{Pois}(t\sum_i\lambda_i)$.

## Intuizione
Fondere flussi indipendenti dà ancora un flusso "senza memoria". È coerente con la corsa di esponenziali: il primo arrivo complessivo è il minimo di esponenziali, di tasso $\sum_i\lambda_i$.

## Come si usa
Esempio (lezione 5): spettatori da A con tasso 10/h e da B con tasso 20/h. Il bigliettaio vede un Poisson di tasso 30/h, e
$$\mathbb P(N(2)=4)=e^{-2\cdot30}\frac{(2\cdot30)^4}{4!}.$$
Thinning e sovrapposizione sono le proprietà più usate negli esercizi: si sostituiscono più flussi indipendenti con uno solo, o si separa un flusso in sottoprocessi indipendenti (`.tex`).

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 5 ("Superposition"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Processo di Poisson; argomento 2 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_05_06_10.pdf` (lezione 5); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processo di Poisson.

## Prerequisiti
- [[Processo di Poisson]]: somma di processi indipendenti

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Corsa di esponenziali]]: primo arrivo fra flussi indipendenti
- [[Thinning di Poisson]]: operazioni inverse: separare e unire flussi
