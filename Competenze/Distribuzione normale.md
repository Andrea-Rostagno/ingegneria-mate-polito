---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica, Prova finale, Financial engineering]
livello: [triennale, magistrale]
aliases: ["normal distribution", "Gaussian distribution", "legge normale", "legge gaussiana", "N(mu, sigma^2)", "normale standard", "N(0,1)", "funzione Phi", "tavole della normale", "regola 1-2-3 sigma"]
tags: [competenza, area/probabilita]
---

# Distribuzione normale

> La legge a campana $\mathcal N(\mu,\sigma^2)$: si ottiene dalla normale standard con una trasformazione lineare, e le probabilità si calcolano standardizzando e usando le tavole di $\Phi$.

## Definizione / enunciato
$X\sim\mathcal N(0,1)$ (**normale standard**) se è assolutamente continua con densità
$$f_X(x)=\frac1{\sqrt{2\pi}}e^{-x^2/2},\qquad \mathbb E[X]=0,\ \operatorname{Var}(X)=1.$$
$Y=\sigma X+\mu$ ha **legge normale** $\mathcal N(\mu,\sigma^2)$; per $\sigma\ne0$ è assolutamente continua con
$$f_Y(y)=\frac1{\sqrt{2\pi\sigma^2}}e^{-(y-\mu)^2/2\sigma^2},\qquad \mathbb E[Y]=\mu,\ \operatorname{Var}(Y)=\sigma^2.$$

## Formule chiave
- $aY+b\sim\mathcal N(a\mu+b,a^2\sigma^2)$; in particolare $\frac{Y-\mu}\sigma\sim\mathcal N(0,1)$.
- $\Phi=F_N$ (tabulata) e $\Phi(-x)=1-\Phi(x)$.
- $\mathbb P(\mu-c\sigma\le Y\le\mu+c\sigma)=2\Phi(c)-1$: $0.6826$ ($c=1$), $0.9544$ ($c=2$), $0.9974$ ($c=3$).

## Intuizione
La campana è simmetrica attorno a $\mu$ (massimo), con flessi in $\mu\pm|\sigma|$: $\sigma$ regola l'ampiezza. La densità non ha primitiva elementare, quindi si riduce sempre alla standard. La densità di $Y$ si ricava da $F_Y(y)=F_X(\frac{y-\mu}\sigma)$ con il cambio di variabile.

## Come si usa
Perni (Foglio, es. 9, svolto a lezione): diametro $\mathcal N(12.5,\,0.02^2)$, conformi fra 12.46 e 12.54: $\mathbb P(-2\le N\le2)=2\Phi(2)-1=0.9544$. Quantili: $\Phi(q)=0.975\Rightarrow q=1.96$. Modella dimensioni di individui e di oggetti prodotti in serie ed errori di misura.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 13-14 (appunto manoscritto); densità nel formulario, tavole in `tavole normale (1).pdf` (solo immagine). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione13(01-06-23).pdf` (lezione 13, pp. 12-14); `2023Lezione14(08-06-23).pdf` (lezione 14, pp. 1-7); `formularioprobabilita (1).pdf`.
- **Prob e statistica** (triennale): richiamata nelle slide di statistica con la funzione caratteristica $\Phi_X(t)=\exp(-t^2/2)$ e $\Phi_Y(t)=\exp(it\mu-\sigma^2t^2/2)$ per $Y=\mu+\sigma X$ ($\sigma=0$: degenere; $\sigma$ e $-\sigma$ danno la stessa legge); nelle lezioni di probabilità $\Phi_N$ è ricavata risolvendo $\Phi_N'=-t\Phi_N$, e da essa la riproducibilità $\mathcal N(\mu_x,\sigma_x^2)+\mathcal N(\mu_y,\sigma_y^2)=\mathcal N(\mu_x+\mu_y,\sigma_x^2+\sigma_y^2)$ per v.a. indipendenti. È la legge limite del teorema del limite centrale e il punto di partenza di vettori gaussiani, chi-quadro e t. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Distribuzioni lez1.pdf` (Richiami Normale Univariata I-II); `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione11(27-10-2023).pdf` (pp. 9-10); `2023Lezione18(16-11-2023).pdf` (pp. 5-9).
- **Prova finale** (triennale): marginale candidata $\mathcal N(\mu,\sigma)$ per le serie Open e Close del DAX (rendimenti nel testo, volatilità rolling nel codice), stimata per MLE e scartata per AIC a favore della t (Open: $\mu=0.0056$, $\sigma=0.0050$, AIC $-366834.42$); $\Phi$ e $\Phi^{-1}$ servono a costruire la copula gaussiana e a simulare rendimenti giornalieri $\mathcal N(\mu/252,\sigma^2/252)$. La tesi ricorda che l'ipotesi di normalità dei rendimenti (tipica di Black-Scholes) è spesso violata: code più pesanti. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.1, p. 19; §4.4.1, tab. 4.3, p. 32; §6.1.3, p. 103).
- **Financial engineering** (magistrale): notazione $\mathcal N(\mu,\sigma^2)$, ripartizione $N(x)$, densità $N'(x)=\frac1{\sqrt{2\pi}}e^{-x^2/2}$, quantile $z_\alpha=N^{-1}(\alpha)$ ($z_{0.95}=1.645$); alcune soluzioni scrivono $\Phi$. Generatrice dei momenti (prop. cA-mgf-normale): $\mathbb E[e^{aZ}]=e^{a^2/2}$, $\mathbb E[e^{aX}]=e^{a\mu+\frac12a^2\sigma^2}$, base della lognormale e di Black-Scholes; tavola di $N(x)$ e formulario nell'appendice C. Compare in $N(d_1)$, $N(d_2)$, nel VaR gaussiano $\mu_L+\sigma_Lz_\alpha$ e nel modello di Merton a fattore. Fonti: `Libri/Financial engineering/capitoli/appA.tex`, `appC.tex`.

## Prerequisiti
- [[Variabile aleatoria assolutamente continua]]: densità gaussiana
- [[Varianza]]: standardizzazione

## Porta a
- [[Vettore gaussiano]]: versione multivariata (Prob e statistica)
- [[Distribuzione t di Student]]: normale standard al numeratore (Prob e statistica)
- [[Copula gaussiana]]: costruita con $\Phi$ e $\Phi^{-1}$ (Prova finale)

## Collegati
- [[Distribuzione normale degli errori]]: applicazione agli errori di misura
- [[Trasformata di Fourier]]: trasformata della gaussiana
- [[Equazione del calore]]: nucleo gaussiano
- [[Teorema del limite centrale]]: non trattato in Metodi matematici; in Prob e statistica la normale è la legge limite delle somme standardizzate
- [[Distribuzione lognormale]]: esponenziale di una normale (Financial engineering)
- [[Formula di Black-Scholes]]: $N(d_1)$ e $N(d_2)$ (Financial engineering)
