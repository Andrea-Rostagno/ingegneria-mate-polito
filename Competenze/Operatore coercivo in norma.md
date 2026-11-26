---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["bounded below operator", "operatore limitato inferiormente", "coercività in norma", "criterio di invertibilità per coercività", "immagine densa e coercività"]
tags: [competenza, area/analisi]
---

# Operatore coercivo in norma

> Un operatore che non "schiaccia" i vettori ($\|x\|\le C\|Tx\|$) ha immagine chiusa; se l'immagine è anche densa, è un isomorfismo.

## Definizione / enunciato
$T\in\mathcal B(X,Y)$ è **coercivo in norma** se esiste $C\in(0,\infty)$ con
$$\|x\|_X\le C\|Tx\|_Y\qquad\forall x\in X.$$
**Lemma 7.40.** Se $X$ è di Banach e $T$ è coercivo in norma, allora $\operatorname{Im}T$ è chiusa in $Y$.
**Teor. 7.39.** Siano $X$ di Banach, $Y$ normato, $T\in\mathcal B(X,Y)$. $T$ è un isomorfismo se e solo se (a) $\overline{\operatorname{Im}T}=Y$ (immagine densa) e (b) $T$ è coercivo in norma.
**Cor. 10.7 (spazi di Hilbert).** $T\in\mathcal B(H_1,H_2)$ è un isomorfismo se e solo se $\operatorname{Ker}(T^*)=\{0\}$ e $T$ è coercivo in norma.

## Formule chiave
Lemma 7.40: se $Tx_n\to y$, da $\|x_n-x_m\|\le C\|Tx_n-Tx_m\|$ la successione $(x_n)$ è di Cauchy, quindi $x_n\to x$ e $Tx=y$.
Nel Teor. 7.39: $\|T^{-1}\|_{op}\le C$.

## Intuizione
La coercività dà iniettività e una stima quantitativa dell'inversa sull'immagine; la completezza di $X$ trasforma questa stima in chiusura dell'immagine. Densità più chiusura danno la suriettività. In Hilbert la densità si legge sull'aggiunto: $\overline{\operatorname{Im}T}=\operatorname{Ker}(T^*)^\perp$.

## Come si usa
Oss. 7.41: l'operatore $\widetilde T$ su $\ell^2$ che estende $x\mapsto(2^{-k}x_k)_k$ ha immagine densa ed è iniettivo, ma $\|Te^{(n)}\|_2=2^{-n}$ con $\|e^{(n)}\|_2=1$, quindi non è coercivo e non è un isomorfismo. La versione per forme (coercività $F(x,x)\ge m\|x\|^2$) porta al teorema di Lax-Milgram.

## Nei corsi
- **Analisi funzionale** (triennale): §7.5 (Teor. 7.39, Lemma 7.40, Oss. 7.41) e §10.1 (Cor. 10.7). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 110-111, 151); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 13); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (p. 5).

## Prerequisiti
- [[Operatore lineare limitato]]: T in B(X,Y)
- [[Spazio di Banach]]: completezza del dominio per la chiusura dell'immagine

## Porta a
- [[Teorema di Lax-Milgram]]: forme coercive danno operatori invertibili

## Collegati
- [[Teorema dell'isomorfismo di Banach]]: altro criterio di invertibilità
- [[Operatore aggiunto]]: versione hilbertiana con Ker(T*) = {0}
