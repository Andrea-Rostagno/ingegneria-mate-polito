---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["static equilibrium of a rigid body", "condizioni di equilibrio statico", "statica del corpo rigido", "problema della scala", "ladder problem", "equazioni cardinali della statica", "cardinal equations of statics", "poligono di appoggio", "basis polygon"]
tags: [competenza, area/fisica]
---

# Equilibrio statico del corpo rigido

> Un corpo rigido inizialmente in quiete resta in quiete se sono nulli sia la risultante delle forze esterne sia il momento risultante.

## Definizione / enunciato
Per un punto materiale basta $\vec R=0$; per un corpo rigido è necessario ma non sufficiente, perché due forze uguali e opposte con rette d'azione diverse (coppia) lo fanno ruotare. Condizioni:
$$\vec R=0,\qquad \vec M=0.$$
Il polo per i momenti si sceglie dove agiscono più forze incognite, così che il loro momento sia nullo.

## Formule chiave
$$\sum_i\vec F_i^{(E)}=0,\qquad \sum_i\vec r_i\times\vec F_i^{(E)}=0$$

## Intuizione
Per un corpo esteso conta anche il punto di applicazione: le forze devono bilanciarsi sia come traslazione sia come rotazione.

## Come si usa
Problema della scala (pp. 38-44): scala uniforme di 5 m e peso 12 N, poggiata a una parete liscia con il piede a 3 m. $N=P=12$ N, $F_1=f$; con polo nel piede, il momento del peso vale $12\cdot2.5\cdot3/5=18$ N m e si trova $f=4.5$ N, quindi $\mu_s\ge f/N=0.375$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 4/05/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione4.pdf` (pp. 35-54).
- **Meccanica** (triennale): equazioni cardinali della statica $\vec R^{(e)}=\vec 0$, $\vec M_\Omega^{(e)}=\vec 0$ (6.11a-b). Thm 6.3: per un sistema rigido sono necessarie **e sufficienti**; la sufficienza si dimostra con il principio dei lavori virtuali e vincoli ideali. Per sistemi non rigidi sono solo necessarie: si scrivono per ogni corpo (Ex2, due aste con molla, $\Phi_{By}=mg$ e $\Phi_{0y}=mg$). Poligono di appoggio (Def. 6.5) e Thm 6.4: un corpo appoggiato su un piano liscio orizzontale è in equilibrio se e solo se la proiezione di $G$ non cade fuori dal poligono. Nella scala serve attrito in $A$ ma non in $B$. Fonti: `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (pp. 62-65, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Equazioni cardinali della statica", pp. 116-122).

## Prerequisiti
- [[Momento di una forza]]: seconda condizione M = 0
- [[Reazione vincolare]]: reazioni di parete e pavimento
- [[Corpo rigido]]: le forze hanno punti di applicazione diversi

## Porta a
- Nessuno.

## Collegati
- [[Principio di Archimede]]: equilibrio dei momenti di peso e spinta
- [[Attrito radente]]: l'attrito statico impedisce lo slittamento
