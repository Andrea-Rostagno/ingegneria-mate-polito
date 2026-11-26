---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["lines of curvature", "linea di curvatura", "line of curvature"]
tags: [competenza, area/algebra-geometria]
---

# Linee di curvatura

> Sono le curve su una superficie che in ogni punto vanno lungo una direzione principale. Si trovano come curve integrali dei campi di autovettori dell'operatore forma.

## Definizione / enunciato
Una **linea di curvatura** è una curva $\gamma$ sulla superficie la cui retta tangente è in ogni punto una direzione principale, cioè $\gamma'(t)$ è autovettore di $-N_*$ in $\gamma(t)$ per ogni $t$.

Scrivendo $\gamma(t)=P(\alpha(t))$ con $\alpha(t)=(u(t),v(t))$:
$$\gamma'=P_*(\alpha')=u'P_u+v'P_v .$$
La condizione $-N_*(\gamma')=\lambda\gamma'$ dà un sistema di EDO in $u(t),v(t)$.

## Formule chiave
Se le direzioni principali sono generate dai campi $aP_u+bP_v$, le linee di curvatura sono le soluzioni di
$$u'=a(u,v),\qquad v'=b(u,v),$$
cioè le curve integrali di $a\partial_u+b\partial_v$, trasportate su $S$ con $P$.

## Intuizione
Sono il "reticolo naturale" della superficie: lungo esse la normale ruota solo nel piano dello spostamento. Sul cilindro sono le circonferenze e le generatrici.

## Come si usa
Esempi della lezione:
- **Cilindro** (direzioni $P_u$ e $P_v$):
  - con $u'=1,v'=0$ si ottengono le circonferenze $\gamma=(r\cos(t+K_1),r\sin(t+K_1),K_2)$;
  - con $u'=0,v'=1$ le generatrici $(r\cos K_1,r\sin K_1,t+K_2)$.
- **Paraboloide** $z=x^2+y^2$:
  - con $\gamma'=uP_u+vP_v$ si ottengono i meridiani $(u_0e^t,v_0e^t,(u_0^2+v_0^2)e^{2t})$;
  - con $\gamma'=vP_u-uP_v$ i paralleli $(u_0\cos t+v_0\sin t,\ v_0\cos t-u_0\sin t,\ u_0^2+v_0^2)$.
- Esempio impostato come esercizio d'esame (L23 pp. 24-25): sulla superficie $\alpha+\frac1KN+vB$, la curva $s\mapsto P(s,f(s))$ è linea di curvatura per $f(s)=\frac1K\int\tau(s)\,ds$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione21_GD.pdf` (pp. 8, 17-20);
  - `triennale/ANNO 2/geometria differenziale/Lezione23_GD.pdf` (pp. 15-17, 24-25).

## Prerequisiti
- [[Curvature principali]]: direzioni principali = autovettori di -N_*
- [[Curve integrali di un campo vettoriale]]: le linee sono curve integrali dei campi principali

## Porta a
- Nessuno.

## Collegati
- Nessuno.
