---
tipo: competenza
area: statistica
corsi: [Ricerca operativa, Prob e statistica, Modelli statistici, Numerical opt, Business intelligence per big data, Data science lab]
livello: [triennale, magistrale]
aliases: ["linear regression", "regressione lineare semplice", "regressione lineare multipla", "multiple linear regression", "residuo di regressione", "funzioni di base", "apprendimento supervisionato", "modello lineare normale", "retta di regressione", "regressione multivariata"]
tags: [competenza, area/statistica]
---

# Regressione lineare

> Modello lineare che lega una variabile target quantitativa a una o più variabili esplicative, stimato minimizzando una norma dei residui (di solito la norma 2: minimi quadrati).

## Definizione / enunciato
Dati $(x_i,y_i)$, $i=1,\dots,n$, il modello semplice è $y=\beta_0+\beta_1x$; il residuo è $e_i=y_i-(\beta_0+\beta_1x_i)$ e i minimi quadrati risolvono
$$\min_{\beta_0,\beta_1}\sum_{i=1}^ne_i^2=\|\mathbf e\|_2^2 .$$
Estensioni: **regressione multipla** $y_i=\beta_0+\sum_{j=1}^p\beta_jx_{ij}+e_i$; **funzioni di base** (feature, tipicamente non lineari) $y_i=\sum_{k=1}^m\beta_k\varphi_k(\mathbf x_i)+e_i$; norme alternative $\ell_1$ e $\ell_\infty$.

## Formule chiave
In forma matriciale $\min\|A\mathbf x-\mathbf b\|_2^2$, convesso perché $A^TA\in S_+$; condizione del primo ordine
$$2A^TA\mathbf x-2A^T\mathbf b=\mathbf 0\ \Rightarrow\ \mathbf x^*=(A^TA)^{-1}A^T\mathbf b,$$
valida se $A^TA\in S_{++}$, cioè se le colonne di $A$ sono linearmente indipendenti.

## Intuizione
Fattori non modellati e contributi casuali impediscono un adattamento perfetto: si sceglie la retta che rende "piccoli" i residui, e la norma scelta decide cosa significa piccolo. Geometricamente si proietta $\mathbf b$ sul sottospazio generato dalle colonne di $A$.

## Come si usa
Con la norma $\ell_1$ (minimo valore assoluto dei residui) o $\ell_\infty$ (minimo massimo residuo) il problema diventa un LP; con la norma 2 è un problema convesso non vincolato con soluzione in forma chiusa. Se $A^TA$ non è invertibile si regolarizza (ridge). È un esempio di apprendimento supervisionato con target quantitativo; con target categorico si parla di classificazione.

