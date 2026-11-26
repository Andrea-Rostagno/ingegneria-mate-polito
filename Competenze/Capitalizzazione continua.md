---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [continuous compounding, capitalizzazione continua, tasso istantaneo, force of interest, tasso continuo equivalente, sconto continuo]
tags: [competenza, area/finanza]
---

# Capitalizzazione continua

> Regime in cui gli interessi maturano istante per istante: il montante cresce come $e^{rt}$; è la convenzione standard per forward, obbligazioni e modelli a tempo continuo.

## Definizione / enunciato
Al tasso istantaneo $r$ (*force of interest*) il montante di $P$ dopo $t$ anni è $A(t)=Pe^{rt}$ e il valore attuale di $N(t)$ è $VA(0)=N(t)e^{-rt}$. Si ottiene come limite della capitalizzazione composta con $n$ periodi l'anno: $(1+r/n)^{nt}\to e^{rt}$.

**Tasso continuo equivalente** (prop. c02-continuo-equivalente): $r$ è equivalente al tasso effettivo $r_e$ se e solo se $e^r=1+r_e$, e al nominale $j_m$ se e solo se
$$r=\ln(1+r_e),\qquad r=m\ln\Big(1+\frac{j_m}{m}\Big),\qquad j_m=m\big(e^{r/m}-1\big).$$

## Formule chiave
$$A(t)=Pe^{rt},\qquad VA(0)=N(t)e^{-rt},\qquad r_e=e^r-1 .$$

## Intuizione
Con lo stesso numero (6%) e 1000 euro per due anni si ha 1120 (semplice), 1123.60 (annuo), 1127.16 (mensile), 1127.50 (continuo): il continuo è il limite superiore della capitalizzazione composta. Il logaritmo trasforma il montante in una funzione lineare del tempo: per questo è legato ai rendimenti logaritmici.

## Come si usa
Esempio del libro: 10% continuo equivale a $j_2=2(e^{0.05}-1)=10.25\%$ nominale semestrale. Manhattan: 24 \$ del 1626 al 5% per 399 anni danno $24e^{19.95}=1.11\cdot10^{10}$ in continuo e $24\cdot1.05^{399}=6.84\cdot10^9$ in annuo. Nei forward ($F=S_0e^{rT}$), nelle obbligazioni ($B(y)=\sum c_ie^{-yt_i}$) e in Black-Scholes ($B(t)=e^{rt}$) il tasso è sempre continuo.

## Nei corsi
- **Financial engineering** (magistrale): cap. 2 §Capitalizzazione continua, def. c02-capitalizzazione-continua, prop. c02-continuo-equivalente, es. c02-frm, c02-manhattan. Fonti: `Libri/Financial engineering/capitoli/cap02.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/05 - lez 26 febbraio - valore nel tempo del denaro.pdf`, `10 - 03 marzo d - L4-PracticeQuestions_JH-proiettare Copia.pdf`.

## Prerequisiti
- [[Capitalizzazione semplice e composta]]: limite per frequenza infinita

## Porta a
- [[Zero-coupon bond]]: $B(t,T)=e^{-r(T-t)}$
- [[Rendimento a scadenza]]: yield in capitalizzazione continua
- [[Prezzo forward]]: $F(0,T)=S_0e^{rT}$

## Collegati
- [[Rendimenti logaritmici]]: $R(s,t)$ è il tasso continuo che porta $V(s)$ in $V(t)$
