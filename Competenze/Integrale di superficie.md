---
tipo: competenza
area: analisi
corsi: [Analisi 2, Geometria differenziale]
livello: [triennale]
aliases: ["surface integral", "integrali su superfici", "elemento d'area", "dσ", "area di una superficie", "integrale superficiale"]
tags: [competenza, area/analisi]
---

# Integrale di superficie

> L'integrale di una funzione su una superficie: si sommano i valori di $f$ per l'area delle "mattonelle", che in parametri è $\|P_u\wedge P_v\|\,du\,dv$.

## Definizione / enunciato
Dati $S:\Omega\to\mathbb R^3$ (con immagine $\Sigma$) e $f(x,y,z)$ continua e limitata su $\Sigma$:
$$\iint_\Sigma f\,d\sigma\overset{def}{=}\iint_\Omega f(X(u,v),Y(u,v),Z(u,v))\,\|P_u\wedge P_v\|\,du\,dv.$$
$\|P_u\wedge P_v\|\,du\,dv$ è l'area della mattonella sulla superficie, a meno di $o(\Delta u\,\Delta v)$.

## Formule chiave
- $\|P_u\wedge P_v\|=\sqrt{\det(J^tJ)}$, con $J$ jacobiana $3\times2$ di $S$.
- Con $f=1$: $\mathrm{Area}(\Sigma)=\iint_\Omega\|P_u\wedge P_v\|\,du\,dv$.
- Su un grafico $z=g(x,y)$: $\iint_\Sigma f\,d\sigma=\iint_\Omega f(x,y,g(x,y))\sqrt{1+\|\nabla g\|^2}\,dx\,dy$.

## Intuizione
Stessa idea degli integrali doppi: si divide $\Sigma$ in mattonelle, si campiona $f$, si moltiplica per l'area e si passa al limite facendo tendere a zero i diametri.

## Come si usa
Esempi della lezione:
- area della sfera di raggio $R$: $\int_0^{2\pi}\!\int_0^\pi R^2\sin\varphi\,d\varphi\,d\theta=4\pi R^2$;
- baricentro dell'emisfero nord: $\iint_\Sigma z\,d\sigma=\pi R^3$ e $\mathrm{Area}=2\pi R^2$, quindi $\bar z=\frac R2$;
- l'area sopra quota $\frac R2$ ($\varphi\in[0,\frac\pi3]$) vale $\pi R^2$, come quella sotto.

## Nei corsi
- **Analisi 2** (triennale): definizione il 16/11, esempi il 21/11/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 14 2022 superfici e integrali.pdf` (pp. 13-15); `triennale/ANNO 2/analisi 2/AII 15 int superficiali e Stokes.pdf` (pp. 1-5, 11).
- **Geometria differenziale** (triennale): l'elemento d'area è una 2-forma.
  - $\|P_u\times P_v\|$ non è invariante: per un cambio di parametri $Q_{\tilde u}\times Q_{\tilde v}=\det(J)\,P_u\times P_v$.
  - È "quasi invariante" (a meno del segno di $\det J$) la 2-forma $\|P_u\times P_v\|\,du\wedge dv$, detta elemento d'area infinitesimo.
  - **Proposizione (dimostrata per conto diretto):** $\|P_u\times P_v\|=\sqrt{EG-F^2}=\sqrt{\det g_S}$.
  - **Integrale:** $\int_Sf=\iint_\Omega f(P(u,v))\|P_u\times P_v\|\,du\,dv$, con $P$ iniettiva sull'interno. Se serve si usano più parametrizzazioni con intersezioni di misura nulla.
  - **Esempio:** l'area del toro è $4\pi^2Rr$, da $\sqrt{\det g}=r(R+r\cos u)$.
  - Fonti: `triennale/ANNO 2/geometria differenziale/Lezione25_GD.pdf` (pp. 18-23); `triennale/ANNO 2/geometria differenziale/Lezione27_GD.pdf` (pp. 1-2, 14).

## Prerequisiti
- [[Integrale doppio]]: stessa idea delle mattonelle
- [[Superficie parametrica]]: elemento d'area ||P_u ∧ P_v|| du dv
- [[Prodotto wedge]]: l'elemento d'area è la 2-forma ||P_u × P_v|| du∧dv (Geometria differenziale)
- [[Prima forma fondamentale]]: ||P_u × P_v|| = √(EG − F²) (Geometria differenziale)

## Porta a
- [[Flusso di un campo vettoriale]]: flusso come integrale di superficie
- [[Teorema di Gauss-Bonnet]]: integrale della curvatura gaussiana (Geometria differenziale)

## Collegati
- [[Matrice jacobiana]]: ||P_u ∧ P_v|| = sqrt(det(J^t J))
- [[Centro di massa]]: baricentro di una superficie
