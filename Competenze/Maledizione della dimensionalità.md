---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Business intelligence per big data]
livello: [triennale, magistrale]
aliases: ["curse of dimensionality", "spazi ad alta dimensione vuoti", "high dimensional spaces are empty", "scomparsa dei vicini più vicini", "punti isolati in alta dimensione"]
tags: [competenza, area/data-ml]
---

# Maledizione della dimensionalità

> In dimensione alta lo spazio è quasi vuoto: gli intorni locali contengono pochissimi punti e le distanze tra punti diventano tutte simili, per cui i metodi basati su medie locali e vicini più vicini smettono di funzionare.

## Definizione / enunciato
Termine introdotto da R. Bellman (*Dynamic programming*, 1957). Classificazione e regressione si basano spesso su **medie locali**: si assegna a $x$ la classe più rappresentata nel suo intorno, oppure, nel modello $y_i=f(x_i)+\epsilon_i$, si stima $f(x)$ con la media degli $y_i$ dei $k$ vicini più vicini. In dimensione $p$ grande questi intorni non contengono dati.

## Formule chiave
- Dati in $[0,1]^p$: per catturare una frazione $s$ del volume serve un cubo di lato $s^{1/p}$; con $p=10$: $s=0.1\Rightarrow s^{1/p}=0.63$, $s=0.01\Rightarrow0.8$.
- Un ipercubo di lato $r=0.1$ ha volume $0.1^p$: per $p$ grande la probabilità di trovarvi punti del dataset è minuscola, i punti sono **isolati**.
- $X,Y$ indipendenti uniformi su $[0,1]^p$:
$$\mathbb E\big[\|X-Y\|^2\big]=p/6,\qquad \mathrm{Std}\big[\|X-Y\|^2\big]\simeq0.2\sqrt p .$$
Gli istogrammi delle distanze tra $n=100$ punti per $p=2,100,1000$ si concentrano: la nozione di vicino più vicino svanisce.

## Intuizione
La deviazione standard cresce come $\sqrt p$ mentre la media cresce come $p$: in scala relativa tutte le distanze sono quasi uguali. In compenso, essendo lo spazio quasi vuoto, separare i gruppi con un classificatore adatto diventa **più facile** (osservazione che negli appunti anticipa le SVM con kernel).

## Come si usa
Tre rimedi classici (ultima slide): **riduzione della dimensione** a $d\ll p$; **regolarizzazione**, se il problema è l'instabilità delle stime; **modelli parsimoniosi**, con ipotesi restrittive che riducono il numero di parametri. Negli appunti si consiglia di riscalare i dati (MinMaxScaler) prima di ragionare in $[0,1]^p$.

## Nei corsi
- **Matematica per l'AI** (triennale): lezione "The curse of dimensionality". Fonti: `triennale/ANNO 3/matematica AI/curse.pdf` (p. 1-19, 50).
- **Business intelligence per big data** (magistrale): una slide del mazzo di preprocessing, in versione qualitativa: al crescere della dimensione i dati diventano sparsi e le nozioni di densità e distanza fra punti, cruciali per clustering e outlier detection, perdono significato; motiva la riduzione della dimensionalità. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (p. 36).

## Prerequisiti
- [[K-nearest neighbor]]: il metodo locale che degrada
- [[Misure di distanza]]: in alta dimensione le distanze perdono contrasto

## Porta a
- [[Concentrazione del volume in alta dimensione]]: palle, gusci, angoli e massa gaussiana
- [[Legge di Marchenko-Pastur]]: effetto sulle matrici di covarianza
- [[Analisi delle componenti principali]]: riduzione della dimensione
- [[Regolarizzazione]]: stabilizza le stime

## Collegati
- [[Riduzione della dimensionalità]]: la contromisura generale
- [[Kernel definito positivo]]: in alta dimensione separare linearmente è più facile
