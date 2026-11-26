---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["rigid body", "moto di traslazione", "moto di rotazione", "proprietà del corpo rigido", "asse fisso"]
tags: [competenza, area/fisica]
---

# Corpo rigido

> Sistema di punti in cui le distanze reciproche restano costanti; il suo moto più generale è una rototraslazione.

## Definizione / enunciato
Per due punti qualsiasi $i,j$: $|\vec R_i-\vec R_j|=d_{ij}=$ costante. Proprietà dimostrate a lezione (coordinate cilindriche):
1. se due punti sono in quiete, è in quiete tutta la retta che li unisce (asse fisso);
2. con asse fisso, ogni punto ha distanza costante dall'asse;
3. ogni punto si muove in un piano $z=$ costante;
4. i punti descrivono archi di circonferenza in piani perpendicolari all'asse;
5. tutti i punti hanno la stessa velocità angolare.
Le forze interne hanno risultante nulla, momento nullo e lavoro nullo; le forze esterne determinano il moto del CM, i loro momenti le rotazioni.

## Formule chiave
$$\text{traslazione: } \vec v_i=\vec v_{CM}\ \forall i;\qquad \text{rotazione: } v_i=\omega R_i;\qquad \vec R^{(E)}=m\vec a_{CM},\quad \frac{d\vec L}{dt}=\vec M^{(E)}$$

## Intuizione
Bastano le due equazioni cardinali (6 equazioni scalari) per descrivere un corpo rigido, perché le forze interne "non lavorano".

## Come si usa
Si sceglie se descrivere il moto come traslazione del CM più rotazione attorno al CM, oppure come rotazione attorno a un asse fisso.

## Nei corsi
- **Fisica 1** (triennale): lezione del 13/04/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/CorpoRigido_Lezione1.pdf` (pp. 43-81).
- **Meccanica** (triennale): sistema (discreto o continuo) in cui la distanza tra due punti qualsiasi è costante; quattro punti bastano a fissare una terna in cui il corpo è in quiete. La configurazione è data da sei funzioni: le coordinate di un punto $Q$ e tre angoli di Eulero; la rigidità $|P_i-P_j|=c_{ij}$ è un vincolo olonomo bilatero. Il moto rigido più generale è rototraslatorio. Fonti: `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 15-18, 22, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect2-Constraints.pdf` (p. 33).

## Prerequisiti
- [[Centro di massa]]: il moto di traslazione è quello del CM
- [[Moto circolare]]: ogni punto ruota su una circonferenza

## Porta a
- [[Momento d'inerzia]]: distribuzione rigida di masse attorno all'asse
- [[Equilibrio statico del corpo rigido]]: le forze hanno punti di applicazione diversi

## Collegati
- Nessuno.
