---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["log-sum-exp trick", "log-sum-exp", "Gumbel trick", "Gumbel-max trick", "trucco di Gumbel", "probabilità in scala logaritmica"]
tags: [competenza, area/statistica]
---

# Trucco log-sum-exp

> Per campionare una variabile discreta da pesi non normalizzati noti solo in scala logaritmica si sottrae il massimo prima di esponenziare (log-sum-exp), oppure si aggiungono rumori Gumbel e si prende l'argmax (Gumbel trick).

## Definizione / enunciato
Nel campionamento di $z_i\mid\dots\sim\mathrm{Discrete}\bigl(\frac{\pi_1g_1}{\sum_k\pi_kg_k},\dots\bigr)$ molti $\log(\pi_kg_k)$ possono essere numeri negativi molto grandi in valore assoluto: $\pi_jg_j$ va in underflow e viene posto uguale a 0. Si assume noto $\log(g_k)$, generalmente facile.

**Log-sum-exp**: se il massimo di $(\log(\pi_1g_1),\dots,\log(\pi_Lg_L))$ è l'elemento $l$,
$$\frac{\pi_jg_j}{\sum_k\pi_kg_k}=\frac{\exp(\log(\pi_jg_j)-\log(\pi_lg_l))}{\sum_{k=1}^L\exp(\log(\pi_kg_k)-\log(\pi_lg_l))},$$
o, in forma ancora più stabile,
$$=\exp\Bigl(\log(\pi_jg_j)-\log(\pi_lg_l)-\log\Bigl(\sum_{k=1}^L\exp(\log(\pi_kg_k)-\log(\pi_lg_l))\Bigr)\Bigr).$$

## Formule chiave
**Gumbel trick**: non richiede la costante di normalizzazione. Si campionano $x_k\sim\mathrm{Gumbel}(0,1)$, $k=1,\dots,L$, e si pone
$$z_i=\operatorname{argmax}_k(\log(\pi_kg_k)+x_k);$$
si può dimostrare che questo valore proviene da $\mathrm{Discrete}\bigl(\frac{\pi_1g_1}{\sum_k\pi_kg_k},\dots,\frac{\pi_Lg_L}{\sum_k\pi_kg_k}\bigr)$.

## Intuizione
Sottrarre il massimo non cambia i rapporti ma porta il termine più grande a $e^0=1$, così il denominatore non può annullarsi. Il Gumbel trick trasforma il campionamento in un'ottimizzazione su valori perturbati, lavorando sempre in scala log.

## Come si usa
Nel Gibbs dei modelli mistura e degli HMM, per ogni $i$: si calcolano $\log\pi_k+\log g_k$, poi uno dei due trucchi. Nel notebook del corso la ricorsione forward dell'HMM è implementata "in scala log" per lo stesso motivo.

## Nei corsi
- **Statistica computazionale** (magistrale): "Stima Bayesiana" dei modelli mistura. Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 17-19); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (forward in scala log).

## Prerequisiti
- [[Modello mistura finita]]: full conditional di $z_i$

## Collegati
- [[Softmax e cross-entropy]]: la normalizzazione $\exp(a_j)/\sum_k\exp(a_k)$ è una softmax
- [[Numeri di macchina]]: underflow in virgola mobile
- [[Hidden Markov model]]: stesso problema nelle full conditional degli stati
