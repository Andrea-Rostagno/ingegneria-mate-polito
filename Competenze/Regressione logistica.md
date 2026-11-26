---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["logistic regression", "modello logit", "logit model", "regressione logit", "glm binomial", "family = binomial", "coefficiente come log odds ratio", "tabella di confusione", "accuratezza sensibilità specificità"]
tags: [competenza, area/statistica]
---

# Regressione logistica

> GLM per una risposta binaria: il logit della probabilità di successo è lineare nei predittori, e ogni coefficiente è il log odds ratio associato a un aumento unitario del suo predittore a parità degli altri.

## Definizione / enunciato
$y_i\sim\mathrm{Bin}(n_i,\pi_i)$ (Bernoulli se $n_i=1$) con link canonico logit:
$$\operatorname{logit}(\pi_i)=\log\frac{\pi_i}{1-\pi_i}=\mathbf x_i'\boldsymbol\beta,\qquad\pi_i=\frac{e^{\mathbf x_i'\boldsymbol\beta}}{1+e^{\mathbf x_i'\boldsymbol\beta}} .$$
**Coefficienti e odds ratio** (libro, cap. 17, Prop. 17.11): se due individui differiscono solo per $x_{ij}=x_{hj}+1$,
$$\operatorname{logit}(\pi_i)-\operatorname{logit}(\pi_h)=\beta_j,\qquad\mathrm{OR}=e^{\beta_j}.$$

## Formule chiave
- Effetto marginale sulla scala delle probabilità: $\partial\pi/\partial x_j=\beta_j\pi(1-\pi)$, massimo per $\pi=1/2$.
- Con un predittore binario $\beta_1$ è il LOR della tabella $2\times2$.
- Classificazione con soglia $c$: tabella di confusione, accuratezza, sensibilità, specificità; curva ROC al variare di $c$ e AUC.

## Intuizione
Il logit porta $(0,1)$ su tutta la retta reale, dove un modello lineare non produce probabilità impossibili. Sulla scala delle quote l'effetto di un predittore è moltiplicativo e costante; sulla scala delle probabilità dipende da dove ci si trova.

## Come si usa
Taglio cesareo (libro, Es. `c17-taglio-cesareo`), `glm(risp ~ alt + peso + eta + parita + eg + bs, family = binomial)` su 400 parti: `alt` $-0.0522$ (OR 0.949 per unità di altezza, p 0.015), `eta` $0.0550$ (OR 1.057 per unità di età), `paritasi` $-1.417$ (OR 0.242, p $7\cdot10^{-9}$). Previsioni con `predict(type = "response")`, intervalli di Wald con `confint.default`, test della devianza con `anova(..., test = "Chisq")`. Con soglia 0.5 il modello ridotto ha TP 138, FN 62, FP 76, TN 124: accuratezza 0.655, sensibilità 0.69, specificità 0.62, AUC 0.721. Nel libro si legge anche un output di `statsmodels` in Python.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.6 (Prop. 17.11, Def. 17.14, pp. 290-296). Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251211 GLM.pdf`; codice `magistrale/Modelli statistici/codici/251211 regressione logistica.R` (dati `codici/251211 taglio-dati.txt`).

## Prerequisiti
- [[Modello lineare generalizzato]]: struttura del modello
- [[Odds ratio]]: interpretazione dei coefficienti
- [[Fisher scoring]]: stima ed errori standard

## Porta a
- [[Curva ROC]]: valutazione del classificatore al variare della soglia

## Collegati
- [[Metriche di valutazione della classificazione]]: tabella di confusione
- [[Funzioni di attivazione]]: la sigmoide è l'inversa del logit
- [[Softmax e cross-entropy]]: generalizzazione multinomiale e perdita di log-verosimiglianza
- [[Classificatore bayesiano]]: altro classificatore probabilistico
