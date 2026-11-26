---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["F-distribution", "F di Fisher", "F di Fisher Snedecor", "Fisher-Snedecor distribution", "F(n1, n2)", "rapporto di chi-quadro"]
tags: [competenza, area/statistica]
---

# Distribuzione F di Fisher-Snedecor

> Legge del rapporto di due chi-quadro indipendenti divisi per i loro gradi di libertà; serve per confrontare varianze.

## Definizione / enunciato
$Y\in\mathbb R^+$ a.c. ha legge **F con $n_1$ e $n_2$ gradi di libertà**, $Y\sim F(n_1,n_2)$, se
$$f(y)=\frac{\sqrt{\dfrac{(n_1y)^{n_1}n_2^{n_2}}{(n_1y+n_2)^{n_1+n_2}}}}{y\,B\big(\frac{n_1}2,\frac{n_2}2\big)} .$$
Costruzione: $Y=\dfrac{X_1/n_1}{X_2/n_2}$ con $X_1\sim\chi^2(n_1)$, $X_2\sim\chi^2(n_2)$ indipendenti.

## Formule chiave
- La slide riporta media $\frac{n_2}{n_2-1}$ "se $n_2>0$" e varianza $\frac{2n_2^2(n_1+n_2-1)}{n_1(n_2-2)^2(n_2-4)}$ se $n_2>4$ (da verificare sul PDF: probabile refuso nella media).
- $X\sim t(n)\Rightarrow X^2\sim F(1,n)$ e $X^{-2}\sim F(n,1)$.
- $X\sim\mathrm{Beta}(n_1/2,n_2/2)\Rightarrow\frac{n_2X}{n_1(1-X)}\sim F(n_1,n_2)$.
- Due campioni normali indipendenti di numerosità $m$ e $n$: $\frac{\sigma_y^2S_x^2}{\sigma_x^2S_y^2}\sim F(m-1,n-1)$.

## Intuizione
Se le due varianze sono uguali il rapporto delle varianze campionarie oscilla attorno a 1; la F dice quanto può allontanarsene per puro caso.

## Come si usa
F-test per il rapporto di varianze: sotto $H_0:\sigma_x^2/\sigma_y^2=c_0$, $F=\frac{S_x^2}{c_0S_y^2}\sim F(n-1,m-1)$. Nell'output di `lm` di R compare la "F-statistic" del modello (es. 20.33 su 1 e 58 gradi di libertà per le temperature).

## Nei corsi
- **Prob e statistica** (triennale): slide di statistica, grafici dal chunk "F di Fisher Snedecor". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Distribuzioni lez1.pdf` (F di Fisher Snedecor I-III); `statistica/statistica campionionaria lez2.pdf` (Statistiche e Distribuzione Campionaria XII-XIII).
- **Modelli statistici** (magistrale): $X=(U_1/h)/(U_2/k)$ con $U_1\sim\chi^2(h)\perp U_2\sim\chi^2(k)$ (libro, cap. 8, Def. 8.18) e densità derivata con lo jacobiano (Teorema 8.20)
$$f_X(x)=\frac{\Gamma(\frac{h+k}2)}{\Gamma(\frac h2)\Gamma(\frac k2)}\Bigl(\frac hk\Bigr)^{h/2}\frac{x^{h/2-1}}{(1+\frac hkx)^{(h+k)/2}},\qquad x>0 .$$
$F_\alpha(q,n-p)$ indica il "punto estremo di ordine $\alpha$" (quantile $1-\alpha$). È la legge del pivot per $\mathbf C\boldsymbol\beta$, del test $F$ per ipotesi lineari, dei confronti fra modelli annidati e delle tabelle ANOVA; sotto l'alternativa diventa una $F$ non centrale. Fonti: `Libri/Modelli statistici/capitoli/cap08.tex` (§8.7, pp. 136-137), `cap11.tex`, `cap12.tex`.

## Prerequisiti
- [[Distribuzione chi-quadro]]: numeratore e denominatore

## Porta a
- [[Test F sul rapporto di varianze]]: distribuzione della statistica test
- [[Test F nel modello lineare]]: ipotesi lineari $\mathbf C\boldsymbol\beta=\boldsymbol\theta$ (Modelli statistici)
- [[Regione di confidenza ellissoidale]]: pivot $F(q,n-p)$ (Modelli statistici)

## Collegati
- [[Distribuzione t di Student]]: $t(n)^2\sim F(1,n)$
- [[Distribuzione Beta]]: trasformazione di una Beta
- [[Media e varianza campionaria nel caso normale]]: rapporto di varianze campionarie di due campioni
