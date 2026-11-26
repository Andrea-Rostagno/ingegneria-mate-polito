---
tipo: competenza
area: fisica
corsi: [Fisica 1, Fisica 2]
livello: [triennale]
aliases: ["Gauss's law", "superficie gaussiana", "angolo solido", "teorema di Gauss per il campo gravitazionale", "legge di Gauss", "legge di Gauss in forma differenziale"]
tags: [competenza, area/fisica]
---

# Teorema di Gauss del flusso

> Il flusso del campo elettrico attraverso una superficie chiusa è uguale alla carica totale racchiusa divisa per $\varepsilon_0$; vale lo stesso per il campo gravitazionale con le masse.

## Definizione / enunciato
**Flusso:** $\Phi=\vec E\cdot\vec\Sigma=\vec E\cdot\hat n\,\Sigma$, con $\hat n$ normale alla superficie (uscente se chiusa); intuitivamente è il numero di linee di forza che attraversano la superficie.
**Teorema:** per ogni superficie chiusa, comunque siano distribuite le cariche all'interno,
$$\Phi_{TOT}=\oint\vec E\cdot d\vec S=\frac{\sum_iQ_i}{\varepsilon_0}.$$
La dimostrazione usa i coni infinitesimi (angolo solido) e la dipendenza $1/r^2$; le cariche esterne danno contributi che si annullano a coppie.
Campo gravitazionale: sostituendo cariche con masse e la costante elettrica con quella gravitazionale, $\Phi_{TOT}=4\pi G\sum_kM_k^{(I)}$.

## Formule chiave
$$\Phi_{TOT}=\frac{Q+Q'}{\varepsilon_0}=\frac{\sum_{i=1}^NQ_i}{\varepsilon_0},\qquad \Phi_{TOT}=4\pi G\sum_kM_k^{(I)}$$

## Intuizione
Le linee di forza nascono e muoiono solo sulle cariche: tutte quelle prodotte all'interno attraversano la superficie chiusa, quelle di cariche esterne entrano ed escono.

## Come si usa
Si sceglie una superficie gaussiana che rispetti la simmetria (sfera, cilindro, "scatola" a cavallo di un piano) per ricavare il campo di distribuzioni estese.

## Nei corsi
- **Fisica 1** (triennale): lezioni dell'1 e 6/06/2022; dimostrazione richiesta all'orale. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Elettrostatica_gravitazione/Gravitazione_elettrostatica_Lezione1.pdf` (pp. 42-62); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Elettrostatica_gravitazione/Gravitazione_elesttrostatica_Lezione2.pdf` (p. 21).
- **Fisica 2** (triennale): "Legge di Gauss", prima equazione di Maxwell. Dimostrazione con l'angolo solido $d\Omega=\frac{\cos\theta\,dS}{r^2}$: carica interna $\oint\vec E\cdot\hat u_n dS=\frac{q}{4\pi\varepsilon_0}\oint d\Omega=\frac{q}{\varepsilon_0}$, carica esterna flusso nullo; forma differenziale $\mathrm{div}\vec E=\nabla\cdot\vec E=\frac{\rho}{\varepsilon_0}$ ottenuta col teorema della divergenza. Nei dielettrici $\oint\vec E_D\cdot d\vec S=\frac{q_{LIB}}{\varepsilon_0\varepsilon_r}$: campo smorzato di $\varepsilon_r$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/6. LEZIONE.pdf` (pp. 26-40); `triennale/ANNO 2/fisica 2/lezioni/8.  LEZIONE.pdf` (pp. 17-18).

## Prerequisiti
- [[Campo elettrostatico]]: campo con dipendenza 1/r²
- [[Campo gravitazionale]]: versione gravitazionale del teorema
- [[Prodotto scalare]]: il flusso è E·n dS
- [[Flusso di un campo vettoriale]]: il flusso è l'integrale di E·n su S

## Porta a
- [[Campi di distribuzioni simmetriche]]: si applica con superfici adattate alla simmetria
- [[Equazione di Poisson]]: si parte dalla forma differenziale div E = ρ/ε0
- [[Conduttori in equilibrio elettrostatico]]: campo interno nullo implica carica solo in superficie
- [[Vettore spostamento elettrico]]: il flusso di D conta solo le cariche libere
- [[Equazione di continuità della carica]]: la carica interna si scrive come flusso di ε0E
- [[Equazioni di Maxwell]]: prima equazione

## Collegati
- [[Teorema della divergenza]]: versione matematica, flusso uscente = integrale della divergenza (Analisi 2)
