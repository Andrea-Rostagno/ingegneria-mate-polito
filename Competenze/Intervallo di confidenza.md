---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["confidence interval", "stima intervallare", "interval estimate", "stimatore intervallare", "interval estimator", "probabilità di copertura", "coverage probability", "livello di confidenza", "confidence level", "inversione di un test", "test inversion", "intervallo di lunghezza minima"]
tags: [competenza, area/statistica]
---

# Intervallo di confidenza

> Intervallo aleatorio $[L(\mathbf X),U(\mathbf X)]$ che contiene il vero parametro con probabilità almeno $1-\alpha$ per ogni $\theta$; si ottiene da una quantità pivotale o invertendo un test.

## Definizione / enunciato
Una **stima intervallare** di $\theta$ è una coppia $L(\mathbf x)\le U(\mathbf x)$ con l'inferenza $L(\mathbf x)\le\theta\le U(\mathbf x)$; $[L(\mathbf X),U(\mathbf X)]$ è lo **stimatore intervallare**. La probabilità non è che $\theta$ (non aleatorio) stia nell'intervallo, ma che l'intervallo contenga $\theta$.
- **Copertura**: $\mathbb P(\theta\in[L(\mathbf X),U(\mathbf X)];\theta)$, per un dato $\theta$.
- **Confidenza**: $\inf_{\theta\in\Theta}\mathbb P(\theta\in[L(\mathbf X),U(\mathbf X)])$, la copertura minima.

## Formule chiave
**Inversione di un test.** Se $A_{\theta_0}(\mathbf x)$ è la regione di accettazione di un test di livello $\alpha$ per $H_0:\theta=\theta_0$, allora $C_{\mathbf x}=\{\theta_0:\mathbf x\in A_{\theta_0}(\mathbf x)\}$ è un insieme di confidenza $1-\alpha$; viceversa da un insieme di confidenza si ottiene un test. (In generale è un insieme, nei casi del corso un intervallo.)
- Media normale, varianza ignota: $\big[\bar x-t_{n-1,\alpha/2}\sqrt{s^2/n},\ \bar x+t_{n-1,\alpha/2}\sqrt{s^2/n}\big]$.
- Varianza normale: $\big[\frac{(n-1)S^2}b,\frac{(n-1)S^2}a\big]$ con $\mathbb P(a\le\chi^2_{n-1}\le b)=1-\alpha$.
**Lunghezza minima.** Se $f$ è unimodale, l'intervallo $[a,b]$ con $\int_a^bf=1-\alpha$, $f(a)=f(b)$ e $a\le x^*\le b$ ($x^*$ moda) è il più corto; le code uguali $\alpha/2$ non sono la scelta migliore per densità asimmetriche come il chi-quadro.

## Intuizione
L'intervallo raccoglie tutti i valori del parametro che un test non rifiuterebbe. Si vuole confidenza alta, non copertura alta: l'intervallo $\frac{\sum|x_i|}n\pm z_{\alpha/2}\frac1{\sqrt n}$ per la media di $\mathcal N(\mu,1)$ ha copertura alta (circa $1-\alpha$) per $\mu$ molto lontano da 0, ma copertura 0 per $\mu$ molto più piccolo di 0, quindi confidenza zero.

## Come si usa
In regressione: $\big[\hat\beta\pm t_{n-2,\alpha/2}\sqrt{S^2/SS_x}\big]$ per la pendenza; R fornisce gli intervalli del two-sample t-test ("95 percent confidence interval").

## Nei corsi
- **Prob e statistica** (triennale): ultima parte delle slide sui test. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (Intervalli di confidenza I-VIII).
- **Modelli statistici** (magistrale): per $X_i\overset{iid}\sim N(\mu,\sigma^2)$, $\bar x\pm z_{\alpha/2}\sigma/\sqrt n$ con $\sigma$ nota e $\bar x\pm t_{\alpha/2}(n-1)s/\sqrt n$ con $\sigma$ ignota (libro, cap. 2, Teorema 2.7; quantili di coda superiore). Esempio dell'integratore: trattati $(117.74;\ 126.16)$, placebo $(126.52;\ 133.32)$, poi la differenza con la varianza pooled $s^2_{\text{pooled}}\approx73.65$. Il "livello" è una proprietà della procedura, da non confondere con l'intervallo di credibilità bayesiano. Generalizzazioni nel corso: regioni di confidenza ellissoidali per $\mathbf C\boldsymbol\beta$, Bonferroni, intervalli per una proporzione (Wald, Wilson, Clopper-Pearson), IC per il log odds ratio. Fonti: `Libri/Modelli statistici/capitoli/cap02.tex` (§2.2, pp. 26-28); `magistrale/Modelli statistici/PDF corretti/251001stavsfreq.pdf`.
- **Ottimizzazione in condizione di incertezza** (magistrale): intervallo per l'output di una simulazione Monte Carlo, $\bar X(n)\pm z_{1-\alpha/2}\sqrt{S^2(n)/n}$, approssimato perché si usa $z$ al posto del quantile $t_{n-1}$ ($n$ grande, TLC); in MATLAB con `normfit`. Richiede osservazioni **indipendenti**: con attese di una coda (correlate) l'intervallo è sbagliato e si ricorre ai lotti; la sua ampiezza relativa è usata per confrontare le tecniche di riduzione della varianza. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 3-4); `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 10).

## Prerequisiti
- [[Quantità pivotale]]: si isola il parametro
- [[Test d'ipotesi]]: inversione della regione di accettazione
- [[Media e varianza campionaria nel caso normale]]: pivot $t$ e $\chi^2$

## Porta a
- [[Previsione nella regressione lineare]]: intervalli per media e valore futuri
- [[Regione di confidenza ellissoidale]]: versione multidimensionale nel modello lineare (Modelli statistici)
- [[Intervallo di confidenza per una proporzione]]: Wald, Wilson e Clopper-Pearson (Modelli statistici)
- [[Analisi dell'output di simulazione]]: correzione per osservazioni simulate correlate (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Inferenza sui coefficienti di regressione]]: intervalli per $\alpha$ e $\beta$
- [[Test chi-quadro sulla varianza]]: stesso pivot dell'intervallo per $\sigma^2$
