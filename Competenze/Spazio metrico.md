---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["metric space", "distanza", "metrica indotta su un sottoinsieme", "metrica prodotto", "metrica dell'estremo superiore", "distanza d_p", "metrica di Manhattan", "metriche equivalenti", "equivalent metrics", "metrica discreta", "metrica geodetica", "diametro di un insieme"]
tags: [competenza, area/analisi]
---

# Spazio metrico

> Un insieme dotato di una distanza: è l'ambiente minimo in cui si parla di convergenza, successioni di Cauchy, aperti, compattezza e continuità.

## Definizione / enunciato
Uno **spazio metrico** è un insieme $M$ con una funzione $d:M\times M\to[0,\infty)$ tale che, per ogni $x,y,z\in M$:
1. $d(x,y)=0\iff x=y$ (separazione);
2. $d(x,y)=d(y,x)$ (simmetria);
3. $d(x,z)\le d(x,y)+d(y,z)$ (disuguaglianza triangolare).

Una successione $(x_n)$ **converge** a $x$ se $\forall\epsilon>0\ \exists N:\ d(x_n,x)<\epsilon\ \forall n>N$, cioè se $d(x_n,x)\to0$; il limite, se esiste, è unico e ogni sottosuccessione ha lo stesso limite.

## Formule chiave
Su $\mathbb F^n$ ($\mathbb F=\mathbb R$ o $\mathbb C$):
$$d_p(x,y)=\Big(\sum_{j=1}^n|x_j-y_j|^p\Big)^{1/p}\ (p\in[1,\infty)),\qquad d_\infty(x,y)=\max_j|x_j-y_j|;$$
$d_2$ è la metrica euclidea, $d_1$ quella di Manhattan. Su $C_{\mathbb F}[a,b]$ la **metrica dell'estremo superiore** (della convergenza uniforme):
$$d_\infty(f,g)=\sup_{t\in[a,b]}|f(t)-g(t)|=\max_{t\in[a,b]}|f(t)-g(t)|.$$
Metrica prodotto su $M\times N$: $d((x,y),(x',y'))=\max\{d_M(x,x'),d_N(y,y')\}$.

## Intuizione
Gli assiomi conservano solo le proprietà della distanza euclidea che servono a definire i limiti: lo stesso insieme con metriche diverse (es. $d_\infty$ invece di $d_2$ sulle funzioni) dà nozioni di convergenza diverse.

## Come si usa
Su $F(S,\mathbb F)$ la $d_\infty$ non è una distanza (può valere $+\infty$): lo diventa sullo spazio $F_b(S,\mathbb F)$ delle funzioni limitate. Ogni sottoinsieme con la metrica indotta è ancora uno spazio metrico, e ogni spazio normato lo è con $d(x,y)=\|x-y\|$.

## Nei corsi
- **Analisi funzionale** (triennale): cap. 2 "Richiami di topologia in spazi metrici" (Def. 2.1, Es. 2.2, Def. 2.7, Prop. 2.9). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§2.1-2.2, pp. 10-12); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 2-5).
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): cap. 1 delle note di topologia. Contiene la disuguaglianza $|d(p,x)-d(q,x)|\le d(p,q)$ (Prop. 1.2), il diametro e gli insiemi limitati (Def. 1.3). Due metriche sono **equivalenti** se $m\,d_1\le d_2\le M\,d_1$ con $m,M>0$ (Def. 1.4), e allora $B_{d_1}(p,\frac rM)\subseteq B_{d_2}(p,r)\subseteq B_{d_1}(p,\frac rm)$ (Prop. 1.7). Esempi: metrica discreta, metriche $L^p$ su $\mathbb R^n$, $d_b=\frac{d}{1+d}$ (limitata, non equivalente a $d$ se $d$ è illimitata), $d_{L^\infty}$ e $d_{L^1}$ su $C^0([a,b])$, non equivalenti. Anche la metrica geodetica su $S^n$, equivalente a quella euclidea (Es. 1.8-1.14). Sul prodotto le metriche $d_{L^p}$ e $d_{L^\infty}=\max\{d_1,d_2\}$ sono equivalenti (Prop. 1.15). Limiti e continuità sono definiti con le palle (Def. 1.16, 1.23-1.26), e $p\mapsto d(p,E)$ è continua (Prop. 1.27). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§1.1-1.5, pp. 1-9); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§4.1).

## Prerequisiti
- [[Limite di successione]]: la convergenza generalizza quella in R

## Porta a
- [[Spazio metrico completo]]: successioni di Cauchy e completezza
- [[Aperti e chiusi in uno spazio metrico]]: topologia indotta dalla distanza
- [[Compattezza in spazi metrici]]: compattezza per successioni
- [[Spazio separabile]]: esistenza di un denso numerabile
- [[Funzione lipschitziana tra spazi metrici]]: controllo delle distanze
- [[Spazio normato]]: la norma induce la distanza d(x,y)=‖x−y‖
- [[Spazio topologico]]: ogni metrica induce una topologia τ_d (Istituzioni topologia)
- [[Teorema del punto fisso di Banach]]: contrazioni su spazi metrici completi (Istituzioni topologia)

## Collegati
- [[Misure di distanza]]: distanze di Minkowski e supremum usate nel data mining
- [[Norme vettoriali]]: le metriche d_p vengono dalle norme p
