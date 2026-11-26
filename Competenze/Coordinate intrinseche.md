---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["intrinsic coordinates", "ascissa curvilinea", "cerchio osculatore", "accelerazione tangenziale", "accelerazione normale", "accelerazione centripeta", "raggio di curvatura"]
tags: [competenza, area/fisica]
---

# Coordinate intrinseche

> Sistema di coordinate legato alla traiettoria nota: ascissa curvilinea $s(t)$, versore tangente e versore normale; l'accelerazione si divide in tangenziale e normale (centripeta).

## Definizione / enunciato
$s(t)$ è la distanza, misurata lungo la traiettoria, da un'origine fissa (legge oraria); $\rho(t)$ è il raggio del cerchio osculatore; $\hat\tau$ è tangente e $\hat n$ è perpendicolare, positivo verso la concavità. Da $\vec v=\dot s\,\hat\tau$ la velocità è tangente. Con due triangoli simili si mostra che $|d\hat\tau/dt|=\dot s/\rho$, diretto lungo $\hat n$.

## Formule chiave
$$\vec v=\dot s(t)\,\hat\tau,\qquad \vec a=\ddot s(t)\,\hat\tau+\frac{\dot s^2(t)}{\rho(t)}\,\hat n=a_T\hat u_T+a_N\hat u_N$$

## Intuizione
La componente tangenziale cambia il modulo della velocità, quella normale ne cambia la direzione; in una curva percorsa a velocità costante resta solo $v^2/\rho$.

## Come si usa
È il sistema naturale per moto circolare, pendolo e curve: lungo $\hat n$ la risultante delle forze deve valere $mv^2/\rho$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 9/03/2022; all'orale si chiede la dimostrazione. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione2.pdf` (pp. 31-39).
- **Meccanica** (triennale): ascissa curvilinea, versore tangente, curvatura e terna intrinseca (tangente, normale, binormale), con la scomposizione dell'accelerazione in parte tangente e normale (eq. 2.18). Nel manoscritto c'è un richiamo di geometria differenziale delle curve. In dinamica servono per il punto vincolato a una curva scabra, $m\ddot s=F_t-f_d\frac{\dot s}{|\dot s|}\sqrt{(\frac{m\dot s^2}{\rho}-F_n)^2+F_b^2}$ (7.25). Fonti: `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 13-15, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 66-68); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezioni 2-3 del 07 e 09/03/2017, pp. 13-25).

## Prerequisiti
- [[Velocità e accelerazione]]: decomposte lungo la traiettoria nota
- [[Formule di Poisson]]: derivata del versore tangente

## Porta a
- [[Moto circolare]]: accelerazione tangenziale e centripeta
- [[Forza centripeta]]: accelerazione normale v²/R

## Collegati
- [[Reazione vincolare]]: punto su una curva scabra, reazione scomposta nella terna intrinseca (Meccanica, eqq. 7.24-7.26)
