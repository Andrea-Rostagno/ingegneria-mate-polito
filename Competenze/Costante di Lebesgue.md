---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Lebesgue constant", "condizionamento dell'interpolazione", "polinomio di migliore approssimazione", "best uniform approximation", "teoremi di Jackson", "Jackson theorems", "norma uniforme", "funzione hölderiana"]
tags: [competenza, area/numerica]
---

# Costante di Lebesgue

> Numero $\Lambda_n$ che misura quanto l'interpolazione polinomiale amplifica gli errori sui dati e quanto il polinomio interpolante può essere peggiore del polinomio di migliore approssimazione.

## Definizione / enunciato
Con la norma uniforme $\|g\|_\infty=\max_{[a,b]}|g|$ e i polinomi di Lagrange $\ell_j$ relativi ai nodi $x_1,\dots,x_{n+1}$:
$$\Lambda_n=\Big\|\sum_{j=1}^{n+1}|\ell_j|\Big\|_\infty .$$
**Condizionamento.** Perturbando le ordinate $\bar f_j=f(x_j)+\epsilon_j$:
$$\|p_n-\bar p_n\|_\infty\le\Lambda_n\|\epsilon\|_\infty,\qquad \frac{\|p_n-\bar p_n\|_\infty}{\|p_n\|_\infty}\le\Lambda_n\frac{\|\epsilon\|_\infty}{\|\mathbf f\|_\infty}.$$
Per qualunque scelta dei nodi $\Lambda_n\to+\infty$; nel caso ottimale la crescita è logaritmica. Nodi di Chebyshev e di Chebyshev-Lobatto: $\Lambda_n=O(\log n)$; nodi equispaziati: $\Lambda_n=O(e^n)$.

**Errore.** Detto $q_n^*$ il polinomio di **migliore approssimazione uniforme** ($\|f-q_n^*\|_\infty=\min_{q_n\in\mathbb P_n}\|f-q_n\|_\infty$) ed $E_n^*=f-q_n^*$:
$$\|f-p_n\|_\infty\le(1+\Lambda_n)\|E_n^*\|_\infty .$$

## Formule chiave
Teoremi di Jackson: $\|E_n^*\|_\infty\to0$ se $f\in C^0$; $=O(n^{-\mu})$ se $f$ è hölderiana di ordine $\mu$ ($|f(x)-f(y)|\le C|x-y|^\mu$; $\mu=1$ è Lipschitz); $=O(n^{-(k+\mu)})$ se $f\in C^{k,\mu}$. Quindi con nodi di Chebyshev o Chebyshev-Lobatto
$$\|f-p_n\|_\infty=O\!\left(\frac{\log n}{n^{\mu}}\right)\quad\text{oppure}\quad O\!\left(\frac{\log n}{n^{k+\mu}}\right).$$

## Intuizione
$\Lambda_n$ è il "numero di condizionamento" dell'operatore di interpolazione: se cresce lentamente (log) basta un po' di regolarità di $f$ per vincerlo, se cresce esponenzialmente (nodi equispaziati) nessuna regolarità basta in generale.

## Come si usa
Spiega perché la convergenza uniforme dipende da nodi e regolarità: con Chebyshev è garantita se $f$ è almeno hölderiana, non se è solo continua; con nodi equispaziati non è garantita neppure per $f\in C^\infty$ (funzione di Runge). Dimostrazione della stima: $q_n^*=\sum_j\ell_jq_n^*(x_j)$ per unicità, quindi $f-p_n=(f-q_n^*)+\sum_j\ell_j(q_n^*(x_j)-f(x_j))$.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 31-35, 47-54).

## Prerequisiti
- [[Rappresentazione di Lagrange]]: $\Lambda_n$ è costruita con i polinomi $\ell_j$
- [[Condizionamento di un problema numerico]]: amplificazione relativa degli errori sui dati

## Porta a
- [[Convergenza del polinomio interpolante]]: stima $(1+\Lambda_n)\|E_n^*\|_\infty$
- [[Convergenza delle formule di quadratura]]: per le formule interpolatorie stabilità e convergenza dipendono ancora dai nodi

## Collegati
- [[Nodi di Chebyshev]]: $\Lambda_n=O(\log n)$
- [[Teorema di esistenza e unicità locale]]: la condizione di Lipschitz è il caso $\mu=1$ della condizione di Hölder
