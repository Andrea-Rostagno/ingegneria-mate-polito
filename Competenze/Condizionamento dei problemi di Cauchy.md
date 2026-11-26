---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["conditioning of initial value problems", "condizionamento di un problema a valori iniziali", "dipendenza continua dai dati", "problema ben posto", "soluzione asintoticamente stabile", "asymptotic stability", "soluzione asintoticamente instabile", "stima di dipendenza continua dai dati", "problema mal posto"]
tags: [competenza, area/numerica]
---

# Condizionamento dei problemi di Cauchy

> Quanto la soluzione di $y'=f(x,y)$, $y(a)=y_0$ si discosta se il dato iniziale viene perturbato in $y_0+\varepsilon$: dipende dal segno di $\partial f/\partial y$ (o degli autovalori della jacobiana).

## Definizione / enunciato
**Buona posizione.** Se $f$ è continua e lipschitziana in $y$ con costante $L$ nella striscia $S$, la soluzione dipende con continuità dal dato:
$$\|y(x;y_0)-y(x;\bar y_0)\|\le e^{L|x-a|}\|y_0-\bar y_0\| .$$
Questo non basta: se $L$ è grande la perturbazione può crescere esponenzialmente. Si studia allora $\delta(x)=z(x)-y(x)$, con $z$ soluzione del problema perturbato.

1. **Lineare scalare** $y'=\lambda y+g$: $\delta(x)=\varepsilon e^{\lambda(x-a)}$. Se $\lambda\le0$ il problema è ben condizionato e la soluzione **asintoticamente stabile**; se $\lambda>0$, $|\delta|\to\infty$ (asintoticamente instabile).
2. **Non lineare scalare** ($f\in C^2$): $\delta(x)\approx\varepsilon\exp\int_a^xf_y(t,y(t))\,dt$; ben condizionato se $f_y\le0$, mal condizionato se $f_y>0$.
3. **Sistema lineare** $\mathbf y'=A\mathbf y+\mathbf g$ con $A$ diagonalizzabile: $\delta(x)=\sum_ic_ie^{\lambda_i(x-a)}\mathbf v_i$. Tutti $\mathrm{Re}\lambda_i<0$: asintoticamente stabile; $\mathrm{Re}\lambda_i\le0$ con qualche parte reale nulla: stabile; qualche $\mathrm{Re}\lambda_i>0$: asintoticamente instabile.
4. **Sistema non lineare:** $\delta'\approx J_f(x,y)\delta$; in prima approssimazione stabile se gli autovalori di $J_f(a,\mathbf y_0)$ hanno parte reale negativa.

## Formule chiave
$$\delta'(x)=f_y(x,y)\,\delta(x)+O(\delta^2),\qquad\delta(a)=\varepsilon .$$

## Intuizione
Una perturbazione del dato si propaga come la soluzione dell'equazione linearizzata: se questa decade, l'errore viene dimenticato; se cresce, nessun metodo numerico può recuperarlo.

## Come si usa
Esempi delle slide: $y'=100y-101e^{-x}$, $y(0)=1$ ha soluzione $e^{-x}$, ma il problema perturbato ha soluzione $e^{-x}+\varepsilon e^{100x}$: mal condizionato. $y'=-100y+99e^{-x}$ ha perturbazione $\varepsilon e^{-100x}$: ben condizionato. Se $f_y\le0$ ma è grande in modulo il problema è ben condizionato ma "difficile": è un'equazione **stiff**.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 18-33).
- **Equazioni di fisica matematica** (triennale): **dipendenza continua dal dato iniziale**. Con le ipotesi di Cauchy e $J=\mathbb R^n$, le soluzioni $x$, $y$ con dati $x_0$, $y_0$ al tempo $t_0$ soddisfano, su $[0,T]$,
$$\|y-x\|_\infty\le K\|y_0-x_0\|,\qquad K=1+LTe^{LT},$$
ottenuta dalla forma integrale, dalla lipschitzianità e dal lemma di Grönwall (forma $c_1(1+c_2te^{c_2t})$, con $c_1=\|y_0-x_0\|$, $c_2=L$). **Buona positura nel senso di Hadamard:** un problema è ben posto se la soluzione (i) esiste, (ii) è unica, (iii) dipende con continuità dai dati; se manca anche una sola condizione è mal posto. Fonte: `triennale/ANNO 3/eq fisica matematica/03 - Lezione 06_10_23.pdf` (pp. 2-6).

## Prerequisiti
- [[Teorema di esistenza e unicità locale]]: lipschitzianità e dipendenza continua dai dati
- [[Lemma di Gronwall]]: dà la costante K = 1 + LTe^{LT} (Equazioni di fisica matematica)
- [[Condizionamento di un problema numerico]]: stessa domanda sulla propagazione degli errori dei dati
- [[Equazioni differenziali lineari del primo ordine]]: $\delta'=\lambda\delta$ si risolve esplicitamente

## Porta a
- [[Stabilità assoluta]]: ha senso solo per soluzioni asintoticamente stabili
- [[Problemi stiff]]: $f_y$ negativa e grande in modulo

## Collegati
- [[Autovalori e autovettori]]: decidono la stabilità nel caso dei sistemi
- [[Matrice diagonalizzabile]]: ipotesi del caso 3
- [[Stabilità dei sistemi lineari di ODE]]: stesso criterio sugli autovalori, letto come stabilità dell'equilibrio (Equazioni di fisica matematica)
- [[Stabilità in prima approssimazione]]: analogo del caso 4 per gli equilibri (Equazioni di fisica matematica)
- [[Buona positura secondo Hadamard]]: la dipendenza continua è la terza condizione di buona positura (Equazioni di fisica matematica)
