---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [straddle, strangle, bottom straddle, top straddle, straddle corta, strangle corta, combinazione verticale, combinazioni di opzioni, option combinations]
tags: [competenza, area/finanza]
---

# Straddle e strangle

> Combinazioni di una call e una put: la versione lunga scommette su un forte movimento del sottostante in una direzione qualsiasi, la corta sulla sua stabilità.

## Definizione / enunciato
- **Straddle** lunga (def. c08-straddle): call lunga + put lunga con stesso $K$ e $T$; payoff $(S_T-K)^++(K-S_T)^+=|S_T-K|$, costo $c+p$, profitto $|S_T-K|-(c+p)$.
- **Strangle** lunga (def. c08-strangle): put lunga con strike $K_1$ + call lunga con strike $K_2>K_1$; payoff $(K_1-S_T)^++(S_T-K_2)^+$, nullo tra $K_1$ e $K_2$; costo $p+c$.
- Le versioni **corte** sono le posizioni opposte (si vendono entrambe le opzioni).

## Formule chiave
Pareggi: straddle $K\pm(c+p)$; strangle $K_1-(c+p)$ e $K_2+(c+p)$.

## Intuizione
La posizione lunga ha perdita massima pari al costo e guadagno illimitato; la corta incassa i premi e ha perdita illimitata per rialzi forti: è la scommessa su un mercato fermo (o su una volatilità implicita troppo alta). La strangle costa meno della straddle ma richiede un movimento più ampio.

## Come si usa
Esempi del libro: call e put con $K=60$ a 6 e 4: straddle lunga con costo 10, in perdita per $50<S_T<70$ (massimo $-10$ in 60); la straddle corta ha profitto $10-|S_T-60|$. Strangle corta: call $K=50$ e put $K=40$ vendute per 7 in tutto: profitto $S_T-33$, $7$, $57-S_T$ nei tre intervalli, positivo per $33<S_T<57$. Errore frequente: i segni del costo (lunga paga, corta incassa).

## Nei corsi
- **Financial engineering** (magistrale): cap. 8 §Combinazioni: straddle e strangle, def. c08-straddle, c08-strangle. Fonti: `Libri/Financial engineering/capitoli/cap08.tex`; nota di esercitazione `magistrale/Financial engineering/esercitazioni/Introduction_Serie5_ITA.pdf`.

## Prerequisiti
- [[Opzioni call e put]]: componenti della combinazione

## Collegati
- [[Bull e bear spread]]: strategie con opzioni dello stesso tipo
- [[Butterfly spread]]: profilo opposto alla straddle lunga
- [[Probabilità di esercizio di un'opzione]]: probabilità di profitto se il sottostante è un GBM
