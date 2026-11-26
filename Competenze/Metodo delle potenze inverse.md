---
tipo: competenza
area: numerica
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["inverse power method", "inverse iteration", "potenze inverse con shift", "shifted inverse iteration"]
tags: [competenza, area/numerica]
---

# Metodo delle potenze inverse

> Metodo delle potenze applicato a $(A-pI)^{-1}$: approssima l'autovalore di $A$ più vicino a una stima $p$.

## Definizione / enunciato
Da $Ax=\lambda x$ segue $(A-pI)x=(\lambda-p)x$, quindi
$$(A-pI)^{-1}x=\frac1{\lambda-p}\,x.$$
Se $p$ è più vicino a $\lambda$ che agli altri autovalori, $\mu=\frac1{\lambda-p}$ è l'autovalore di modulo massimo di $(A-pI)^{-1}$: il metodo delle potenze su $(A-pI)^{-1}$ trova $\mu$ e quindi
$$\lambda=p+\frac1\mu.$$
Non si inverte $A-pI$: $z^{(m+1)}=(A-pI)^{-1}w^{(m)}$ equivale a risolvere $(A-pI)z^{(m+1)}=w^{(m)}$, usando la fattorizzazione $PA=LU$ calcolata una volta sola.

## Formule chiave
$$(A-pI)z^{(m+1)}=w^{(m)},\qquad \lambda^{(m)}=p+\frac{1}{(w^{(m)})^Tz^{(m+1)}}$$

## Intuizione
Lo shift $p$ sposta lo spettro e l'inversione rende dominante l'autovalore più vicino a $p$: più $p$ è vicino, più il rapporto di convergenza è piccolo.

## Come si usa
Function `potenze_inverse(A,p,z,tol,m_max)`: `[L,U,P] = lu(A-p*eye(n))`, poi a ogni passo `y = L\(P*w)`, `z = U\y`. Con $p=0$ si trova l'autovalore di modulo minimo (se unico). La stima $p$ si ottiene dai cerchi di Gershgorin. Aggiornare $p=\lambda^{(m+1)}$ riduce le iterazioni ma obbliga a rifattorizzare a ogni passo. Matlab: `[X,D] = eigs(A,k)` ($k$ autovalori di modulo massimo), `eigs(A,k,p)` ($k$ più vicini a $p$).

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 39-44).

## Prerequisiti
- [[Metodo delle potenze]]: applicato a (A - pI)^-1
- [[Fattorizzazione LU]]: fattorizza A - pI una volta sola
- [[Cerchi di Gershgorin]]: forniscono la stima p

## Porta a
- Nessuno.

## Collegati
- Nessuno.
