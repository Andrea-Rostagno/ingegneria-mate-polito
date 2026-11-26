---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["decision tree", "algoritmo di Hunt", "condizione di test", "criteri di stop"]
tags: [competenza, area/data-ml]
---

# Albero di decisione

> Classificatore che rappresenta il modello come albero di test sugli attributi, costruito in modo greedy dividendo ricorsivamente il training set.

## Definizione / enunciato
Ogni nodo interno contiene una **condizione di test** su un attributo, ogni foglia un'etichetta di classe. Per classificare un record si parte dalla radice e si seguono i rami secondo i suoi valori. Più alberi possono adattarsi agli stessi dati.

**Algoritmo di Hunt** (alla base di CART, ID3, C4.5, SLIQ, SPRINT). Sia $D_t$ l'insieme dei record di training che raggiungono il nodo $t$:
- se tutti i record di $D_t$ sono della stessa classe $y_t$, $t$ è una foglia etichettata $y_t$;
- se $D_t$ è vuoto, $t$ è una foglia con la classe di default (maggioritaria) $y_d$;
- altrimenti si sceglie l'attributo "migliore", si divide $D_t$ in sottoinsiemi e si ripete ricorsivamente.

La strategia è **greedy**: lo split migliore è scelto localmente, senza garanzia di ottimo globale.

## Formule chiave
Struttura del test secondo il tipo di attributo:
- nominale: split a più vie (un ramo per valore) o binario (partizione ottima dei valori in due insiemi);
- ordinale: come il nominale, ma la partizione deve rispettare l'ordine;
- continuo: discretizzazione statica o dinamica, oppure decisione binaria $(A<v)$ vs $(A\ge v)$ cercando il taglio migliore.

## Intuizione
I confini di decisione sono paralleli agli assi perché ogni test usa un solo attributo; gli alberi obliqui (es. $x+y<1$) sono più espressivi ma trovare il test ottimo costa molto. Scendendo nell'albero i record diminuiscono (frammentazione dei dati) e le foglie possono essere statisticamente poco significative.

## Come si usa
Esempio delle slide (dataset Refund, Marital Status, Taxable Income, Cheat): albero Refund $\to$ MarSt $\to$ TaxInc; il record (Refund=No, Married, 80K) è classificato Cheat = "No". Criteri di stop: tutti i record della stessa classe, valori degli attributi simili, terminazione anticipata. Valutazione: accuratezza comparabile su dataset semplici, costruzione veloce e classificazione molto veloce, interpretabile se piccolo, scalabile, gestione difficile dei dati mancanti, non incrementale.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Decision trees" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 8-27, 42, 47-51).
- **Business intelligence per big data** (magistrale): stessa sezione "Decision trees" (algoritmo di Hunt, condizioni di test su attributi nominali, ordinali e continui, criteri di stop, frammentazione dei dati, valori mancanti, confini di decisione e alberi obliqui, valutazione). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 8-27, 42, 47-51).
- **Data science lab** (magistrale): algoritmo di Hunt, condizioni di test, scelta dell'attributo migliore, criteri di stop e valutazione degli alberi dal mazzo di classificazione; in scikit-learn `DecisionTreeClassifier(max_depth=10, min_impurity_decrease=0.01)` (default `None` e `0.0`). Per la **regressione** gli alberi usano target reali, impurità del nodo calcolata come **varianza** e assegnano a ogni foglia la **media** dei punti che contiene (`10-DMRegression.pdf` p. 22). Gli alberi casuali sono la base di [[Isolation forest]]. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 8-52); `slide py/7-ScikitLearn-Classification.pdf` (p. 15-18).

## Prerequisiti
- [[Classificazione supervisionata]]: un modello di classificazione

## Porta a
- [[Misure di impurità]]: scelta dell'attributo di split
- [[Overfitting e pruning]]: alberi troppo profondi
- [[Random forest]]: insieme di alberi

## Collegati
- [[Classificatori basati su regole]]: regole estratte dall'albero
