---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [simple and compound interest, interesse semplice, interesse composto, capitalizzazione semplice, capitalizzazione composta, tassi equivalenti, tasso periodale, tasso nominale, tasso effettivo, tasso annuo nominale convertibile, montante, equazione del valore]
tags: [competenza, area/finanza]
---

# Capitalizzazione semplice e composta

> Leggi che danno il montante di un capitale nel tempo e, all'inverso, il valore attuale di un importo futuro; fissano le convenzioni sui tassi usate in tutto il corso.

## Definizione / enunciato
- **Capitalizzazione semplice** al tasso annuo $r$: interesse $I(t)=Prt$, montante $A(t)=P(1+rt)$; valore attuale di $N(T)$: $P=N(T)/(1+rT)$ (fattore di sconto $1/(1+rT)$).
- **Capitalizzazione composta**: $A(T)=P(1+r)^T$, valore attuale $N(T)(1+r)^{-T}$, anche per $T$ non intero.
- **Tassi equivalenti** (prop. c02-tassi-equivalenti): il tasso periodale $r_n$ (un $n$-esimo d'anno) è equivalente a $r$ se e solo se $(1+r_n)^n=1+r$; allora i montanti coincidono su ogni orizzonte.
- **Tasso nominale** convertibile $n$ volte $j_n=n\,r_n$; il tasso annuo equivalente $r$ è il **tasso effettivo**.

## Formule chiave
$$r_n=\sqrt[n]{1+r}-1,\qquad r=\Big(1+\frac{j_n}{n}\Big)^n-1,\qquad A(m)=P\Big(1+\frac{j_n}{n}\Big)^{nm}.$$
Equazione del valore: un prestito è equo se il valore attuale dei rimborsi è uguale alla somma prestata, $VA(0)=\sum_kF_k(1+r)^{-t_k}$.

## Intuizione
In regime composto gli interessi maturati fruttano a loro volta: per ottenere lo stesso tasso effettivo basta un tasso nominale più basso. La divisione $r/n$ vale solo in capitalizzazione semplice.

## Come si usa
Esempi del libro: 6% effettivo dà $r_3=\sqrt[3]{1.06}-1=1.9613\%$ a quadrimestre e $j_3=5.884\%$; 8% nominale semestrale dà $r=1.04^2-1=8.16\%$ effettivo. Prestito di 3000 rimborsato con 500 a un anno, $X$ a tre e 800 a quattro anni al 5%: $X=2159.72$. Il rendimento di un deposito di 61 giorni ($9000\to9020$) è $1.33\%$ annuo in capitalizzazione semplice, ma $0.22\%$ nel periodo: non confonderli. Prima di ogni formula: in quale convenzione è dato il tasso?

## Nei corsi
- **Financial engineering** (magistrale): cap. 2, def. c02-capitalizzazione-semplice, c02-capitalizzazione-composta, c02-tasso-nominale, prop. c02-tassi-equivalenti. Fonti: `Libri/Financial engineering/capitoli/cap02.tex` §§Interesse semplice, Interesse composto; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/05 - lez 26 febbraio - valore nel tempo del denaro.pdf`.

## Porta a
- [[Capitalizzazione continua]]: limite per frequenza di capitalizzazione infinita
- [[Valore attuale di una rendita]]: equazione del valore con rate uguali
- [[Zero-coupon bond]]: il prezzo è un fattore di sconto
- [[Modello binomiale a un periodo]]: conto in banca $B(t)=(1+r)^t$

## Collegati
- [[Rendimenti logaritmici]]: rendimento lineare e logaritmico di un investimento
