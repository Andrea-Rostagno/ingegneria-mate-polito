---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["Chapman-Kolmogorov equations", "multistep transition probability", "probabilità a n passi", "P^n"]
tags: [competenza, area/probabilita]
---

# Equazioni di Chapman-Kolmogorov

> Le probabilità di transizione in più passi si ottengono come prodotto di matrici: $P^{(m+n)}=P^{(m)}P^{(n)}$. Vale anche a tempo continuo.

## Definizione / enunciato
Per una DTMC, $p^{(n)}(i,j)=\mathbb P(X_{n+k}=j\mid X_k=i)$ e, per ogni $m,n\ge0$,
$$p^{(m+n)}(i,j)=\sum_{k\in S}p^{(m)}(i,k)\,p^{(n)}(k,j),\qquad P^{(m+n)}=P^{(m)}P^{(n)}=P^{m+n}.$$
Per una CTMC (lezione 11), per ogni $s,t>0$:
$$p_{s+t}(x,y)=\sum_{k\in S}p_s(x,k)\,p_t(k,y).$$

## Formule chiave
$$p^{(2)}(i,j)=\sum_{k}p(i,k)p(k,j),\qquad P^{(2)}=P^2,\qquad p^{(0)}(x,y)=\delta_{xy}.$$

## Intuizione
Si condiziona sullo stato intermedio e si usano probabilità totali, proprietà di Markov e omogeneità. Si sommano le probabilità di tutti i cammini da $i$ a $j$ che passano da ciascuno stato intermedio $k$.

## Come si usa
- Meteo: $p^{(2)}(\text{sole},\text{sole})=0.72$.
- Disuguaglianza $p^{(m+n)}(i,k)\ge p^{(m)}(i,j)p^{(n)}(j,k)$: dà la transitività della comunicazione.
- $\mathbb E_x[N(y)]=\sum_{n\ge1}p^{(n)}(x,y)$ (criterio delle visite).
- CTMC (es. C di `suggested_exercises_CTMC.pdf`): dalle probabilità a 0.3 ore si ottiene
$$\mathbb P(X_{0.6}=C\mid X_0=A)=0.7\cdot0.2+0.1\cdot0.1+0.2\cdot0.8=0.31.$$

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 6 ("Consequence 2: Chapman-Kolmogorov eqs. and n-step transitions"); lezione 11 (versione CTMC, "Theorem (Chapman-Kolmogorov)"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Catene di Markov a tempo discreto; argomento 3 di `magistrale/Processi stocastici/topics_2025_26.pdf` ("multistep transition probability"). Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6), `magistrale/Processi stocastici/Lezione_11_27_10.pdf` (lezione 11); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Catene di Markov a tempo discreto.
- **Matematica per l'AI** (triennale): $P_i(X_n=j)=(P^n)_{ij}=p_{ij}^{(n)}$ e $P(X_n=j)=(\lambda P^n)_j$. Calcolo esplicito di $P^n$ per diagonalizzazione nel caso $P=\begin{pmatrix}1-\alpha&\alpha\\\beta&1-\beta\end{pmatrix}$: autovalori $\mu_1=1$, $\mu_2=1-\alpha-\beta$, $P^n=U\,\mathrm{diag}(1,(1-\alpha-\beta)^n)\,U^{-1}$ e, imponendo $p^{(0)}_{11}=1$, $p^{(1)}_{11}=1-\alpha$, $p^{(n)}_{11}=\frac\beta{\alpha+\beta}+\frac\alpha{\alpha+\beta}(1-\alpha-\beta)^n$; per $n\to\infty$ le righe di $P^n$ tendono a $\big(\frac\beta{\alpha+\beta},\frac\alpha{\alpha+\beta}\big)$. Ricetta per $m$ stati: se gli autovalori sono distinti $p^{(n)}_{ij}=a_1+a_2\mu_2^n+\dots+a_m\mu_m^n$; un autovalore ripetuto $k$ volte contribuisce $(a_kn^k+\dots+a_0)\mu^n$; autovalori complessi in coppia danno termini in seno e coseno. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 1 (2).pdf` (p. 7-10).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: prodotto di matrici di transizione

## Porta a
- [[Criterio delle visite attese]]: somma delle probabilità a n passi
- [[Periodo di uno stato]]: mcd dei tempi di ritorno possibili
- [[Equazioni di Kolmogorov]]: derivazione nel limite h piccolo

## Collegati
- Nessuno.
- [[Matrice diagonalizzabile]]: $P^n$ calcolata diagonalizzando $P$ (Matematica per l'AI)
- [[Distribuzione stazionaria di una DTMC]]: le righe di $P^n$ tendono a $\pi$ nella catena a due stati (Matematica per l'AI)
- [[Teorema di Perron-Frobenius]]: l'autovalore 1 domina gli altri termini $\mu_i^n$ (Matematica per l'AI)
