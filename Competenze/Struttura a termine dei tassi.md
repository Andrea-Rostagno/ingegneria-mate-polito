---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [term structure of interest rates, struttura per scadenza, curva dei tassi zero, zero curve, tassi spot, tasso zero, tasso a pronti, yield curve, "y(t,T)"]
tags: [competenza, area/finanza]
---

# Struttura a termine dei tassi

> La funzione che associa a ogni scadenza il tasso zero implicito nei prezzi degli ZCB; con essa si prezza qualunque flusso certo.

## Definizione / enunciato
Il **tasso zero** in $t$ per la scadenza $T>t$ è $y(t,T)$ tale che (def. c04-struttura-termine)
$$B(t,T)=e^{-y(t,T)(T-t)},\qquad y(t,T)=-\frac{\ln B(t,T)}{T-t}.$$
La funzione $(t,T)\mapsto y(t,T)$ è la **struttura a termine**; i tassi osservati oggi $y(0,T)$ sono i **tassi spot**, il loro grafico la **curva dei tassi zero** (crescente, piatta, invertita, a gobba).

**Non arbitraggio con struttura deterministica** (prop. c04-zcb-prodotto): per $0<t<T$
$$B(0,T)=B(0,t)\,B(t,T).$$
I dati la smentiscono: i tassi futuri sono aleatori.

## Formule chiave
Prezzo di un'obbligazione con la curva: $B=\sum_ic_ie^{-y(0,t_i)t_i}$ (ogni flusso col proprio tasso).

## Intuizione
Non esiste "un" tasso: ogni scadenza ha il suo. Lo yield di un'obbligazione è una media dei tassi zero pesata con i pesi della duration, sotto il tasso zero finale se la curva è crescente.

## Come si usa
Esempio del libro: tassi zero 2, 2.3, 2.7, 3.2% a 0.5-2 anni; Treasury bond da 1000 con cedole semestrali di 20: $B=19.80+19.55+19.21+956.77=1015.32$ e yield $3.18\%$, appena sotto il 3.2% a due anni. Per l'obbligazione a 2 anni dei dati di Hull lo yield $10.790\%$ coincide con la media dei tassi zero pesata con i pesi della duration.

## Nei corsi
- **Financial engineering** (magistrale): cap. 4 §§La struttura a termine, Non arbitraggio tra zero-coupon bond, Rendimento a scadenza contro tassi zero. Le Serie scrivono $r(0,t)$, il riassunto $R(0,T)$, $P(0,T)$. Fonti: `Libri/Financial engineering/capitoli/cap04.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/12 - lez 06 marzo a - struttura a termine yield.pdf`.

## Prerequisiti
- [[Zero-coupon bond]]: i tassi zero sono impliciti nei prezzi degli ZCB

## Porta a
- [[Tasso forward]]: tassi impliciti per periodi futuri
- [[Bootstrap della curva dei tassi]]: costruzione della curva dai prezzi
- [[Modello per il tasso a breve]]: curva generata da un modello stocastico

## Collegati
- [[Rendimento a scadenza]]: yield come media dei tassi zero
- [[Modello di Vasicek]]: forme della curva prodotte dal modello
