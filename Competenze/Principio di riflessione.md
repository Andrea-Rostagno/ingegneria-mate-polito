---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [reflection principle, riflessione, legge del massimo, distribuzione del massimo del moto browniano]
tags: [competenza, area/probabilita]
---

# Principio di riflessione

> Riflettendo un moto browniano dopo un tempo d'arresto si ottiene ancora un browniano; ne segue che il massimo su $[0,t]$ ha la stessa legge di $|W_t|$.

## Definizione / enunciato
**Teorema (riflessione).** Sia $(W_t)$ browniano unidimensionale e $\tau$ un tempo d'arresto (filtrazione naturale o aumentata). Il processo
$$Y_t=\begin{cases}W_t & t\le\tau\\ 2W_\tau-W_t & t\ge\tau\end{cases}$$
è un moto browniano. In $d$ dimensioni (non dimostrato): $Y_t=W_\tau+R(W_t-W_\tau)$ per $t\ge\tau$, con $R$ ortonormale.

**Corollario (legge del massimo).** Per $a>0$:
$$P\Big(\sup_{0\le s\le t}W_s\ge a\Big)=P(|W_t|>a)=2\big(1-\Phi_{0,t}(a)\big)=2P(W_t\ge a),$$
con $\Phi_{\mu,\sigma^2}$ funzione di ripartizione della $N(\mu,\sigma^2)$.

## Formule chiave
Con $\tau=\inf\{t:W_t=a\}$ e $Y$ il riflesso:
$$P\Big(\sup_{s\le t}W_s\ge a\Big)=P(W_t>a)+P\Big(\sup_{s\le t}W_s\ge a,\ 2W_\tau-W_t>a\Big)=P(W_t>a)+P(Y_t>a)=2P(W_t>a).$$

## Intuizione
Dopo $\tau$ gli incrementi $W_{s+\tau}-W_\tau$ sono un browniano indipendente dal passato (rinnovo) e il loro opposto ha la stessa legge (simmetria): sostituirli non cambia la legge del processo. Ogni traiettoria che tocca $a$ e finisce sotto ha una "gemella" riflessa che finisce sopra. Il miracolo vale a un tempo fissato: le coppie $(\sup_{s\le t_1}W_s,\sup_{s\le t_2}W_s)$ e $(|W_{t_1}|,|W_{t_2}|)$ hanno leggi diverse.

## Come si usa
Prova rigorosa ($d=1$): continuità in $\tau$ perché $W_\tau=2W_\tau-W_\tau$; uguaglianza delle leggi finito-dimensionali con la funzione caratteristica condizionata a $(\tau,W_\tau)$, usando Markov forte, rinnovo e isotropia. Esercizio F: $P(\sup_{0\le s\le10}W_s>3)=2(1-\Phi_{0,10}(3))$. Esercizio O: per la passeggiata simmetrica $P(\max_{m\le n}X_m\ge a)=P(X_n\ge a)+P(X_n\ge a+1)$, quindi $P(\max_{m\le n}X_m=a)=P(X_n=a)+P(X_n=a+1)$. Esercizio L: tempo di primo passaggio di $W^{(1)}-W^{(2)}$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 18 ("reflection"). Il `.tex` riporta il corollario nella forma $2P(W_t\ge a)$. Fonti: `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Proprietà di invarianza, `suggested_exercises_brownian_motion.pdf` (es. F, L, O).

## Prerequisiti
- [[Proprietà di rinnovo del moto browniano]]: ripartenza al tempo di hitting

## Collegati
- [[Invarianze del moto browniano]]: usa la simmetria di -W
