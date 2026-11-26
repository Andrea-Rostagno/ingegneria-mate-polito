---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [ZCB, zero coupon bond, obbligazione senza cedole, titolo a sconto, fattore di sconto, discount factor, "B(t,T)", conto in banca, bank account, vita residua]
tags: [competenza, area/finanza]
---

# Zero-coupon bond

> Titolo che paga un'unità monetaria alla scadenza $T$ e nient'altro: il suo prezzo $B(t,T)$ è il fattore di sconto, mattone di tutti i prezzi a reddito fisso.

## Definizione / enunciato
Uno **zero-coupon bond** con scadenza $T$ garantisce il pagamento di 1 in $T$, senza pagamenti intermedi (def. c02-zcb). Il prezzo all'istante $t\le T$ è $B(t,T)$, con $B(T,T)=1$; con nominale 100 il prezzo è $100\,B(t,T)$. $T-t$ è la **vita residua**. Il **conto in banca** (titolo non rischioso) $B(t)$, con $B(0)=1$, vale $e^{rt}$ o $(1+r)^t$.

## Formule chiave
Con tasso costante $r$ (capitalizzazione continua):
$$B(t,T)=e^{-r(T-t)},\qquad r=-\frac{\ln B(t,T)}{T-t}.$$

## Intuizione
Tenuto fino a scadenza, il rendimento di uno ZCB è noto oggi; venduto prima, dipende dal tasso futuro e quindi è rischioso: se i tassi scendono il prezzo sale. È il fenomeno che la duration misura. Un'obbligazione con cedole è un portafoglio di ZCB.

## Come si usa
Esempio del libro (Capiński-Zastawniak, es. 10.1-10.2): $B(0,12)=0.93$ (tempo in mesi), tasso implicito $y(0)=-\ln0.93=7.26\%$. Rivendendo dopo sei mesi, $R=\ln(B(6,12)/0.93)$: 3.63% se il tasso resta stabile (metà del tasso annuo, per l'additività dei rendimenti logaritmici), 4.13% se cala di 100 punti base, 3.13% se sale di 100 punti base.

## Nei corsi
- **Financial engineering** (magistrale): cap. 2 §Zero-coupon bond e conto in banca, def. c02-zcb, es. c02-zcb-vendita. Il riassunto scrive $P(0,T)$, il notebook $DF(T)$. Fonti: `Libri/Financial engineering/capitoli/cap02.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/06 - lez 27 febbraio - rendimento investimento.pdf`, `08 - 03 marzo b - Esempi 10.1 e 10.2.pdf`.

## Prerequisiti
- [[Capitalizzazione continua]]: sconto $e^{-r(T-t)}$
- [[Capitalizzazione semplice e composta]]: fattore di sconto in regime discreto

## Porta a
- [[Struttura a termine dei tassi]]: tassi zero dai prezzi degli ZCB
- [[Duration]]: la duration di uno ZCB è la scadenza
- [[Bootstrap della curva dei tassi]]: si ricavano i $B(0,T_k)$
- [[Modello per il tasso a breve]]: $B(t,T)$ come attesa sotto $\mathbb Q$

## Collegati
- [[Valore attuale di una rendita]]: somma di ZCB con lo stesso flusso
- [[Rendimenti logaritmici]]: rendimento dell'investimento in ZCB
