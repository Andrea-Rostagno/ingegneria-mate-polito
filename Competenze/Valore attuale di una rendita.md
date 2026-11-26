---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [annuity, present value of an annuity, rendita, rendita posticipata, rendita perpetua, perpetuity, perpetuità, valore attuale]
tags: [competenza, area/finanza]
---

# Valore attuale di una rendita

> Formula chiusa per il valore attuale di $m$ rate uguali, e il suo limite per $m\to\infty$ (rendita perpetua).

## Definizione / enunciato
Una **rendita** di $m$ rate posticipate uguali a $CF$, pagate alla fine di ciascuno degli $m$ periodi, ha al tasso periodale $r>0$ valore attuale (prop. c02-rendita)
$$VA=\sum_{k=1}^m\frac{CF}{(1+r)^k}=CF\,\frac{1-(1+r)^{-m}}{r}.$$
Per $m\to\infty$ (**rendita perpetua**) $VA=CF/r$.

## Formule chiave
$$VA=CF\,\frac{1-(1+r)^{-m}}{r},\qquad VA_\infty=\frac{CF}{r}.$$
La dimostrazione è la somma della serie geometrica di ragione $(1+r)^{-1}$.

## Intuizione
Le rate lontane hanno valore attuale trascurabile: oltre qualche secolo una rendita finita vale praticamente quanto la perpetua. Il valore attuale di una rendita di 1 a ogni data di cedola è anche il denominatore $A$ della formula del par yield.

## Come si usa
Esempio del libro (contratto di Guinness, 1759): canone di 45 sterline l'anno per 9000 anni al 2% effettivo. Il contratto valeva $45\frac{1-1.02^{-9000}}{0.02}$; poiché $1.02^{-9000}\approx10^{-78}$, coincide con la perpetua $45/0.02=2250$ sterline. Le 45 sterline del 1759 capitalizzate per 266 anni valgono $45\cdot1.02^{266}=8726.86$ nel 2025.

## Nei corsi
- **Financial engineering** (magistrale): cap. 2 §Equazione del valore e rendite, prop. c02-rendita, es. c02-guinness. Fonti: `Libri/Financial engineering/capitoli/cap02.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/05 - lez 26 febbraio - valore nel tempo del denaro.pdf`.

## Prerequisiti
- [[Capitalizzazione semplice e composta]]: sconto in regime composto

## Porta a
- [[Rendimento a scadenza]]: il par yield usa la rendita delle cedole

## Collegati
- [[Zero-coupon bond]]: ogni rata è uno ZCB