## Nei corsi
- **Ricerca operativa** (triennale): parte "modelli di apprendimento statistico" e minimi quadrati come esempio di QP convessa non vincolata. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 38-41); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 5).
- **Prob e statistica** (triennale): modello statistico con $x_i$ costanti e $Y_i$ aleatorie, $Y_i=\alpha+\beta x_i+\epsilon_i$, $\epsilon_i$ i.i.d. $\mathcal N(0,\sigma^2)$ (ipotesi di Gauss: media nulla, omoschedasticità, incorrelazione, normalità); "lineare" nei parametri (anche $y_i=\alpha+\beta\log x_i+\epsilon_i$ lo è). $\alpha$ = valore della retta in $x=0$, $\beta$ = aumento di $y$ per un aumento unitario di $x$. Minimi quadrati ($\min\sum(y_i-\alpha-\beta x_i)^2$) e massima verosimiglianza danno gli stessi stimatori $\hat\beta=\frac{SS_{xy}}{SS_x}$, $\hat\alpha=\bar y-\hat\beta\bar x$; per $\sigma^2$ l'MLE $\frac1n\sum\hat\epsilon_i^2$ si sostituisce con la versione non distorta $\frac1{n-2}\sum\hat\epsilon_i^2$. Il guadagno dell'approccio statistico: $\hat\alpha,\hat\beta$ sono v.a. e si possono testare. Multivariata: $\mathbf y\sim N_n(X\boldsymbol\beta,\sigma^2I_n)$, $\hat{\boldsymbol\beta}=(X'X)^{-1}X'\mathbf y$ (rango $p$, $n\gg p$), $\hat\sigma^2=\frac1n(\mathbf y-X\hat{\boldsymbol\beta})'(\mathbf y-X\hat{\boldsymbol\beta})$. Esempio: temperature medie di New Haven 1912-1971, $\hat\alpha=-20.52$, $\hat\beta=0.036$ gradi all'anno; in R `lm(y ~ x)`. Fonti: `triennale/ANNO 3/prob e statistica/statistica/regressione lez7.pdf` (La regressione I-X; Stima dei parametri I-VII; Regressione Multivariata I-V).
- **Modelli statistici** (magistrale): **modello lineare normale** $\mathbf Y=\mathbf X\boldsymbol\beta+\boldsymbol\varepsilon$ con ipotesi (M1) $\mathbf X$ nota $n\times p$ di rango $p$ ($p$ conta l'intercetta), (M2) $\boldsymbol\beta$ incognito, (M3) $\mathbb E(\boldsymbol\varepsilon)=\mathbf 0$, (M4) $\operatorname{VarCov}(\boldsymbol\varepsilon)=\sigma^2\mathbf I$, (M5) normalità (libro, cap. 9, Def. 9.1-9.2); "campane traslate" attorno alla retta. Equazioni normali $\mathbf X'\mathbf X\hat{\boldsymbol\beta}=\mathbf X'\mathbf Y$, $\hat{\boldsymbol\beta}=(\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf Y$, MLE = minimi quadrati (Teorema 9.3); $\mathbb E(\mathrm{RSS})=(n-p)\sigma^2$ anche senza normalità, quindi $\hat\sigma^2_{\mathrm{ML}}=\mathrm{RSS}/n$ è distorto e $S^2=\mathrm{RSS}/(n-p)$ corretto (Prop. 9.7; il docente chiama i residui $E$ e $S^2$ RMS). Modello nullo $\hat\beta_0=\bar Y$. Predittori qualitativi con dummy, interazioni, diagnostica, GLS (cap. 10); in R `lm`, `model.matrix`, calcolo matriciale a mano (dati altezza-peso). La retta $\mathbb E(Y\mid X=x)$ della normale bivariata coincide con quella stimata. Fonti: `Libri/Modelli statistici/capitoli/cap09.tex` (pp. 146-151), `cap10.tex`; `magistrale/Modelli statistici/251112 Stima e distribuzioni nel modello lineare.pdf`; codice `magistrale/Modelli statistici/codici/251106 lm.R`.
- **Numerical opt** (magistrale): training set $\{(x_i,\tilde y_i)\}$ con $\tilde y_i=w^{*T}x_i+b^*+\epsilon_i$ ed $\epsilon_i\sim N(0,0.1)$. Il problema $\min\frac12\sum_i(w^Tx_i+b-\tilde y_i)^2=\min\frac12\|X\theta-\tilde y\|^2$, con $X$ di righe $(x_i^T,1)$, è un problema lineare ai minimi quadrati. La regressione non lineare si risolve con il [[Metodo di Gauss-Newton]]. Fonti: `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§9.2, eq. 58-61).
- **Business intelligence per big data** (magistrale): apertura del mazzo "Regression Analysis: Fundamentals" (Cerquitelli, Baralis): obiettivi (predire un target numerico, modello interpretabile), requisiti (accuratezza, interpretabilità, scalabilità, gestione di rumore e outlier), classificazione per numero di variabili (semplice/multipla), forma (lineare/non lineare) e dimensione temporale (cross-sectional/serie storiche). Modello semplice $y=\beta_0+\beta_1x$ con minimi quadrati sulla RSS: $\beta_1=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2}$, $\beta_0=\bar y-\beta_1\bar x$ (letta sulla pagina renderizzata 12); esempio del prezzo delle case in funzione dei piedi quadrati (2104 → 460, 1416 → 232, 1534 → 315, 852 → 178 migliaia di dollari). Multipla $y=\beta_0+\beta_1x_1+\dots+\beta_nx_n+\varepsilon$; con predittori correlati la varianza dei coefficienti cresce e l'interpretazione si complica; con dati osservazionali evitare conclusioni causali. Seguono [[Regressione polinomiale]], [[Support vector regression]], [[Metriche di valutazione della regressione]]; sul tempo è la base della [[Previsione di serie storiche]]. Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 1-17); `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (p. 19).
- **Data science lab** (magistrale): modello $y=\theta_0+\theta_1x+\varepsilon$ ($\varepsilon$ stocasticità non modellabile), predizione $\hat y=\hat\theta_0+\hat\theta_1x$; si minimizza $MSE(\theta_0,\theta_1)=\frac1n\sum_i(y_i-\theta_0-\theta_1x_i)^2$, quadratica con minimo unico dove $\partial MSE/\partial\theta_0=\partial MSE/\partial\theta_1=0$: $\theta_0=\bar y-\theta_1\bar x$, $\theta_1=\sum(x_i-\bar x)(y_i-\bar y)/\sum(x_i-\bar x)^2$. Caso multiplo $\hat y=\theta^Tx$ con $x=(1,x_1,\dots,x_n)$ e soluzione $\theta=(X^TX)^{-1}X^TY$; $\theta_1$ è la variazione di $\hat y$ per un aumento unitario di $x_1$ a parità del resto. Nel deep learning la stessa MSE è l'esempio di loss risolvibile in forma chiusa, punto di partenza per la discesa del gradiente. In scikit-learn `LinearRegression().fit(X_train, y_train)`. Fonti: `magistrale/Data science lab/slide testo/10-DMRegression.pdf` (p. 2-9); `slide testo/DSML-Deep-Learning-Intro.pdf` (p. 15-16); `slide py/8-ScikitLearn-Regression.pdf` (p. 2). Seguono [[Regressione polinomiale]] e [[Metriche di valutazione della regressione]].

## Prerequisiti
- [[Problema dei minimi quadrati]]: stima con la norma 2
- [[Punti critici in più variabili]]: condizione del primo ordine sui coefficienti
- [[Stimatore di massima verosimiglianza]]: con errori normali coincide con i minimi quadrati (Prob e statistica)
- [[Vettore gaussiano]]: $\mathbf y\sim N_n(X\boldsymbol\beta,\sigma^2I_n)$ (Prob e statistica)

## Porta a
- [[Linearizzazione di valore assoluto e min-max]]: regressione in norma $\ell_1$ e $\ell_\infty$ come LP
- [[Regressione regolarizzata]]: ridge e lasso
- [[Inferenza sui coefficienti di regressione]]: distribuzione degli stimatori e test t (Prob e statistica)
- [[Coefficiente di determinazione]]: bontà di adattamento $R^2$ (Prob e statistica)
- [[Multicollinearità]]: covariate molto correlate (Prob e statistica)
- [[Analisi dei residui]]: verifica delle ipotesi di Gauss (Prob e statistica)
- [[Analisi della varianza]]: covariate categoriche (Prob e statistica)
- [[Geometria dei minimi quadrati]]: $\hat{\mathbf Y}$ come proiezione ortogonale (Modelli statistici)
- [[Teorema di Gauss-Markov]]: ottimalità dei minimi quadrati (Modelli statistici)
- [[Test F nel modello lineare]]: ipotesi lineari sui coefficienti (Modelli statistici)
- [[Modello lineare generalizzato]]: risposte non normali (Modelli statistici)
- [[Modello lineare a effetti misti]]: dati raggruppati (Modelli statistici)

## Collegati
- [[Support vector machine]]: target categorico, classificazione
- [[Matrice simmetrica definita positiva]]: $A^TA$ definita positiva se le colonne sono indipendenti
