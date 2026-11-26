---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["sum of independent random variables", "convoluzione di densità", "convolution of densities", "convoluzione discreta", "riproducibilità", "casi notevoli di somme"]
tags: [competenza, area/probabilita]
---

# Somma di variabili aleatorie indipendenti

> La legge di $X+Y$ con $X\perp Y$ è la convoluzione delle leggi: $p_{X+Y}=p_X*p_Y$ o $f_{X+Y}=f_X*f_Y$; molte famiglie sono chiuse per somma.

## Definizione / enunciato
**Discreto** ($X,Y$ a valori in $\mathbb N$): $p_{X+Y}(t)=\sum_{x=0}^tp_Z(x,t-x)$; se $X\perp Y$
$$p_{X+Y}(t)=\sum_{k=0}^tp_X(k)p_Y(t-k)=(p_X*p_Y)(t)\quad\text{(convoluzione discreta)}.$$
**Continuo**: se $Z=(X,Y)$ è a.c., $T=X+Y$ è a.c. con $f_T(t)=\int_{\mathbb R}f_Z(x,t-x)dx$; se $X\perp Y$
$$f_{X+Y}(t)=\int_{\mathbb R}f_X(x)f_Y(t-x)dx=(f_X*f_Y)(t).$$

## Formule chiave
Casi notevoli (tutti con indipendenza):
- $\mathcal P(\lambda)+\mathcal P(\mu)=\mathcal P(\lambda+\mu)$; $B(m,p)+B(n,p)=B(m+n,p)$;
- $G(p)+G(p)=\mathrm{Pascal}(2,p)$; $\mathrm{Pascal}(m,p)+\mathrm{Pascal}(n,p)=\mathrm{Pascal}(m+n,p)$;
- $\mathrm{Exp}(\lambda)+\mathrm{Exp}(\lambda)=\Gamma(2,\lambda)$; $\Gamma(\alpha,\lambda)+\Gamma(\beta,\lambda)=\Gamma(\alpha+\beta,\lambda)$;
- $\mathcal N(\mu_x,\sigma_x^2)+\mathcal N(\mu_y,\sigma_y^2)=\mathcal N(\mu_x+\mu_y,\sigma_x^2+\sigma_y^2)$, e $aX+bY+c\sim\mathcal N(a\mu_x+b\mu_y+c,a^2\sigma_x^2+b^2\sigma_y^2)$;
- $X_i$ i.i.d. $\mathcal N(0,1)$: $X_1^2+\dots+X_m^2\sim\Gamma(\frac m2,\frac12)=\chi^2(m)$.

## Intuizione
Il valore $t$ si ottiene da tutte le coppie $(x,t-x)$: si "somma" su una retta del piano. Due metodi equivalenti: funzione di ripartizione sull'insieme $\{x+y\le t\}$ oppure jacobiano di $(x,y)\mapsto(x,x+y)$, con $|\det|=1$.

## Come si usa
- Ufficio postale con due sportelli: $X\sim\mathcal P(\lambda)$, $Y\sim\mathcal P(\mu)$ clienti serviti in un'ora, totale $\mathcal P(\lambda+\mu)$ (binomio di Newton nella convoluzione).
- $X,Y$ i.i.d. $U(0,1)$: $f_{X+Y}(t)=t\mathbb 1_{[0,1]}+(2-t)\mathbb 1_{(1,2]}$, legge triangolare.
- Precipitazioni annue a Bolzano $\mathcal N(65.08,16.7^2)$, due anni indipendenti: $\mathbb P(X_1+X_2>121)=\Phi(0.39)=0.6517$. Attenzione: $X_1+X_2\sim\mathcal N(2\mu,2\sigma^2)$ ma $2X\sim\mathcal N(2\mu,4\sigma^2)$.

## Nei corsi
- **Prob e statistica** (triennale): lezioni 7-9; ripresa con le funzioni caratteristiche in lezione 11. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione07(18-10-2023).pdf` (pp. 13-15); `2023Lezione08(19-10-2023).pdf` (pp. 1-2); `2023Lezione09(20-10-2023).pdf` (pp. 6-15).

## Prerequisiti
- [[Indipendenza di variabili aleatorie]]: la congiunta è il prodotto
- [[Convoluzione]]: prodotto di convoluzione
- [[Densità congiunta]]: $f_T(t)=\int f_Z(x,t-x)dx$

## Porta a
- [[Distribuzione chi-quadro]]: somma di quadrati di normali standard

## Collegati
- [[Distribuzione Gamma]]: somme di esponenziali e di Gamma
- [[Distribuzione di Pascal]]: somma di geometriche
- [[Distribuzione di Poisson]]: riproducibilità
- [[Funzione caratteristica]]: $\Phi_{X+Y}=\Phi_X\Phi_Y$
- [[Metodo dello jacobiano]]: secondo metodo di calcolo
