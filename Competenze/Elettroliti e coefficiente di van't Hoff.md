---
tipo: competenza
area: fisica
corsi: [Chimica]
livello: [triennale]
aliases: ["electrolytes", "van't Hoff factor", "coefficiente di van't Hoff", "fattore di van't Hoff", "grado di dissociazione", "degree of dissociation", "elettroliti forti", "elettroliti deboli", "teoria della dissociazione di Arrhenius", "dissociazione elettrolitica", "dissociazione gassosa"]
tags: [competenza, area/fisica]
---

# Elettroliti e coefficiente di van't Hoff

> Gli elettroliti in soluzione si scindono in ioni; il grado di dissociazione α e il coefficiente di van't Hoff $i=1+\alpha(\nu-1)$ contano le particelle effettive per le proprietà colligative.

## Definizione / enunciato
**Arrhenius:** gli elettroliti sono specie che in acqua si scindono parzialmente o totalmente in ioni solvatati; le loro soluzioni conducono la corrente. Un non elettrolita (glucosio) si scioglie senza produrre ioni. Un composto ionico si **dissocia** ($\mathrm{NaCl\to Na^++Cl^-}$), uno covalente polare si **ionizza** ($\mathrm{HCl\to H^++Cl^-}$).
**Grado di dissociazione** α: moli dissociate su moli iniziali, $0\le\alpha\le1$; elettroliti forti α = 1, deboli α < 1, non elettroliti α = 0. Dipende da concentrazione, temperatura e pressione.
**Coefficiente di van't Hoff:** per un elettrolita $\mathrm{A_mB_n}\rightleftharpoons m\mathrm A+n\mathrm B$ in quantità molare $c$, le moli totali dopo la dissociazione sono $c-c\alpha+mc\alpha+nc\alpha=c[1+\alpha(\nu-1)]$ con $\nu=m+n$. Lo stesso fattore corregge l'equazione dei gas nella **dissociazione gassosa** ($\mathrm{PCl_5\rightleftharpoons PCl_3+Cl_2}$).

## Formule chiave
$$\alpha=\frac{n_{dissociate}}{n_{iniziali}},\qquad i=1+\alpha(\nu-1),\qquad PV=[1+\alpha(\nu-1)]\,nRT\ (\text{dissociazione gassosa})$$
$$\Delta P_{solv}=-i\,x_{soluto}P_{solv},\qquad \Delta T_{eb}=K_{eb}\,m\,i,\qquad \Delta T_c=K_c\,m\,i,\qquad \pi=MRT\,i$$

## Intuizione
Le proprietà colligative contano le particelle: una mole di NaCl completamente dissociato ne libera due, quindi ha un effetto doppio rispetto a una mole di glucosio.

## Come si usa
Acido acetico 0,1 M a 25 °C e 1 atm: dissociato all'1,33 %, $\alpha=0{,}0133$ (p. 63). Per un elettrolita forte binario ($\nu=2$, α = 1) $i=2$.

## Nei corsi
- **Chimica** (triennale): Lezione 13 (soluzioni di elettroliti) e lezione 11 (dissociazione gassosa). Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 13 - Soluzioni e propriet_  colligative.pdf` (lezione 13, pp. 57-66); `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 11 - I gas.pdf` (lezione 11, p. 57).

## Prerequisiti
- Nessuno.

## Porta a
- [[Innalzamento ebullioscopico e abbassamento crioscopico]]: si moltiplica per i
- [[Pressione osmotica]]: π = MRT i
- [[Acidi e basi di Brønsted-Lowry]]: dissociazione elettrolitica di Arrhenius
- [[Forza di acidi e basi]]: elettroliti forti e deboli

## Collegati
- [[Equazione di stato dei gas ideali]]: PV = [1+α(ν-1)]nRT nella dissociazione gassosa
