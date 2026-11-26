---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["regularization", "algoritmi basati sulla regolarizzazione", "regularization-based algorithms", "parametro di regolarizzazione", "termine di regolarizzazione", "regularization term"]
tags: [competenza, area/data-ml]
---

# Regolarizzazione

> Si minimizza l'errore empirico più $\lambda$ volte una misura della complessità dell'ipotesi: è la versione continua e trattabile della minimizzazione del rischio strutturale.

## Definizione / enunciato
Si sceglie una famiglia molto ricca $H=\bigcup_{\gamma>0}H_\gamma$, unione **non numerabile** di classi annidate, spesso densa nelle funzioni continue su $\mathcal X$. Esempio: funzioni lineari in uno spazio di dimensione alta, con $H_\gamma=\{x\mapsto\mathbf w\cdot\varphi(x):\|\mathbf w\|\le\gamma\}$. L'estensione di SRM suggerirebbe
$$h_{\rm reg}=\arg\min_{\gamma>0,\,h\in H_\gamma}\hat R(h)+\mathfrak R(H_\gamma)+\sqrt{\frac{\log\gamma}m}.$$

## Formule chiave
Spesso esiste $\mathcal R:H\to\mathbb R$ tale che il problema vincolato $\arg\min_{\gamma>0,h\in H_\gamma}\hat R(h)+\mathrm{pen}(\gamma,m)$ equivale al problema **non vincolato**
$$h_{\rm reg}=\arg\min_{h\in H}\ \hat R(h)+\lambda\,\mathcal R(h),$$
dove $\lambda>0$ è il **parametro di regolarizzazione** e $\mathcal R(h)$ il **termine di regolarizzazione** (tipicamente $\|\mathbf w\|^2$).

## Intuizione
Invece di scegliere fra classi discrete, si penalizza in modo continuo la "taglia" dell'ipotesi: $\lambda$ grande favorisce ipotesi semplici (più errore di approssimazione), $\lambda$ piccolo ipotesi che seguono i dati (più errore di stima). Nella lezione sulla maledizione della dimensionalità è uno dei tre rimedi classici: se le stime dei parametri sono instabili, si regolarizzano.

## Come si usa
$\lambda$ si sceglie con la cross-validation (o la ricerca a griglia sul validation set). La SVM a margine morbido è un esempio: $\frac12\|\mathbf w\|^2$ è il regolarizzatore, la somma delle slack (hinge loss) l'errore empirico, $C$ regola il compromesso (accostamento a $1/\lambda$ nostro, non nelle slide). Il teorema del rappresentante garantisce soluzioni finite-dimensionali quando il regolarizzatore è la norma in un RKHS.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/ERM_SRM_CV.pdf` (p. 25-27); `curse.pdf` (p. 50); `FML.pdf` §4.6.

## Prerequisiti
- [[Structural risk minimization]]: la regolarizzazione ne è l'estensione continua

## Porta a
- [[SVM a margine morbido]]: esempio di algoritmo regolarizzato
- [[Teorema del rappresentante]]: forma della soluzione con norma RKHS

## Collegati
- [[Regressione regolarizzata]]: ridge e lasso come casi particolari
- [[Maledizione della dimensionalità]]: rimedio all'instabilità delle stime
- [[Errore di stima ed errore di approssimazione]]: $\lambda$ regola il compromesso
