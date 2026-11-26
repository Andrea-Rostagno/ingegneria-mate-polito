---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["wavefronts and rays", "fronte d'onda", "onda piana, sferica, cilindrica", "spherical wave", "raggio", "mezzo omogeneo e isotropo", "ampiezza dell'onda sferica 1/r"]
tags: [competenza, area/fisica]
---

# Fronti d'onda e raggi

> I fronti d'onda sono le superfici a fase costante di un'onda tridimensionale; i raggi sono le curve perpendicolari ai fronti, lungo le quali l'onda si propaga.

## Definizione / enunciato
Un'onda $\xi=f(x-vt)$ non è concentrata sull'asse $x$: ha le stesse caratteristiche su tutti i piani perpendicolari a $x$. In generale si scrive $\xi=f(\vec r\cdot\vec u-vt)$, con $\vec u$ direzione di propagazione e $\Phi=(\vec r\cdot\vec u-vt)$ **fase dell'onda**; $f(\Phi)$ è la più generica onda che si propaga lungo $\vec u$ con velocità $v$, non necessariamente piana.
- **Fronti d'onda:** superfici che all'istante $t$ hanno lo stesso valore di $\Phi$ (i campi non variano su di esse).
- **Raggi:** curve tangenti a $\vec u$, che è perpendicolare ai fronti.
- Mezzo omogeneo: raggi rettilinei; non omogeneo: raggi curvi. Mezzo isotropo: i fronti si ripetono identici e paralleli (piani → piani, cilindri → cilindri, sfere → sfere); anisotropo: fronti deformati.

## Formule chiave
$$\xi=f(\vec r\cdot\vec u-vt),\qquad (\vec r\cdot\vec u-vt)=\Phi$$
Onda sferica emessa isotropicamente da una sorgente $S$, $\vec E=\vec E_0\sin(kr-\omega t)$:
$$P(r_1,t)=\left|\frac{\vec E\times\vec B}{\mu_0}\right|4\pi r^2=\frac{4\pi r^2}{c\mu_0}E_0^2\sin^2(kr-\omega t),\qquad \langle P_S\rangle=\langle P(r_1)\rangle=\frac{2\pi r^2}{c\mu_0}E_0^2$$
$$E_0^2=\frac{\langle P_S\rangle c\mu_0}{2\pi}\frac{1}{r^2}\quad\Rightarrow\quad \text{l'ampiezza di un'onda sferica decresce come }1/r$$

## Intuizione
Per un'onda sferica $\vec E$ e $\vec B$ sono tangenti alla sfera e la propagazione è radiale. La potenza istantanea che attraversa sfere diverse differisce per il ritardo di propagazione, ma la media su un periodo è la stessa a ogni $r$: poiché la superficie cresce come $r^2$, l'intensità cala come $1/r^2$ e l'ampiezza come $1/r$.

## Come si usa
Si riconosce il tipo di onda dalla forma dei fronti (piani, cilindri, sfere). Lontano dalla sorgente un piccolo tratto di fronte sferico si approssima con il piano tangente: è qui che vale il modello dell'onda piana.

## Nei corsi
- **Fisica 2** (triennale): definizione di raggi e fronti d'onda (ripresa in `37&38` pp. 17-20) e onde sferiche. A p. 18 di `34` la slide scrive $E_0\propto 1/r^2$ ma conclude che l'ampiezza decresce come $1/r$: la proporzionalità corretta per la formula sopra è $E_0^2\propto1/r^2$ (refuso segnalato). Fonti: `triennale/ANNO 2/fisica 2/lezioni/29&30. LEZIONE.pdf` (pp. 55-58); `triennale/ANNO 2/fisica 2/lezioni/34.   LEZIONE.pdf` (pp. 16-18).

## Prerequisiti
- [[Equazione delle onde]]: fase f(r·u - vt) costante sui fronti

## Porta a
- [[Principio di Huygens]]: ogni fronte d'onda genera i fronti successivi

## Collegati
- [[Vettore di Poynting]]: conservazione della potenza media su sfere di raggio diverso
