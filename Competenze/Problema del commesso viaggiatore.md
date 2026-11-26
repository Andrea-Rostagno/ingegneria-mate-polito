---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Matematica discreta]
livello: [triennale]
aliases: ["traveling salesperson problem", "travelling salesman problem", "TSP", "ATSP", "TSP asimmetrico", "subtour", "eliminazione dei subtour", "subtour elimination", "vincoli MTZ", "node routing"]
tags: [competenza, area/ottimizzazione]
---

# Problema del commesso viaggiatore

> Trovare un ciclo hamiltoniano di costo minimo: vincoli di assegnamento più vincoli che eliminano i sottocicli (subtour).

## Definizione / enunciato
**ATSP** (distanze asimmetriche): $x_{ij}=1$ se l'arco $(i,j)$ è nel ciclo,
$$\min\sum_{(i,j)\in\mathcal A}c_{ij}x_{ij}\quad\text{s.t.}\ \sum_{j:(i,j)\in\mathcal A}x_{ij}=1,\ \ \sum_{j:(j,i)\in\mathcal A}x_{ji}=1\quad(i\in\mathcal N),$$
più l'eliminazione dei subtour:
$$\sum_{i,j\in S:i\ne j}x_{ij}\le|S|-1\qquad\forall S\subset\mathcal N:\ 2\le|S|\le|\mathcal N|-1 .$$

## Formule chiave
**Formulazione compatta** con etichette $u_i$ sui nodi ($n=|\mathcal N|$):
$$u_i-u_j+nx_{ij}\le n-1,\qquad i,j\in\mathcal N\setminus\{1\},\ i\ne j;$$
se $x_{ij}=1$ diventa $u_i+1\le u_j$.

**TSP simmetrico** ($x_e$ sui lati):
$$\min\sum_{e\in E}c_ex_e\ \ \text{s.t.}\ \sum_{e\in\delta(v)}x_e=2\ (v\in V),\ \ \sum_{e\in E(S)}x_e\le|S|-1\ \ \forall S\subset V:3\le|S|\le|V|-1,\ \ x_e\in\{0,1\}.$$

## Intuizione
I soli vincoli di assegnamento ammettono soluzioni fatte di più cicli disgiunti: per esempio $x_{12}=x_{23}=x_{31}=1$, $x_{45}=x_{54}=1$ (due subtour). Imporre che in ogni sottoinsieme $S$ non si scelgano più di $|S|-1$ archi interni spezza ogni ciclo su $S$. Le etichette $u_i$ crescono lungo il percorso, quindi non può chiudersi un ciclo che eviti il nodo 1. Nel caso simmetrico bastano $|S|\ge3$, perché i subtour di due vertici sono già esclusi dal vincolo di grado 2.

## Come si usa
I vincoli di subtour sono in numero esponenziale e richiedono algoritmi specifici (tagli aggiunti dinamicamente); la formulazione compatta ha pochi vincoli ma è meno efficace per l'enumerazione implicita (rilassamento più debole). Varianti del routing su nodi: capacità dei veicoli, matrice simmetrica o asimmetrica, finestre temporali.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 30-34); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 16).
- **Matematica discreta** (triennale): problema introduttivo della lezione 1, su 5 città $A,\dots,E$ con partenza e arrivo in $A$ e strade bidirezionali.
  - **Strategia 1, forza bruta:** i percorsi sono le permutazioni di $B,C,D,E$, cioè $4!=24$, ma per simmetria basta la metà. In generale con $n$ città servono $\frac12(n-1)!$ somme: per $n=25$ sono $\frac12\,24!\approx3{,}1\cdot10^{23}$, circa 10 milioni di anni con $10^{-9}$ s per somma. Nell'esempio le lunghezze vanno da 105 a 141, e il minimo 105 è realizzato da ABCEDA e dal suo simmetrico.
  - **Strategia 2, greedy:** si va sempre alla città più vicina. Servono $4+3+2+1=10$ confronti, $\frac{(n-1)n}2\sim\frac{n^2}2$ in generale, ma il percorso trovato è lungo 121 e non è il minimo. Resta aperto quanto disti dall'ottimo.

  Fonti: `triennale/ANNO 1/Matematica discreta/teoria/01 - Esercizi introduttivi.pdf` (lezione 1, pp. 1-3, manoscritto).

## Prerequisiti
- [[Grafo]]: ciclo hamiltoniano
- [[Problema di assegnamento]]: un arco entrante e uno uscente per nodo

## Porta a
- [[Vehicle routing problem]]: più veicoli con capacità

## Collegati
- [[Disuguaglianze di cover]]: esistono famiglie di tagli specifiche per il TSP
- [[Programmazione lineare mista-intera]]: modello binario puro
- [[Percorso euleriano]]: il problema "facile" (archi), che si contrappone al ciclo hamiltoniano (nodi) (Matematica discreta)
