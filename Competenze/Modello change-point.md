---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["change-point model", "modello a punti di cambiamento", "structural-change model", "cambiamento strutturale", "change point"]
tags: [competenza, area/statistica]
---

# Modello change-point

> Serie che attraversa più regimi senza mai tornare a uno già visitato: si scrive come un HMM con matrice di transizione che permette solo di restare nello stato o passare al successivo.

## Definizione / enunciato
Ci sono casi in cui la serie segue diversi regimi ma, una volta che cambia regime, non torna più a quelli visitati: modelli **change-point** o **structural-change**. Il modo più semplice è un HMM
$$y_i\mid z_i\sim F(\boldsymbol\theta_{z_i}),\qquad z_i\mid z_{i-1}\sim\mathrm{Disc}(\boldsymbol\pi_{z_{i-1}}),\ i=1,\dots,n,$$
in cui $\boldsymbol\pi_j$ con $j<L$ ha solo due valori diversi da zero,
$$\pi_{j,j}>0,\qquad\pi_{j,j+1}>0,\qquad\pi_{j,j+1}=1-\pi_{j,j},$$
mentre $\boldsymbol\pi_L=(0,0,\dots,0,1)$.

## Formule chiave
Matrice di transizione bidiagonale superiore con ultimo stato assorbente; il modello parte da $z_1=1$, che è una costante. Prior bayesiana: una serie di distribuzioni Beta su $\pi_{j,j}$.

## Intuizione
A ogni tempo il processo o rimane nello stesso stato o si sposta in quello adiacente: i tempi in cui $z$ cambia sono i punti di cambiamento tra regimi.

## Come si usa
Si stima con gli stessi strumenti dell'HMM (full conditional o campionamento all'indietro degli stati), con Beta al posto delle Dirichlet sulle righe. Nel notebook del corso: serie simulata con due change-point.

## Nei corsi
- **Statistica computazionale** (magistrale): "Change Point Model", ultima sezione dei modelli mistura. Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 55-56); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (sezione 6).

## Prerequisiti
- [[Hidden Markov model]]: caso particolare con transizioni vincolate

## Collegati
- [[Distribuzione Beta]]: prior su $\pi_{j,j}$
- [[Catena di Markov a tempo discreto]]: catena con stato assorbente finale
