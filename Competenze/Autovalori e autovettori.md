---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["eigenvalues", "eigenvectors", "autovalore", "autovettore", "equazione caratteristica", "polinomio caratteristico"]
tags: [competenza, area/algebra-geometria]
---

# Autovalori e autovettori

> Gli scalari $\lambda$ e i vettori non nulli $x$ con $Ax=\lambda x$: radici dell'equazione caratteristica $\det(A-\lambda I)=0$.

## Definizione / enunciato
Data $A\in\mathbb R^{n,n}$, $\lambda$ (reale o complesso) è un **autovalore** di $A$ se esiste $x\ne0$ con
$$Ax=\lambda x;$$
$x$ è un **autovettore** associato, definito a meno di una costante moltiplicativa. $\lambda$ è autovalore se e solo se $A-\lambda I$ è singolare, cioè se è radice dell'**equazione caratteristica** $\det(A-\lambda I)=0$, di grado $n$: $A$ ha esattamente $n$ autovalori, non necessariamente distinti. Poiché i coefficienti sono reali, se $\lambda$ è un autovalore complesso lo è anche $\bar\lambda$.

## Formule chiave
$$\det(A-\lambda I)=0,\qquad AX=XD,\ X=(x_1,\dots,x_n),\ D=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$$
Proprietà: $\lambda_i^k$ sono gli autovalori di $A^k$; $\lambda_i^{-1}$ quelli di $A^{-1}$ ($A$ invertibile); gli autovettori restano gli stessi.

## Intuizione
Un autovettore è una direzione che $A$ non ruota ma solo dilata del fattore $\lambda$. La procedura "matematica" (radici del polinomio caratteristico, poi sistema omogeneo) non è numericamente conveniente né per costo né per stabilità: servono metodi iterativi o basati su similitudini.

## Come si usa
Matlab: `d = eig(A)` restituisce gli autovalori; `[X,D] = eig(A)` anche gli autovettori (colonne di `X`). Esempi delle slide: per $A=\begin{pmatrix}1&2&-2\\2&1&1\\-2&2&1\end{pmatrix}$ l'equazione caratteristica è $(3-\lambda)(\lambda^2-7)=0$, autovalori $-\sqrt7,3,\sqrt7$. Il passaggio $\lambda_i\mapsto\lambda_i^{-1}$ è alla base del metodo delle potenze inverse.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 2-6, 28-29).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante, a.a. 2019-20): autovalori di matrici quadrate e di endomorfismi ($f(v)=\lambda v$, $v\neq0$), equazione caratteristica $\det(A-\lambda\mathbb 1)=0$, polinomio caratteristico $p_A(\lambda)=\det(A-\lambda\mathbb 1)$ di grado $n$, legami $\det A=\prod\lambda_i$ e $\mathrm{tr}A=\sum\lambda_i$; una matrice reale di ordine dispari ha almeno un autovalore reale. Esempio: l'endomorfismo che permuta ciclicamente una base di $V_4$ ha autovettori $b_1+b_2+b_3+b_4$ ($\lambda=1$) e $b_1-b_2+b_3-b_4$ ($\lambda=-1$). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 3-10, 24); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §7.1-7.4).

## Prerequisiti
- [[Applicazione lineare]]: direzioni invarianti di un endomorfismo

## Porta a
- [[Quoziente di Rayleigh]]: restituisce lambda dato l'autovettore
- [[Norma spettrale]]: raggio spettrale di A^T A
- [[Cerchi di Gershgorin]]: localizzano gli autovalori nel piano complesso
- [[Matrici simili]]: la similitudine conserva gli autovalori
- [[Matrice diagonalizzabile]]: n autovettori linearmente indipendenti
- [[Decomposizione ai valori singolari]]: s_i^2 autovalori di A^T A
- [[Autospazio]]: autovettori relativi allo stesso λ
- [[Misura in meccanica quantistica]]: equazione agli autovalori F Ψi = fi Ψi
- [[Stati stazionari]]: l'equazione di Schrödinger stazionaria è un problema agli autovalori (Quantum physics)
- [[Metodo variazionale]]: equazione secolare det[H − E 1] = 0 (Quantum physics)

## Collegati
- [[Distribuzione stazionaria di una DTMC]]: la stazionaria è un autovettore sinistro di P per l'autovalore 1 (collegamento concettuale, non nelle slide)
- [[Determinante]]: definisce l'equazione caratteristica
- [[Molteplicità algebrica e geometrica]]: µa è la molteplicità come radice del polinomio caratteristico
- [[Equazione di Schrödinger]]: HΨ = EΨ è un problema agli autovalori
