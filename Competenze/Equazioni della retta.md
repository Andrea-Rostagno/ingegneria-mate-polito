---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["equations of a line", "retta in forma parametrica", "retta in forma cartesiana", "parametri direttori", "retta affine", "retta per due punti", "coefficiente angolare"]
tags: [competenza, area/algebra-geometria]
---

# Equazioni della retta

> Rappresentazioni di una retta del piano $E_2$ o dello spazio $E_3$: parametrica (punto più multipli di un vettore) e cartesiana (una equazione nel piano, due nello spazio).

## Definizione / enunciato
**Parametrica.** La retta per $P_0\simeq x_0$ parallela a $\vec u\neq\vec 0$ è
$$r_{P_0,\vec u}=\{P\simeq x_0+tu,\ t\in\mathbb R\}=x_0+\mathcal L\{u\},\qquad \begin{cases}x=x_0+tu_x\\ y=y_0+tu_y\\ z=z_0+tu_z\end{cases}$$
Le componenti $(u_x,u_y,u_z)$, dette anche $(l,m,n)$, sono i **parametri direttori**. Per due punti $P_1,P_2$ si prende $u=P_2-P_1$.

**Cartesiana in $E_2$:** $ax+by+c=0$; se $b\neq0$ si esplicita come $y=mx+q$ ($m$ coefficiente angolare, $q$ intercetta).

**Cartesiana in $E_3$:** sistema di due equazioni lineari, cioè intersezione di due piani non paralleli né coincidenti:
$$\begin{cases}a_1x+b_1y+c_1z+d_1=0\\ a_2x+b_2y+c_2z+d_2=0\end{cases}$$

## Formule chiave
In $E_2$ la cartesiana si ottiene da $0=\det(\overrightarrow{P_0P},u)=u_2(x-x_0)-u_1(y-y_0)$. Da cartesiana a parametrica in $E_3$: o si risolve il sistema (una incognita libera), o si prende come direzione $n_1\times n_2$ (prodotto delle normali) e un punto qualsiasi della retta.

## Intuizione
Una retta ha "un grado di libertà": nella forma parametrica c'è un parametro; nella cartesiana in $E_3$ due vincoli tolgono due delle tre libertà. Per Rouché-Capelli il sistema ha $\mathrm{rank}(A)=\mathrm{rank}(A|b)=2$ e quindi $\infty^{3-2}=\infty^1$ soluzioni.

## Come si usa
- Esempio (p. 40-41 di `5_Geometria_analitica.pdf`): $\{x-2y+3=0,\ 2y-z-1=0\}$. Ponendo $y=t$ si ha $x=-3+2t$, $y=t$, $z=-1+2t$. In alternativa $n_1=(1,-2,0)$, $n_2=(0,2,-1)$, $n_1\times n_2=(2,1,2)$, e il punto $(-3,0,-1)$.
- Retta per $P_0=(0,-1,1)$ parallela a $u=(1,1,-2)$: $x=t$, $y=-1+t$, $z=1-2t$ (p. 33).
- Le rappresentazioni parametriche non sono uniche: punti e vettori diversi danno la stessa retta.

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte I (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/5_Geometria_analitica.pdf` (p. 15-41); `Appunti, riassunti e formulari/Geometria2_PIANO.pdf`; `Appunti, riassunti e formulari/Geometria3_SPAZIO.pdf`; `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §2.2).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale, nello spazio euclideo $\mathbb E^d$ ($d=2,3$). Retta per $P_0,P_1$: $r=\{x\in\mathbb E^d:\ x=\alpha P_1+(1-\alpha)P_0,\ \alpha\in\mathbb R\}$, equivalente alla forma parametrica $x=P_0+\alpha(P_1-P_0)$, con $\alpha$ **coordinata curvilinea**, $P_0$ punto di applicazione e $t=P_1-P_0$ **vettore tangente**. Il **segmento** $\overline{P_0P_1}$ si ottiene con $\alpha\in[0,1]$. La retta è il caso $k=2$ delle varietà $(k-1)$-dimensionali. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 1, scansione letta visivamente).

## Prerequisiti
- [[Vettori applicati e vettori liberi]]: retta come punto più multipli di un vettore
- [[Prodotto vettoriale]]: direzione di una retta intersezione di due piani

## Porta a
- [[Posizioni relative di rette e piani]]: si confrontano direzioni e si intersecano le equazioni
- [[Distanze tra punti, rette e piani]]: distanza punto-retta
- [[Coni, cilindri e superfici di rotazione]]: generatrici e asse di rotazione sono rette

## Collegati
- [[Equazione del piano]]: nello spazio la retta cartesiana è intersezione di due piani
- [[Teorema di Rouché-Capelli]]: rank 2 su 3 incognite dà ∞^1 punti
- [[Circonferenza nello spazio]]: retta per il centro perpendicolare al piano
