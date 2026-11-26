---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["principal curvatures", "direzioni principali", "principal directions", "punto ombelicale", "umbilical point", "k_1 k_2"]
tags: [competenza, area/algebra-geometria]
---

# Curvature principali

> Sono gli autovalori dell'operatore forma. Corrispondono alla massima e alla minima curvatura delle sezioni normali, e sono raggiunte lungo due direzioni ortogonali, le direzioni principali.

## Definizione / enunciato
- **Curvature principali** in $p$: gli autovalori $k_1,k_2$ di $-N_*$.
- **Direzioni principali:** gli autospazi di $-N_*$. Per il teorema spettrale, se distinte, sono ortogonali.
- **Punto ombelicale:** $k_1=k_2$. Allora $-N_*$ è un multiplo dell'identità e ogni direzione è principale.

**Fatto (senza dimostrazione, L22 p. 4).** Le curvature principali in $p$ sono il massimo e il minimo di $b_S(\alpha',\alpha')=\mp k$, al variare di $\alpha=S\cap\Pi_p$ con $\Pi_p$ piano per $p$ contenente $N_p$.

## Formule chiave
$$k_1k_2=K=\det(-N_*),\qquad k_1+k_2=2H=\mathrm{tr}(-N_*)$$
Quindi $k_{1,2}$ sono le radici di $\lambda^2-2H\lambda+K$. In un punto ombelicale $H^2=K$.

## Intuizione
Ruotando un piano attorno alla normale si tagliano curve con curvature diverse: le due estreme sono le curvature principali. Sul cilindro le sezioni estreme sono la generatrice (curvatura 0) e la circonferenza ($1/r$).

## Come si usa
Esempi della lezione:
- Cilindro: curvature principali $-\frac1r$ e $0$, direzioni $P_u$ e $P_v$, ortogonali.
- Sfera: $k_1=k_2=-\frac1r$. Ogni punto è ombelicale e la curvatura è quella dei cerchi massimi, a meno del segno.
- Piano: $k_1=k_2=0$, ogni punto ombelicale.
- Paraboloide $z=x^2+y^2$:
  - $k_1=\frac{2}{(1+4u^2+4v^2)^{3/2}}$, direzione $uP_u+vP_v$;
  - $k_2=\frac{2}{\sqrt{1+4u^2+4v^2}}$, direzione $vP_u-uP_v$;
  - l'unico punto ombelicale è l'origine: da $H^2=K$ segue $4(u^2+v^2)^2=0$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 8-9, 15-16, 20);
  - `triennale/ANNO 2/geometria differenziale/Lezione22_GD.pdf` (pp. 4, 11);
  - `triennale/ANNO 2/geometria differenziale/Lezione23_GD.pdf` (pp. 5-6, 11-15).

## Prerequisiti
- [[Operatore forma]]: ne sono gli autovalori
- [[Autovalori e autovettori]]: calcolo di autovalori e autospazi

## Porta a
- [[Linee di curvatura]]: curve tangenti alle direzioni principali

## Collegati
- [[Curvatura gaussiana]]: K = k₁k₂
- [[Curvatura media]]: H = (k₁+k₂)/2
- [[Curvatura di una curva]]: curvatura delle sezioni normali
