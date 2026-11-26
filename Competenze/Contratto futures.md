---
tipo: competenza
area: finanza
corsi: [Financial engineering, Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [futures contract, futures, prezzo futures, "f(t,T)", mark-to-market, liquidazione giornaliera, margine iniziale, margine di mantenimento, margin call, conto margini, camera di compensazione, clearing house]
tags: [competenza, area/finanza]
---

# Contratto futures

> Forward standardizzato e negoziato in borsa, liquidato giorno per giorno attraverso un conto margini; con tassi deterministici ha lo stesso prezzo del forward.

## Definizione / enunciato
Un **futures** con scadenza $T$ è un accordo per comprare o vendere un'attività in $T$ a un prezzo stabilito, **standardizzato** (sottostante, qualità, dimensione, consegna, quotazione, limiti) e con la **camera di compensazione** come controparte di entrambe le parti (def. c05-futures). È **liquidato giornalmente** (mark-to-market): alla fine del giorno $n$ la parte long riceve $f(n,T)-f(n-1,T)$ (la short l'opposto). In $T$: $f(T,T)=S(T)$.

**Margini** (def. c05-margini): margine iniziale all'apertura; il saldo si aggiorna ogni giorno; sotto il **margine di mantenimento** scatta la **margin call** (ripristino del margine iniziale), altrimenti la posizione viene chiusa; l'eccedenza sul margine iniziale si può prelevare.

**Prezzo futures e forward** (prop. c05-futures-forward): con tasso privo di rischio deterministico $f(0,T)=F(0,T)$.

## Formule chiave
$$\sum_{n}\big[f(n,T)-f(n-1,T)\big]=f(N,T)-f(0,T).$$

## Intuizione
Il mark-to-market chiude e riscrive il contratto ogni giorno al nuovo prezzo, eliminando il rischio di controparte; la somma dei pagamenti è comunque la variazione totale del prezzo futures. Il conto margini crea però problemi di liquidità.

## Come si usa
Esempio del libro (Capiński-Zastawniak 6.1): long a $f(0,T)=140$, margine 10%, mantenimento 5%, prezzi 138, 130, 140, 150. Giorno 2: saldo 4 sotto il mantenimento 6.5, margin call di 9; poi prelievi di 9 e 9 e chiusura a 15. Totale $-14-9+9+9+15=10=150-140$. Fisco: con chiusura a cavallo d'anno lo speculatore è tassato per competenza (800 e 1400 \$), l'hedger tutto alla chiusura (2200 \$). Negli esercizi in stile Hull i margini sono importi fissi per contratto.

## Nei corsi
- **Financial engineering** (magistrale): cap. 5 §§Futures, Aspetti pratici; def. c05-futures, c05-margini, prop. c05-futures-forward. Fonti: `Libri/Financial engineering/capitoli/cap05.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/17 - lez 10 marzo a - esempio margini futures.pdf`, `19 - 10 marzo c - Futures markets-Italiano.pdf`.
- **Blockchain e criptoeconomia** (magistrale): future su Bitcoin, i primi CBOE (10/12/2017) e CME (17/12/2017), cash-settled. Esempi numerici delle slide con future a 105.000 euro e spot 100.000: long, long a leva 2 con margine 52.500, short. Fonte: `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 122-126).

## Prerequisiti
- [[Contratto forward]]: il futures ne è la versione di borsa
- [[Prezzo forward]]: coincide con il prezzo futures

## Porta a
- [[Rapporto di copertura a varianza minima]]: copertura con futures e rischio di base
- [[Strumenti finanziari su Bitcoin]]: future cash-settled su BTC, long, short e leva (Blockchain e criptoeconomia)

## Collegati
- [[Opzioni call e put]]: altro derivato negoziato in borsa
