---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prova finale]
livello: [triennale]
aliases: ["continuous uniform distribution", "legge uniforme", "U([a,b])", "Uniforme(a,b)", "uniforme su un intervallo", "numeri casuali"]
tags: [competenza, area/probabilita]
---

# Distribuzione uniforme continua

> La legge con densità costante su $[a,b]$: la probabilità di un sottointervallo è proporzionale alla sua lunghezza.

## Definizione / enunciato
$X\sim U([a,b])$ se è assolutamente continua con densità
$$f_X(x)=\frac1{b-a}\mathbb 1_{[a,b]}(x).$$
La legge è concentrata su $[a,b]$: $\mathbb P(X\notin[a,b])=0$.

## Formule chiave
$$F_X(x)=\frac{x-a}{b-a}\mathbb 1_{[a,b)}(x)+\mathbb 1_{[b,+\infty)}(x),$$
$$\mathbb E[X]=\frac{a+b}2,\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12}.$$

## Intuizione
Due intervalli di uguale ampiezza $\varepsilon$ contenuti in $[a,b]$ hanno la stessa probabilità $\frac\varepsilon{b-a}$: nessuna zona è privilegiata. Per questo la si usa per generare numeri casuali. La media è il punto medio dell'intervallo.

## Come si usa
Autobus alle 7.00, 7.15, 7.30 e arrivo uniforme fra 7.00 e 7.30 (lezione 14): $X\sim U([0,30])$; aspettare meno di 5 minuti significa $X\in(10,15)\cup(25,30)$, probabilità $\frac5{30}+\frac5{30}=\frac13$. Trasformazioni lineari (Foglio, es. 15): se $X\sim U([0,1])$ e $Y=2X-1$, $F_Y(x)=F_X(\frac{x+1}2)$ e $Y\sim U([-1,1])$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 14 (appunto manoscritto); densità nel formulario (che la scrive su $(a,b)$). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione14(08-06-23).pdf` (lezione 14, pp. 12-15); `formularioprobabilita (1).pdf`.
- **Prova finale** (triennale): le copule hanno marginali uniformi su $[0,1]$; se $F$ è continua $F(X)\sim\mathcal U[0,1]$ e $F^{-1}(U)$ ha f.d.r. $F$. Nella tesi i dati sono portati "in un dominio uniforme $[0,1]$" prima di ogni stima, e nel Metropolis-Hastings la proposta è $\mathcal U(-\delta,\delta)$. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4, p. 31; §5.2.9, p. 57); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 17-21).

## Prerequisiti
- [[Variabile aleatoria assolutamente continua]]: densità costante

## Porta a
- [[Trasformazione integrale di probabilità]]: $F(X)$ uniforme e simulazione per inversione (Prova finale)

## Collegati
- [[Misura di Lebesgue]]: probabilità proporzionale alla lunghezza
