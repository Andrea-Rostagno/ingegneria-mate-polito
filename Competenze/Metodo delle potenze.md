---
tipo: competenza
area: numerica
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["power method", "power iteration", "autovalore dominante", "centralità di autovettore", "eigenvector centrality"]
tags: [competenza, area/numerica]
---

# Metodo delle potenze

> Metodo iterativo che, moltiplicando ripetutamente per $A$ e normalizzando, approssima l'autovalore di modulo massimo e il suo autovettore.

## Definizione / enunciato
Ipotesi: $A$ reale, diagonalizzabile, con un solo autovalore di modulo massimo, $|\lambda_1|>|\lambda_2|\ge\dots\ge|\lambda_n|$ (quindi $\lambda_1$ reale). Scritto $z=\sum_k\alpha_kx_k$ con $\alpha_1\ne0$,
$$z^{(m)}=A^mz=\lambda_1^m\Big(\alpha_1x_1+\sum_{k\ge2}\alpha_k\Big(\frac{\lambda_k}{\lambda_1}\Big)^mx_k\Big)=:\lambda_1^my^{(m)},\qquad y^{(m)}\to\alpha_1x_1.$$
Per evitare underflow e overflow si normalizza: dato $z^{(0)}$,
$$w^{(m)}=\frac{z^{(m)}}{\|z^{(m)}\|_2},\qquad z^{(m+1)}=Aw^{(m)},\qquad \lambda_1^{(m)}=(w^{(m)})^Tz^{(m+1)}\ \ (\text{quoziente di Rayleigh}).$$

## Formule chiave
Velocità: come $|\lambda_2/\lambda_1|^m\to0$; per $A$ simmetrica come $|\lambda_2/\lambda_1|^{2m}$.

## Intuizione
Ogni moltiplicazione per $A$ amplifica la componente lungo $x_1$ più delle altre, che si smorzano come $(\lambda_k/\lambda_1)^m$. L'ipotesi $\alpha_1\ne0$ non è restrittiva in pratica: gli errori di arrotondamento introducono presto una componente lungo $x_1$.

## Come si usa
Function `potenze(A,z,tol,m_max)` con test d'arresto $|\lambda^{(m)}-\lambda^{(m-1)}|\le tol\,|\lambda^{(m)}|$. Casi critici: con $\lambda_1=\dots=\lambda_k$ converge lentamente; con $\lambda_1=-\lambda_2$ o con $\lambda_{1,2}$ complessi coniugati non converge; con $|\lambda_2|\approx|\lambda_1|$ è lento e serve solo come stima iniziale. Applicazioni: rete ferroviaria dei capoluoghi piemontesi (matrice di adiacenza $8\times8$): la componente massima dell'autovettore dominante, $0.5772$, indica Torino come città più raggiungibile, la minima ($0.1792$) Alessandria; idea analoga per l'importanza dei siti web nei motori di ricerca.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 29-38, 50-53).

## Prerequisiti
- [[Matrice diagonalizzabile]]: vettore iniziale scritto nella base di autovettori
- [[Quoziente di Rayleigh]]: stima dell'autovalore a ogni passo

## Porta a
- [[Metodo delle potenze inverse]]: applicato a (A - pI)^-1

## Collegati
- [[Underflow e overflow]]: la normalizzazione evita underflow e overflow
- [[Metodo QR per autovalori]]: tutti gli autovalori contro uno solo
- [[Centralità di Bonacich]]: l'importanza dei siti web è l'idea di Google citata nelle slide (PageRank è il caso $\mu$ uniforme, $\beta\approx0.15$)
- [[Centralità ad autovettore]]: l'autovettore dominante di $W'$ è la centralità del nodo (Dinamiche su network)
