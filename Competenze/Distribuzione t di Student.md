---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Prova finale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["Student's t-distribution", "t di Student", "T di Student", "t(n)", "t non centrata", "noncentral t", "quantile t_{n-1, alpha/2}"]
tags: [competenza, area/statistica]
---

# Distribuzione t di Student

> Legge di $Z/\sqrt{X/n}$ con $Z$ normale standard e $X$ chi-quadro indipendenti: simmetrica, a code più pesanti della normale, serve quando la varianza è stimata.

## Definizione / enunciato
$Y\in\mathbb R$ a.c. ha legge **t di Student con $n$ gradi di libertà**, $Y\sim t(n)$, se
$$f(y)=\frac{\Gamma\big(\frac{n+1}2\big)}{\sqrt{n\pi}\,\Gamma\big(\frac n2\big)}\Big(1+\frac{y^2}n\Big)^{-\frac{n+1}2}.$$
Costruzione: $Y=\dfrac Z{\sqrt{X/n}}$ con $Z\sim\mathcal N(0,1)$, $X\sim\chi^2(n)$, $Z\perp X$.

## Formule chiave
- Simmetrica e unimodale; media $0$ (la slide scrive "se $n>0$", da verificare sul PDF), varianza $\frac n{n-2}$ se $n>2$, infinita se $1<n\le2$, altrimenti indefinita.
- **t non centrata**: con $Z\sim\mathcal N(\mu,1)$ si ottiene $t_\mu(n)$, parametro di non centralità $\mu$.
- Per $n$ grande (più di 80) è approssimabile con $\mathcal N(0,1)$; nei test $t_{n-1,\alpha/2}\approx z_{\alpha/2}$.
- $X\sim t(n)\Rightarrow X^2\sim F(1,n)$.

## Intuizione
Sostituire $\sigma$ con la stima $S$ aggiunge incertezza: le code si appesantiscono, tanto più quanto meno sono i gradi di libertà.

## Come si usa
$\frac{\sqrt n(\bar X-\mu)}S\sim t(n-1)$ per campioni normali: è la quantità pivotale del t-test e dell'intervallo $\bar x\pm t_{n-1,\alpha/2}\sqrt{s^2/n}$. In regressione $\frac{\hat\beta-\beta}{\sqrt{S^2/SS_x}}\sim t_{n-2}$ e $\frac{\hat\beta_j-c}{\sqrt{[S^2(X'X)^{-1}]_{jj}}}\sim t_{n-p}$.

## Nei corsi
- **Prob e statistica** (triennale): slide di statistica, con grafici dal chunk "T di Student". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Distribuzioni lez1.pdf` (T di Student I-III); `statistica/statistica campionionaria lez2.pdf` (Statistiche e Distribuzione Campionaria V, XI).
- **Prova finale** (triennale): marginale a code pesanti, $t_\nu(\mu,\sigma)$ con parametri di posizione e scala stimati per MLE (`stats.t.fit`); sulle serie Open e Close del DAX (chiamate rendimenti nel testo, volatilità rolling nel codice) vince sulla normale per AIC (Open: $df=1.8257$, $\mu=0.0042$, $\sigma=0.0018$; Close: $df=1.8538$). Le sue quantili $t_\nu^{-1}$ definiscono la copula t. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4.1, pp. 31-32, tab. 4.3; §3.4.1, p. 23).
- **Modelli statistici** (magistrale): $T=Z/\sqrt{V/k}$ con $Z\sim N(0,1)\perp V\sim\chi^2(k)$ (libro, cap. 8, Def. 8.17); $T^2\sim F(1,k)$, quindi $t_{\alpha/2}(k)^2=F_\alpha(1,k)$ (Prop. 8.19), con quantili di coda superiore. È la legge della statistica $(\hat\beta_j-\beta_j)/\mathrm{se}(\hat\beta_j)\sim t(n-p)$ del modello lineare e degli intervalli di confidenza e predizione; con prior vaga la posteriori marginale di $\mu$ di un campione normale è praticamente una $t$ traslata e riscalata. Fonti: `Libri/Modelli statistici/capitoli/cap08.tex` (§8.7, pp. 136-137), `cap04.tex`, `cap09.tex`.

## Prerequisiti
- [[Distribuzione chi-quadro]]: denominatore
- [[Distribuzione normale]]: numeratore

## Porta a
- [[Test t di Student]]: distribuzione della statistica test
- [[Media e varianza campionaria nel caso normale]]: $\sqrt n(\bar X-\mu)/S\sim t(n-1)$
- [[Copula t di Student]]: copula della t bivariata
- [[Inferenza sui coefficienti di regressione]]: statistica $t$ di un coefficiente (Modelli statistici)

## Collegati
- [[Distribuzione F di Fisher-Snedecor]]: $t(n)^2\sim F(1,n)$
