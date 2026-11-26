---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["axiom of choice", "funzione di scelta", "choice function", "AC"]
tags: [competenza, area/algebra-geometria]
---

# Assioma della scelta

> Garantisce che da ogni famiglia di insiemi non vuoti si possa scegliere un elemento per insieme. Serve quando le scelte sono infinite e non c'è una regola esplicita.

## Definizione / enunciato
**Def. 6 (funzione di scelta).** Sia $\mathfrak X=\{X_i\}_{i\in I}$ una famiglia di insiemi non vuoti. Una funzione di scelta per $\mathfrak X$ è una funzione
$$s:I\longrightarrow\bigcup_{i\in I}X_i\quad\text{tale che } s(i)\in X_i\ \ \forall i\in I.$$
(Il testo stampato scrive $f(i)$ al posto di $s(i)$.)

**Assioma della scelta.** Per ogni famiglia $\{X_i\}_{i\in I}$ di insiemi non vuoti esiste una funzione di scelta.

Se $I$ è finito, l'enunciato è un teorema dimostrabile negli assiomi di Zermelo-Fraenkel, che il corso usa implicitamente.

## Formule chiave
$$\forall\{X_i\}_{i\in I},\ X_i\neq\emptyset\ \Longrightarrow\ \exists\, s:I\to\textstyle\bigcup_i X_i,\ \ s(i)\in X_i$$

## Intuizione
Con un numero finito di insiemi si sceglie un elemento alla volta. Con infiniti insiemi e nessuna regola esplicita servirebbero infinite scelte arbitrarie: l'assioma dice che si può fare.

## Come si usa
- **Esempio a lezione:** $I=\mathbb N$, $X_i=\{2^i,3^i\}$. Una funzione di scelta è $1\mapsto2$, $2\mapsto9$, $3\mapsto27,\dots$ In questo caso la regola esiste, quindi l'assioma non serve.
- **Inversa destra:** se $f:X\to Y$ è suriettiva, una funzione di scelta sulle fibre $\{f^{-1}(y)\}_{y\in Y}$ dà una $g$ con $f\circ g=id_Y$ (Prop. 7). L'assioma equivale proprio a "ogni suriettiva ha inversa destra".
- **Insiemi infiniti:** applicando una funzione di scelta su $\mathcal P(X)\setminus\{\emptyset\}$ si costruisce un'iniezione $\mathbb N\to X$ per ogni $X$ infinito (`Alg-03-10-22.pdf` p. 14).
- **Lemma di Zorn:** è equivalente all'assioma della scelta.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 1-2, subito dopo le inverse delle funzioni. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 9-10); `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, p. 14).

## Prerequisiti

## Porta a
- [[Inversa destra e inversa sinistra]]: costruzione dell'inversa destra di una suriettiva
- [[Insieme numerabile]]: ogni insieme infinito contiene una copia di $\mathbb N$

## Collegati
- [[Lemma di Zorn]]: formulazione equivalente
