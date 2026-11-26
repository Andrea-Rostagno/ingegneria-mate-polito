---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Istituzioni topologia]
livello: [triennale]
aliases: ["equivalence relation", "classe di equivalenza", "equivalence class", "insieme quoziente", "quotient set", "partizione", "relazione riflessiva simmetrica transitiva"]
tags: [competenza, area/algebra-geometria]
---

# Relazione di equivalenza

> Una relazione riflessiva, simmetrica e transitiva. Spezza l'insieme in classi disgiunte, e il quoziente tratta ogni classe come un unico elemento.

## Definizione / enunciato
Una **relazione** $R$ in $X$ è una corrispondenza da $X$ in $X$, cioè $R\subseteq X\times X$ (Def. 8). $R$ può essere:
- **riflessiva**: $xRx$;
- **simmetrica**: $xRy\Rightarrow yRx$;
- **transitiva**: $xRy,\ yRz\Rightarrow xRz$;
- **antisimmetrica**: $xRy,\ yRx\Rightarrow x=y$.

**Relazione d'equivalenza** $\sim$ (Def. 9): riflessiva, simmetrica e transitiva. La **classe** di $x$ è $\bar x=[x]=\{y\in X\mid y\sim x\}$.

**Partizione** di $X$ (Def. 11): una famiglia $\{X_i\}$ di sottoinsiemi non vuoti tale che $X_i\cap X_j\neq\emptyset\Rightarrow X_i=X_j$ e $\bigcup_iX_i=X$.

**Prop. 12.** Le classi di una relazione d'equivalenza formano una partizione di $X$.

**Quoziente** (Def. 13): $X/_\sim=\{\bar x\}_{x\in X}$.

## Formule chiave
$$\bar x=\{y\in X\mid y\sim x\},\qquad X/_\sim=\{\bar x\}_{x\in X},\qquad \bar x\cap\bar y\neq\emptyset\Rightarrow\bar x=\bar y$$

## Intuizione
"Essere equivalenti" vuol dire avere la stessa etichetta. Le classi sono i gruppi di elementi con la stessa etichetta, e il quoziente è l'insieme delle etichette.

## Come si usa
Esempi delle lezioni:
- **Congruenza modulo $n$:** $a\equiv_nb\iff n\mid a-b$. Equivale ad avere lo stesso resto nella divisione per $n$. Il quoziente è $\mathbb Z_n=\{\bar0,\dots,\overline{n-1}\}$.
- **Su $\mathbb R$:** $a\sim b\iff a-b\in\mathbb Z$, con quoziente identificato con $[0,1)$.
- **Equipotenza:** $X\sim Y$ se esiste una biiezione $X\to Y$.
- **Gruppi:** il sottogruppo $H<G$ induce $a\sim_H b\iff ba^{-1}\in H$, le cui classi sono le classi laterali.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 1-2. Le classi d'equivalenza si indicano con $\bar x$, $x/_\sim$ o $[x]$. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 11-14); `triennale/ANNO 2/istituzioni/Alg-24-10-22.pdf` (lezione 13, pp. 2-4).
- **Istituzioni algebra** (materiale della cartella ANNO 3/istituzioni): le stesse definizioni compaiono negli appunti a mano dell'edizione 2023/24 (`triennale/ANNO 3/istituzioni/algebra/IST_10-04.pdf`, pp. 2-5). Nella parte di topologia le classi servono a costruire spazi quoziente: insieme saturo, $\mathrm{sat}(E)=\pi^{-1}(\pi(E))$ e topologia quoziente (`triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf`, §7.1, p. 52).

## Prerequisiti
- [[Operazioni sugli insiemi]]: relazioni come sottoinsiemi del prodotto cartesiano

## Porta a
- [[Topologia quoziente]]: topologia sull'insieme quoziente di uno spazio topologico
- [[Classi di resto modulo n]]: quoziente di $\mathbb Z$ per la congruenza
- [[Teorema di Lagrange sui gruppi]]: le classi laterali sono classi di equivalenza

## Collegati
- [[Insieme parzialmente ordinato]]: l'altra famiglia di relazioni (antisimmetrica invece che simmetrica)
- [[Teorema di Cantor-Schröder-Bernstein]]: criterio per l'equipotenza
