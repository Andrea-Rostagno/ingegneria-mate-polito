---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["complex line integral", "contour integral", "integrale di linea in campo complesso", "integrale lungo un cammino", "cammino", "arco di Jordan", "stima ML"]
tags: [competenza, area/analisi]
---

# Integrale di linea complesso

> L'integrale di una funzione complessa lungo un cammino $z(t)$, $t\in[a,b]$: si riduce a un integrale in $dt$ di $f(z(t))z'(t)$ e dipende in generale dal cammino, non solo dagli estremi.

## Definizione / enunciato
Sia $C$ un cammino (curva regolare a tratti) con parametrizzazione $z=z(t)$, $a\le t\le b$, e $f=u+iv$ continua (a tratti) su $C$.
**Definizione 2.17.**
$$\int_C f(z)\,dz=\int_a^b f(z(t))\,z'(t)\,dt\quad(2.15),$$
che si riscrive $\int_C f\,dz=\int_C(u\,dx-v\,dy)+i\int_C(v\,dx+u\,dy)$ (2.16).
Un arco $[a,b]\to\mathbb C$ è **chiuso** se $z(a)=z(b)$; **chiuso e semplice** (di Jordan) se quello è l'unico punto doppio.

## Formule chiave
Proposizione 2.18: linearità; $\int_{-C}f\,dz=-\int_Cf\,dz$; additività rispetto alla concatenazione di cammini; e la stima
$$\Big|\int_C f(z)\,dz\Big|\le ML,\qquad |f|\le M \text{ su } C,\ L=\text{lunghezza di }C\quad(2.17).$$
Integrale fondamentale (Esempio 2.20), $C$ circonferenza di centro $z_0$ percorsa in senso antiorario:
$$\oint_C (z-z_0)^n\,dz=\begin{cases}0 & n\ne-1\\ 2\pi i & n=-1\end{cases}\quad(2.18).$$

## Intuizione
È l'integrale di linea di due forme differenziali reali messe insieme. Il valore $2\pi i$ per $n=-1$ è il germe di formula di Cauchy, residui e serie di Laurent.

## Come si usa
Esempi 2.19: $\int_C\bar z\,dz$ vale $10$ sul segmento $z=2t+it$, $t\in[0,2]$, ma $10+8i$ sulla spezzata $0\to4\to4+2i$: dipende dal cammino. Invece $\int_C e^z\,dz=e^{4+2i}-1$ su entrambi, perché $e^z$ è intera.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.4 "Richiami su archi e cammini" e §2.5 "Integrali di linea". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 9-17 del PDF).

## Prerequisiti
- [[Topologia del piano complesso]]: cammini in domini del piano
- [[Integrale di Riemann]]: si riduce a integrali in una variabile reale

## Porta a
- [[Teorema di Cauchy-Goursat]]: integrale nullo per funzioni analitiche
- [[Formula integrale di Cauchy]]: valori di $f$ come integrali sul bordo

## Collegati
- [[Integrale di linea]]: (di un campo vettoriale) la (2.16) è un integrale di linea di forme differenziali reali
