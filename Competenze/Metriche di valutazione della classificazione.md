---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Matematica per l'AI, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["matrice di confusione", "confusion matrix", "accuracy", "accuratezza", "precision", "recall", "F-measure", "matrice dei costi", "F-beta score", "F1 score", "sensibilità"]
tags: [competenza, area/data-ml]
---

# Metriche di valutazione della classificazione

> Misure calcolate dalla matrice di confusione (accuratezza, precision, recall, F-measure) per valutare la capacità predittiva di un classificatore.

## Definizione / enunciato
**Matrice di confusione** (classificatore binario, righe = classe reale, colonne = classe predetta): $a$ = TP (veri positivi), $b$ = FN (falsi negativi), $c$ = FP (falsi positivi), $d$ = TN (veri negativi).

L'**accuratezza** è la metrica più usata ma non sempre affidabile: non è adatta con distribuzione delle classi **sbilanciata** o con classi di **importanza diversa** (un malato classificato sano è più grave del contrario). Si usano allora misure specifiche per classe: **recall** (oggetti assegnati correttamente a $C$ su oggetti che appartengono a $C$) e **precision** (oggetti assegnati correttamente a $C$ su oggetti assegnati a $C$), riassunte dalla **F-measure**.

## Formule chiave
$$\text{Accuracy}=\frac{a+d}{a+b+c+d}=\frac{TP+TN}{TP+TN+FP+FN}$$
$$p=\frac{a}{a+c},\qquad r=\frac{a}{a+b},\qquad F=\frac{2rp}{r+p}=\frac{2a}{2a+b+c}$$

## Intuizione
Precision risponde a "quanto mi posso fidare quando il modello dice $C$", recall a "quanti dei veri $C$ trova". La F-measure, media armonica, è alta solo se lo sono entrambe.

## Come si usa
Esempio delle slide: classe 0 con 9900 oggetti e classe 1 con 100. Il modello che predice sempre classe 0 ha accuratezza $9900/10000=99\%$, ma non trova nessun oggetto della classe 1: per la classe 1 la recall è 0.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Metrics for model evaluation" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 149-155).
- **Matematica per l'AI** (triennale): nel laboratorio sulle SVM non lineari (Della Santa): accuratezza su un test set $\mathcal P$, veri/falsi positivi/negativi per una classe positiva $+1$, matrice di confusione, precision e recall per classe e
$$F_\beta(C_i;\mathcal P)=(1+\beta^2)\frac{\mathrm{prec}(C_i;\mathcal P)\cdot\mathrm{rec}(C_i;\mathcal P)}{\beta^2\,\mathrm{prec}(C_i;\mathcal P)+\mathrm{rec}(C_i;\mathcal P)}\in[0,1],$$
in pratica $F_1$ ($\beta=1$, uguale peso a precision e recall); calcolo con `precision_recall_fscore_support` di scikit-learn. Fonti: `triennale/ANNO 3/matematica AI/nonlinSVM.ipynb` (celle "Accuratezza, Precisione e Sensibilità"), `SVMandGridSearch.ipynb`.
- **Business intelligence per big data** (magistrale): stesse slide (matrice di confusione, accuratezza e suoi limiti, misure specifiche per classe: precision, recall, F-measure). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 152-158). Analogo per target numerici: [[Metriche di valutazione della regressione]].
- **Data science lab** (magistrale): matrice di confusione, accuratezza $=(TP+TN)/(TP+TN+FP+FN)$ e suoi limiti (classe 0 con 9900 oggetti e classe 1 con 100: predire sempre 0 dà 99% senza riconoscere la classe 1), precision $TP/(TP+FP)$, recall $TP/(TP+FN)$, $F1=2\cdot\text{Recall}\cdot\text{Precision}/(\text{Precision}+\text{Recall})$ (p. 104; a p. 105 il denominatore è stampato "Recall + Recall", refuso). **Medie multiclasse**: macro (classi pesate ugualmente, adatta a dataset sbilanciati) e weighted (pesi = supporti); esempio: precision 0.7, 0.5, 0.6 con 300, 200, 500 campioni dà macro 0.6 e weighted $0.7\cdot0.3+0.5\cdot0.2+0.6\cdot0.5=0.61$. In scikit-learn `accuracy_score`, `precision_score`, `recall_score`, `f1_score` (con `pos_label`, `average=None|"macro"|"weighted"`) e `confusion_matrix`. Controparte per la regressione: [[Metriche di valutazione della regressione]]. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 99-106); `slide py/7-ScikitLearn-Classification.pdf` (p. 22-25).

## Prerequisiti
- [[Classificazione supervisionata]]: valutare il modello

## Porta a
- [[Curva ROC]]: TPR e FPR dalla matrice di confusione

## Collegati
- [[Metodi di stima dell'accuratezza]]: procedura e misura della valutazione
- [[Kernel definito positivo]]: metriche usate per valutare le SVM non lineari (Matematica per l'AI)
