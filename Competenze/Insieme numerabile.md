---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Istituzioni topologia, Matematica discreta]
livello: [triennale]
aliases: ["countable set", "numerabilità", "insieme al più numerabile", "insieme più che numerabile", "uncountable set", "argomento diagonale di Cantor", "teorema di Cantor", "criterio di Dedekind", "insiemi equipotenti", "insieme non numerabile"]
tags: [competenza, area/algebra-geometria]
---

# Insieme numerabile

> Un insieme è numerabile se è in biiezione con $\mathbb N$. È il più piccolo tipo di infinito: $\mathbb Z$ e $\mathbb Q$ sono numerabili, $\mathbb R$ e $\mathcal P(\mathbb N)$ no.

## Definizione / enunciato
Due insiemi sono **equipotenti**, $X\approx Y$, se esiste una biiezione $X\to Y$.

Def. 1: $X$ è
- **numerabile** se $X\approx\mathbb N$;
- **al più numerabile** se è finito o numerabile;
- **più che numerabile** altrimenti.

Risultati delle dispense:
- **Criterio di Dedekind:** $X$ è infinito $\iff$ esiste $Y\subsetneq X$ con $X\approx Y$.
- **Ogni infinito contiene una copia di $\mathbb N$:** se $X$ è infinito esiste $\varphi:\mathbb N\to X$ iniettiva (si usa una funzione di scelta).
- **Cor. 3:** ogni sottoinsieme di un insieme al più numerabile è al più numerabile. Quindi i numerabili sono i più piccoli insiemi infiniti.
- **Prop. 4:** $\mathbb R$ è più che numerabile.
- **Prop. 5 (Cantor):** $X\not\approx\mathcal P(X)$ per ogni $X$. Si può dimostrare che $\mathcal P(\mathbb N)\approx\mathbb R$.

## Formule chiave
$$\mathbb N\approx\mathbb N_0\approx\mathbb Z\approx\mathbb Q,\qquad \mathbb R\not\approx\mathbb N,\qquad X\not\approx\mathcal P(X)$$

## Intuizione
Numerabile vuol dire "elencabile": $x_1,x_2,x_3,\dots$ L'argomento diagonale mostra che qualunque elenco di numeri reali ne lascia fuori uno.

## Come si usa
Esempi delle lezioni:
- **$\mathbb Q_+$:** $p/q\mapsto2^p3^q$ è iniettiva in $\mathbb N$, e per Cor. 3 $\mathbb Q_+$ è numerabile; poi $\mathbb Q=\mathbb Q_+\cup\mathbb Q_-\cup\{0\}$.
- **$\mathbb R$ non numerabile:** data $f:\mathbb N_0\to[0,1]$, con espansioni decimali $x=0,x_1x_2\dots$ si costruisce $y$ con $y_i\neq x_{ii}$ e $y_i\neq0,9$. Allora $y\notin\mathrm{Im}f$.
- **Cantor:** se $\varphi:X\to\mathcal P(X)$ fosse biiettiva, l'insieme $Y=\{x\mid x\notin\varphi(x)\}=\varphi(y)$ non può contenere né escludere $y$.
- **Ipotesi del continuo:** chiede se esiste un insieme più che numerabile ma non equipotente a $\mathbb R$; in ZF è indecidibile.

## Nei corsi
- **Istituzioni algebra** (triennale): lezione 3. La biiezione esplicita $\mathbb N_0\to\mathbb Z$ (pp. 18-19) è su pagine sbiadite (da verificare sul PDF). Fonti: `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, pp. 14-21).
- **Matematica discreta** (triennale): lezione 3, dopo la cardinalità finita. $A$ è numerabile se $A\sim\mathbb N$; non numerabile se non è né finito né numerabile; al più numerabile se è finito o numerabile. Esempi: $\mathbb N\sim P$ (pari) con $n\mapsto 2n$; si costruisce una biiezione $\mathbb N\to\mathbb Z$. Il "contare a dita" non funziona con gli insiemi infiniti. Teorema (senza dimostrazione completa): sono equivalenti (1) $A$ infinito, (2) $A$ contiene un sottoinsieme numerabile, (3) $A$ è equipotente a un suo sottoinsieme proprio. Lo studio è attribuito a Cantor. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/03 -Insiemi equipotenti e cardinalitá.pdf` (lezione 3, pp. 6-7, manoscritto).
- **Istituzioni algebra** (materiale della cartella ANNO 3/istituzioni): stessi risultati negli appunti a mano dell'edizione 2023/24: insiemi finiti e infiniti, criterio di Dedekind, $\mathbb Q$ numerabile, $\mathbb R$ non numerabile, $X\not\approx\mathcal P(X)$ (`triennale/ANNO 3/istituzioni/algebra/IST_10-09.pdf`, pp. 2-5; `triennale/ANNO 3/istituzioni/algebra/IST_10-12.pdf`, pp. 2-5). Le dispense Pejsachowicz (cap. 3) aggiungono che i reali algebrici sono numerabili e che $\mathbb R\sim\mathcal P(\mathbb N)$ (Prop. 3.19, Teor. 3.24; `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf`). Nella parte di topologia la numerabilità definisce gli spazi a base numerabile, per esempio $\mathbb R^n$ con base in biiezione con $\mathbb Q^{n+1}$ (`triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf`, Prop. 2.23, p. 19).

## Prerequisiti
- [[Principio di induzione]]: costruzione ricorsiva dell'iniezione $\mathbb N\to X$
- [[Assioma della scelta]]: scegliere gli elementi della successione
- [[Teorema di Cantor-Schröder-Bernstein]]: dimostra il Cor. 3

## Porta a
- [[Base di una topologia]]: spazi a base numerabile e a base di intorni numerabile

## Collegati
- [[Sigma-algebra]]: la chiusura per unioni numerabili usa questa nozione
- [[Cardinalità di un insieme finito]]: l'equipotenza estende ai casi infiniti la definizione di cardinalità finita (Matematica discreta)
- [[Insieme delle parti]]: per Cantor $X\not\approx\mathcal P(X)$; nel caso finito $|\mathcal P(A)|=2^{|A|}$ (Matematica discreta)
