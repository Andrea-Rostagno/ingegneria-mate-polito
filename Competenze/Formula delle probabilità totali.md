---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["law of total probability", "formula della probabilità totale", "partizione dell'evento certo", "probabilità totali"]
tags: [competenza, area/probabilita]
---

# Formula delle probabilità totali

> La probabilità di un evento si ottiene spezzandolo sui casi di una partizione dell'evento certo e pesando le probabilità condizionate.

## Definizione / enunciato
Siano $A_1,\dots,A_m\in\mathcal F$ una **partizione dell'evento certo** ($\bigcup_iA_i=\Omega$, $A_i\cap A_j=\emptyset$ per $i\ne j$) e $B\in\mathcal F$. Allora
$$\mathbb P(B)=\sum_{i=1}^m\mathbb P(B\cap A_i),$$
e se $\mathbb P(A_i)>0$ per ogni $i$:
$$\mathbb P(B)=\sum_{i=1}^m\mathbb P(B\mid A_i)\,\mathbb P(A_i).$$

## Formule chiave
Caso $m=2$ ($A$, $A^c$, con $0<\mathbb P(A)<1$):
$$\mathbb P(B)=\mathbb P(B\mid A)\mathbb P(A)+\mathbb P(B\mid A^c)\mathbb P(A^c).$$

## Intuizione
$B=\bigcup_i(B\cap A_i)$ è un'unione disgiunta: si applica l'additività e poi la definizione di probabilità condizionata. È il "diagramma ad albero": si sommano i prodotti lungo i rami che portano a $B$.

## Come si usa
Urna con 5 bianche e 10 nere (lezione 5): $\mathbb P(B_2)=\mathbb P(B_1)\mathbb P(B_2\mid B_1)+\mathbb P(N_1)\mathbb P(B_2\mid N_1)=\frac5{15}\cdot\frac4{14}+\frac{10}{15}\cdot\frac5{14}=\frac13$, uguale a $\mathbb P(B_1)$. Urne $U_1$ (2B, 4N) e $U_2$ (4B, 2N) scelte a caso (lezione 6): $\mathbb P(B_1)=\frac13\cdot\frac12+\frac23\cdot\frac12=\frac12$. Due fornitori di regolatori (Foglio 2, es. 16): $\mathbb P(A)=0.95\cdot0.6+0.80\cdot0.4=0.89$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 5 (appunto manoscritto); formula nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione05(29-03-23) (4).pdf` (lezione 5, pp. 5-6); `2023Lezione06(30-03-23) (4).pdf` (lezione 6, pp. 10-12); `formularioprobabilita (1).pdf`.

## Prerequisiti
- [[Probabilità condizionata]]: decomposizione su una partizione

## Porta a
- [[Formula di Bayes]]: denominatore

## Collegati
- Nessuno.
