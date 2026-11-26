---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["vector subspace", "linear subspace", "sottospazio", "ss.v.", "tri-test", "sottospazi banali", "sottospazio definito come Ker", "n-pla generica"]
tags: [competenza, area/algebra-geometria]
---

# Sottospazio vettoriale

> Un sottoinsieme $U\subseteq V$ chiuso rispetto alle combinazioni lineari: è a sua volta uno spazio vettoriale con le stesse operazioni.

## Definizione / enunciato
$U\subseteq V$ è un **sottospazio vettoriale** (ss.v.) se
$$\forall\lambda,\mu\in K,\ \forall u_1,u_2\in U:\ \lambda u_1+\mu u_2\in U .$$
Ne segue $0_V\in U$. Sottospazi banali: $\{0_V\}$ e $V$.

**Tri-test** (in pratica):
1. $0_V\in U$;
2. chiusura rispetto alla somma;
3. chiusura rispetto al prodotto per scalari.

Le condizioni 2 e 3 bastano; la 1 è un test rapido di esclusione.

**Modi di assegnare un ss.v. di $K^n$:**
- come Ker (soluzioni di un sistema lineare omogeneo, forma implicita);
- come $n$-pla generica: è un sottospazio se e solo se tutte le componenti sono lineari omogenee nei parametri;
- come linear span.

Si passa sempre dall'uno all'altro.

## Formule chiave
$$U\ \text{ss.v.}\iff \lambda u_1+\mu u_2\in U\quad\forall\lambda,\mu,\ \forall u_1,u_2\in U;\qquad \dim U\le\dim V,\ \ \dim U=\dim V\iff U=V$$

## Intuizione
Geometricamente i sottospazi di $\mathbb R^3$ sono l'origine, le rette e i piani per l'origine, e $\mathbb R^3$ stesso. Una condizione non omogenea (per esempio $x=5$) o non lineare (per esempio $y=x^2$) distrugge la chiusura.

## Come si usa
- Primo quadrante $\{x\ge0,y\ge0\}$: contiene 0 ed è chiuso per somma, ma non per prodotto per scalari negativi, quindi non è un ss.v. (p. 29 di `7_Spazi_vettoriali.pdf`).
- $\{x=5\}$ dà le terne $(5,a,b)$: la prima componente non è omogenea, quindi non è un ss.v. $\{y=x^2\}$ dà $(a,a^2,b)$: non è lineare, quindi non è un ss.v. (p. 39-40).
- $\{x+z=0,\ y+z=0\}$ dà $(a,a,-a)$: è un ss.v., la retta vettoriale $\mathcal L\{(1,1,-1)\}$.
- Spazi di polinomi: $\{p\in\mathbb R_3[x]\mid p(1)=0\}$ è un ss.v. di $\mathbb R_3[x]$.

## Nei corsi
- **Algebra lineare** (triennale): spazi vettoriali parte I (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/7_Spazi_vettoriali.pdf` (p. 27-44); `Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 7, 35-39); `Appunti, riassunti e formulari/SpaziSottospazi1_SpaziRn.pdf`.

## Prerequisiti
- [[Spazio vettoriale]]: sottoinsiemi chiusi per combinazioni lineari

## Porta a
- [[Soluzioni di un sistema lineare]]: Ker(A) è un sottospazio di K^n
- [[Somma e intersezione di sottospazi]]: operazioni che restituiscono sottospazi
- [[Nucleo e immagine]]: nucleo e immagine sono sottospazi

## Collegati
- [[Sottospazio generato]]: ogni span è un sottospazio e viceversa
- [[Base e dimensione]]: la dimensione di un sottospazio è al più quella dello spazio
