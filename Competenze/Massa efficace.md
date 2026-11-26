---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["effective mass", "m*", "approssimazione parabolica della banda", "parabolic band approximation"]
tags: [competenza, area/fisica]
---

# Massa efficace

> Vicino a un minimo o massimo di banda $E(k)$ è una parabola, e l'elettrone si comporta come libero ma con una massa fittizia $m^*$ fissata dalla curvatura della banda.

## Definizione / enunciato
Ogni banda si approssima con una parabola: è uno sviluppo in serie di $E(k_x)$ troncato al secondo ordine attorno a un punto di minimo o di massimo. L'approssimazione è perfetta al centro della zona di Brillouin e peggiora verso il bordo zona. Confrontando con l'elettrone libero, $E=\hbar^2k_x^2/2m$, si definisce la **massa efficace**: la massa che dovrebbero avere gli elettroni di quella banda per essere trattati come liberi.

## Formule chiave
$$E(k_x)=E(0)+\left[\frac{\partial E(k_x)}{\partial k_x}\right]_0k_x+\left[\frac12\frac{\partial^2E(k_x)}{\partial k_x^2}\right]_0k_x^2+\dots$$
Con $E(0)=0$ e troncando al secondo termine:
$$E(k_x)\approx\left[\frac12\frac{\partial^2E(k_x)}{\partial k_x^2}\right]_0k_x^2=\frac{\hbar^2k_x^2}{2m^*},\qquad m^*=\frac{\hbar^2}{\left[\dfrac{\partial^2E(k_x)}{\partial k_x^2}\right]_0}$$

## Intuizione
Il potenziale periodico del reticolo non sparisce: viene "assorbito" nella curvatura della banda. Una banda molto curva (stretta in $k$) dà una massa piccola e portatori mobili; una banda piatta dà una massa grande. Vicino a un massimo la curvatura è negativa: è la situazione della banda di valenza.

## Come si usa
Si sostituisce $m$ con $m^*$ in tutte le formule per elettroni liberi: densità degli stati in banda, velocità e conducibilità degli elettroni di conduzione di un metallo (`69&70. LEZIONE.pdf` pp. 12-13). Nei semiconduttori la slide avverte che le masse nelle concentrazioni di portatori sono masse efficaci, diverse per banda di conduzione ($m^*_{BC}$) e di valenza ($m^*_{BV}$).

## Nei corsi
- **Fisica 2** (triennale): lezioni 63-66 ("Approssimazione parabolica delle bande e massa efficace"), riprese nelle 67-68 e 69-70. Fonti: `triennale/ANNO 2/fisica 2/lezioni/63&64&65&66. LEZIONE.pdf` (pp. 47-54); `triennale/ANNO 2/fisica 2/lezioni/67&68. LEZIONE.pdf` (pp. 7-8).

## Prerequisiti
- [[Zone di Brillouin]]: sviluppo di E(k) vicino a un estremo di banda
- [[Formula di Taylor in più variabili]]: sviluppo al secondo ordine di E(k)

## Porta a
- [[Densità degli stati]]: g(E) con m* vicino al bordo di banda
- [[Semiconduttore intrinseco]]: masse efficaci di elettroni e lacune

## Collegati
- Nessuno.
