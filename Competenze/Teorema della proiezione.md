---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Numerical opt]
livello: [triennale, magistrale]
aliases: ["Hilbert projection theorem", "proiezione sui convessi chiusi", "projection onto closed convex sets", "teorema di decomposizione ortogonale", "orthogonal decomposition theorem", "migliore approssimazione"]
tags: [competenza, area/analisi]
---

# Teorema della proiezione

> In uno spazio di Hilbert ogni punto ha un'unica migliore approssimazione in un convesso chiuso non vuoto; per un sottospazio chiuso questo dà la decomposizione $H=Y\oplus Y^\perp$.

## Definizione / enunciato
**Teor. 6.28 (proiezione sui convessi chiusi).** Sia $H$ di Hilbert e $C\subseteq H$ convesso, chiuso e non vuoto. Per ogni $x\in H$ esiste un unico $y\in C$ (proiezione di $x$ su $C$) con
$$\|x-y\|=d(x,C)=\inf_{c\in C}\|x-c\|.$$
**Teor. 6.32 (decomposizione ortogonale).** Se $Y\subseteq H$ è un sottospazio chiuso, ogni $x\in H$ si scrive in modo unico come $x=y+z$ con $y\in Y$, $z\in Y^\perp$; inoltre $y=P_Yx$ e
$$\|x\|^2=\|y\|^2+\|z\|^2\ge\|y\|^2.$$

## Formule chiave
Prop. 6.27: per un sottospazio $Y$, $\ x\in Y^\perp\iff\|x-y\|\ge\|x\|\ \forall y\in Y\iff d(x,Y)=\|x\|$.
Cor. 6.33: $H=Y\oplus Y^\perp$, $Y^{\perp\perp}=Y$, $x=P_Yx+P_{Y^\perp}x$, $P_Y$ lineare e 1-lipschitziana, $d(x,Y)=\|P_{Y^\perp}x\|$, $A^{\perp\perp}=\overline{\operatorname{span}A}$.

## Intuizione
Unicità: se $y,y'$ fossero entrambi minimi, il punto medio $(y+y')/2\in C$ sarebbe strettamente più vicino per il parallelogramma. Esistenza: una successione minimizzante è di Cauchy (di nuovo il parallelogramma), converge per completezza e il limite sta in $C$ perché $C$ è chiuso. Convessità (unicità), chiusura e completezza (esistenza) sono tutte essenziali: per una circonferenza e il suo centro l'unicità fallisce (Oss. 6.29).

## Come si usa
- Si calcola $P_Y$ con una base ortonormale di $Y$: $P_Yx=\sum_n\langle x,e_n\rangle e_n$ (Prop. 6.39).
- È il cuore del teorema di Riesz-Fréchet: il nucleo di un funzionale continuo non nullo è un sottospazio chiuso proprio, e un vettore del suo complemento ortogonale rappresenta il funzionale.
- Dà $\operatorname{Ker}(A^*)\oplus\overline{\operatorname{Im}A}=H$ e l'alternativa di Fredholm.

## Nei corsi
- **Analisi funzionale** (triennale): §6.2 "Ortogonalità" (Prop. 6.27, Teor. 6.28, Oss. 6.29-6.30, Def. 6.31, Teor. 6.32, Cor. 6.33). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 72-76).
- **Numerical opt** (magistrale): in $\mathbb R^n$, $\Pi_X(y)=\arg\min_{x\in X}\|x-y\|^2$ per $X$ chiuso, convesso, non vuoto. Per un insieme generico è un problema di minimo non banale; per la sfera $\{\|x-c\|\le r\}$ e per i box $\{L\le x\le U\}$ ci sono formule esplicite. È la base del [[Metodo del gradiente proiettato]] e della caratterizzazione $\Pi_X(x^*-\alpha\nabla f(x^*))=x^*$ dei punti stazionari vincolati. Fonti: `magistrale/Numerical opt/Pieraccini/Part_5_Constrained_Optimization_General_Theory_and_Proj_Grad.pdf` (p. 4-9); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§10.1, §10.3).

## Prerequisiti
- [[Spazio di Hilbert]]: serve la completezza
- [[Insieme convesso]]: ipotesi per l'unicità
- [[Identità del parallelogramma]]: strumento della dimostrazione

## Porta a
- [[Proiezione ortogonale di un vettore]]: P_Y su un sottospazio chiuso
- [[Complemento ortogonale]]: H = Y ⊕ Y⊥ e Y⊥⊥ = Y
- [[Teorema di rappresentazione di Riesz-Fréchet]]: si proietta sul nucleo del funzionale

## Collegati
- [[Problema dei minimi quadrati]]: stessa idea di migliore approssimazione in dimensione finita
- [[Spazio metrico completo]]: la successione minimizzante converge per completezza
