---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["newsvendor problem", "news-vendor problem", "problema del giornalaio", "venditore di giornali", "critical ratio", "rapporto critico", "costo di underage", "costo di overage", "underage cost", "overage cost"]
tags: [competenza, area/ottimizzazione]
---

# Problema del newsvendor

> Quanto ordinare prima di osservare una domanda aleatoria: la quantità che massimizza il profitto atteso è un quantile della domanda, non la sua media.

## Definizione / enunciato
Si acquista una quantità $q$ al costo unitario $c$, si vende al prezzo $p>c$ e l'invenduto ha valore di recupero $r<c$. Il profitto per domanda $d$ è
$$\pi(q,d)=-cq+p\min(q,d)+r(q-d)^+=c_u\min(q,d)-c_o(q-d)^+,$$
con costo di **underage** $c_u=p-c$ e di **overage** $c_o=c-r$. Si massimizza $\mathbb E[\pi(q,D)]$ (neutralità al rischio).

## Formule chiave
Con densità $f_D$, regola di Leibniz e condizione del primo ordine:
$$\frac{d\,\mathbb E[\pi(q,D)]}{dq}=c_u\big(1-F_D(q)\big)-c_oF_D(q)=0\ \Rightarrow\ F_D(q^*)=\frac{c_u}{c_u+c_o},$$
con $\frac{d^2}{dq^2}\mathbb E[\pi]=-(c_u+c_o)f_D(q)<0$. Se $c_u=c_o$, $q^*$ è la mediana. Nella versione delle lezioni ($r=0$, profitto $p\min[D,x]-cx$) si ottiene $x^*=F^{-1}\big(\frac{p-c}{p}\big)$. Massimizzare il profitto equivale a minimizzare la penalità attesa
$$\mathbb E[C(q,D)]=c_o\int_0^q(q-x)f_D(x)\,dx+c_u\int_q^{+\infty}(x-q)f_D(x)\,dx,\qquad \mathbb E[\pi]=c_u\mu-\mathbb E[C].$$
Con domanda discreta di scenari $d_s$ e probabilità $\pi_s$ è l'LP $\max -cx+p\sum_s\pi_sy_s$, $y_s\le d_s$, $y_s\le x$, $x,y_s\ge0$.

## Intuizione
Il quantile ottimo bilancia il costo marginale di un'unità in più (rischio di overage) con il guadagno marginale (evitare l'underage): $q^*$ è alto quando $c_u$ è grande rispetto a $c_o$. È il caso statico per eccellenza: una sola decisione, nessun vincolo, nessun adattamento.

## Come si usa
Esempio delle slide: domanda uniforme discreta su $\{5,\dots,15\}$ ($\mathbb E[D]=10$), $c=20$, $p=25$, $r=0$. Dalla tabella $\mathbb E[\pi(q,D)]$ vale 25.00, 27.73, **28.18**, 26.36, ... per $q=5,6,7,8$ e 15.91 per $q=10$: l'ottimo è $q^*=7<\mathbb E[D]$, perché il margine (5) è piccolo rispetto alla perdita sull'invenduto (20). Nelle lezioni l'esempio $p=10$, $c=4$, domanda 50, 100, 150 equiprobabile dà $(p-c)/p=0.6$ e $x^*=100$.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): modello statico di riferimento; nelle lezioni è presentato come problema a due stadi e riusato per indicatori (EVPI, VSS), stabilità e progressive hedging. Nella lezione 1 il segno della derivata seconda $-pf(x)\le0$ è commentato come "minimo" (refuso: è un massimo). Fonti: `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 5-6, 8-11, 14-16); `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 3-5, 62).

## Prerequisiti
- [[Ottimizzazione sotto incertezza]]: è la formulazione con valore atteso
- [[Trasformazione integrale di probabilità]]: la soluzione è un quantile $F^{-1}$

## Porta a
- [[Funzione di perdita normale standard]]: profitto atteso con domanda normale
- [[Newsvendor multi-prodotto]]: più articoli con vincolo di budget
- [[Programmazione stocastica a due stadi]]: acquisto prima, vendita dopo la domanda
- [[Valore della soluzione stocastica]]: esempio di calcolo degli indicatori

## Collegati
- [[Modello EOQ]]: modello di scorte deterministico, senza incertezza
- [[Politica (s,S)]]: caso dinamico con più occasioni di riordino
