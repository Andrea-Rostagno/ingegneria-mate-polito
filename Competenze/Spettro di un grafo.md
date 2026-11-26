---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["graph spectrum", "spettro del grafo", "autovalori di un grafo", "eigenvalues of a graph", "teoria spettrale dei grafi", "spectral graph theory", "momenti spettrali", "Σ(G)"]
tags: [competenza, area/network]
---

# Spettro di un grafo

> Lo spettro di un grafo è la lista degli autovalori della sua matrice di adiacenza, ripetuti con la loro molteplicità. Non dipende dalla numerazione dei nodi e codifica numero di archi, triangoli, bipartizione e regolarità.

## Definizione / enunciato
**Definizione 6.3.1.** Lo **spettro** di un grafo $G$ con $N$ nodi è la lista dei suoi $N$ autovalori, contati con la molteplicità algebrica, di una qualsiasi matrice di adiacenza di $G$:
$$\Sigma(G)=(\lambda_1\le\lambda_2\le\dots\le\lambda_N).$$
Non dipende dalle etichette, perché matrici di adiacenza diverse dello stesso grafo sono simili. $A$ è reale e simmetrica, quindi diagonalizzabile, e le molteplicità algebrica e geometrica coincidono.

**Teorema 6.3.2 (proprietà comuni a tutti i grafi).**
- (a) Gli autovalori sono reali.
- (b) $\sum_i\lambda_i=\operatorname{tr}A=0$.
- (c) $\sum_i\lambda_i^2=\operatorname{tr}A^2=\sum_v\deg(v)=2|E|$.
- (d) $\lambda_1<0$ e $\lambda_N>0$, tranne per il grafo senza archi, che ha tutti gli autovalori nulli.
- (e) $\sum_i\lambda_i^3=\operatorname{tr}A^3=6\cdot\#\text{triangoli}$, quindi è un multiplo di 6.
- (f) $\sum_i\lambda_i^p=\operatorname{tr}A^p\ge0$ ed è intero, per $p=1,2,3,\dots$
- (g) Se $G$ è sconnesso, lo spettro è l'unione degli spettri delle componenti connesse.

## Formule chiave
$$\operatorname{tr}A^p=\sum_{i=1}^N\lambda_i^p\quad(\text{da }A=SDS^{-1},\ A^p=SD^pS^{-1}),\qquad \operatorname{tr}(S^{-1}AS)=\operatorname{tr}A.$$
**Lemma 6.3.3:** gli autovalori di $M+\alpha I$ sono $\lambda_i+\alpha$, con le stesse molteplicità.

## Intuizione
Due domande guidano la teoria (lezione 7): come si riflettono le proprietà del grafo nello spettro, e cosa si può dedurre del grafo guardando lo spettro. Le tracce delle potenze collegano le due cose: ogni $\operatorname{tr}A^p$ conta percorsi chiusi ed è un momento dello spettro.

## Come si usa
**Riconoscere liste che non sono spettri.**
- $(-1,0,0,2)$ non è lo spettro di un grafo perché la somma vale $1\ne0$, contro (b).
- $(-6,0,0,2,4)$ non lo è perché l'autovalore di modulo massimo deve essere positivo (Perron-Frobenius).

**Dedurre il grafo dallo spettro.** Per $\Sigma=(-\sqrt2,-\sqrt2,0,0,0,\sqrt2,\sqrt2)$ (lezione 7):
- $|V|=7$;
- $\sum\lambda_i^2=8$, quindi $|E|=4$;
- $|E|<|V|-1$, quindi il grafo è sconnesso.

Si trova $P_3\cup P_3\cup K_1$.

**Unione di componenti** (esempi della lezione):
- $\Sigma(K_3\cup K_3)=(-1,-1,-1,-1,2,2)$ e $\Sigma(K_3\cup K_{1,1})=(-1,-1,-1,1,2)$;
- $\Sigma(C_4\cup K_1)=(-2,0,0,0,2)$, che è uguale a $\Sigma(K_{1,4})$: grafi isospettrali.

## Nei corsi
- **Matematica discreta** (triennale): cuore della seconda parte della lezione 7, motivato nella lezione 1 dal ranking delle pagine web. Le proprietà della traccia sono richiamate e dimostrate a lezione. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 38-39, 42, 46-49, 55); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.3, Def. 6.3.1, Teor. 6.3.2, Lemma 6.3.3, pp. 131-134).

## Prerequisiti
- [[Matrice di adiacenza]]: lo spettro è quello di $A$
- [[Potenze della matrice di adiacenza]]: $\operatorname{tr}A^p$ conta percorsi chiusi
- [[Endomorfismo simmetrico]]: $A$ reale simmetrica ha autovalori reali ed è diagonalizzabile
- [[Invarianti di un endomorfismo]]: traccia uguale alla somma degli autovalori, invariante per similitudine
- [[Isomorfismo di grafi]]: lo spettro è un invariante
- [[Autovalori e autovettori]]: definizione e polinomio caratteristico

## Porta a
- [[Spettro del grafo completo]]: calcolo esplicito per $K_n$ e $K_{m,n}$
- [[Spettro del grafo ciclo]]: calcolo esplicito per $C_n$ e $P_n$
- [[Spettro dei grafi bipartiti]]: bipartito se e solo se lo spettro è simmetrico
- [[Grafo regolare]]: $k$ è un autovalore e la sua molteplicità conta le componenti
- [[Teorema di Perron-Frobenius]]: proprietà dell'autovalore massimo

## Collegati
- [[Lemma delle strette di mano]]: $\sum\lambda_i^2=\sum\deg=2|E|$
