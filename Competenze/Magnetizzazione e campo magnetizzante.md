---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["magnetization", "vettore magnetizzazione", "campo magnetizzante", "magnetizing field", "vettore H", "correnti di magnetizzazione", "suscettività magnetica", "permeabilità magnetica relativa", "B = μ0(H + M)"]
tags: [competenza, area/fisica]
---

# Magnetizzazione e campo magnetizzante

> La magnetizzazione $\vec M$ (momento magnetico per unità di volume) equivale a correnti superficiali; il campo magnetizzante $\vec H=\vec B/\mu_0-\vec M$ ha circuitazione che dipende solo dalle correnti libere.

## Definizione / enunciato
**Magnetizzazione:** momento di dipolo magnetico per unità di volume, $M=nm$ ($m$ momento di ciascun atomo o molecola, $n$ numero per unità di volume); unità A m⁻¹. In un cilindro (sezione $S$, lunghezza $l$) con i dipoli allineati lungo l'asse, il momento totale $M(Sl)=(Ml)S$ equivale a una corrente efficace di magnetizzazione sulla superficie: $I_{mag}/l=M$. In generale la corrente di magnetizzazione per unità di lunghezza sulla superficie è la componente di $\vec M$ parallela al piano tangente.
**Campo magnetizzante:** un cilindro di materia dentro un solenoide ($n$ spire per unità di lunghezza, corrente $I$) ha una corrente effettiva $nI+M$, che per la legge di Ampère dà $B_M$. Si definisce $\vec H$ in modo che la sua componente tangente sia la corrente libera totale per unità di lunghezza; unità A m⁻¹. La circuitazione di $\vec H$ lungo una linea chiusa è la corrente libera concatenata, mentre quella di $\vec B$ conta correnti libere e di magnetizzazione.
**Materiali lineari:** $\vec M=\chi_m\vec H$, con $\chi_m$ suscettività magnetica adimensionata, legata alla struttura microscopica del mezzo.

## Formule chiave
$$\frac{I_{mag}}{l}=\vec M\cdot\vec u_t,\qquad \frac{I_{lib.totale}}{l}=\vec H\cdot\vec u_t$$
$$B_M=\mu_0\left(nI+\frac{I_{mag}}l\right)=\mu_0(nI_{lib}+M)=(B_0+\mu_0M)=\mu_0(H+M),\qquad \frac{\vec B_0}{\mu_0}=\vec H=\frac{\vec B_M}{\mu_0}-\vec M$$
$$\oint_L\vec H\cdot d\vec l=\sum_iI_{lib,i},\qquad \oint_L\vec B_M\cdot d\vec l=\mu_0\sum_i(I_{lib,i}+I_{mag,i})$$
$$\vec B_M=\mu_0(1+\chi_m)\vec H=\mu_0\mu_r\vec H=\mu\vec H,\qquad \mu=\mu_0(1+\chi_m)=\mu_0\mu_r$$

## Intuizione
Dentro il materiale le correnti delle spire atomiche adiacenti si cancellano; resta una corrente sulla superficie, come un secondo solenoide. In un materiale omogeneo il campo è quello del vuoto con $\mu_0$ sostituito da $\mu$.

## Come si usa
Si calcola $\vec H$ dalle sole correnti libere con la sua circuitazione, poi $\vec B=\mu\vec H$. Analogia con il dielettrico: $\vec D$-$\vec E$-$\vec P$ (cariche libere, complessive, di polarizzazione) corrisponde a $\vec H$-$\vec B$-$\vec M$ (correnti libere, complessive, di magnetizzazione).

## Nei corsi
- **Fisica 2** (triennale): lezione 27, prima parte, e riassunto finale campo elettrostatico / magnetostatico nella materia. Fonti: `triennale/ANNO 2/fisica 2/lezioni/27.  LEZIONE.pdf` (pp. 2-11, 21).

## Prerequisiti
- [[Dipolo magnetico]]: M è il momento magnetico per unità di volume
- [[Legge di Ampère]]: la circuitazione di H conta solo le correnti libere

## Porta a
- [[Proprietà magnetiche della materia]]: classificazione per segno e valore della suscettività

## Collegati
- [[Vettore spostamento elettrico]]: analogia D-E-P con H-B-M
