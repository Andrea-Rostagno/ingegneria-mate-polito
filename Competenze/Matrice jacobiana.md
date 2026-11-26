---
tipo: competenza
area: analisi
corsi: [Analisi 2, Geometria differenziale]
livello: [triennale]
aliases: ["Jacobian matrix", "jacobiana", "J_g", "determinante jacobiano", "Jacobian determinant"]
tags: [competenza, area/analisi]
---

# Matrice jacobiana

> La matrice $n\times m$ delle derivate parziali di $g:\mathbb R^m\to\mathbb R^n$, che ha sulle righe i gradienti delle componenti: è la "derivata" di una funzione vettoriale.

## Definizione / enunciato
Se $g=(g_1,\dots,g_n):\mathbb R^m\to\mathbb R^n$ è differenziabile in $P_0$,
$$J_g(P_0)=\begin{pmatrix}\frac{\partial g_1}{\partial x_1}(P_0)&\cdots&\frac{\partial g_1}{\partial x_m}(P_0)\\\vdots&&\vdots\\\frac{\partial g_n}{\partial x_1}(P_0)&\cdots&\frac{\partial g_n}{\partial x_m}(P_0)\end{pmatrix}.$$
Le righe sono i $\nabla g_i$; se $n=1$, $J_g=\nabla g$ come vettore riga.

## Formule chiave
- Composizione: $J_{f\circ g}(P_0)=J_f(g(P_0))\,J_g(P_0)$.
- Polari: $J_g=\begin{pmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{pmatrix}$, $|\det J_g|=r$; coordinate ellittiche $x=ar\cos\theta$, $y=br\sin\theta$: $|\det J_g|=abr$.
- Superficie $S(u,v)$: la jacobiana è $3\times2$ e $\|P_u\wedge P_v\|=\sqrt{\det(J^tJ)}$ (se $J$ fosse quadrata sarebbe $|\det J|$).
- Campo $F:\mathbb R^n\to\mathbb R^n$: $\mathrm{div}\,F$ è la traccia di $J_F$.

## Intuizione
Come $f'(x_0)$ in Analisi I, la jacobiana è l'applicazione lineare che approssima $g$ vicino a $P_0$; il valore assoluto del suo determinante misura come cambiano le aree o i volumi.

## Come si usa
Nei cambi di variabile negli integrali multipli si calcola $|\det J_g|$ "una volta per tutte" (polari $r$, cilindriche $r$, sferiche $r^2\sin\varphi$); nelle superfici dà l'elemento d'area.

## Nei corsi
- **Analisi 2** (triennale): introdotta il 19/10/2022 con la chain rule generale, poi usata nei cambi di variabile, nelle superfici e nella divergenza. Fonti: `triennale/ANNO 2/analisi 2/AII 07 2022 integrali doppi.pdf` (pp. 6-8); `triennale/ANNO 2/analisi 2/AII 08 2022 integrali doppi.pdf` (pp. 12-15); `triennale/ANNO 2/analisi 2/AII 15 int superficiali e Stokes.pdf` (p. 1); `triennale/ANNO 2/analisi 2/AII 16 2022 stokes e gauss.pdf` (p. 11).
- **Geometria differenziale** (triennale): la jacobiana è la matrice rappresentativa dell'applicazione tangente.
  - $f_{*q}(\partial_{x_j})=\frac{\partial f_k}{\partial x_j}\partial_{y_k}$, quindi $A_{kj}=\frac{\partial f_k}{\partial x_j}(q)$ (dimostrato).
  - La trasposta $J^T$ rappresenta il pull-back $f^*$ sui covettori.
  - $\det J_q\neq0$ dà l'invertibilità locale. Esempio: per le polari $\det J=1/\sqrt{u^2+v^2}$.
  - Fonti: `triennale/ANNO 2/geometria differenziale/Lezione12_GD.pdf` (pp. 18-22, 31-35); `triennale/ANNO 2/geometria differenziale/Lezione16_GD.pdf` (pp. 15-16).

## Prerequisiti
- [[Derivate parziali]]: righe fatte dai gradienti delle componenti

## Porta a
- [[Regola della catena in più variabili]]: prodotto delle jacobiane
- [[Cambiamento di variabili negli integrali multipli]]: determinante jacobiano
- [[Applicazione tangente]]: J è la matrice di f_* nelle basi ∂_{x_i}, ∂_{y_k} (Geometria differenziale)
- [[Teorema della funzione inversa]]: det J ≠ 0 implica invertibilità locale (Geometria differenziale)

## Collegati
- [[Teorema della divergenza]]: la divergenza è la traccia della jacobiana
- [[Integrale di superficie]]: ||P_u ∧ P_v|| = sqrt(det(J^t J))
