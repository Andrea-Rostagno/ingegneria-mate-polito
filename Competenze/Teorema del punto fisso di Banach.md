---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Banach fixed-point theorem", "teorema del punto fisso", "teorema della contrazione", "principio delle contrazioni", "contraction principle", "contrazione in uno spazio metrico"]
tags: [competenza, area/algebra-geometria]
---

# Teorema del punto fisso di Banach

> In uno spazio metrico completo ogni contrazione ha uno e un solo punto fisso, che si ottiene come limite delle iterate a partire da un punto qualsiasi.

## Definizione / enunciato
Sia $(X,d)$ uno spazio metrico. $f:X\to X$ è **lipschitziana** se esiste $C\ge0$ con $d(f(p),f(q))\le C\,d(p,q)$ per ogni $p,q\in X$; l'estremo inferiore di tali $C$ è la **costante di Lipschitz**. Se $C<1$, $f$ è una **contrazione** (Def. 1.35). Ogni funzione lipschitziana è continua: basta $\delta=\epsilon/C$ (Prop. 1.36).

**Teorema 1.37 (del punto fisso).** Se $(X,d)$ è **completo** e $f:X\to X$ è una contrazione, esiste un unico $\bar p\in X$ con $f(\bar p)=\bar p$.

**Corollario 1.38.** Se $(X,d)$ è completo e $f^k$ è una contrazione per qualche $k\in\mathbb N$, allora $f$ ha un unico punto fisso.

## Formule chiave
Con $p_n=f(p_{n-1})$ si ha $d(p_n,p_{n+1})\le C^n d(p_0,p_1)$, e per $m\le n$
$$d(p_n,p_m)\le\sum_{i=m}^{n-1}d(p_i,p_{i+1})\le d(p_0,p_1)\,C^m\sum_{i=0}^{n-m-1}C^i=d(p_0,p_1)\,\frac{C^m(1-C^{n-m})}{1-C}.$$
Unicità: se $f(q)=q$, allora $0\le d(\bar p,q)=d(f(\bar p),f(q))\le C\,d(\bar p,q)$, quindi $d(\bar p,q)=0$.

## Intuizione
Ogni iterazione accorcia le distanze almeno del fattore $C$: le iterate formano una successione di Cauchy (stima geometrica), e la completezza garantisce che il limite esista nello spazio. La continuità di $f$ permette di passare al limite in $p_{n+1}=f(p_n)$.

## Come si usa
- Per il corollario: se $f^k(q)=q$, allora $f(q)$ è ancora punto fisso di $f^k$ (perché $f^k(f(q))=f(f^k(q))=f(q)$), quindi per unicità $f(q)=q$.
- L'ipotesi $C<1$ non si può indebolire: su $X=[1,+\infty)$ con la metrica euclidea, $f(x)=x+\frac1x$ verifica $|f(x)-f(y)|=|x-y|\,\big|1-\frac1{xy}\big|<|x-y|$, ma non ha punti fissi (Es. 1.39).
- Le note sottolineano l'applicazione all'esistenza di soluzioni di equazioni differenziali.

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): prima dimostrazione della lista per l'orale, nella parte di topologia. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§1.6, Def. 1.35, Prop. 1.36, Teor. 1.37, Cor. 1.38, Es. 1.39, pp. 11-12); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (cap. 6.3 "Teorema della contrazione", Teor. 6.13, e sue applicazioni in 6.4-6.6); `triennale/ANNO 3/istituzioni/algebra/lista_dimostrazioni.pdf` (punto 1).
- **Equazioni di fisica matematica** (triennale): richiamato come "teorema delle contrazioni di Banach". Una **contrazione** su $(X,d)$ è $g:X\to X$ con $d(g(x_1),g(x_2))\le c\,d(x_1,x_2)$, $c\in(0,1)$. Teorema: se $(X,d)$ è completo non vuoto, $g$ ha un unico punto fisso $x_*=g(x_*)$. È usato per dimostrare il teorema di Cauchy: la soluzione è il punto fisso di $F(g)=x_0+\int_{t_0}^tf(\tau,g(\tau))d\tau$ sul chiuso $\{\|g-x_0\|_\infty\le b\}$ di $C^0(I_\delta;\mathbb R^n)$. Fonte: `triennale/ANNO 3/eq fisica matematica/02 - Lezione 04_10_23 (1).pdf` (pp. 3-7).

## Prerequisiti
- [[Spazio metrico completo]]: le iterate di Cauchy devono convergere
- [[Funzione lipschitziana tra spazi metrici]]: una contrazione è lipschitziana con costante minore di 1

## Porta a
- [[Teorema di esistenza e unicità locale]]: la soluzione è il punto fisso di un operatore integrale
- [[Teorema della funzione inversa]]: nelle dispense Pejsachowicz è dimostrato con le contrazioni

## Collegati
- [[Stabilità dei punti di equilibrio]]: caso particolare su R con la stima |a_n − x0| ≤ L^n |a_0 − x0|
- [[Metodo del punto fisso]]: versione numerica delle stesse iterate
- [[Spazio metrico]]: ambiente della definizione di contrazione
