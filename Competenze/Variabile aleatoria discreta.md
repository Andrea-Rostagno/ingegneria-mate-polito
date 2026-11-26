---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["discrete random variable", "v.a. discreta", "densità discreta", "probability mass function", "pmf", "p_X"]
tags: [competenza, area/probabilita]
---

# Variabile aleatoria discreta

> Una v.a. che assume una quantità finita o numerabile di valori: la sua legge è una misura discreta, descritta dalla densità discreta $p_X$.

## Definizione / enunciato
$X$ è **discreta** se $X(\Omega)=\{x_i:i\in I\}$ con $I$ al più numerabile. La legge è la misura discreta concentrata su $X(\Omega)$ con $\mathbb P_X(\{x_i\})=\mathbb P(X=x_i)=p_i$, $0\le p_i\le1$.
**Densità discreta**: $p_X(x)=p_i$ se $x=x_i$, $0$ altrimenti.

## Formule chiave
$$\mathbb P_X(B)=\sum_{i\in I}p_i\,\delta_{x_i}(B)=\sum_{i:\,x_i\in B}p_X(x_i),\qquad \sum_{i\in I}p_X(x_i)=1,$$
$$F_X(x)=\sum_{x_i\le x}p_X(x_i)\quad\text{(costante a tratti)}.$$
Le proprietà caratterizzanti di una densità discreta sono $0\le p_i\le1$ e $\sum_ip_i=1$.

## Intuizione
Tutta la massa sta su punti isolati: $p_X(x_i)$ è proprio la probabilità del valore (a differenza della densità di una v.a. continua), e $F_X$ salta di $p_i$ in ogni $x_i$.

## Come si usa
Per riconoscere un modello si identificano i valori possibili e la loro probabilità. Dado non truccato: $p_X(i)=\frac16$, $i=1,\dots,6$ (uniforme discreta). Modelli della lezione 8-10: Bernoulli, binomiale, ipergeometrica, Poisson, geometrica, Pascal. Moneta truccata lanciata 3 volte (lezione 8): $p_X(2)=3p^2(1-p)$, che vale $\frac38$ solo se $p=\frac12$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 8 (appunto manoscritto). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione08(19-04-23) (3).pdf` (lezione 8, pp. 8-13).

## Prerequisiti
- [[Variabile aleatoria]]: legge discreta
- [[Funzione di ripartizione]]: costante a tratti

## Porta a
- [[Distribuzione binomiale]]: numero di successi
- [[Distribuzione ipergeometrica]]: numero di palline bianche
- [[Distribuzione geometrica]]: istante del primo successo

## Collegati
- Nessuno.
