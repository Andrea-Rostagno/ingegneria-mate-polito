---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [risk-neutral measure, misura martingala equivalente, equivalent martingale measure, EMM, misura Q, probabilità neutrali al rischio, q_u, misura di rischio neutrale, mercato avverso al rischio]
tags: [competenza, area/finanza]
---

# Misura neutrale al rischio

> Una probabilità $\mathbb Q$, equivalente a quella reale, sotto cui i prezzi scontati dei titoli sono martingale: il prezzo di ogni derivato diventa un valore atteso scontato.

## Definizione / enunciato
Nel mercato a un periodo $\mathcal M=(B,S_1,\dots,S_n)$ con un numero finito di scenari, $\mathbb Q$ è una **misura martingala equivalente** (def. c09-misura-martingala) se
1. è **equivalente** a $\mathbb P$: $\mathbb Q(\omega)>0$ per ogni scenario con $\mathbb P(\omega)>0$ (tutte le componenti strettamente positive);
2. $S_i(0)=\mathbb E^{\mathbb Q}\big[S_i(1)/(1+r)\big]$ per ogni titolo rischioso.

**Binomiale a un periodo** (teo. c09-un-periodo): sono equivalenti (i) assenza di arbitraggio, (ii) $d<1+r<u$, (iii) esiste $\mathbb Q=(q_u,q_d)$ con $q_u,q_d>0$ e $\mathbb E^{\mathbb Q}[S(1)/(1+r)]=S_0$; se esiste è unica.

## Formule chiave
$$q_u=\frac{1+r-d}{u-d},\qquad\Pi(0,X)=\frac1{1+r}\mathbb E^{\mathbb Q}[\varphi(S(1))].$$
**Prezzi di stato**: il titolo elementare che paga 1 nello stato $j$ costa $\psi_j=q_j/(1+r)$, e $\sum_j\psi_j=1/(1+r)$.

## Intuizione
Sotto la misura reale un titolo rischioso rende in media più del tasso privo di rischio (mercato **avverso al rischio**); $\mathbb Q$ sposta peso verso gli scenari cattivi quanto basta a cancellare il premio per il rischio. Non è una previsione: è uno strumento di calcolo dei prezzi. Una "misura" con una componente nulla o negativa non è equivalente e segnala un arbitraggio.

## Come si usa
Esempio del libro: $S_0=100$, $u=1.2$, $d=0.8$, $r=1\%$, $p_u=0.6$: $q_u=0.525$, $q_d=0.475>p_d=0.4$; $\mathbb E^{\mathbb Q}[S(1)/1.01]=100$, mentre $\mathbb E^{\mathbb P}[S(1)/1.01]=102.97$. Prezzi di stato $\psi_u=0.5198$, $\psi_d=0.4703$; la call paga $20e_u$ e costa $20\psi_u=10.396$. In tempo continuo $\mathbb Q$ si ottiene con il teorema di Girsanov.

## Nei corsi
- **Financial engineering** (magistrale): cap. 9 §La misura neutrale al rischio, def. c09-misura-martingala, teo. c09-un-periodo; cap. 10 (unicità nel multiperiodale); cap. 16 (versione continua). Fonti: `Libri/Financial engineering/capitoli/cap09.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/27 - lez 24 marzo - modello binomiale uniperiodale.pdf`.

## Prerequisiti
- [[Modello binomiale a un periodo]]: dove si calcola $q_u$
- [[Martingala]]: prezzi scontati martingala

## Porta a
- [[Primo teorema fondamentale dell'asset pricing]]: esistenza di $\mathbb Q$ ⇔ non arbitraggio
- [[Mercato completo]]: unicità di $\mathbb Q$
- [[Teorema di Girsanov]]: costruzione di $\mathbb Q$ in tempo continuo
- [[Valutazione neutrale al rischio]]: prezzo come attesa sotto $\mathbb Q$

## Collegati
- [[Opportunità di arbitraggio]]: i prezzi degli stati normalizzati sono $\mathbb Q$
- [[Teorema di Radon-Nikodym]]: $q_j/p_j$ è la derivata di $\mathbb Q$ rispetto a $\mathbb P$
