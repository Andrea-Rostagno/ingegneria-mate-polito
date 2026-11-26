---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Q-matrix, transition rate matrix, matrice dei tassi, tasso di uscita, matrice Q]
tags: [competenza, area/probabilita]
---

# Generatore di una CTMC

> La matrice $Q$ dei tassi di transizione: contiene tutta l'informazione di una CTMC (tassi di uscita, catena dei salti) ed è la derivata in zero delle probabilità di transizione.

## Definizione / enunciato
I **tassi di transizione** sono $q(i,j)=\lambda(i)\,r(i,j)$ per $i\ne j$. La matrice $Q$ (transition rate matrix, generatore) è
$$Q(i,j)=\begin{cases}q(i,j)& i\ne j\\ -\sum_{\ell\ne i}q(i,\ell)& i=j.\end{cases}$$
Proprietà: fuori diagonale $q\ge0$ ma non sono probabilità (possono superare 1); le righe sommano a zero; $\lambda(i)=-Q(i,i)$ è il tasso totale di uscita. Se $\lambda(x)=0$, $x$ è assorbente.

**Teorema.** Per ogni $i,j$ (anche $i=j$)
$$\frac{\mathrm d p_t(i,j)}{\mathrm dt}\Big|_{t=0}=\lim_{h\to0}\frac{p_h(i,j)-p_0(i,j)}{h}=q(i,j).$$

## Formule chiave
$$\lambda(i)=\sum_{j\ne i}q(i,j),\qquad r(i,j)=\frac{q(i,j)}{\lambda(i)},\qquad \mathbb P(\tau_x<h)=\lambda(x)h+O(h^2).$$
La probabilità di due o più salti in $[0,h]$ è $O(h^2)$.

## Intuizione
In un intervallo piccolo $h$ al più un salto conta: da $x$ si va in $y$ con probabilità $\approx q(x,y)h$, si resta con probabilità $\approx 1-\lambda(x)h$. Il segno meno sulla diagonale è la scelta "furba" che rende $Q=P_0'$ e fa funzionare le equazioni di Kolmogorov.

## Come si usa
Si legge $Q$ dal modello e se ne ricavano $\lambda$ e la catena embedded. Esempio 2 (lezione 10): $Q=\begin{pmatrix}-3&1&2\\0&-4&4\\2&6&-8\end{pmatrix}$, permanenze in $A,B,C$ esponenziali di parametri $3,4,8$. Es. D (castello di sabbia): $q(1,2)=2$, $q(2,1)=3$, $q(2,3)=1$, $q(3,1)=3$; il tasso $q(1,2)$ resta 2 anche con le onde, per assenza di memoria. Il `.tex` chiama $Q$ "generatore infinitesimale" e lo definisce come $\lim_{h\downarrow0}\mathbb P_x(X_h=y)/h$.

## Nei corsi
- **Processi stocastici** (magistrale): argomenti 5-6. Fonti: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10, definizione ed esempi), `magistrale/Processi stocastici/Lezione_11_27_10.pdf` (lezione 11, teorema $P_0'=Q$), `riassunto_del_corso.tex` §Catene di Markov a tempo continuo, `suggested_exercises_CTMC.pdf` (es. D).

## Prerequisiti
- [[Catena di Markov a tempo continuo]]: derivata in zero delle probabilità

## Porta a
- [[Catena embedded]]: probabilità di salto $q(x,y)/\lambda(x)$
- [[Equazioni di Kolmogorov]]: coefficienti delle equazioni differenziali
- [[Catena di nascita e morte continua]]: tassi di nascita e di morte
- [[Generatore infinitesimale]]: generalizza $Q$ ai processi di Markov

## Collegati
- —
