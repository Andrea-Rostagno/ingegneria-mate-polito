---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [option price bounds, limiti di non arbitraggio, bounds sulle opzioni, limiti per la call, limiti per la put, limite inferiore della call, monotonia nello strike]
tags: [competenza, area/finanza]
---

# Limiti di prezzo delle opzioni

> Disuguaglianze che il prezzo di un'opzione deve rispettare per il solo non arbitraggio, senza alcun modello per il sottostante.

## Definizione / enunciato
Titolo senza dividendi, $r\ge0$:
- **call europea** (prop. c07-limiti-call): $\max\{S(0)-Ke^{-rT},0\}\le c\le S(0)$;
- **put europea** (prop. c07-limiti-put): $\max\{Ke^{-rT}-S(0),0\}\le p\le Ke^{-rT}$;
- **americane** (prop. c07-limiti-americane): $S(0)-K\le C^A-P^A\le S(0)-Ke^{-rT}$; con dividendi $S(0)-I-K\le C^A-P^A\le S(0)-Ke^{-rT}$;
- **monotonia nello strike** (lem. c08-monotonia): $K_1<K_2\Rightarrow c_1\ge c_2$, $p_1\le p_2$; inoltre il bull spread non può costare più di $(K_2-K_1)e^{-rT}$ e la butterfly costa sempre qualcosa (convessità in $K$).

## Formule chiave
$$(S_0-Ke^{-rT})^+\le c\le S_0,\qquad(Ke^{-rT}-S_0)^+\le p\le Ke^{-rT}.$$

## Intuizione
Il limite inferiore della call: il portafoglio call + $Ke^{-rT}$ in liquidità vale $\max(S_T,K)\ge S_T$, quindi costa almeno $S_0$. I limiti sono condizioni **necessarie**, non sufficienti: due prezzi che rispettano ciascuno i propri limiti possono violare insieme la parità.

## Come si usa
Esempi del libro: call a sei mesi, $S=30$, $K=28$, $r=6\%$: $2.83\le c\le30$; se quotasse 2.50 si compra la call, si vende l'azione e si investono 27.50, ottenendo almeno 0.34. Put a sei mesi, $S=37$, $K=40$, $r=5\%$: $2.01\le p\le39.01$. Put americana con $S=19$, $K=20$, $c=1$, $r=4\%$, 3 mesi: $1.80\le P^A\le2.00$. Spread troppo caro: call 50 e 55 a 9.00 e 3.50 con $c_1-c_2=5.50>4.8765$: si vende lo spread, guadagno minimo 0.6392.

## Nei corsi
- **Financial engineering** (magistrale): cap. 7 §Limiti di prezzo; cap. 8 lem. c08-monotonia. Fonti: `Libri/Financial engineering/capitoli/cap07.tex`, `cap08.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/26 - lez 20 marzo - put call parity e bounds.pdf`.

## Prerequisiti
- [[Opzioni call e put]]: payoff da confrontare
- [[Parità put-call]]: limiti della put dalla call
- [[Opportunità di arbitraggio]]: ogni violazione è un arbitraggio

## Porta a
- [[Opzione americana]]: la call americana non si esercita in anticipo

## Collegati
- [[Bull e bear spread]]: limite superiore del costo dello spread
- [[Formula di Black-Scholes]]: il prezzo BS sta nella regione ammissibile
