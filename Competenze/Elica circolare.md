---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["circular helix", "elica", "elica sul cilindro"]
tags: [competenza, area/algebra-geometria]
---

# Elica circolare

> È una curva su un cilindro circolare che forma un angolo costante con le generatrici. È l'unica curva sghemba con curvatura e torsione entrambe costanti.

## Definizione / enunciato
L'**elica circolare** è una curva sul cilindro a base circolare (asse $z$) che forma un angolo costante $\alpha$ con la generatrice $\vec g$. Dal triangolo rettangolo con base l'arco $rt$ si ricava $z=\cot(\alpha)\,rt$, quindi
$$P(t)=(r\cos t,\ r\sin t,\ ht),\qquad h:=\cot(\alpha)\,r.$$

**Proposizione.** Una curva sghemba ha curvatura e torsione costanti se e solo se è un'elica circolare.
- (⇒) $K/\tau$ è costante, quindi la curva è un'[[Elica cilindrica]] $P(s)=Q(\bar s)+\cot(\alpha)\bar s\,\vec g$ con $\bar s=s\sin\alpha$. Derivando due volte si ottiene $K^P=K^Q\sin^2\alpha$, quindi la curva base piana $Q$ ha curvatura costante ed è una circonferenza.
- Il caso con $\tau=0$ (circonferenza) è dimostrato a parte.

## Formule chiave
- $P'\times P''=(rh\sin t,-rh\cos t,r^2)$.
- $K=\dfrac{r}{r^2+h^2}$ e $\tau=-\dfrac{h}{r^2+h^2}$. Il segno meno dipende dalla convenzione $dB/ds=+\tau N$.
- Ascissa curvilinea: $s=\frac{rt}{\sin\alpha}$, quindi $P(s)=\big(r\cos(\tfrac{\sin\alpha}{r}s),\ r\sin(\tfrac{\sin\alpha}{r}s),\ \cos(\alpha)s\big)$.

## Intuizione
Limiti:
- $\alpha\to0$: $h\to\infty$ e $K\to0$, l'elica si raddrizza su una generatrice.
- $\alpha\to\pi/2$: $h\to0$ e $K\to1/r$, l'elica si chiude su una circonferenza del cilindro.

Riferimento di Frenet:
- $N=(-\cos t,-\sin t,0)$ punta sempre verso l'asse;
- $B=\frac{(h\sin t,-h\cos t,r)}{\sqrt{r^2+h^2}}$ forma un angolo costante con l'asse.

## Come si usa
Esercizio tipo: data un'elica, si calcolano $T,N,B,K,\tau$ (L06 pp. 25-26, L07 pp. 1-4). In coordinate cilindriche il vettore tangente diventa $\partial_\varphi+h\,\partial_z$ (L14 pp. 9-12, dove il docente chiama $K$ il passo $h$). Introduzione del corso: una particella vincolata a un cilindro descrive un'elica (L01 p. 5).

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione06_GD.pdf` (pp. 22-27);
  - `triennale/ANNO 2/geometria differenziale/Lezione07_GD.pdf` (pp. 1-4);
  - `triennale/ANNO 2/geometria differenziale/Lezione08_GD.pdf` (pp. 4-9);
  - `triennale/ANNO 2/geometria differenziale/Lezione14_GD.pdf` (pp. 9-12).

## Prerequisiti
- [[Formule di Frenet]]: calcolo di T, N, B
- [[Curvatura di una curva]]: formula ||P'×P''||/||P'||³

## Porta a
- Nessuno.

## Collegati
- [[Elica cilindrica]]: generalizzazione, con curva base qualsiasi
- [[Coni, cilindri e superfici di rotazione]]: l'elica giace su un cilindro circolare
- [[Teorema fondamentale delle curve]]: K e τ costanti individuano l'elica a meno di movimenti rigidi
