---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale]
livello: [triennale]
aliases: ["Gamma distribution", "legge Gamma", "Gamma(alpha, lambda)", "funzione Gamma di Eulero", "Gamma function", "legge di Erlang", "Erlang"]
tags: [competenza, area/probabilita]
---

# Distribuzione Gamma

> Famiglia di leggi assolutamente continue su $(0,+\infty)$, con parametro di forma $\alpha$ e di scala $\lambda$, che contiene l'esponenziale e la legge di Erlang (somma di esponenziali).

## Definizione / enunciato
**Funzione Gamma di Eulero**: $\Gamma(\alpha)=\int_0^{+\infty}y^{\alpha-1}e^{-y}\,dy$, $\alpha>0$, con $\Gamma(1)=1$, $\Gamma(\alpha+1)=\alpha\Gamma(\alpha)$ (per parti), quindi $\Gamma(m)=(m-1)!$ per $m\in\mathbb N^*$.
$X\sim\Gamma(\alpha,\lambda)$, $\alpha,\lambda>0$, se è assolutamente continua con densità
$$f_X(x)=\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x}\,\mathbb 1_{(0,+\infty)}(x).$$

## Formule chiave
- $\mathbb E[X]=\dfrac\alpha\lambda$, $\mathbb E[X^2]=\dfrac{\alpha(\alpha+1)}{\lambda^2}$, $\operatorname{Var}(X)=\dfrac{\alpha}{\lambda^2}$ (si riconosce sotto l'integrale la densità $\Gamma(\alpha+1,\lambda)$).
- Casi particolari: $\alpha=1$ dà $\mathrm{Exp}(\lambda)$; $\alpha=m\in\mathbb N^*$ dà la **legge di Erlang**.
- Funzione di ripartizione di Erlang $T_m\sim\Gamma(m,\lambda)$, $t>0$ (iterando per parti):
$$F_{T_m}(t)=1-\sum_{k=0}^{m-1}\frac{(\lambda t)^k}{k!}e^{-\lambda t}=\mathbb P(N_t\ge m),\qquad N_t\sim\mathcal P(\lambda t).$$
- $\Gamma(\tfrac12)=\sqrt\pi$ (ricavato dalla densità di $X^2$, $X\sim\mathcal N(0,1)$, lezione 7).

## Intuizione
$\alpha$ regola la forma (per $\alpha<1$ la densità esplode in 0, per $\alpha>1$ ha una moda interna), $\lambda$ la scala. Il legame con Poisson: l'$m$-esimo evento arriva entro $t$ se e solo se in $[0,t]$ ci sono almeno $m$ eventi.

## Come si usa
Se $S_1,\dots,S_m$ i.i.d. $\mathrm{Exp}(\lambda)$ (tempi fra eventi), $T_m=S_1+\dots+S_m\sim\Gamma(m,\lambda)$ è l'istante dell'$m$-esimo evento di un processo di Poisson; $\Gamma(\alpha,\lambda)+\Gamma(\beta,\lambda)$ indipendenti è $\Gamma(\alpha+\beta,\lambda)$. Nelle lezioni: tempo per servire due clienti allo sportello, $X+Y\sim\Gamma(2,\lambda)$.

## Nei corsi
- **Prob e statistica** (triennale): apre il corso (lezioni 1-2) con la funzione Gamma, momenti, Erlang e legame con il processo di Poisson; notazione $\Gamma(\alpha,\lambda)$ con $\lambda$ **tasso**. Nelle slide di statistica la Gamma è scritta $G(a,b)$, a volte con $b$ di scala ($f=b^{-a}\Gamma(a)^{-1}y^{a-1}e^{-y/b}$), a volte di tasso ($\mathbb E=a/b$): attenzione al secondo parametro. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione01&02(04&05-10-2023).pdf` (pp. 1-5); `2023Lezione09(20-10-2023).pdf` (p. 10, somme notevoli); `statistica/Distribuzioni lez1.pdf` (Chi-quadro II).
- **Prova finale** (triennale): distribuzione a priori nella stima bayesiana delle copule con PyMC3: $\nu\sim\mathrm{Gamma}(2,0.1)$ per i gradi di libertà della copula t (`pm.Gamma('nu', alpha=2, beta=0.1)`) e $\theta\sim\mathrm{Gamma}(1,1)$ per la Clayton. Nelle slide di Pellerey una fragilità Gamma genera la copula di Clayton. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.3.4, pp. 81-83); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 87).

## Prerequisiti
- [[Variabile aleatoria assolutamente continua]]: è definita da una densità
- [[Distribuzione esponenziale]]: caso $\alpha=1$

## Porta a
- [[Distribuzione Beta]]: $X/(X+Y)$ con $X,Y$ Gamma indipendenti
- [[Distribuzione chi-quadro]]: $\chi^2(n)=\Gamma(n/2,1/2)$
- [[Somma di variabili aleatorie indipendenti]]: somme di esponenziali e di Gamma

## Collegati
- [[Processo di Poisson]]: $T_m$ è l'istante dell'$m$-esimo arrivo
- [[Distribuzione di Poisson]]: $F_{T_m}(t)=\mathbb P(N_t\ge m)$
- [[Distribuzione condizionata]]: mistura Gamma-Poisson che dà la binomiale negativa
- [[Stima bayesiana]]: prior Gamma per parametri positivi (Prova finale)
