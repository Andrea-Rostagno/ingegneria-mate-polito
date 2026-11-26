---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["multi-item newsvendor", "newsvendor multi-item", "newsvendor con vincolo di budget", "newsvendor con vincolo di capacità", "capacitated newsvendor"]
tags: [competenza, area/ottimizzazione]
---

# Newsvendor multi-prodotto

> Più newsvendor che condividono un budget o uno spazio: dualizzando il vincolo, ogni articolo resta un problema a quantile, con livello di servizio ridotto dal prezzo ombra della risorsa.

## Definizione / enunciato
Per gli articoli $i\in[n]$ con domanda continua $D_i$ su $\mathbb R_+$, costi $c_i^u$, $c_i^o$ e consumo di risorsa $r_i$ (es. spazio a magazzino):
$$\max\sum_{i\in[n]}\mathbb E\big[\pi_i(q_i,D_i)\big]\quad\text{s.t. }\sum_{i\in[n]}r_iq_i\le B,\ \ q_i\ge0 .$$
Supponendo una soluzione interna ($q_i>0$) si associa al vincolo il moltiplicatore $\mu\ge0$ (forma di minimo):
$$\mathcal L(\mathbf q,\mu)=-\sum_i\mathbb E[\pi_i(q_i,D_i)]+\mu\Big(\sum_ir_iq_i-B\Big).$$

## Formule chiave
Condizione del primo ordine per ogni articolo, usando $\frac{d\mathbb E[\pi_i]}{dq_i}=c_i^u(1-F_i(q_i))-c_i^oF_i(q_i)$:
$$F_i(q_i^*)=\frac{c_i^u-\mu r_i}{c_i^u+c_i^o},\qquad i\in[n].$$
Con $\mu=0$ il vincolo non è attivo e il problema si spezza in $n$ newsvendor standard.

## Intuizione
Il moltiplicatore $\mu$ è un prezzo della risorsa: ogni unità ordinata "paga" $\mu r_i$ in più sull'underage, quindi gli articoli che consumano molta risorsa ricevono un livello di servizio più basso. Fissato $\mu$, i problemi sono indipendenti: è l'esempio più semplice di decomposizione duale (price-directed).

## Come si usa
Si cerca il $\mu$ per cui il vincolo di budget è attivo, per esempio per bisezione su $\mu$, ricalcolando ogni volta i quantili; serve cautela quando il livello di servizio $c_i^u-\mu r_i$ diventa negativo (le slide rimandano a Brandimarte-Zotteri, 2007).

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): esempio della parte "Dual (price-directed) decomposition". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 12-13).

## Prerequisiti
- [[Problema del newsvendor]]: condizione del primo ordine per singolo articolo
- [[Moltiplicatori di Lagrange]]: dualizzazione del vincolo di budget
- [[Prezzo ombra]]: interpretazione di $\mu$

## Collegati
- [[Rilassamento lagrangiano]]: stessa logica di decomposizione duale
- [[Teorema degli zeri]]: la bisezione cerca il moltiplicatore che rende attivo il budget
