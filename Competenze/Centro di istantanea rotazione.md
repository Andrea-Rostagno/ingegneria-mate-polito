---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["instantaneous center of rotation", "CIR", "centro di rotazione dell'atto di moto", "polo delle velocità"]
tags: [competenza, area/fisica]
---

# Centro di istantanea rotazione

> Nei moti rigidi piani, il punto (anche esterno al corpo) che in un dato istante ha velocità nulla: l'atto di moto è una rotazione pura attorno a esso.

## Definizione / enunciato
Un punto $C$ (che può cambiare nel tempo) tale che $\vec v_C=\vec 0$ all'istante $t$; allora per ogni punto del corpo
$$\vec v_P=\vec\omega\wedge(P-C)\qquad(2.59).$$
**Teorema 2.3:** in un moto rigido piano, se la retta per $P$ perpendicolare a $\vec v_P$ e quella per $Q$ perpendicolare a $\vec v_Q$ si incontrano in un solo punto $H$, allora $H$ è il centro di rotazione dell'atto di moto.

## Formule chiave
Nel moto piano $\vec\omega=\dot\vartheta\,\hat\imath_3$ (2.72). Dalla formula fondamentale, il centro risolve $(C-Q)\wedge\vec\omega=\vec v_Q$, quindi $(C-Q)\perp\vec v_Q$ e $(C-P)\perp\vec v_P$.

## Intuizione
Bisogna distinguere il moto (che dura un tempo finito) dall'atto di moto istantaneo: un moto può non essere una rotazione e avere comunque, a ogni istante, un punto di velocità nulla. Esempio del corso: i punti degli pneumatici a contatto con la strada.

## Come si usa
**Disco che rotola senza strisciare** su una guida orizzontale (Lect2, Ex13): con $\vec v_G=\dot x_G\hat\imath_1$, $\vec\omega=-\dot\vartheta\hat\imath_3$ e $(C-G)=-R\hat\imath_2$ si ha $\vec v_C=(\dot x_G-R\dot\vartheta)\hat\imath_1$. Il vincolo di puro rotolamento $\vec v_C=\vec 0$ dà $\dot x=R\dot\vartheta$: il punto di contatto $C$ è il centro di istantanea rotazione, ma non è sempre lo stesso punto materiale.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 21-23); `triennale/ANNO 2/Meccanica/Lect2-Constraints.pdf` (p. 34, eqq. 3.22-3.23); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezione 5, pp. 36-39).

## Prerequisiti
- [[Formula fondamentale della cinematica rigida]]: si impone v_C = 0
- [[Asse di Mozzi]]: nel moto piano l'asse si riduce a un punto

## Porta a
- [[Moto di puro rotolamento]]: il punto di contatto è il centro di istantanea rotazione

## Collegati
- [[Classificazione dei vincoli]]: il puro rotolamento è un vincolo anolonomo
