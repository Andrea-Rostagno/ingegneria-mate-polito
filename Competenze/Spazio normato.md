---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["normed space", "norma", "norm", "spazio vettoriale normato", "distanza indotta dalla norma", "norma indotta", "norma prodotto", "norma dell'estremo superiore", "sup norm"]
tags: [competenza, area/analisi]
---

# Spazio normato

> Uno spazio vettoriale con una "lunghezza" dei vettori compatibile con le operazioni lineari: unisce algebra lineare e topologia metrica.

## Definizione / enunciato
Una **norma** su uno spazio vettoriale $X$ su $\mathbb F$ è $\|\cdot\|:X\to[0,\infty)$ tale che, per ogni $x,y\in X$, $\alpha\in\mathbb F$:
(a) $\|x\|=0\iff x=0$; (b) $\|\alpha x\|=|\alpha|\,\|x\|$; (c) $\|x+y\|\le\|x\|+\|y\|$.
$(X,\|\cdot\|)$ è uno **spazio normato**; $d(x,y)=\|x-y\|$ è una distanza, quindi ogni spazio normato è uno spazio metrico.

## Formule chiave
$$\|x\|_p=\Big(\sum_{j=1}^n|x_j|^p\Big)^{1/p}\ (p<\infty),\qquad\|x\|_\infty=\max_j|x_j|\quad\text{su }\mathbb F^n$$
$$\|f\|_\infty=\sup_{x\in M}|f(x)|\ \text{su } C_{\mathbb F}(M),\ M\text{ compatto};\qquad\|(x,y)\|_{X\times Y}=\max\{\|x\|_X,\|y\|_Y\}.$$
Prop. 4.6: $\big|\|x\|-\|y\|\big|\le\|x-y\|$; somma e prodotto per scalari sono continui; le palle sono convesse; $E$ è limitato $\iff\sup_{x\in E}\|x\|<\infty$.

## Intuizione
La norma è invariante per traslazioni e omogenea, quindi tutta la geometria è determinata dalla palla unitaria $B(0,1)$, che è sempre convessa. Questo lega topologia e struttura lineare (a differenza di un generico spazio metrico).

## Come si usa
Si sceglie la norma adatta al problema ($\|\cdot\|_\infty$ per la convergenza uniforme, $\|\cdot\|_p$ per le medie integrali); un sottospazio con la norma indotta è ancora normato. In dimensione finita la scelta è indifferente (norme equivalenti); in dimensione infinita no, e cambiano completezza, compattezza e continuità degli operatori.

## Nei corsi
- **Analisi funzionale** (triennale): cap. 4 (Def. 4.1-4.2, Prop. 4.3, Es. 4.5, Prop. 4.6). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§4.1, pp. 29-31); `triennale/ANNO 3/analisi funzionale/03_spazinormati_handout.pdf` (pp. 2-4).

- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): spazi normati reali (Def. 1.20). Ogni norma induce la metrica $d(v_1,v_2)=\|v_1-v_2\|$ (Prop. 1.21), e due norme sono equivalenti se e solo se lo sono le metriche indotte. Esempi: le norme $L^p$ su $\mathbb R^n$ e $\|x\|_A=\sqrt{x^tAx}$ con $A$ simmetrica definita positiva. Quest'ultima, per il teorema spettrale, verifica $m\|x\|\le\|x\|_A\le M\|x\|$ con $m=\sqrt{\min\lambda_i}$, $M=\sqrt{\max\lambda_i}$ (Es. 1.22). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§1.4, pp. 7-8); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§4.2, §5.3: norme equivalenti, Teor. 8.25 tutte le norme su $\mathbb R^n$ sono equivalenti).

## Prerequisiti
- [[Spazio vettoriale]]: la norma è definita su uno spazio vettoriale
- [[Spazio metrico]]: la norma induce una distanza

## Porta a
- [[Spazio di Banach]]: spazio normato completo
- [[Norme equivalenti]]: confronto fra norme sullo stesso spazio
- [[Lemma di Riesz]]: compattezza della palla e dimensione
- [[Operatore lineare limitato]]: operatori continui fra spazi normati
- [[Teorema di Hahn-Banach]]: estensione di funzionali su spazi normati

## Collegati
- [[Norme vettoriali]]: le norme 1, 2, ∞ su R^n sono il caso finito-dimensionale
- [[Spazio vettoriale euclideo]]: la norma indotta da un prodotto scalare è un esempio
