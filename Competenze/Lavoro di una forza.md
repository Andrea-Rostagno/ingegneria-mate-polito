---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["work", "lavoro", "lavoro motore", "lavoro resistente", "potenza", "power", "joule", "watt", "integrale di linea della forza"]
tags: [competenza, area/fisica]
---

# Lavoro di una forza

> Grandezza scalare che misura l'effetto di una forza lungo uno spostamento: prodotto scalare tra forza e spostamento infinitesimo, integrato lungo la traiettoria.

## Definizione / enunciato
Per uno spostamento infinitesimo $d\vec r$, $dW=\vec F\cdot d\vec r$. Lungo una curva $\gamma$ da A a B:
$$W_{AB}=\int_{A,\gamma}^{B}\vec F\cdot d\vec r=\int_{A,\gamma}^{B}(F_x\,dx+F_y\,dy+F_z\,dz).$$
Proprietà: additivo rispetto alle forze e rispetto al cammino. $W>0$ lavoro motore, $W<0$ lavoro resistente; una forza perpendicolare allo spostamento non compie lavoro.

## Formule chiave
$$[W]=[M][L]^2[T]^{-2},\ 1\ \mathrm J=1\ \mathrm N\cdot1\ \mathrm m,\qquad P=\frac{dW}{dt}=\vec F\cdot\vec v=F_Tv,\qquad P_m=\frac{W}{t},\ 1\ \mathrm W=1\ \mathrm{J/s}$$

## Intuizione
Conta solo la componente della forza lungo lo spostamento: la normale e la forza centripeta in un moto circolare uniforme non fanno lavoro.

## Come si usa
- Esempio (p. 20): cassa di 15 kg trascinata a velocità costante lungo una rampa liscia per $d=5.7$ m con dislivello $h=2.5$ m: $T=mg\,\mathrm{sen}\,\theta$ e $L=mg\,\mathrm{sen}\,\theta\,d=mgh=367.8$ J.
- Esempio (p. 24): forza di 8 N inclinata di $60^\circ$ su un corpo di 10 kg che si sposta di 200 m: $L=800$ J e potenza media $P=25.3$ W.

## Nei corsi
- **Fisica 1** (triennale): lezione del 21/03/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_Puntomateriale_Lezione2.pdf` (pp. 10-24).
- **Meccanica** (triennale): il lavoro elementare $dL=\vec F\cdot d(P-O)=F_xdx+F_ydy+F_zdz$ è trattato come forma differenziale (5.13-5.15). È esatta se esiste $f$ con $\psi_h=\partial f/\partial x_h$; condizione necessaria $\partial\psi_h/\partial x_k=\partial\psi_k/\partial x_h$, sufficiente su un dominio semplicemente connesso. Thm 5.1: se il lavoro è integrabile, la forza dipende solo dalla posizione. Lungo un cammino $L=\int_{t_1}^{t_2}\Pi(t)dt$ (5.19-5.20); con $\vec F=-\psi(P,\vec v)\vec v$, $\psi\ge0$, si ha $\Pi\le0$ (5.21). Su un corpo rigido $\Pi=\vec R\cdot\vec v_Q+\vec M_Q\cdot\vec\omega$. Fonti: `triennale/ANNO 2/Meccanica/Lect4-MechanicsLaws.pdf` (pp. 48-51, numerazione stampata).

## Prerequisiti
- [[Prodotto scalare]]: dW = F·dr
- [[Leggi di Newton]]: forze che agiscono sul punto

## Porta a
- [[Teorema dell'energia cinetica]]: lavoro della risultante
- [[Forza conservativa]]: lavoro indipendente dal cammino

## Collegati
- [[Pressione]]: il lavoro di pressione è F·dh = p dV
- [[Integrale di linea]]: il lavoro lungo un cammino è un integrale di linea
- [[Campo irrotazionale]]: condizione necessaria di esattezza di dL (Meccanica, 5.17)
- [[Insieme semplicemente connesso]]: dominio su cui la condizione diventa sufficiente (Meccanica)
