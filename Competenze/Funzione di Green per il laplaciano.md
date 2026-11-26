---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Green's function", "funzione di Green per Ω", "funzione di Green per la palla", "metodo delle immagini", "punto inverso", "correttore armonico"]
tags: [competenza, area/analisi]
---

# Funzione di Green per il laplaciano

> $G^x_\Omega=G^x-v^x$: la soluzione fondamentale corretta da una funzione armonica in modo da annullarsi sul bordo; rappresenta le soluzioni del problema di Dirichlet tramite laplaciano e dato al bordo.

## Definizione / enunciato
Sia $v^x\in C^2(\overline\Omega)$ soluzione (supposta esistente per ogni $x\in\Omega$) di
$$-\Delta_yv^x=0\ \text{in }\Omega,\qquad v^x=G^x\ \text{su }\partial\Omega.\qquad(3.17)$$
La **funzione di Green per $\Omega$ con polo in $x$** è $G^x_\Omega(y):=G^x(y)-v^x(y)$ (3.19). Proprietà: armonica in $\Omega\setminus\{x\}$; $C^2(\overline\Omega\setminus B_\rho(x))$ per $\rho$ piccolo; risolve $\Delta G^x_\Omega=\delta_x$ in $\mathcal D'(\Omega)$ (segno come scritto nella fonte, da verificare sul PDF: da (3.14) ci si aspetta $-\Delta$); $G^x_\Omega\in L^1(\Omega)$ e nulla su $\partial\Omega$; non negativa in $\Omega\setminus\{x\}$ per il principio del massimo e $\partial_\nu G^x_\Omega\le0$ su $\partial\Omega$.

## Formule chiave
Combinando la formula di rappresentazione con (3.17)-(3.19):
$$u(x)=-\int_\Omega G^x_\Omega(y)\Delta u(y)\,dy-\int_{\partial\Omega}\frac{\partial G^x_\Omega}{\partial\nu}(y)u(y)\,d\sigma(y).\qquad(3.20)$$
**Palla $B_R$** ($n>2$): si cerca $v^x(y)=\frac1{(n-2)\sigma_{n-1}}\frac{\gamma_x^{n-2}}{|y-x^*|^{n-2}}$ con $|y-x^*|=\gamma_x|y-x|$ su $\partial B_R$ (problema di Apollonio): $x^*=R^2\frac{x}{|x|^2}$, $\gamma_x=R/|x|$, e
$$G^x_{B_R}(y)=\frac1{(n-2)\sigma_{n-1}}\Big[\frac1{|y-x|^{n-2}}-\Big(\frac R{|x|}\Big)^{n-2}\frac1{|y-x^*|^{n-2}}\Big];\qquad(3.23a)$$
la fonte la riscrive con $[\,|x|^2|y|^2-2R^2\langle x,y\rangle+R^4]^{(n-2)/2}$ al denominatore (scritto $|x^2|\cdot|y^2|$, da verificare sul PDF), forma valida anche per $x=0$. Per $n=2$:
$$G^x_{B_R}(y)=\frac1{2\pi}\Big[\log\frac1{|y-x|}-\frac12\log\frac{R^2}{|x|^2|y|^2-2R^2\langle x,y\rangle+R^4}\Big].\qquad(3.23b)$$

## Intuizione
Metodo delle immagini: si mette una "carica" fittizia nel punto inverso $x^*$ fuori dalla palla, con intensità scelta in modo che i due potenziali si compensino esattamente sulla sfera. Dalle formule si vede la simmetria $G^x_{B_R}(y)=G^y_{B_R}(x)$.

## Come si usa
Per rappresentare la soluzione del problema di Poisson con dato di Dirichlet serve $G^x_\Omega$; esplicitamente è nota per la palla (e, come esercizio negli appunti, per l'anello). La sua derivata normale sulla sfera è il nucleo di Poisson.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.4 (3.17)-(3.20) e §3.4.1 "Costruzione della funzione di Green per la palla $B_R$". Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 26-28).

## Prerequisiti
- [[Formula di rappresentazione di Green]]: si parte da (3.16) e si elimina $\partial_\nu u$
- [[Principio del massimo per le funzioni armoniche]]: non negatività di $G^x_\Omega$

## Porta a
- [[Nucleo di Poisson per la palla]]: derivata normale di $G^x_{B_R}$

## Collegati
- [[Criterio delle visite attese]]: la "funzione di Green" di una catena di Markov conta le visite attese, analogo discreto
