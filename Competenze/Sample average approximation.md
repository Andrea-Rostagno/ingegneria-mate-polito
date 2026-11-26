---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["SAA", "approssimazione con media campionaria", "approssimazione per scenari", "scenario-based approximation", "assemble-to-order", "ATO", "modello assemble-to-order", "fattore gozinto"]
tags: [competenza, area/ottimizzazione]
---

# Sample average approximation

> Si sostituisce il valore atteso del ricorso con la media su un insieme finito di scenari campionati: un integrale difficile diventa un LP grande ma risolubile.

## Definizione / enunciato
Dato un insieme di scenari $\mathcal S=\{1,\dots,S\}$ con probabilità $\pi_s$ (per semplicità $1/S$, se campionati), il problema $\min_{\mathbf x}\mathbf c^T\mathbf x+\mathbb E[Q(\mathbf x,\xi)]$ è approssimato da
$$\min_{\mathbf x,\mathbf y_s}\ \mathbf c^T\mathbf x+\sum_{s\in\mathcal S}\pi_s\mathbf q_s^T\mathbf y_s\quad\text{s.t. }A\mathbf x=\mathbf b,\ T_s\mathbf x+W_s\mathbf y_s=\mathbf h_s,\ \mathbf x,\mathbf y_s\ge\mathbf 0 .$$

## Formule chiave
**Modello assemble-to-order** (componenti $i\in I$ con costo $C_i$, prodotti $j\in J$ con prezzo $P_j$, macchine $m$ con disponibilità $L_m$ e tempi $T_{im}$, fattore gozinto $G_{ij}$, domanda $d_{js}$ nello scenario $s$):
$$\max\ -\sum_iC_ix_i+\sum_s\pi_s\sum_jP_jy_{js}$$
$$\text{s.t. }\sum_iT_{im}x_i\le L_m,\quad y_{js}\le d_{js},\quad \sum_jG_{ij}y_{js}\le x_i,\quad y_{js},x_i\ge0 .$$
Si producono i componenti prima di vedere la domanda e si assemblano i prodotti dopo.

## Intuizione
L'ATO, a differenza del newsvendor, può adattarsi: rinvia la differenziazione del prodotto. Interessano solo le decisioni di primo stadio $\mathbf x$; le $\mathbf y_s$ servono a valutarle. Restano due domande: quanti scenari servono per una buona approssimazione, e conviene davvero modellare la stocasticità?

## Come si usa
Esempio delle lezioni: pizzeria con due pizze (Margherita, Quattro stagioni) e tre ingredienti (impasto, salsa, verdure), $C=[1,1,3]$ €, $P=[6,8.5]$ €, $T=[0.5,0.25,0.25]$ h, $L=6$ h, tre scenari di domanda con probabilità 0.3, 0.1, 0.6. La qualità dell'approssimazione si controlla con la stabilità in-sample e out-of-sample.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Assembly To Order Model" e approssimazione campionaria. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 30-35).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: il problema da approssimare
- [[Metodo Monte Carlo]]: generazione degli scenari e media campionaria

## Porta a
- [[Stabilità in-sample e out-of-sample]]: scelta del numero di scenari
- [[Metodo L-shaped]]: soluzione del modello a scenari per decomposizione

## Collegati
- [[Legge dei grandi numeri]]: la media sugli scenari converge al valore atteso
- [[Mix ottimo di produzione]]: versione deterministica con vincoli di capacità
