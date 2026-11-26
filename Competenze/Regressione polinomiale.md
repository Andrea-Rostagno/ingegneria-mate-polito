---
tipo: competenza
area: data-ml
corsi: [Data science lab, Business intelligence per big data]
livello: [magistrale]
aliases: [polynomial regression, PolynomialFeatures, feature polinomiali, polynomial features, termini di interazione, interaction terms, trasformazioni non lineari delle feature, capacità del modello, model capacity, modello polinomiale, modello quadratico, second order model, modello del secondo ordine, response surface, superficie di risposta]
tags: [competenza, area/data-ml]
---

# Regressione polinomiale

> Regressione lineare applicata a nuove feature che sono potenze (e prodotti) delle feature originali: permette di modellare relazioni non lineari restando un modello lineare nei coefficienti.

## Definizione / enunciato
Per modellare relazioni non lineari si aggiungono **feature nuove**, trasformazioni non lineari di quelle originali, e si usa poi una regressione lineare "classica": il modello impara un coefficiente separato per ogni feature (`10-DMRegression.pdf` p. 10). La **regressione polinomiale** aggiunge feature polinomiali fino al grado $n$ e **aumenta la capacità** del modello (p. 11). Nel caso multivariato si possono aggiungere:
- **potenze** ($x_1^2, x_2^2, x_1^3, \dots$);
- **interazioni** ($x_1x_2, x_1x_2^2, \dots$), che catturano relazioni fra variabili a diversi gradi polinomiali;
- oppure entrambe. Il numero totale di feature **cresce in modo combinatorio**.

## Formule chiave
Caso univariato:
$$\hat y=\theta_0+\theta_1x+\theta_2x^2+\dots+\theta_nx^n.$$
Esempio di p. 11: con $x_1,x_2,x_3$ e $n=2$ si aggiungono $x_1^2,x_2^2,x_3^2,x_1x_2,x_1x_3,x_2x_3$. Esempio di p. 10: se ci si aspetta una relazione inversa quadratica si introduce la feature $1/x^2$ e si stima $\hat y=\theta_0+\theta_1 x+\theta_2\,\frac{1}{x^2}$ (da verificare sul PDF: la slide mostra la tabella di $x$ e della nuova feature, il testo estratto è incompleto).

In scikit-learn (`8-ScikitLearn-Regression.pdf` p. 6): da $[x_1,x_2]$ le feature di grado 2 sono $[1,x_1,x_2,x_1^2,x_2^2,x_1x_2]$ e
$$f(x)=w_0+w_1x_1+w_2x_2+w_3x_1^2+w_4x_2^2+w_5x_1x_2.$$

## Intuizione
La non linearità sta tutta nelle feature: il problema di stima resta quello dei minimi quadrati. Più alto il grado, più il modello può piegarsi ai dati, fino a inseguire il rumore.

## Come si usa
`PolynomialFeatures(degree)` (intero o tupla min-max), con `interaction_only=True` per tenere solo le interazioni e `include_bias` per la colonna di uni; tipicamente dentro `make_pipeline(PolynomialFeatures(5), LinearRegression())`. All'aumentare del grado compare l'**overfitting**, che si combatte riducendo il grado, aumentando i dati o con la regolarizzazione (Ridge, Lasso), con il grado e `alpha` scelti in validazione (notebook "Polynomial regression", "Overfitting and regularization" citati a p. 10).

## Nei corsi
- **Data science lab** (magistrale): sezioni "Non-linear relationships" e "Polynomial regression" delle slide di regressione e di scikit-learn. Fonti: `magistrale/Data science lab/slide testo/10-DMRegression.pdf` (p. 10-11, 17-19); `slide py/8-ScikitLearn-Regression.pdf` (p. 6-10).
- **Business intelligence per big data** (magistrale): notazione con $\beta$. Modello di ordine $k$ in una variabile $y=\beta_0+\beta_1x+\beta_2x^2+\dots+\beta_kx^k+\varepsilon$, incluso nel modello lineare $y=X\beta+\varepsilon$; modello quadratico $y=\beta_0+\beta_1x+\beta_2x^2$ ($\beta_1$ effetto lineare, $\beta_2$ effetto quadratico); secondo ordine in due variabili, detto **superficie di risposta**: $y=\beta_0+\beta_1x_1+\beta_2x_2+\beta_{11}x_1^2+\beta_{22}x_2^2+\beta_{12}x_1x_2+\varepsilon$. Ordine da tenere il più basso possibile (di norma fino al secondo); scelta dell'ordine con **forward selection** (si aumenta l'ordine finché il t-test sul termine più alto non è più significativo) o **backward elimination** (si parte dall'ordine massimo e si tolgono i termini più alti), che non portano necessariamente allo stesso modello. Contro: molto sensibile agli outlier; un polinomio di ordine $n-1$ passa sempre per $n$ punti, ma non migliora la comprensione e predice male. Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 18-24; formule lette sulle pagine renderizzate 19 e 22). Collegamenti per questo corso: [[Metriche di valutazione della regressione]] (confronto fra ordini diversi), [[Inferenza sui coefficienti di regressione]] (t-test sul termine di ordine più alto), [[Problema dei minimi quadrati]] (stessa stima dei coefficienti).

## Prerequisiti
- [[Regressione lineare]]: il modello stimato sulle nuove feature
- [[Pipeline di scikit-learn]]: generazione delle feature e regressione in un unico estimatore

## Porta a
- [[Regressione regolarizzata]]: penalizzare i coefficienti quando il grado è alto

## Collegati
- [[Effetto di interazione]]: i termini $x_ix_j$ sono termini di interazione del modello lineare
- [[Overfitting e pruning]]: il grado polinomiale controlla capacità e overfitting
