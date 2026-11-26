---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Jackson network, equazioni di traffico, traffic equations, forma prodotto, product form, code in tandem, tandem queues]
tags: [competenza, area/probabilita]
---

# Rete di Jackson

> Rete di code M/M/* con instradamento probabilistico: a regime le code sono indipendenti e la stazionaria è il prodotto delle stazionarie dei singoli nodi.

## Definizione / enunciato
Una rete di Jackson è formata da $m<\infty$ code M/M/*; ogni individuo è in fila in esattamente una coda e i clienti si comportano in modo indipendente. Inoltre
- gli arrivi esterni totali sono Poisson di tasso $a$; un arrivo entra nella coda $i$ con probabilità $p_{0i}$;
- chi lascia la coda $i$ va nella $j$ con probabilità $p_{ij}$, o esce dal sistema con probabilità $p_{i0}$;
- $\sum_{j=0}^m p_{ij}=1$ per $i=0,\dots,m$, $p_{00}=0$.

**Teorema.** La rete è ricorrente positiva se e solo se (1) l'equazione di traffico ha soluzione e (2) ogni coda $i$, con tasso di arrivo $\lambda_i$, è ricorrente positiva con stazionaria $\pi_i$. In tal caso l'unica stazionaria è in forma prodotto.

## Formule chiave
$$\lambda_i=a\,p_{0i}+\sum_{j=1}^m p_{ji}\lambda_j\quad(i=1,\dots,m),\qquad \pi(n_1,\dots,n_m)=\prod_{i=1}^m\pi_i(n_i).$$

## Intuizione
Thinning e sovrapposizione mantengono i flussi poissoniani; per Burke l'uscita a regime di ogni nodo è Poisson e indipendente dal suo stato. Quindi ogni nodo "vede" un ingresso Poisson di tasso $\lambda_i$ e i nodi sono indipendenti.

## Come si usa
**Tandem (ufficio postale).** Arrivi $\lambda$; una frazione $p_1$ compila documenti (M/M/$\infty$, tasso $\mu_1$), poi con probabilità $p_2$ va al server singolo (M/M/1, tasso $\mu_2$). Tasso al secondo nodo: $p_1p_2\lambda+(1-p_1)\lambda$; stazionaria se e solo se $\mu_2>p_1p_2\lambda+(1-p_1)\lambda$, e
$$\pi(n_1,n_2)=e^{-p_1\lambda/\mu_1}\frac{(p_1\lambda/\mu_1)^{n_1}}{n_1!}\Big(1-\frac{\lambda_2}{\mu_2}\Big)\Big(\frac{\lambda_2}{\mu_2}\Big)^{n_2},\quad \lambda_2=p_1p_2\lambda+(1-p_1)\lambda .$$
**Rete M/M/$\infty$ - M/M/$s$ - M/M/1.** Da $\lambda_1=ap_{01}+p_{21}\lambda_2$, $\lambda_2=p_{32}\lambda_3$, $\lambda_3=ap_{03}+p_{13}\lambda_1+p_{23}\lambda_2$ si ha $\lambda_3=a\frac{p_{03}+p_{13}p_{01}}{1-p_{32}(p_{13}p_{21}+p_{23})}$. Poi si impone $\lambda_2<s\mu_2$ e $\lambda_3<\mu_3$; il primo nodo è sempre stabile.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 9. Fonti: `magistrale/Processi stocastici/Lezione_15_10_11.pdf` (lezione 15), `riassunto_del_corso.tex` §Code markoviane e reti di Jackson (notazione: tassi effettivi $\gamma_i$, esterni $\lambda_i$, routing $r_{ji}$, $\gamma_i=\lambda_i+\sum_j\gamma_jr_{ji}$).

## Prerequisiti
- [[Teorema di Burke]]: indipendenza dei nodi in tandem
- [[Coda M-M-s]]: nodi della rete
- [[Thinning di Poisson]]: instradamento probabilistico dei clienti

## Porta a
- —

## Collegati
- —
