---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["asymptotic frequency", "frazione di tempo in uno stato"]
tags: [competenza, area/probabilita]
---

# Frequenza asintotica per DTMC

> La frazione di tempo che una catena irriducibile ricorrente passa in uno stato converge quasi certamente all'inverso del tempo medio di ritorno.

## Definizione / enunciato
**Teorema.** Se la DTMC è irriducibile e ricorrente, allora quasi certamente
$$\lim_{n\to\infty}\frac{N_n(y)}n=\frac1{\mathbb E_y[T_y]},\qquad N_n(y)=\sum_{i=1}^n\mathbf 1\{X_i=y\},$$
con la convenzione $1/\infty=0$.

Forma del `.tex`: se la catena è irriducibile e ricorrente positiva,
$$\frac1n\sum_{k=0}^{n-1}\mathbf 1\{X_k=i\}\to\pi(i)\quad\text{q.c.}$$

## Formule chiave
Combinata con l'unicità della stazionaria: $\displaystyle\frac{N_n(y)}{n}\to\pi(y)=\frac1{\mathbb E_y[T_y]}$.

## Intuizione
Per la Markov forte i tempi tra ritorni successivi a $y$ sono i.i.d. con legge $T_y$. Le visite formano quindi un processo di rinnovo e la legge dei grandi numeri per i rinnovi dà il tasso $1/\mathbb E_y[T_y]$. Nelle slide è dimostrato "using renewal theory".

## Come si usa
Taxi (lezione 9), con
$$P=\begin{pmatrix}0&0.3&0.7\\0.2&0&0.8\\0.7&0.3&0\end{pmatrix}.$$
- Risolvendo $\pi=\pi P$ si ottiene $\pi=\big(\tfrac{76}{221},\tfrac{51}{221},\tfrac{94}{221}\big)$ (calcolo dai dati della slide).
- La frazione di tempo di lungo periodo in posizione 1 è quindi $76/221\approx0.344$.
- All'orale va distinta da teorema ergodico e convergenza in distribuzione (note d'esame del `.tex`).

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 8-9 ("Asymptotic frequency and stationary distributions"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Distribuzioni stazionarie e limiti; argomento 4 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_08_14_10.pdf` (lezione 8), `magistrale/Processi stocastici/Lezione_09_20_10.pdf` (lezione 9); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Distribuzioni stazionarie e limiti.
- **Matematica per l'AI** (triennale): $V_i(n)=\sum_{k=0}^{n-1}1_{\{X_k=i\}}$ = numero di visite in $i$ prima di $n$; se esiste $\pi$ invariante, $V_i(n)/n\to\pi_i$ per $n\to\infty$. È l'analogo per catene del teorema ergodico per sistemi dinamici (media temporale = media sulla misura invariante) visto nella parte sul caos. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 8); `IntroToDynamicalSystems (1).pdf` (p. 19).

## Prerequisiti
- [[Proprietà di Markov forte]]: cicli tra ritorni sono i.i.d.
- [[Teorema renewal reward]]: ritorni come processo di rinnovo
- [[Ricorrenza positiva]]: tempo medio di ritorno finito

## Porta a
- [[Esistenza e unicità della distribuzione stazionaria]]: unicità dimostrata tramite frequenza asintotica
- [[Teorema ergodico per DTMC]]: estende a funzioni dello stato
- [[Frequenza asintotica per CTMC]]: stessa idea con tempi di permanenza

## Collegati
- [[Distribuzione limite di una DTMC]]: convergenza in media contro convergenza puntuale
- [[Misura invariante di un sistema dinamico]]: medie temporali uguali a medie sulla misura ergodica (Matematica per l'AI)
