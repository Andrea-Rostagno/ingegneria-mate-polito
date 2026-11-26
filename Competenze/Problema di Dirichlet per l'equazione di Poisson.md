---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["problema di Poisson", "Dirichlet problem for Poisson's equation", "problema di Dirichlet per il laplaciano", "problema di Dirichlet (EDP)", "problema di Neumann per l'equazione di Poisson"]
tags: [competenza, area/analisi]
---

# Problema di Dirichlet per l'equazione di Poisson

> Trovare $u$ con $-\Delta u=f$ in $\Omega$ e $u=g$ su $\partial\Omega$: il problema modello ellittico, per cui il corso dimostra unicità, esistenza sulla palla, stabilità e caratterizzazione variazionale.

## Definizione / enunciato
Dati $\Omega\subset\mathbb R^n$ aperto, $f\in C^0(\Omega)$, $g\in C^0(\partial\Omega)$:
$$\begin{cases}-\Delta u=f & \text{in }\Omega,\\ u=g & \text{su }\partial\Omega.\end{cases}\qquad(2.13),\ (3.12)$$
Con $f=0$ è il problema di Dirichlet per l'equazione di Laplace (2.11).
- **Unicità** (Cor. 3.2.5): se $\Omega$ è limitato la soluzione è unica (principio del massimo e del minimo sulla differenza).
- **Non unicità senza limitatezza** (Oss. 3.2.6): in $\mathbb R^2\setminus B_1$ con $u=0$ su $\partial B_1$, sia $u=\log|x|$ sia $u=0$ sono soluzioni.
- **Esistenza sulla palla** (Teor. 3.4.4): per $f=0$, $u(x)=\int_{\partial B_R}k_R(x,y)g(y)\,d\sigma(y)$.
- **Rappresentazione** (3.20): $u(x)=-\int_\Omega G^x_\Omega\Delta u\,dy-\int_{\partial\Omega}\partial_\nu G^x_\Omega\,u\,d\sigma$.
- **Variazionale** (Teor. 3.6.1): $u$ risolve il problema se e solo se minimizza l'energia di Dirichlet fra le $w\in C^2(\overline\Omega)$ con $w=g$ su $\partial\Omega$.

## Formule chiave
Stabilità (2.12): $\|u\|_\infty\le C\|g\|_\infty$ per la differenza di due soluzioni con dati $g_1,g_2$.
Confronto con Neumann (Es. 2.3.2): per $-\Delta u=f$, $\partial_\nu u=g$, integrando e usando il teorema della divergenza
$$\int_\Omega f\,dx=-\int_\Omega\Delta u\,dx=-\int_{\partial\Omega}\partial_\nu u\,d\sigma=-\int_{\partial\Omega}g\,d\sigma$$
dopo di che la fonte enuncia la condizione di compatibilità come $\int_\Omega f=\int_{\partial\Omega}g$ (segno da verificare sul PDF); la soluzione, se esiste, è determinata a meno di costanti.

## Intuizione
Con il dato di Dirichlet il problema è ben posto: il principio del massimo controlla la soluzione col dato. Con il dato di Neumann solo il flusso è prescritto, quindi le costanti restano libere e la sorgente interna deve bilanciare il flusso al bordo.

## Come si usa
In forma debole (dato nullo): $u\in H^1_0(\Omega)$ con $\int_\Omega\nabla u\cdot\nabla v=\int_\Omega fv$ per ogni $v\in H^1_0$, risolto con Lax-Milgram; un dato $g$ non nullo si riduce al caso omogeneo sottraendo una funzione $w\in H^1$ con traccia $g$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): introdotto in §2.3 come esempio di buona positura ((2.10)-(2.13)), poi Cor. 3.2.5, Oss. 3.2.6, (3.20), Teor. 3.4.4, Teor. 3.6.1; versione debole in Evans §6.1.2. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 14-15, 24-25, 27, 29, 36); `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 296-297).

## Prerequisiti
- [[Problema ai limiti]]: condizioni di Dirichlet e di Neumann
- [[Equazione di Poisson]]: l'equazione $-\Delta u=f$
- [[Principio del massimo per le funzioni armoniche]]: unicità
- [[Nucleo di Poisson per la palla]]: esistenza sulla palla

## Collegati
- [[Buona positura secondo Hadamard]]: esempio di problema ben posto
- [[Principio variazionale di Dirichlet]]: caratterizzazione come minimo dell'energia
- [[Formulazione debole di un problema ellittico]]: versione in $H^1_0$
- [[Problema di Dirichlet e moto browniano]]: rappresentazione probabilistica della soluzione
