---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [bull spread, bear spread, vertical spread, spread verticale, spread con opzioni, option spread, bull spread con call, bull spread con put]
tags: [competenza, area/finanza]
---

# Bull e bear spread

> Strategie con due opzioni dello stesso tipo e strike diversi: il bull spread guadagna se il sottostante sale, il bear se scende, con guadagni e perdite limitati.

## Definizione / enunciato
Uno **spread** è l'acquisto e la vendita simultanei di opzioni dello stesso tipo, stesso sottostante e scadenza, strike diversi $K_1<K_2$ (def. c08-spread): **bull** = lungo in $K_1$, corto in $K_2$; **bear** = l'opposto.

**Payoff e flusso iniziale** (prop. c08-bull-bear):

| | $S_T\le K_1$ | $K_1<S_T<K_2$ | $S_T\ge K_2$ | flusso in 0 |
|---|---|---|---|---|
| bull con call | $0$ | $S_T-K_1$ | $K_2-K_1$ | $-(c_1-c_2)\le0$ |
| bull con put | $K_1-K_2$ | $S_T-K_2$ | $0$ | $+(p_2-p_1)\ge0$ |
| bear con call | $0$ | $K_1-S_T$ | $K_1-K_2$ | $+(c_1-c_2)\ge0$ |
| bear con put | $K_2-K_1$ | $K_2-S_T$ | $0$ | $-(p_2-p_1)\le0$ |

Il profitto è payoff + flusso iniziale.

## Formule chiave
Segni del flusso iniziale dalla monotonia nello strike: $c_1\ge c_2$, $p_1\le p_2$.

## Intuizione
Lo spread rinuncia al guadagno oltre $K_2$ (bull con call) in cambio di un costo minore. Il bull con call costa, quello con put si costruisce incassando un premio netto. Il pareggio è lo strike alto meno il premio netto.

## Come si usa
Esempio del libro: due call a sei mesi con strike 50 e 55 a $9.00$ e $3.50$, $r=5\%$: la monotonia è rispettata, ma $c_1-c_2=5.50>(K_2-K_1)e^{-rT}=4.8765$, cioè il bull spread costa più del valore attuale del suo payoff massimo. Si vende lo spread (vendo la call 50, compro la 55) e si investono 5.50: a scadenza $5.6392$ coprono sempre il payoff (al più 5), guadagno minimo $0.6392$. Tabelle di profitto: si scrivono per intervalli di $S_T$ separati dagli strike. La probabilità di profitto, con il sottostante GBM, si calcola con la legge di $S_T$ sotto la misura reale.

## Nei corsi
- **Financial engineering** (magistrale): cap. 8 §Spread, def. c08-spread, lem. c08-monotonia, prop. c08-bull-bear, es. c08-bull-put. Fonti: `Libri/Financial engineering/capitoli/cap08.tex`; nota di esercitazione `magistrale/Financial engineering/esercitazioni/Introduction_Serie5_ITA.pdf` (tabelle di payoff).

## Prerequisiti
- [[Opzioni call e put]]: componenti dello spread

## Porta a
- [[Butterfly spread]]: combinazione di un bull e un bear spread

## Collegati
- [[Straddle e strangle]]: combinazioni di tipi diversi
- [[Limiti di prezzo delle opzioni]]: lo spread costa al più $(K_2-K_1)e^{-rT}$
- [[Probabilità di esercizio di un'opzione]]: probabilità di profitto sotto la misura reale
