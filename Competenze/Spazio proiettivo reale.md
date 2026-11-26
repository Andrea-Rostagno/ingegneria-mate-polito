---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["real projective space", "RP^n", "n-spazio proiettivo reale", "retta proiettiva reale", "RP^1", "spazio proiettivo come quoziente della sfera"]
tags: [competenza, area/algebra-geometria]
---

# Spazio proiettivo reale

> $\mathbb{RP}^n$ è la sfera $S^n$ in cui si identificano i punti antipodali, equivalentemente l'insieme delle rette per l'origine di $\mathbb R^{n+1}$: è il primo esempio importante di spazio quoziente.

## Definizione / enunciato
Su $S^n=\{x\in\mathbb R^{n+1}\mid\|x\|=1\}$ con la topologia euclidea indotta sia $x'Rx\iff x'=\pm x$. Il quoziente $(S^n/R,\mathcal E/R)$ è l'**$n$-spazio proiettivo reale** $\mathbb{RP}^n$ (Def. 7.17).

**Prop. 7.18.** $\mathbb{RP}^n$ è di Hausdorff, compatto e connesso per archi.
**Prop. 7.19.** $\mathbb{RP}^1$ è omeomorfo a $S^1$. Per $n>1$, $\mathbb{RP}^n$ e $S^n$ non sono omeomorfi (affermato senza dimostrazione).
**Prop. 7.20.** Su $X=\mathbb R^{n+1}\setminus\{O\}$ sia $xR'y\iff y=\lambda x$ per qualche $\lambda\neq0$. Allora $\mathbb{RP}^n$ è omeomorfo a $X/R'$.

## Formule chiave
- Hausdorff: dati $[x]\neq[y]$ si prendono intorni $U$ di $x$ e $V$ di $y$ tali che $U$, $V$, $-U$, $-V$ siano a due a due disgiunti; $U\cup(-U)$ e $V\cup(-V)$ sono aperti **saturi** disgiunti.
- $\mathbb{RP}^1\simeq S^1$: $f(e^{i\theta})=e^{2i\theta}$ è continua, suriettiva e $e^{i\theta}Re^{i\varphi}\iff\varphi=\theta+k\pi$ ($k=0,1$) $\iff f(e^{i\theta})=f(e^{i\varphi})$.
- Rette per l'origine: con $g(x)=\dfrac{x}{\|x\|}$, se $y=\lambda x$ allora
$$g(y)=\frac{\lambda x}{|\lambda|\,\|x\|}=\pm\frac{x}{\|x\|}=\pm g(x),$$
quindi $f=\pi\circ g$ è totalmente compatibile con $R'$.

## Intuizione
Un punto di $\mathbb{RP}^n$ è una direzione (retta per l'origine) e ogni retta taglia la sfera in due punti antipodali: per questo i due modelli coincidono. Compattezza e connessione passano dalla sfera al quoziente perché $\pi$ è continua e suriettiva.

## Come si usa
È l'esercizio tipico che mette insieme tutti gli strumenti del capitolo sui quozienti: criterio di Hausdorff con intorni saturi (Prop. 7.7), funzioni totalmente compatibili (Prop. 7.9) e omeomorfismi da un compatto a un Hausdorff (Prop. 5.16).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): §7.4 "Spazi proiettivi" delle note di topologia. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (Def. 7.17, Prop. 7.18-7.20, pp. 55-56).

## Prerequisiti
- [[Topologia quoziente]]: RP^n è un quoziente della sfera
- [[Funzione compatibile con una relazione di equivalenza]]: costruzione degli omeomorfismi
- [[Spazio topologico compatto]]: la sfera è compatta

## Collegati
- [[Connessione per archi]]: S^n e quindi RP^n sono connessi per archi
- [[Spazio di Hausdorff]]: verifica con intorni saturi
- [[Sfera]]: lo spazio di partenza S^n
