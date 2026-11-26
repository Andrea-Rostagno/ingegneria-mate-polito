---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["condition number of a matrix", "numero di condizionamento di una matrice", "K(A)", "matrice di Hilbert", "Hilbert matrix", "matrice mal condizionata"]
tags: [competenza, area/numerica]
---

# Condizionamento di un sistema lineare

> Il numero $K(A)=\|A\|\|A^{-1}\|$ misura quanto le perturbazioni di $A$ e $b$ si amplificano nella soluzione di $Ax=b$.

## Definizione / enunciato
Sia $A$ non singolare, $\tilde A,\tilde b$ i dati perturbati e $\tilde x$ la soluzione esatta di $\tilde A\tilde x=\tilde b$.

**Teorema.** Se $\|A-\tilde A\|<1/(2\|A^{-1}\|)$, il sistema perturbato ha una e una sola soluzione e
$$\frac{\|x-\tilde x\|}{\|x\|}\le2K(A)\Big(\frac{\|A-\tilde A\|}{\|A\|}+\frac{\|b-\tilde b\|}{\|b\|}\Big),\qquad K(A)=\|A\|\|A^{-1}\|.$$
$K(A)$ è il **numero di condizionamento** del sistema. Si ha $K(A)\ge1$: se $K(A)\approx1$ la matrice è ben condizionata, se $K(A)\gg1$ mal condizionata.

## Formule chiave
$$K(A)=\|A\|\,\|A^{-1}\|\ge\|AA^{-1}\|=\|I\|=1$$
Matlab: `cond(A,1)`, `cond(A,inf)`; `hilb(n)` e `vander(x)` generano gli esempi classici. Matrice di Hilbert: $(H_n)_{ij}=\frac1{i+j-1}$.

## Intuizione
Il condizionamento non dipende dalla norma scelta in modo sostanziale: le norme 1 e infinito danno lo stesso ordine di grandezza. Le inevitabili perturbazioni dovute alla rappresentazione floating-point di $A$ e $b$ producono un errore sulla soluzione tanto più grande quanto più grande è $K(A)$.

## Come si usa
Esempio delle slide: $H_nx=b$ con $b_i=\sum_ja_{ij}$ (soluzione $u=(1,\dots,1)^T$), risolto con `A\b`. Per $n=2$: errore $7.8\cdot10^{-16}$, $K=27$; per $n=10$: errore $6.7\cdot10^{-4}$, $K=3.5\cdot10^{13}$; per $n=14$: errore $8.7$, $K=2.8\cdot10^{18}$. Altro esempio: Vandermonde su nodi equispaziati in $[0,1]$, $K_\infty=216$ ($n=4$) e $4.8\cdot10^7$ ($n=10$). In norma 2 vale $K_2(A)=s_1/s_n$ (valori singolari).

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 22-34); `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 68).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): teorema con perturbazione di $A$ e di $\mathbf b$: se $\|A-\bar A\|<1/(2\|A^{-1}\|)$ allora $\frac{\|\mathbf x-\bar{\mathbf x}\|}{\|\mathbf x\|}\le2K(A)\Big(\frac{\|A-\bar A\|}{\|A\|}+\frac{\|\mathbf b-\bar{\mathbf b}\|}{\|\mathbf b\|}\Big)$; dimostrazione completa solo per la perturbazione di $\mathbf b$; $K_2(A)=\lambda_{\max}/\lambda_{\min}$ per $A$ sdp; esempi Hilbert (`hilb`) e Vandermonde (`vander`). Il numero $K_2(A)$ governa poi la velocità di gradiente e gradiente coniugato e motiva il precondizionamento. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 11-17, 79-81, 91).
- **Numerical opt** (magistrale): $K(A)=\|A\|\,\|A^{-1}\|$ compare in quattro punti:
  - nella stima $\frac{\|x^{(k)}-x^*\|}{\|x^*\|}\le K(A)\frac{\|r^{(k)}\|}{\|b\|}$: un residuo piccolo non garantisce un errore piccolo;
  - nella velocità del gradiente, con fattore $\frac{K-1}{K+1}$, e del CG, con fattore $\frac{\sqrt K-1}{\sqrt K+1}$;
  - nell'ipotesi di condizionamento limitato $\kappa(B_k)\le C$ del [[Metodo di Newton modificato]];
  - in un esempio di laboratorio sul mal condizionamento.

  Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 37); `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 11); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§1.4); codice d'esempio `DellaSanta/labs/lab01_illconditioning_example.m`.

## Prerequisiti
- [[Norme matriciali]]: K(A) = ||A|| ||A^-1||
- [[Condizionamento di un problema numerico]]: caso del problema Ax = b

## Porta a
- [[Precondizionamento]]: con $K_2(A)$ grande i metodi di discesa rallentano e si precondiziona (Metodi numerici)
- [[Metodo del gradiente]]: il fattore di riduzione dipende da $K_2(A)$ (Metodi numerici)
- [[Rappresentazione monomiale del polinomio interpolante]]: il sistema di Vandermonde è mal condizionato

## Collegati
- [[Teorema di Bauer-Fike]]: conta K(S), non K(A)
- [[Decomposizione ai valori singolari]]: K_2(A) = s_1/s_n
