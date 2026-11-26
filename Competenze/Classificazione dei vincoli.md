---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["constraints", "classification of constraints", "vincolo olonomo", "vincolo anolonomo", "nonholonomic constraint", "vincolo bilatero", "vincolo unilatero", "vincolo fisso", "vincolo mobile", "vincolo scleronomo", "vincolo reonomo", "vincolo di rigidità", "sistema labile", "sistema isostatico", "sistema iperstatico"]
tags: [competenza, area/fisica]
---

# Classificazione dei vincoli

> I vincoli limitano posizioni o velocità di un sistema; si classificano in olonomi/anolonomi, bilateri/unilateri, fissi/mobili, e da questo dipende quali coordinate e quali spostamenti virtuali si possono usare.

## Definizione / enunciato
Nel manoscritto un vincolo su $\{P_i\}_{i=1}^N$ è una relazione $\psi(\vec r_1,\dots,\vec r_N,\dot{\vec r}_1,\dots,\dot{\vec r}_N,t)\ge0$. Si dice:
- **olonomo** (geometrico, di posizione) se non dipende dalle velocità; **anolonomo** (cinematico) se le coinvolge;
- **bilatero** se è un'uguaglianza $\psi=0$; **unilatero** se è una disuguaglianza;
- **scleronomo** (fisso) se $\psi$ non dipende esplicitamente da $t$; **reonomo** (mobile) altrimenti.

Nel testo inglese un vincolo olonomo bilatero è $f(q_1,\dots,q_N;t)=0$ (3.21): bilatero significa che tutti gli spostamenti e le velocità virtuali sono reversibili.

## Formule chiave
Rigidità: $|P_i-P_j|=c_{ij}$ costante (olonomo bilatero). Velocità costante $|\vec v|=\text{cost}$, oppure $\vec v\perp\hat\imath_h$: anolonomi. Asta appoggiata: $(A-O)\cdot\hat\imath_2=0$ con il vincolo unilatero $(B-A)\cdot\hat\imath_2\ge0$ (3.16a-b).

## Intuizione
Un vincolo unilatero agisce solo sul bordo delle configurazioni ammesse ($\vartheta=0,\pi$ nell'esempio dell'asta). Alcuni vincoli anolonomi si possono integrare: il puro rotolamento del disco $\dot x=R\dot\vartheta$ dà $x=R\vartheta+k$, olonomo. In 3D questo non sempre è possibile (moto di un'automobile, pattino con $\vec v_G\wedge(B-A)=\vec 0$).

## Come si usa
Si contano i gradi di libertà: due aste nel piano hanno $3+3=6$ coordinate, cinque condizioni (cerniera in $O$, cerniera $K=A$, carrello in $B$) le riducono a 1 (3.15). Secondo i vincoli attivi il sistema è **labile** (può muoversi), **isostatico** (vincoli appena sufficienti, reazioni determinate) o **iperstatico** (infinite soluzioni per le reazioni).

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect2-Constraints.pdf` (pp. 27-35, esempi Ex1-Ex14; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezioni 7-8 del 16/03/2017, pp. 48-50).

## Prerequisiti
- [[Reazione vincolare]]: il vincolo agisce come una forza
- [[Coordinate generalizzate]]: i vincoli olonomi bilateri riducono le coordinate

## Porta a
- [[Spostamenti virtuali]]: dipendono dal tipo di vincolo
- [[Principio dei lavori virtuali]]: richiede vincoli ideali e distingue i bilateri

## Collegati
- [[Centro di istantanea rotazione]]: il punto di contatto nel puro rotolamento
- [[Moto di puro rotolamento]]: esempio di vincolo anolonomo integrabile
