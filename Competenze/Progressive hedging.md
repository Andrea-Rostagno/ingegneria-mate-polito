---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["progressive hedging algorithm", "algoritmo PH", "decomposizione per scenari", "scenario decomposition"]
tags: [competenza, area/ottimizzazione]
---

# Progressive hedging

> Decomposizione per scenari: si dà a ogni scenario la sua copia delle decisioni di primo stadio, si rilassano i vincoli di non anticipatività con un lagrangiano aumentato e si aggiornano moltiplicatori e media finché le copie coincidono.

## Definizione / enunciato
Riformulazione per scenari: $\min\sum_s\pi_s(\mathbf c^T\mathbf x_s+\mathbf q_s^T\mathbf y_s)$ con $(\mathbf x_s,\mathbf y_s)\in X_s=\{(\mathbf x_s,\mathbf y_s)\ge\mathbf 0: A\mathbf x_s=\mathbf b,\ T_s\mathbf x_s+W_s\mathbf y_s=\mathbf h_s\}$ e non anticipatività $\mathbf x_s=\sum_{s'}\pi_{s'}\mathbf x_{s'}$. Il rilassamento lagrangiano di questi vincoli si decompone per scenari ma ha problemi numerici e di convergenza; si aggiunge quindi il termine $\frac r2\|\mathbf x_s-\bar{\mathbf x}^k\|^2$, con $\bar{\mathbf x}=\sum_s\pi_s\mathbf x_s$ e $r$ parametro di penalità.

## Formule chiave
1. $(\mathbf x_s^0,\mathbf y_s^0)\in\arg\min_{X_s}\mathbf c^T\mathbf x_s+\mathbf q_s^T\mathbf y_s$; $\bar{\mathbf x}^0=\sum_s\pi_s\mathbf x_s^0$; $\boldsymbol\lambda_s^0=r(\mathbf x_s^0-\bar{\mathbf x}^0)$.
2. In parallelo per ogni $s$:
$$(\mathbf x_s^{k+1},\mathbf y_s^{k+1})\in\arg\min_{(\mathbf x_s,\mathbf y_s)\in X_s}\ \mathbf c^T\mathbf x_s+\mathbf q_s^T\mathbf y_s+\langle\boldsymbol\lambda_s^k,\mathbf x_s\rangle+\frac r2\|\mathbf x_s-\bar{\mathbf x}^k\|^2 .$$
3. $\bar{\mathbf x}^{k+1}=\sum_s\pi_s\mathbf x_s^{k+1}$, $\ \boldsymbol\lambda_s^{k+1}=\boldsymbol\lambda_s^k+r(\mathbf x_s^{k+1}-\bar{\mathbf x}^{k+1})$.

Si continua finché $\sum_s\pi_s\|\mathbf x_s^k-\bar{\mathbf x}^k\|^2\ge\varepsilon$.

## Intuizione
Ogni scenario "si copre" progressivamente: il moltiplicatore penalizza la distanza della sua decisione dalla media, che è l'unica decisione implementabile. Nel caso convesso converge all'ottimo; con variabili intere (MILP a due stadi) è un'euristica spesso molto efficace.

## Come si usa
Newsvendor in forma di minimo con $p=10$, $c=4$, domanda 50, 100, 150 equiprobabile, $r=0.5$ (ottimo $x^*=F^{-1}(0.6)=100$). Passo 0: $x_s^0=d_s$, $\bar x^0=100$, $\lambda^0=(-25,0,25)$. Passo 1: fissato $x_s$, $y_s^*=\min(x_s,d_s)$; i candidati sono $x_s^+=\bar x^k-\frac{c+\lambda_s^k}r=\bar x^k-8-2\lambda_s^k$ (se $x_s>d_s$), $x_s^-=\bar x^k+\frac{p-c-\lambda_s^k}r=\bar x^k+12-2\lambda_s^k$ (se $x_s<d_s$) o lo spigolo $x_s=d_s$. Risultato: $x_1^1=142$, $x_2^1=100$ (spigolo), $x_3^1=62$: il moltiplicatore negativo spinge in su lo scenario basso, quello positivo spinge in giù lo scenario alto.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): sezione "Progressive Hedging" della Parte III; citato nelle slide sulla decomposizione come schema di lagrangiano aumentato $f(\mathbf x)+\sum_i\lambda_ih_i(\mathbf x)+\sigma\sum_ih_i^2(\mathbf x)$. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 58-65); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 6, 11).

## Prerequisiti
- [[Vincoli di non anticipatività]]: i vincoli che vengono rilassati
- [[Rilassamento lagrangiano]]: punto di partenza della decomposizione
- [[Funzioni di penalità e barriera]]: il termine quadratico del lagrangiano aumentato

## Porta a
- [[Programmazione stocastica multistadio]]: il metodo si applica anche a più stadi

## Collegati
- [[Metodo L-shaped]]: decomposizione per stadi invece che per scenari
- [[Problema del newsvendor]]: esempio svolto
- [[ADMM]]: stessa struttura di lagrangiano aumentato con aggiornamenti alternati
