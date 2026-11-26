---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["nonlinear conjugate gradient", "nonlinear CG", "metodo di Fletcher-Reeves", "Fletcher-Reeves", "FR-CG", "metodo di Polak-Ribière", "Polak-Ribière", "PR-CG"]
tags: [competenza, area/ottimizzazione]
---

# Gradiente coniugato non lineare

> Estensione del gradiente coniugato dai sistemi lineari SPD alla minimizzazione di una $f$ generica. Il residuo si sostituisce con $-\nabla f$ e la line search esatta con una inesatta; ne derivano le varianti di Fletcher-Reeves e di Polak-Ribière.

## Definizione / enunciato
Nel caso lineare si minimizza $J(x)=\frac12x^TAx-b^Tx$ e il residuo è $r(x)=b-Ax=-\nabla J(x)$. Il metodo non lineare replica l'algoritmo del CG con due sostituzioni:
1. $r$ diventa $-\nabla f(x)$;
2. il passo esatto $\alpha=\frac{r^Tr}{d^TAd}$ diventa un passo da line search inesatta (Armijo con backtracking).

Non servono prodotti matrice-vettore.

## Formule chiave
Algoritmo (Fletcher-Reeves):
1. dato $x^{(0)}$, poni $p^{(0)}=-\nabla f(x^{(0)})$;
2. per $k=0,1,\dots$:
   - calcola $\alpha^{(k)}$ con una line search inesatta;
   - poni $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p^{(k)}$;
   - poni $\beta^{(k+1)}_{FR}=\dfrac{\nabla f(x^{(k+1)})^T\nabla f(x^{(k+1)})}{\nabla f(x^{(k)})^T\nabla f(x^{(k)})}$ e $p^{(k+1)}=-\nabla f(x^{(k+1)})+\beta^{(k+1)}p^{(k)}$;
   - fermati quando un criterio di arresto è soddisfatto.

Variante di Polak-Ribière (stesso algoritmo):
$$\beta^{(k+1)}_{PR}=\frac{\nabla f(x^{(k+1)})^T\big(\nabla f(x^{(k+1)})-\nabla f(x^{(k)})\big)}{\nabla f(x^{(k)})^T\nabla f(x^{(k)})}.$$

## Intuizione
Lo steepest descent "dimentica" le direzioni precedenti e procede a zig-zag. Il termine $\beta p^{(k)}$ conserva memoria del passato, come nel caso quadratico, dove le direzioni risultano $A$-coniugate. Le note lo presentano come "variante dello SD".

## Come si usa
**Confronto tra le varianti:** PR-CG ha proprietà di convergenza teoriche più deboli, ma in pratica è più robusto di FR-CG (meno fallimenti). È un metodo del primo ordine, adatto a grandi dimensioni perché memorizza solo vettori.

## Nei corsi
- **Numerical opt** (magistrale): presentato come "variante dello SD", affiancando l'algoritmo del CG lineare con i passi corrispondenti evidenziati. Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 28-29).

## Prerequisiti
- [[Metodo del gradiente coniugato]]: versione lineare di cui replica i passi
- [[Backtracking line search]]: sostituisce il passo esatto del caso quadratico

## Collegati
- [[Metodo del gradiente]]: caso $\beta=0$; il CG non lineare ne corregge lo zig-zag
