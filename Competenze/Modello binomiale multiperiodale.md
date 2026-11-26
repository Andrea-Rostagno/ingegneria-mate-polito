---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [multi-period binomial model, albero binomiale, binomial tree, albero ricombinante, induzione all'indietro, backward induction, replica dinamica nell'albero, delta nell'albero, modello di Cox-Ross-Rubinstein discreto]
tags: [competenza, area/finanza]
---

# Modello binomiale multiperiodale

> Ripetendo il passo binomiale si ottiene un albero ricombinante in cui ogni derivato si prezza per induzione all'indietro e si replica ribilanciando a ogni nodo.

## Definizione / enunciato
$B(n+1)=(1+r)B(n)$, $S(n+1)=S(n)Z_{n+1}$ con $Z_n$ i.i.d., $\mathbb P(Z_n=u)=p_u$ (def. c10-binomiale). Nodo $(t;k)$: $S(t;k)=S_0u^kd^{t-k}$.
- **Legge del prezzo finale** (prop. c10-legge-ST): $\mathbb P(S(T)=S_0u^kd^{T-k})=\binom Tkp_u^kp_d^{T-k}$; i rendimenti logaritmici $\ln Z_n$ sono i.i.d.
- **Non arbitraggio e completezza** (prop. c10-non-arbitraggio, cor. c10-completo): privo di arbitraggio $\iff d<1+r<u$; allora $\mathbb Q$ è unica ($q_u$ a ogni passo) e ogni derivato, anche dipendente dal percorso, è replicabile.
- **Prezzo** (teo. c10-prezzo-binomiale): $V(T;k)=\varphi(S_0u^kd^{T-k})$,
$$V(t;k)=\frac1{1+r}\big[q_uV(t+1;k+1)+q_dV(t+1;k)\big],\qquad\Pi(0,X)=\frac1{(1+r)^T}\sum_{k=0}^T\binom Tkq_u^kq_d^{T-k}\varphi(S_0u^kd^{T-k}).$$
- **Replica nel nodo** (prop. c10-replica-nodo): $y=\frac{V(t+1;k+1)-V(t+1;k)}{S(t;k)(u-d)}$ azioni, $\bar x=\frac1{1+r}\frac{uV(t+1;k)-dV(t+1;k+1)}{u-d}$ in liquidità.
- **Delta nell'albero** (def. c10-delta-albero): $\Delta(t;k)=\frac{V(t+1;k+1)-V(t+1;k)}{S(t+1;k+1)-S(t+1;k)}=y(t+1;k)$.

## Formule chiave
"Delta in $t=1$" nei testi = $\Delta(0;0)$, il numero di azioni da tenere sul primo periodo.

## Intuizione
Il prezzo è il valore atteso scontato del payoff sotto $\mathbb Q$ (binomiale con $q_u$); la replica è dinamica: il numero di azioni insegue il prezzo, sale dopo un rialzo e scende dopo un ribasso.

## Come si usa
Esempio del libro (lezione): $S_0=80$, $u=1.5$, $d=0.5$, $r=0$, $T=3$, call $K=80$: $q_u=0.5$, nodi $V(2;\cdot)=100,5,0$, $V(1;\cdot)=52.5,2.5$, $c_0=27.5=220/8$; replica iniziale $\bar x=-22.5$, $y=5/8$. Sotto $\mathbb P$ ($p_u=0.6$) la probabilità di esercizio è 0.648, sotto $\mathbb Q$ 0.5. Asiatica a due periodi sullo stesso albero: 20, contro 25 della call europea (l'albero ricombinante non basta, servono i percorsi).

## Nei corsi
- **Financial engineering** (magistrale): cap. 10 §§Il modello, Prezzo per induzione all'indietro, Delta e copertura nell'albero. Fonti: `Libri/Financial engineering/capitoli/cap10.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/28 - lez 25 marzo a - modello binomiale multiperiodale.pdf`, `30 - lez 31 marzo a - replica opzioni in albero binomiale.pdf`, `32 - lez 01 aprile - delta hedging opzioni.pdf`.

## Prerequisiti
- [[Modello binomiale a un periodo]]: passo elementare
- [[Strategia autofinanziante]]: replica dinamica
- [[Mercato completo]]: unicità di $\mathbb Q$
- [[Distribuzione binomiale]]: numero di rialzi $\sim\mathrm{Bin}(T,p_u)$

## Porta a
- [[Parametri di Cox-Ross-Rubinstein]]: calibrazione e limite continuo
- [[Opzione americana]]: induzione all'indietro con confronto

## Collegati
- [[Opzione asiatica]]: payoff dipendente dal percorso
- [[Delta hedging]]: versione continua del delta
- [[Martingala]]: prezzo scontato $\mathbb Q$-martingala
