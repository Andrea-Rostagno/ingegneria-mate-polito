---
tipo: competenza
area: algebra-geometria
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["matrix exponential", "esponenziale di matrice", "matrice esponenziale", "e^A", "e^{tA}", "serie esponenziale di matrici"]
tags: [competenza, area/algebra-geometria]
---

# Esponenziale di una matrice

> $e^A=\sum_k A^k/k!$: la serie converge per ogni matrice quadrata, $\frac{d}{dt}e^{tA}=Ae^{tA}$, ed è lo strumento che risolve i sistemi lineari $\dot x=Ax$.

## Definizione / enunciato
Per $A\in\mathbb R^{n\times n}$ (L04 p. 2):
$$e^A:=\sum_{k=0}^{\infty}\frac{A^k}{k!}.$$
Una serie di matrici $\sum M_k$ converge se converge ogni serie numerica $\sum_k m^{(k)}_{ij}$ degli elementi di posto $(i,j)$.
**Lemma.** La serie converge per ogni $A$. Con la norma $\|A\|_2=\sqrt{\sum_{i,j}a_{ij}^2}$ ("norma di Hilbert-Schmidt", submoltiplicativa per Cauchy-Schwarz):
$$\Big\|\frac{A^k}{k!}\Big\|_2\le\frac{\|A\|_2^k}{k!}\ \Rightarrow\ \sum_k\Big\|\frac{A^k}{k!}\Big\|_2\le e^{\|A\|_2},$$
e $|a^{(k)}_{ij}|\le\|A^k\|_2$ dà la convergenza assoluta elemento per elemento.

## Formule chiave
- $F(t)=e^{tA}$: $F'(t)=Ae^{tA}=e^{tA}A$ (derivazione termine a termine, convergenza uniforme): $A$ ed $e^{tA}$ commutano.
- $(e^{tA})^{-1}=e^{-tA}$: $e^{tA}$ è sempre invertibile, anche se $A$ non lo è.
- $e^{(s+t)A}=e^{sA}e^{tA}$; più in generale, se $AB=BA$ allora $e^{A+B}=e^Ae^B$.
- Se $B=P^{-1}AP$ allora $e^B=P^{-1}e^AP$.
- $\det(e^A)\neq0$ per ogni $A\in\mathbb C^{n\times n}$ (via forma di Jordan, L06 p. 7).

## Intuizione
Ricalca $e^a=\sum a^k/k!$: la norma submoltiplicativa riduce la convergenza a quella della serie numerica di $e^{\|A\|}$. La commutatività serve perché in generale $e^{A+B}\ne e^Ae^B$.

## Come si usa
Per calcolarla si porta $A$ in forma semplice per similitudine: se $P^{-1}AP=\Lambda$ è diagonale, $e^{t\Lambda}=\mathrm{diag}(e^{t\lambda_i})$ ed $e^{tA}=Pe^{t\Lambda}P^{-1}$. Esempio di L06 p. 1: $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, autovalori $\pm i$, dà $e^{tA}=\begin{pmatrix}\cos t&-\sin t\\\sin t&\cos t\end{pmatrix}$. Se $A$ non è diagonalizzabile si usa la forma di Jordan.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/04 - Lezione 10_10_23.pdf` (pp. 2-7); `triennale/ANNO 3/eq fisica matematica/05 - Lezione 11_10_23.pdf` (pp. 1-9); `triennale/ANNO 3/eq fisica matematica/06  - Lezione 13_10_23.pdf` (pp. 1-2, 7).

## Prerequisiti
- [[Norme matriciali]]: norma submoltiplicativa per la convergenza
- [[Matrici simili]]: e^{P⁻¹AP} = P⁻¹e^A P

## Porta a
- [[Sistemi lineari di ODE a coefficienti costanti]]: x(t) = e^{tA}x₀
- [[Equazione matriciale di Lyapunov]]: V(x) = ∫‖e^{sA}x‖² ds

## Collegati
- [[Forma canonica di Jordan]]: calcolo di e^{tA} nel caso non diagonalizzabile
- [[Matrice diagonalizzabile]]: calcolo di e^{tA} nel caso diagonalizzabile
- [[Equazioni di Kolmogorov]]: P_t = e^{Qt} per una CTMC su spazio finito (Processi stocastici)
