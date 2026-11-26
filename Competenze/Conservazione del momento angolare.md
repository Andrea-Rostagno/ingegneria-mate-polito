---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["conservation of angular momentum", "legge di conservazione del momento angolare", "momento angolare costante"]
tags: [competenza, area/fisica]
---

# Conservazione del momento angolare

> Se il momento delle forze esterne rispetto a un polo (fisso o nel CM) è nullo, il momento angolare del sistema rispetto a quel polo resta costante in modulo, direzione e verso.

## Definizione / enunciato
Dalla seconda equazione cardinale, $\vec M^{(E)}=0\Rightarrow\vec L=$ costante. Due casi:
1. sistema isolato: $\vec M^{(E)}=0$ per qualsiasi polo;
2. sistema non isolato ma con $\vec M^{(E)}=0$ rispetto a un polo particolare: $\vec L$ si conserva solo rispetto a quel polo.
Per un corpo o sistema di corpi che ruota attorno a un asse: $I\omega=$ costante.

## Formule chiave
$$I_{in}\omega_{in}=I_{fin}\omega_{fin},\qquad W=\Delta E_k=\frac{L^2}{2I_{fin}}-\frac{L^2}{2I_{in}}$$

## Intuizione
Conservare $L$ non significa conservare l'energia: due sferette su un'asta che vengono avvicinate ruotano più in fretta, e l'aumento di energia cinetica è il lavoro delle forze centripete.

## Come si usa
- Sferette di massa $m$ collegate da un'asta a lunghezza variabile (`Corporigido_Lezione4.pdf` pp. 26-31): passando da distanza $2r_1$ a $2r_2<2r_1$ il momento d'inerzia diminuisce e $\omega$ aumenta.
- Seconda legge di Keplero: forza centrale, quindi $L$ costante e velocità areale costante.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 4/04 e 4/05/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione1.pdf` (pp. 45-46); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione4.pdf` (pp. 25-31).
- **Meccanica** (triennale): per componenti, con un polo $\Omega$ tale che $\vec v_\Omega\wedge\vec Q=\vec 0$: se $\vec M_\Omega^{(e)}\cdot\hat\imath_j=0$ allora $\vec K_\Omega\cdot\hat\imath_j=\text{cost}$ (7.42). Nei moti alla Poinsot si conserva l'intero $\vec K_Q=I_Q\vec\omega$; nel formalismo lagrangiano, con $\psi$ ciclica, si conserva $p_\psi=\vec K_G\cdot\hat\imath_3$. Fonti: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 72, 75, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 84); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Integrali primi del moto", pp. 111-112).

## Prerequisiti
- [[Teorema del momento angolare]]: con momento esterno nullo

## Porta a
- [[Leggi di Keplero]]: dimostra la seconda legge

## Collegati
- [[Conservazione della quantità di moto]]: legge analoga per la traslazione
- [[Impulso angolare]]: negli urti con perno si conserva L rispetto al perno
