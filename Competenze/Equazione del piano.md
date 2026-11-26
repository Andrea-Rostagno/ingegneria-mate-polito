---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["equation of a plane", "piano in forma parametrica", "piano in forma cartesiana", "vettore normale", "fascio di piani", "pencil of planes", "fascio di luoghi geometrici"]
tags: [competenza, area/algebra-geometria]
---

# Equazione del piano

> Un piano di $E_3$ si scrive in forma parametrica (punto più combinazioni di due vettori) o cartesiana $ax+by+cz+d=0$, dove $(a,b,c)$ è un vettore normale.

## Definizione / enunciato
**Parametrica.** Il piano per $P_0$ parallelo ai vettori non paralleli $\vec u,\vec v$:
$$\pi_{P_0,\vec u,\vec v}:\ \begin{cases}x=x_0+tu_x+sv_x\\ y=y_0+tu_y+sv_y\\ z=z_0+tu_z+sv_z\end{cases}\qquad t,s\in\mathbb R .$$
$P$ sta sul piano se e solo se $\overrightarrow{P_0P}=t\vec u+s\vec v$.

**Cartesiana.** Dalla complanarità di $\overrightarrow{P_0P},u,v$:
$$0=\det(P_0P,u,v)=\langle P_0P,\,u\times v\rangle=a(x-x_0)+b(y-y_0)+c(z-z_0),\qquad (a,b,c)=u\times v .$$
Quindi il piano per $P_0$ ortogonale al vettore $n=(a,b,c)$ è $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$, cioè $\langle n_\pi,x\rangle+d=0$.

**Fascio di piani.** Se $r=\{\pi_1=0,\ \pi_2=0\}$, ogni piano che contiene $r$ ha equazione $\lambda\pi_1+\mu\pi_2=0$ (fascio di piani incidenti in $r$). In generale $\lambda E_1(x)+\mu E_2(x)=0$ è il fascio dei luoghi che passano per $L_1\cap L_2$.

## Formule chiave
$$n_\pi=u\times v,\qquad a(x-x_0)+b(y-y_0)+c(z-z_0)=0$$

## Intuizione
Un piano ha due gradi di libertà (due parametri) e un solo vincolo cartesiano. Il vettore normale riassume tutta la "giacitura": due piani sono paralleli se e solo se hanno normali parallele, e ortogonali se e solo se hanno normali ortogonali.

## Come si usa
- Piano per $P_0=(1,-1,2)$ ortogonale a $v=(1,0,2)$: $(x-1)+2(z-2)=0$, cioè $x+2z-5=0$ (p. 56 di `5_Geometria_analitica.pdf`).
- Proiezione ortogonale di una retta su un piano: si sceglie nel fascio di piani per la retta quello ortogonale al piano dato e lo si interseca con esso. Esempio (p. 57): $\pi:x+z=0$, $r:x=t,y=0,z=2t$; il fascio è $\lambda y+\mu(z-2x)=0$, l'ortogonalità impone $\mu=0$, e la proiezione è $\{y=0,\ x+z=0\}$.
- Piano che contiene $r_1$ ed è parallelo a $r_2$: si sceglie nel fascio per $r_1$ il piano la cui normale è ortogonale alla direzione di $r_2$ (p. 68: $5x-4y-3z-5=0$).

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte I (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/5_Geometria_analitica.pdf` (p. 11, 35, 51-57, 68); `Appunti, riassunti e formulari/Geometria3_SPAZIO.pdf`.
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale. Il piano è una varietà 2-dimensionale, $\pi=\{x\in\mathbb E^3:\ x=\alpha_0P_2+\alpha_1P_1+(1-\alpha_0-\alpha_1)P_0\}$, riscritta $x=P_0+\alpha_0u+\alpha_1v$ con $u=P_2-P_0$, $v=P_1-P_0$. Con la normale $n=\frac{u\times v}{\|u\|_2\|v\|_2}$ (così negli appunti) i termini in $u$ e $v$ si annullano e si ottiene la **forma implicita** $n^Tx=n^TP_0$, cioè $n_1x_1+n_2x_2+n_3x_3=d$, usata per intersecare due piani e per la rotazione di un piano sul piano $xy$. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) (scansioni lette visivamente).

## Prerequisiti
- [[Prodotto scalare]]: il vettore normale è ortogonale al piano
- [[Prodotto misto]]: condizione di complanarità det(P0P,u,v) = 0

## Porta a
- [[Posizioni relative di rette e piani]]: si confrontano le normali e si risolve il sistema
- [[Distanze tra punti, rette e piani]]: distanza punto-piano

## Collegati
- [[Equazioni della retta]]: nello spazio la retta cartesiana è intersezione di due piani
- [[Sfera]]: anche il fascio di sfere si scrive come λE1 + µE2 = 0
