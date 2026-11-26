---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["graph transformations", "traslazioni", "dilatazioni", "grafico del modulo di f", "grafico di f del modulo di x"]
tags: [competenza, area/analisi]
---

# Trasformazioni del grafico

> Dal grafico di $f$ si ottengono senza calcoli quelli di $f(x)+k$, $f(x+k)$, $kf(x)$, $f(kx)$, $-f(x)$, $f(-x)$, $|f(x)|$ e $f(|x|)$ componendo con traslazioni, dilatazioni e simmetrie.

## Definizione / enunciato
Si compone $f$ con (Mazzi, §1.5): la traslazione $\tau_k(x)=x+k$, la moltiplicazione $p_k(x)=kx$ ($k>0$) e il cambio di segno $p_{-1}(x)=-x$.
- $f(x)+k=\tau_k\circ f$: **traslazione verticale** (verso l'alto se $k>0$); stessi intervalli di monotonia.
- $f(x+k)=f\circ\tau_k$: **traslazione orizzontale** (verso sinistra se $k>0$).
- $kf(x)$: dilatazione ($k>1$) o compressione verticale; gli zeri restano fermi.
- $f(kx)$: compressione ($k>1$) o dilatazione orizzontale.
- $-f(x)$: simmetria rispetto all'asse $x$; $f(-x)$: rispetto all'asse $y$; $-f(-x)$: rispetto all'origine.
- $|f(x)|$: si tiene la parte di grafico con $f\ge0$ e si ribalta rispetto all'asse $x$ quella con $f<0$.
- $f(|x|)$: è pari; si tiene il grafico per $x\ge0$ e lo si riflette rispetto all'asse $y$.

## Formule chiave
$$\Gamma(f+k)=\{(x,f(x)+k)\},\qquad |f(x)|=\begin{cases}f(x)&f(x)\ge0\\-f(x)&f(x)<0\end{cases}$$

## Intuizione
Una trasformazione applicata "fuori" ($f(x)+k$, $kf$) agisce sulle ordinate nel verso atteso; applicata "dentro" ($f(x+k)$, $f(kx)$) agisce sulle ascisse nel verso opposto.

## Come si usa
Si parte da un grafico elementare noto e si applicano le trasformazioni nell'ordine in cui compaiono dall'interno verso l'esterno. Mazzi usa come esempio $f(x)=x^3-2x^2$ con $g_{-1}=x^3-2x^2-1$, $g_3=x^3-2x^2+3$ e $|x^3-2x^2|$. Esercizi tipo: esercitazione 4 (2021-22, "funzioni notevoli, trasformazioni del piano ed esercizi").

## Nei corsi
- **Analisi 1** (triennale): grafici delle funzioni elementari e loro trasformazioni, prerequisito degli studi di funzione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (§1.5.1-1.5.12, pp. 12-22); `triennale/ANNO 1/analisi 1/Esercitazioni 2021-22 (manoscritte e svolte)/ESERCITAZIONE_4_FUNZIONI_NOTEVOLI,_TRASFORMAZIONI_del_PIANO_ed_ESERCIZI.pdf` (scansione).

## Prerequisiti
- [[Funzione composta e funzione inversa]]: composizione con traslazioni e dilatazioni
- [[Valore assoluto]]: grafici di |f(x)| e f(|x|)

## Porta a
- Nessuno.

## Collegati
- [[Funzioni pari, dispari e periodiche]]: simmetrie del grafico
