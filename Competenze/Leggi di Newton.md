---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["Newton's laws", "principi della dinamica", "principio d'inerzia", "secondo principio della dinamica", "F = ma", "principio di azione e reazione", "terzo principio", "massa inerziale"]
tags: [competenza, area/fisica]
---

# Leggi di Newton

> I tre principi della dinamica collegano le forze (cause del moto) all'accelerazione del punto materiale in un sistema di riferimento inerziale.

## Definizione / enunciato
- **Primo principio (inerzia):** un corpo non soggetto a forze (o con risultante nulla) mantiene la sua velocità: resta in quiete o si muove di moto rettilineo uniforme. Vale nei sistemi inerziali (stelle fisse e sistemi in moto uniforme rispetto ad esse).
- **Secondo principio:** se in un sistema inerziale il punto di massa $m$ ha accelerazione $\vec a$, è soggetto alla forza $\vec F=m\vec a$; $m$ è la massa inerziale.
- **Terzo principio (azione e reazione):** se un corpo esercita una forza su un secondo, questo esercita sul primo una forza uguale in modulo e opposta.
La forza è definita operativamente (metodo statico con un dinamometro). Le forze si sommano vettorialmente: equilibrio statico se $\vec R=\sum\vec F_i=0$.

## Formule chiave
$$\vec F=m\vec a,\qquad [F]=[M][L][T]^{-2},\quad 1\ \mathrm N=1\ \mathrm{kg\,m/s^2},\qquad \vec F_{12}=-\vec F_{21},\qquad m_1a_1=m_2a_2$$

## Intuizione
L'assenza di forza non significa assenza di moto ma assenza di variazione di velocità; il corpo più massivo acquista accelerazione minore (inerzia).

## Come si usa
Esercizio (pp. 24-29): $m_1$ su un piano orizzontale liscio collegata da una fune su una puleggia a $m_2$ su un piano inclinato di $\theta$. Scrivendo $F=ma$ per ciascun corpo: $a=\frac{m_2g\,\mathrm{sen}\,\theta}{m_1+m_2}$ e $T=\frac{m_1m_2}{m_1+m_2}g\,\mathrm{sen}\,\theta$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 16/03/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_PuntoMateriale_Lezione1.pdf` (pp. 2-7, 24-30).
- **Meccanica** (triennale): capitolo "Mechanics". Contiene la classificazione delle forze (costanti, posizionali, dipendenti dalla velocità, dal tempo, generali), la massa definita attraverso le accelerazioni di due punti isolati, il principio di sovrapposizione degli effetti e quello di azione e reazione. L'equazione fondamentale è $m\vec a=\vec F(P,\vec v,t)$ (5.56). Thm 5.2 (Cauchy): la soluzione è unica se il secondo membro è lipschitziano. Senza lipschitzianità l'unicità si perde: $m\ddot x=a\sqrt[3]x$, $x(0)=\dot x(0)=0$ ammette sia $x\equiv0$ sia $x(t)=(\frac a{6m})^{3/2}t^3$ (Lect5 p. 56). Fonti: `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (pp. 46, 52-54, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Leggi della meccanica", da p. 76).

## Prerequisiti
- [[Velocità e accelerazione]]: la forza è legata all'accelerazione

## Porta a
- [[Reazione vincolare]]: il vincolo garantisce l'equilibrio delle forze
- [[Attrito radente]]: forza di contatto tra superfici
- [[Forza elastica]]: equazione del moto della massa attaccata
- [[Forza centripeta]]: F=ma lungo la normale alla traiettoria
- [[Pendolo semplice]]: componenti tangenziale e normale di F=ma
- [[Teorema dell'impulso]]: F = dp/dt generalizza F=ma
- [[Lavoro di una forza]]: forze che agiscono sul punto
- [[Teorema dell'energia cinetica]]: si sostituisce F=ma nell'integrale
- [[Teorema del momento angolare]]: si sostituisce F=ma
- [[Trasformazioni galileiane]]: valgono identiche nei sistemi inerziali
- [[Teorema del moto del centro di massa]]: le forze interne si annullano a coppie
- [[Legge di Ohm]]: moto delle cariche tra un urto e l'altro

## Collegati
- Nessuno.
