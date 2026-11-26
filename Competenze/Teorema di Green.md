---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["Green's theorem", "formula di Green", "Stokes nel piano", "circuitazione lungo la frontiera", "area con una circuitazione", "teorema di Gauss-Green nel piano"]
tags: [competenza, area/analisi]
---

# Teorema di Green

> La circuitazione di un campo piano lungo il bordo di un dominio, percorso con il dominio a sinistra, è l'integrale doppio del rotore $\partial_xF_2-\partial_yF_1$.

## Definizione / enunciato
**Teorema.** Sia $\gamma:[a,b]\to\mathbb R^2$ una curva $C^1$ a tratti, chiusa e semplice, $\Omega$ la parte di piano che delimita, e $F=(F_1,F_2)$ continuo in $\bar\Omega$ e $C^1(\Omega)$. Allora
$$\oint_\gamma F\cdot dl=\iint_\Omega\Big(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\Big)dx\,dy,$$
con $\gamma$ orientata in verso antiorario ($\Omega$ a sinistra).

**Versione generale.** Se $\Omega$ è un aperto limitato la cui frontiera è fatta di $k$ curve semplici chiuse $\gamma_1,\dots,\gamma_k$, ciascuna orientata con $\Omega$ a sinistra,
$$\sum_{i=1}^k\oint_{\gamma_i}F\cdot dl=\oint_{\partial\Omega}F\cdot dl=\iint_\Omega\Big(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\Big)dx\,dy.$$

## Formule chiave
Area con una circuitazione (con $F=(0,x)$ o $F=(-y,0)$, rotore $=1$), per $\gamma(t)=(x(t),y(t))$:
$$\mathrm{Area}(\Omega)=\int_a^bx(t)\,y'(t)\,dt=-\int_a^by(t)\,x'(t)\,dt.$$

## Intuizione
Se $F$ è conservativo l'uguaglianza è $0=0$; in generale l'integrale del rotore misura la "non conservatività". Se $F$ è irrotazionale nella "ciambella" tra due curve, le due circuitazioni (con lo stesso verso) coincidono.

## Come si usa
Con $F=\big(\frac{-y}{x^2+y^2},\frac x{x^2+y^2}\big)$ (irrotazionale fuori dall'origine):
- su una curva che non racchiude l'origine la circuitazione è $0$;
- errore grave: applicare Green a un dominio che contiene l'origine, dove $F\notin C^1$. Si ritaglia un cerchietto $\tilde\gamma$ orario attorno a $(0,0)$ e la versione generale dà $\oint_{\gamma_1}=-\oint_{\tilde\gamma}=2\pi$;
- una curva che fa 3 giri antiorari attorno all'origine dà $3\cdot2\pi$.

## Nei corsi
- **Analisi 2** (triennale): enunciato il 09/11, versione generale ed esercizi il 14/11/2022; ripreso come caso particolare di Stokes e in relazione con Gauss in 2D. Fonti: `triennale/ANNO 2/analisi 2/AII 12 2022 campi cons e Green.pdf` (pp. 11-14); `triennale/ANNO 2/analisi 2/AII 13 2022 green e superfici.pdf` (pp. 1-10); `triennale/ANNO 2/analisi 2/AII 16 2022 stokes e gauss.pdf` (pp. 2-4).

## Prerequisiti
- [[Integrale doppio]]: membro destro del teorema
- [[Integrale di linea]]: circuitazione lungo la frontiera

## Porta a
- [[Teorema di Stokes]]: generalizzazione a superfici in R^3
- [[Teorema della divergenza]]: versione 2D del teorema della divergenza

## Collegati
- [[Rotore]]: R(x,y) è la terza componente del rotore
- [[Teorema di Cauchy-Goursat]]: strumento della dimostrazione
