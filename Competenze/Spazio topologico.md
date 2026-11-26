---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["topological space", "topologia su un insieme", "aperti di una topologia", "chiusi di una topologia", "topologia discreta", "topologia banale", "topologia cofinita", "topologia più fine", "topologie confrontabili", "topologia indotta", "subspace topology", "topologia associata a una metrica", "topologia euclidea"]
tags: [competenza, area/algebra-geometria]
---

# Spazio topologico

> Un insieme con una famiglia di "aperti" chiusa per unioni qualsiasi e intersezioni finite: è il minimo di struttura necessario per parlare di continuità, compattezza e connessione senza una distanza.

## Definizione / enunciato
Una **topologia** su $X\neq\emptyset$ è un $\tau\subseteq\mathcal P(X)$ tale che (Def. 2.1):
- **TOP1** $\emptyset,X\in\tau$;
- **TOP2** l'unione di una famiglia qualsiasi di elementi di $\tau$ sta in $\tau$;
- **TOP3** l'intersezione di un numero finito di elementi di $\tau$ sta in $\tau$.

Gli elementi di $\tau$ sono gli **aperti**; gli aperti che contengono $p$ sono i suoi **intorni** $\mathcal U_p$. $C$ è **chiuso** se $X\setminus C\in\tau$ (insieme dei chiusi $\tau^*$). $A\in\tau$ se e solo se ogni $p\in A$ ha un intorno contenuto in $A$ (Prop. 2.3). Se $\tau\subset\tau'$, $\tau'$ è **più fine** di $\tau$ (Def. 2.6).

**Topologia indotta** su $E\subseteq X$: $\tau_E=\{A\cap E\mid A\in\tau\}$, con chiusi $\{C\cap E\mid C\in\tau^*\}$ (Prop. 2.10).

**Topologia associata a una metrica** $d$ (§2.3):
$$\tau_d=\{A\subseteq X\mid\forall p\in A\ \exists r>0:\ B(p,r)\subseteq A\}\cup\{\emptyset\}.$$

## Formule chiave
- I chiusi verificano: $\emptyset,X$ chiusi, intersezioni qualsiasi e unioni finite di chiusi sono chiuse; viceversa una famiglia con queste proprietà è l'insieme dei chiusi di un'unica topologia (Prop. 2.5).
- Esempi (Es. 2.9): banale $\{\emptyset,X\}$ (la meno fine); discreta $\mathcal P(X)$ (la più fine); cofinita $\tau_{cof}=\{A\mid\#(X\setminus A)<\infty\}\cup\{\emptyset\}$; topologia euclidea $\mathcal E_1$ su $\mathbb R$.
- Se $d'\le M d$ allora $\tau_{d'}\subseteq\tau_d$; metriche equivalenti danno la stessa topologia (Prop. 2.12). Il viceversa è falso: $d_b=\frac{d}{1+d}$ non è equivalente a $d$ se $d$ è illimitata, ma $\tau_d=\tau_{d_b}$ (Es. 2.13).

## Intuizione
La topologia dimentica le distanze e tiene solo la nozione di "vicinanza" codificata dagli aperti. Molte metriche diverse inducono la stessa topologia, e molte topologie (cofinita, del punto, delle semirette) non vengono da nessuna metrica.

## Come si usa
Per verificare che una famiglia è una topologia di solito l'unico assioma non immediato è TOP3: per $\tau_d$, se $B(p,r_i)\subseteq A_i$ basta $r=\min\{r_1,r_2\}$ (Prop. 2.11). Per la cofinita conviene passare ai chiusi (insiemi finiti e $X$) e usare la Prop. 2.5. Per provare che due topologie coincidono si mostra che ciascuna è più fine dell'altra.

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): cap. 2 delle note di topologia. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§2.1-2.3, Def. 2.1-2.6, Es. 2.9, Prop. 2.10-2.12, Es. 2.13, pp. 13-16); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§4.3-4.5, Teor. 4.9).

## Prerequisiti
- [[Insieme delle parti]]: una topologia è una famiglia di sottoinsiemi
- [[Aperti e chiusi in uno spazio metrico]]: il modello da cui si astraggono gli assiomi

## Porta a
- [[Spazio di Hausdorff]]: assioma di separazione
- [[Base di una topologia]]: generare una topologia da una famiglia più piccola
- [[Chiusura e interno in uno spazio topologico]]: insiemi associati a un sottoinsieme
- [[Funzione continua tra spazi topologici]]: continuità tramite controimmagini di aperti
- [[Topologia prodotto]]: topologia sul prodotto cartesiano
- [[Topologia quoziente]]: topologia sull'insieme quoziente

## Collegati
- [[Spazio metrico]]: ogni metrica induce una topologia, non viceversa
- [[Sigma-algebra di Borel]]: generata dagli aperti di una topologia
- [[Topologia del piano complesso]]: caso della topologia euclidea su C
