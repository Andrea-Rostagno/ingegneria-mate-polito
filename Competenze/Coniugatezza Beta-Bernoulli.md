---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Beta-Bernoulli conjugacy", "Beta-binomial model", "modello Beta-binomiale", "regola di successione di Laplace", "Laplace rule of succession", "media a posteriori come media pesata", "prior impropria", "improper prior", "maximum a posteriori"]
tags: [competenza, area/statistica]
---

# Coniugatezza Beta-Bernoulli

> Con dati di Bernoulli e prior Beta la posteriori è ancora Beta: si aggiungono i successi al primo parametro e gli insuccessi al secondo.

## Definizione / enunciato
Se $X_1,\dots,X_n\mid p\overset{iid}\sim\mathrm{Bern}(p)$ e $p\sim\mathrm{Beta}(a,b)$, posto $s=\sum x_i$ (libro, cap. 3, Teorema 3.6):
$$p\mid x_1,\dots,x_n\sim\mathrm{Beta}(a+s,\ b+n-s).$$
Dimostrazione: $\pi(p\mid\mathbf x)\propto p^{a-1}(1-p)^{b-1}\cdot p^s(1-p)^{n-s}$, nucleo di una Beta.

## Formule chiave
- Media a posteriori come **media pesata** (Prop. 3.9):
$$\tilde p=w\,\frac{a}{a+b}+(1-w)\,\frac{s}{n},\qquad w=\frac{a+b}{a+b+n}\to0 .$$
- Moda (MAP) $(a+s-1)/(a+b+n-2)$ se entrambi i parametri superano 1; intervallo di credibilità a code uguali con i quantili Beta (`qbeta`).
- **Regola di successione di Laplace**: con prior $\mathrm{Beta}(1,1)$ e $m$ successi su $m$, $P(X_{m+1}=1\mid\text{dati})=\frac{m+1}{m+2}$, mentre l'MLE vale 1.
- Prior impropria $a=b=0$: con tutti successi la "posteriori" $\propto p^{n-1}(1-p)^{-1}$ non è integrabile e non esiste.

## Intuizione
$\mathrm{Beta}(a,b)$ vale come $a$ successi e $b$ insuccessi già osservati, cioè $a+b$ osservazioni fittizie; l'aggiornamento è sequenziale (tutti i dati insieme o uno alla volta danno lo stesso risultato).

## Come si usa
Esempio del lobo dell'orecchio attaccato (libro, Es. `c03-lobo-elicitazione`): prior elicitata $\mathrm{Beta}(0.716;\,2.866)$, dati $s=6$ su $n=30$, posteriori $\mathrm{Beta}(6.716;\,26.866)$ con media 0.200, moda $\approx0.181$, intervallo al 95% $(0.085;\ 0.349)$; la deviazione standard scende da 0.187 a 0.068. Errori tipici: usare $n$ invece di $n-s$, dimenticare il $-1$ negli esponenti del nucleo, applicare la formula della moda con $a<1$. In JAGS: `p ~ dbeta(1,1)`, `y[i] ~ dbin(p,1)`.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 3, §3.4-3.6 (Teorema 3.6, Prop. 3.9, pp. 43-49). Fonti: `Libri/Modelli statistici/capitoli/cap03.tex`; `magistrale/Modelli statistici/251008 Statistica Bayesiana con carta e penna.pdf`; `magistrale/Modelli statistici/PDF corretti/251015A.pdf` §5.

## Prerequisiti
- [[Distribuzione Beta]]: prior e posteriori
- [[Famiglia coniugata]]: schema generale
- [[Distribuzione binomiale]]: verosimiglianza di $s$ successi

## Porta a
- [[Elicitazione della prior]]: scelta di $a$ e $b$
- [[Distribuzione predittiva a posteriori]]: la beta-binomiale per i prossimi casi
- [[Coniugatezza Dirichlet-multinomiale]]: generalizzazione a $D$ categorie

## Collegati
- [[Stimatore di massima verosimiglianza]]: $s/n$, limite della media a posteriori
- [[Intervallo di confidenza per una proporzione]]: risposta frequentista allo stesso problema
