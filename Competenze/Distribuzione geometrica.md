---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["geometric distribution", "legge geometrica", "G(p)", "Geo(p)", "Geometrica(p)", "istante del primo successo"]
tags: [competenza, area/probabilita]
---

# Distribuzione geometrica

> L'istante del primo successo in uno schema di Bernoulli infinito: l'unica legge discreta su $\mathbb N^*$ senza memoria.

## Definizione / enunciato
Prove ripetute indipendenti con successo di probabilità $p\in(0,1]$. $T=\min\{i\ge1:X_i=1\}$ (con $T=+\infty$ se non c'è successo) ha **legge geometrica** $G(p)$:
$$p_T(k)=p(1-p)^{k-1},\qquad k\in\mathbb N^*=\{1,2,\dots\}.$$
Poiché $\sum_{k\ge1}p(1-p)^{k-1}=1$ (serie geometrica), $\mathbb P(T=+\infty)=0$.

## Formule chiave
$$S_T(n)=\mathbb P(T>n)=(1-p)^n,\qquad F_T(n)=1-(1-p)^n.$$
**Mancanza di memoria**: $\mathbb P(T>n+m\mid T>n)=\mathbb P(T>m)$ per ogni $n,m\in\mathbb N$.
$$\mathbb E[T]=\frac1p,\qquad \operatorname{Var}(T)=\frac{1-p}{p^2}.$$

## Intuizione
$T>n$ significa $n$ insuccessi di fila, probabilità $(1-p)^n$; il rapporto $\frac{(1-p)^{n+m}}{(1-p)^n}=(1-p)^m$ non dipende da $n$: il passato non conta. La media si ottiene derivando la serie geometrica: $p\frac{d}{dq}\frac1{1-q}=\frac1p$ con $q=1-p$.

## Come si usa
Lotto sul 7 (Foglio, es. 2, svolto a lezione): $p=\frac5{90}$; $\mathbb P(X>2)=(\frac{85}{90})^2=0.892$, e dopo 20 settimane senza 7 la probabilità di aspettarne almeno altre 3 è la stessa, $0.892$: i "numeri ritardatari" non hanno vantaggi.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 9-10, media in lezione 13 (appunto manoscritto); tabella nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione09(27-04-23) (1).pdf` (lezione 9, pp. 13-14); `2023Lezione10(04-05-23) (1).pdf` (lezione 10, pp. 1-3); `2023Lezione13(01-06-23).pdf` (lezione 13, p. 1); `formularioprobabilita (1).pdf`.

## Prerequisiti
- [[Variabile aleatoria discreta]]: istante del primo successo
- [[Indipendenza di eventi]]: schema di Bernoulli infinito

## Porta a
- [[Distribuzione di Pascal]]: caso $r=1$

## Collegati
- [[Proprietà di assenza di memoria]]: mancanza di memoria discreta
- [[Distribuzione esponenziale]]: analogo continuo
