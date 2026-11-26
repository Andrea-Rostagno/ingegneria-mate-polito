---
tipo: competenza
area: statistica
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Q-Q plot, quantile-quantile plot, grafico quantile-quantile, normal probability plot, quantile empirico, empirical quantile, code pesanti, heavy tails, volatility clustering, legge del minimo di un campione]
tags: [competenza, area/statistica]
---

# QQ-plot

> Grafico delle statistiche d'ordine di un campione contro i quantili di una legge teorica: se i punti stanno su una retta la legge è adeguata; le deviazioni agli estremi rivelano code pesanti.

## Definizione / enunciato
Campione $s_1,\dots,s_m$ con statistiche d'ordine $s^{(1)}\le\dots\le s^{(m)}$ (def. c15-qqplot):
- f.d.r. empirica $\hat F_m(x)=\frac1m\#\{i:s_i\le x\}$;
- quantile di livello $t$ di $F$: $q_t=\min\{x:F(x)\ge t\}$; quantile empirico $\hat q_{j/m}=s^{(j)}$;
- **QQ-plot**: i punti $(q_{p_j},s^{(j)})$, $j=1,\dots,m$, con $p_j$ vicini a $j/m$ (per esempio $p_j=(j-\frac12)/m$).

**Minimo e massimo di un campione** (prop. c15-minimo-campione): per $S_i$ i.i.d. con f.d.r. $F$,
$$\mathbb P\big(\min_iS_i\le e\big)=1-(1-F(e))^m\approx mF(e),\qquad\mathbb P\big(\max_iS_i\ge e\big)=1-F(e^-)^m .$$

## Formule chiave
Calcolo stabile di $1-(1-x)^m$: $-\mathrm{expm1}(m\,\mathrm{log1p}(-x))$ oppure $mx$; il calcolo diretto dà 0 per cancellazione numerica.

## Intuizione
Un QQ-plot "quasi dritto" al centro non basta: in finanza contano le code. Il confronto va fatto con la normale di media e varianza stimate (o guardando se i punti stanno su una retta qualunque). Code più pesanti della normale piegano gli estremi del grafico.

## Come si usa
Esempio del libro (S&P 500, 1257 rendimenti giornalieri 2019-2024): il minimo $-0.11985$ è a $z=-9.01$ deviazioni standard; sotto normalità la probabilità di osservarlo in 1257 giorni è $\approx1257\,N(-9.01)=1.3\cdot10^{-16}$, per il massimo ($z=6.97$) $2.0\cdot10^{-9}$: il modello normale è da respingere. I dati mostrano curtosi 17.5, asimmetria negativa e autocorrelazioni positive di $r_t^2$ (volatility clustering).

## Nei corsi
- **Financial engineering** (magistrale): cap. 15 §I rendimenti reali: il caso S&P 500, listato lst:c15-sp500. Fonti: `Libri/Financial engineering/capitoli/cap15.tex`; nota `magistrale/Financial engineering/esercitazioni/Note_qqplot.pdf`; dati `SP_Data.csv` (solo intestazione).

## Prerequisiti
- [[Campione casuale]]: f.d.r. empirica e quantili campionari
- [[Statistiche d'ordine]]: ordinate del grafico
- [[Funzione di ripartizione]]: quantile come inversa generalizzata

## Porta a
- [[Distribuzione Variance-Gamma]]: alternativa a code pesanti

## Collegati
- [[Rendimenti logaritmici]]: code pesanti dei rendimenti
- [[Massimo e minimo di variabili aleatorie]]: legge del minimo campionario
- [[Moto browniano geometrico]]: ipotesi di rendimenti normali da verificare
