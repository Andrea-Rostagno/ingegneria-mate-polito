---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["penalty functions", "metodo delle penalità", "penalità esterna", "penalità esatta", "funzione barriera", "barrier function", "barriera logaritmica", "barriera inversa", "penalità interna", "quadratic penalty function", "penalità quadratica"]
tags: [competenza, area/ottimizzazione]
---

# Funzioni di penalità e barriera

> Trasformano un problema vincolato in una successione di problemi non vincolati: le penalità esterne puniscono la violazione dei vincoli (coefficiente crescente), le barriere interne impediscono di uscire dalla regione (coefficiente decrescente).

## Definizione / enunciato
Penalità ideale: $\min_{\mathbf x\in S}f(\mathbf x)=\min_{\mathbf x\in\mathbb R^n}f(\mathbf x)+\Phi(\mathbf x)$ con $\Phi=+\infty$ fuori da $S$ e $0$ in $S$ (non trattabile, va approssimata).

**Vincoli di uguaglianza** $h_i(\mathbf x)=0$:
$$\min\Phi(\mathbf x,\sigma)=f(\mathbf x)+\sigma\sum_{i\in E}h_i^2(\mathbf x)\qquad\text{oppure}\qquad f(\mathbf x)+\sigma\sum_{i\in E}|h_i(\mathbf x)| .$$
**Vincoli di disuguaglianza** $g_i(\mathbf x)\le0$: si penalizza solo la parte positiva $g_i^+$:
$$f(\mathbf x)+\sigma\sum_{i\in I}\big[g_i^+(\mathbf x)\big]^2\ \ (\text{smooth}),\qquad f(\mathbf x)+\sigma\sum_{i\in I}g_i^+(\mathbf x)\ \ (\text{non smooth}).$$

## Formule chiave
Barriere interne, $\min f(\mathbf x)+\sigma B(\mathbf x)$ con $\sigma$ decrescente:
$$B(\mathbf x)=-\sum_{i\in I}\frac1{g_i(\mathbf x)}\ \ (\text{inversa}),\qquad B(\mathbf x)=-\sum_{i\in I}\log\big(-g_i(\mathbf x)\big)\ \ (\text{logaritmica}).$$

## Intuizione
Con $\sigma$ grande la penalità approssima un'ottimizzazione lessicografica (prima l'ammissibilità), ma rende il problema mal condizionato: si usa una sequenza crescente $\sigma^{(k)}$ e ogni soluzione $\hat{\mathbf x}^{(k)}$ è il punto iniziale della successiva. La penalità $\ell_1$ punisce di più le piccole violazioni e richiede $\sigma$ più piccoli, ma non è differenziabile: c'è un compromesso fra non differenziabilità e coefficienti grandi (le penalità esatte hanno spinto lo sviluppo dell'ottimizzazione non smooth). Le penalità esterne convergono dall'esterno, le barriere dall'interno.

## Come si usa
Le barriere logaritmiche sono alla base dei metodi a punti interni per l'ottimizzazione conica; per esempio al vincolo $x_j\ge0$ in un problema di massimo si associa la barriera $\log(x_j)$. La penalità sulle variabili di violazione compare anche nelle formulazioni elastiche dei modelli LP.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 37-40).
- **Numerical opt** (magistrale): solo la penalità quadratica $Q(x;\mu)=f(x)+\frac\mu2\|h(x)\|_2^2$ per vincoli di uguaglianza.
  - **Schema:** dati $x_0^{(0)}$ e $\mu_0>0$, si risolve approssimativamente $\min Q(x;\mu_k)$ (tolleranza alta all'inizio), poi $\mu_{k+1}=\rho\mu_k$: aggressivo ($\rho=10$) se il sottoproblema è facile, conservativo ($\rho=1.5$) altrimenti.
  - **Limiti:** i vincoli sono soddisfatti solo in modo approssimato. Le disuguaglianze con $g^+=\max(g,0)$ rendono $Q$ non liscia.
  - **Esempio:** $\min x_1+x_2$ s.t. $x_1^2+x_2^2=2$.

  Il rimedio è il [[Metodo della lagrangiana aumentata]]. Barriere assenti. Fonti: `magistrale/Numerical opt/Pieraccini/Part_7_Constrained_Optimization_Penalty_methods.pdf` (p. 1-3).

## Prerequisiti
- [[Modello di ottimizzazione]]: vincoli di uguaglianza e disuguaglianza
- [[Condizionamento di un problema numerico]]: $\sigma$ grande rende il problema mal condizionato

## Porta a
- [[Metodo del subgradiente]]: le penalità esatte non smooth

## Collegati
- [[Moltiplicatori di Lagrange]]: altro modo di incorporare i vincoli nell'obiettivo
- [[Pianificazione della produzione multiperiodo]]: penalità $\omega$ nelle formulazioni elastiche
