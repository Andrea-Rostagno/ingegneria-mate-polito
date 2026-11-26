---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [yield to maturity, YTM, yield, rendimento effettivo a scadenza, par yield, obbligazione con cedole, coupon bond, prezzo in funzione del rendimento, B(y)]
tags: [competenza, area/finanza]
---

# Rendimento a scadenza

> Il tasso unico $y$ che, scontando tutti i flussi di un'obbligazione, ne riproduce il prezzo di mercato.

## Definizione / enunciato
Un'**obbligazione con cedole** con scadenza $T$ e nominale $N$ paga i flussi $c_1,\dots,c_n$ alle date $t_1<\dots<t_n=T$, con $c_n$ = ultima cedola + $N$ (def. c03-obbligazione-cedole). Con la curva dei tassi zero il prezzo è $B=\sum_ic_ie^{-y(0,t_i)t_i}$.

Il **rendimento a scadenza** $y$ (capitalizzazione continua) risolve (def. c03-yield)
$$B_{\text{mercato}}=B(y),\qquad B(y)=\sum_{i=1}^nc_ie^{-yt_i}.$$
**Monotonia** (prop. c03-monotonia): con flussi positivi $B(y)$ è strettamente decrescente e strettamente convessa, $B(0)=\sum c_i$, $B\to+\infty$ per $y\to-\infty$ e $B\to0$ per $y\to+\infty$: per ogni prezzo positivo esiste un unico $y$, positivo se e solo se $B_{\text{mercato}}<\sum_ic_i$.

**Par yield** (def. c03-par-yield): la cedola $c$ per cui il prezzo è pari al nominale; con $m$ cedole l'anno, $d=B(0,T)$, $A=\sum_iB(0,t_i)$: $c=(100-100d)m/A$.

**Il rendimento futuro non può essere noto** (prop. c03-yield-costante): se $y(t)$ fosse noto in $0$, il non arbitraggio imporrebbe $y(t)=y(0)$.

## Formule chiave
$$B(y)=\sum_{i=1}^nc_ie^{-yt_i},\qquad c=\frac{(100-100d)\,m}{A}.$$

## Intuizione
Lo yield è una media dei tassi zero pesata dai flussi (con i pesi della duration): sta tra i tassi zero, vicino a quello della scadenza finale che domina.

## Come si usa
Esempio del libro: tassi zero 5, 5.8, 6.4, 6.8% a 0.5-2 anni, cedola 6% semestrale: $B=98.39$; la bisezione su $[0,0.2]$ dà $y=6.762\%$; par yield $6.873\%$ con $A=3.7003$, $d=0.8728$. In MATLAB si usano `fzero`/`fsolve` (listato lst:c03-ytm, con il problema del rateo per cedole annuali).

## Nei corsi
- **Financial engineering** (magistrale): cap. 3 §§Obbligazioni con cedole, Rendimento a scadenza e par yield, Il rendimento non può essere noto. Fonti: `Libri/Financial engineering/capitoli/cap03.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/06 - lez 27 febbraio - rendimento investimento.pdf`, `07 - lez 03 marzo a - bond yield duration.pdf`; script `magistrale/Financial engineering/esercitazioni/Compute_Yield_to_Maturity.m` (solo come esempio).

## Prerequisiti
- [[Zero-coupon bond]]: obbligazione = portafoglio di ZCB
- [[Capitalizzazione continua]]: sconto $e^{-yt_i}$
- [[Valore attuale di una rendita]]: denominatore del par yield

## Porta a
- [[Duration]]: derivata logaritmica di $B(y)$
- [[Convessità di un'obbligazione]]: derivata seconda di $B(y)$

## Collegati
- [[Teorema degli zeri]]: esistenza e bisezione per $B(y)=B_{\text{mercato}}$
- [[Funzione convessa]]: $B(y)$ è convessa e decrescente
- [[Struttura a termine dei tassi]]: yield come media dei tassi zero
