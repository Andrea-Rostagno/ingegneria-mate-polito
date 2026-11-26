---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["Stokes' theorem", "teorema del rotore", "flusso del rotore", "Kelvin-Stokes theorem", "orientazione compatibile del bordo"]
tags: [competenza, area/analisi]
---

# Teorema di Stokes

> Il flusso del rotore di $F$ attraverso una superficie orientata è la circuitazione di $F$ lungo il suo bordo, orientato in modo compatibile.

## Definizione / enunciato
**Teorema di Stokes.** Se $\Sigma$ è una superficie regolare orientata con bordo la curva $\gamma$ e $F$ è un campo $C^1$ in un intorno di $\Sigma$, allora
$$\int_\Sigma(\mathrm{Rot}\,F)\cdot\hat N\,d\sigma=\oint_\gamma F\cdot dl,$$
con $\gamma$ orientata in modo compatibile: camminando sul bordo con $\hat N$ che va dai piedi alla testa, la superficie resta a sinistra.

## Formule chiave
Se $\Sigma$ è il grafico di $g$ orientato verso l'alto, il bordo va percorso in verso antiorario guardando dall'alto. Green è il caso piano: con $F=(F_1(x,y),F_2(x,y),0)$ e $\hat N=\hat k$ si ha $(\mathrm{Rot}\,F)\cdot\hat N=\partial_xF_2-\partial_yF_1$.

## Intuizione
Il flusso del rotore dipende solo dal bordo: deformando $\Sigma$ come se fosse di gomma, tenendo fisso il bordo e facendo seguire la normale, il flusso non cambia. Se la superficie è chiusa (frontiera di un solido) il bordo è vuoto e il flusso del rotore è nullo, in accordo con Gauss e $\mathrm{div}(\mathrm{Rot}\,H)=0$.

## Come si usa
Esercizio della lezione: $F=(x+z,\ 2x+y,\ z+y)$, $\Sigma=\{z=x^2+y^2\le9\}$ verso l'alto; $\mathrm{Rot}\,F=(1,1,2)$.
1. Direttamente: $\iint_\Omega(1,1,2)\cdot(-2x,-2y,1)=2\,\mathrm{Area}(\Omega)=18\pi$.
2. Con Stokes su $\gamma(t)=(3\cos t,3\sin t,9)$: $18\int_0^{2\pi}\cos^2t\,dt=18\pi$.
3. Sul "coperchio" (cerchio a quota 9 con $\hat N=\hat k$): $2\cdot\mathrm{Area}=18\pi$.

## Nei corsi
- **Analisi 2** (triennale): enunciato il 21/11, esercizi e deformazione il 23/11/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 15 int superficiali e Stokes.pdf` (pp. 14-16); `triennale/ANNO 2/analisi 2/AII 16 2022 stokes e gauss.pdf` (pp. 1-9).

## Prerequisiti
- [[Integrale di linea]]: circuitazione lungo il bordo
- [[Teorema di Green]]: Green è Stokes nel piano
- [[Rotore]]: si integra il flusso del rotore
- [[Flusso di un campo vettoriale]]: flusso del rotore

## Porta a
- [[Legge di Ampère]]: dalla forma differenziale a quella integrale
- [[Legge di Faraday-Henry]]: dalla forma integrale a quella differenziale

## Collegati
- [[Teorema della divergenza]]: flusso di un rotore su una superficie chiusa è nullo
