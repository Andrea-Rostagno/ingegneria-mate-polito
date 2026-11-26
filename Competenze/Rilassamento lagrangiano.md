---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["Lagrangian relaxation", "decomposizione duale", "dual decomposition", "euristiche duali", "dual heuristics", "decomposizione lagrangiana", "procedure di repair"]
tags: [competenza, area/ottimizzazione]
---

# Rilassamento lagrangiano

> Schema algoritmico che dualizza i vincoli complicanti, risolve il problema rilassato (spesso decomponibile) e aggiorna i moltiplicatori con il subgradiente; dà bound e, con procedure di repair, buone soluzioni ammissibili.

## Definizione / enunciato
1. Scegli $\boldsymbol\mu^{(0)}\ge\mathbf 0$, $k\leftarrow0$.
2. Risolvi il problema rilassato con moltiplicatori $\boldsymbol\mu^{(k)}$, ottenendo $\hat{\mathbf x}^{(k)}$.
3. Aggiorna lungo il subgradiente $\mathbf g(\hat{\mathbf x}^{(k)})$ con proiezione:
$$\boldsymbol\mu^{(k+1)}=\max\big\{\mathbf 0,\ \boldsymbol\mu^{(k)}+\alpha^{(k)}\mathbf g(\hat{\mathbf x}^{(k)})\big\},$$
poi $k\leftarrow k+1$ e torna al passo 2.

## Formule chiave
**Decomposizione duale** di $\max\sum_{j=1}^nf_j(x_j)$ s.t. $\sum_jx_j\le b$, $x_j\ge0$ (risorsa $b$ ripartita fra $n$ divisioni):
$$w(\mu)=\mu b+\sum_{j=1}^n\max_{x_j\ge0}\{f_j(x_j)-\mu x_j\},\qquad\mu^{(k+1)}=\max\Big\{0,\ \mu^{(k)}+\alpha^{(k)}\Big(\sum_j\hat x_j^{(k)}-b\Big)\Big\}.$$

## Intuizione
Il vincolo di budget fa interagire le divisioni; con un prezzo ombra $\mu$ ogni divisione massimizza da sola il suo profitto $\pi_j=f_j(x_j)-\mu x_j$, e un coordinatore (che minimizza la funzione duale) aggiusta il prezzo come in una legge di domanda e offerta: lo alza se il budget è superato, lo abbassa altrimenti. Se con $\mu=0$ il budget è rispettato, il vincolo non è attivo.

## Come si usa
È solo uno schema di principio (non specifica il passo $\alpha^{(k)}$). Usi: **euristiche duali** (dalla soluzione rilassata, quasi ammissibile quando i prezzi sono vicini a quelli ideali, si ricava una soluzione ammissibile con procedure di repair) e **lower bound** nei nodi del branch and bound. Conviene quando i sottoproblemi sono molto più semplici del primale o si possono risolvere in parallelo; l'esperienza computazionale conferma l'idea per molti problemi decomponibili.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 49-54); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 41).
- **Ottimizzazione in condizione di incertezza** (magistrale): **decomposizione duale (price-directed)** di $\max\sum_if_i(x_i)$ s.t. $\sum_ig_i(x_i)\le b$, $x_i\in S_i$: con $\mu\ge0$ il lagrangiano $\sum_i[f_i(x_i)-\mu g_i(x_i)]+\mu b$ si separa in sottoproblemi "profitto meno costo della risorsa", $\sum_ig_i(x_i^*)-b$ è un subgradiente della funzione duale (prezzo da alzare se il budget è superato), schema domanda-offerta; può convergere male, ma dà euristiche duali. Applicazioni: newsvendor multi-prodotto e lot-sizing capacitato multi-articolo (con $\mu_{mt}$ sulle capacità si ottengono problemi uncapacitated polinomiali per articolo, ma vale solo la dualità debole). Lagrangiano aumentato $f+\sum_i\lambda_ih_i+\sigma\sum_ih_i^2$ come base del progressive hedging. Le slide del capitolo 6 CLUT (decomposizione duale e interpretazione economica) sono incluse anche nel materiale di questo corso. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 7-15); `magistrale/Ottimizzazione in condizione di incertezza/08 - (Capitolo 6 libro CLUT di Ricerca Operativa) RO_Slide_Chap6.pdf` (p. 49-54).

## Prerequisiti
- [[Dualità lagrangiana]]: funzione duale e suoi subgradienti
- [[Metodo del subgradiente]]: aggiornamento dei moltiplicatori

## Porta a
- [[Algoritmo branch and bound]]: lower bound alternativi al rilassamento continuo
- [[Progressive hedging]]: lagrangiano aumentato sui vincoli di non anticipatività (Ottimizzazione in condizione di incertezza)
- [[Newsvendor multi-prodotto]]: decomposizione duale di un vincolo di budget (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Prezzo ombra]]: il moltiplicatore coordina le divisioni
- [[Teorema di dualità forte]]: condizione sufficiente che giustifica le euristiche duali
