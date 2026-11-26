---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["rotation about a fixed axis", "equazione del moto di rotazione", "M = I alpha", "energia cinetica di rotazione", "lavoro nella rotazione", "precessione", "moto della trottola"]
tags: [competenza, area/fisica]
---

# Rotazione attorno a un asse fisso

> Per un corpo rigido che ruota attorno a un asse fisso, il momento delle forze esterne lungo l'asse determina l'accelerazione angolare tramite il momento d'inerzia.

## Definizione / enunciato
Caso 1, $\vec L\parallel\vec\omega$ (asse di simmetria): dal teorema del momento angolare
$$M_z=\frac{dL_z}{dt}=I_z\frac{d\omega}{dt}=I_z\alpha.$$
Noti forze esterne e punti di applicazione si calcola $\alpha$, poi $\omega(t)$ e $\theta(t)$ come nel moto circolare.
Caso 2, $\vec L$ non parallelo a $\vec\omega$: la componente lungo $z$ dà la stessa equazione, mentre la componente perpendicolare all'asse descrive il **moto di precessione** (trottola).

## Formule chiave
$$E_{cin}=\sum_i\tfrac12m_iR_i^2\omega^2=\tfrac12I_z\omega^2=\frac{L^2}{2I_z},\qquad W=\Delta E_{cin}=\tfrac12I_z\omega_{fin}^2-\tfrac12I_z\omega_{in}^2$$

## Intuizione
$M=I\alpha$ è l'analogo di $F=ma$; il lavoro di un momento esterno si ritrova come variazione di energia cinetica di rotazione.

## Come si usa
Esercizio (`Gravitazione_elesttrostatica_Lezione2.pdf` p. 38): un sistema di due masse su una sbarra urta un perno e ruota; poi un momento frenante $M=0.6$ N m lo arresta, e il tempo di arresto si ricava da $M=I\alpha$.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 27/04 e 4/05/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione2.pdf` (pp. 16-21); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione4.pdf` (pp. 11-15).
- **Meccanica** (triennale): con terna fissa e terna solidale che hanno il terzo asse in comune ($\vec\omega=\dot\psi\hat\imath_3$) e vincolo ideale bilatero ($\vec M^{(v)}_\Omega\cdot\hat\imath_3=0$), la seconda equazione cardinale proiettata sull'asse dà $I_3\ddot\psi=M^a_{\Omega3}(\psi,\dot\psi,t)$ (7.60). Se il momento dipende solo da $\psi$ c'è l'integrale primo $\frac12I_3\dot\psi^2-U(\psi)=E$. Fonte: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (p. 77, numerazione stampata).

## Prerequisiti
- [[Momento d'inerzia]]: Lz = I ω
- [[Teorema del momento angolare]]: derivata di L uguale al momento esterno

## Porta a
- [[Moto di puro rotolamento]]: rotazione attorno al CM
- [[Pendolo composto]]: M = I α attorno al perno
- [[Impulso angolare]]: ΔL = I ω

## Collegati
- Nessuno.
