---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [SVR, regressione a vettori di supporto, Support Vector Machine - Regression, epsilon-SVR, regressione epsilon-insensibile, SVR lineare, SVR non lineare]
tags: [competenza, area/data-ml]
---

# Support vector regression

> Versione per la regressione della SVM: cerca un iperpiano che approssimi il target con errore al più $\varepsilon$, ignorando gli scarti dentro la fascia e penalizzando solo quelli fuori.

## Definizione / enunciato
Invece di minimizzare la somma dei quadrati dei residui (RSS) come la regressione lineare, la SVR fissa **quanto errore è accettabile** e cerca una funzione $f(x) = \theta\cdot x + b$ che predica il target $y$ con errore massimo $\varepsilon$. Gli scarti minori di $\varepsilon$ non contano ("we do not care about errors as long as they are less than $\varepsilon$").

## Formule chiave
Modello lineare (problema di ottimizzazione convesso), con $y^i$ target e $x^i$ attributi predittivi dell'oggetto $i$:
$$ \min \tfrac12\|\theta\|^2 \quad \text{s.t.}\quad y^i - \theta\cdot x^i - b \le \varepsilon,\qquad \theta\cdot x^i + b - y^i \le \varepsilon $$
**Margine morbido** (per un dato $\varepsilon$ il problema può essere non ammissibile): si introducono gli scarti $\xi_i,\xi_i^*$ dal margine,
$$ \min \tfrac12\|\theta\|^2 + C\sum_{i=1}^m(\xi_i+\xi_i^*) \quad\text{s.t.}\quad y^i-\theta\cdot x^i-b\le\varepsilon+\xi_i,\;\; \theta\cdot x^i+b-y^i\le\varepsilon+\xi_i^*,\;\; \xi_i,\xi_i^*\ge 0 $$
Caso non lineare: stessi vincoli con $\phi(x^i)$ al posto di $x^i$, dove $\phi$ mappa i dati in uno spazio di dimensione più alta tramite un kernel (polinomiale, radiale gaussiano, ...).

## Intuizione
La fascia $\theta\cdot x+b\pm\varepsilon$ è un "tubo" attorno alla retta: solo i punti fuori dal tubo contribuiscono al costo. $C$ è un iperparametro: al crescere di $C$ diminuisce la tolleranza verso i punti fuori dalla fascia.

## Come si usa
Esempio delle slide: stimare il reddito (Income) dall'età (Age) con una retta e una fascia $\pm\varepsilon$. Si scelgono $\varepsilon$, $C$ e il kernel; il caso non lineare si risolve trasformando gli input con la funzione kernel e risolvendo lo stesso problema.

## Nei corsi
- **Business intelligence per big data** (magistrale): parte "Support Vector Regression" del mazzo sulla regressione. Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 31-40; formule lette sulle pagine renderizzate 34 e 37).

## Prerequisiti
- [[Support vector machine]]: stessa formulazione a margine, applicata a un target numerico
- [[Regressione lineare]]: il confronto parte dalla minimizzazione della RSS

## Porta a
- [[Metriche di valutazione della regressione]]: valutazione delle predizioni numeriche

## Collegati
- [[SVM a margine morbido]]: analogo con variabili di slack nel caso della classificazione
- [[Kernel definito positivo]]: il kernel trick rende la SVR non lineare
