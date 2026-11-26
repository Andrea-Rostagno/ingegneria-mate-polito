---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["mean value property for the heat equation", "palla di calore", "heat ball", "formula della media per il calore"]
tags: [competenza, area/analisi]
---

# Proprietà di media per l'equazione del calore

> Una soluzione dell'equazione del calore omogenea, in un punto $(x,t)$, è una media pesata dei suoi valori su una "palla di calore", insieme di livello della soluzione fondamentale che sta nel passato di $(x,t)$.

## Definizione / enunciato
Dato $\Omega\subset\mathbb R^n$ aperto e $T>0$, il **cilindro parabolico** è $\Omega_T:=\Omega\times(0,T]$. La **palla di calore** di raggio $r>0$ è
$$E(x,t;r):=\Big\{(y,s)\in\mathbb R^{n+1}:\ s\le t,\ U(x-y,t-s)\ge\frac1{r^n}\Big\}.\qquad(6.22)$$
**Teorema 6.4.1.** Sia $u:\Omega_T\to\mathbb R$ di classe $C^2$ in spazio e $C^1$ in tempo, soluzione di $\partial_tu-\Delta_xu=0$. Allora
$$u(x,t)=\frac1{4r^n}\iint_{E(x,t;r)}u(y,s)\,\frac{\|x-y\|^2}{(t-s)^2}\,dy\,ds\qquad(6.23)$$
per ogni $E(x,t;r)\subset\Omega_T$.

## Formule chiave
La frontiera $\partial E(x,t;r)$ è un insieme di livello di $U(x-y,t-s)$; $E$ ha forma ovale e il punto $(x,t)$ sta su $\partial E$, "in alto". Il peso $\frac{\|x-y\|^2}{(t-s)^2}$ sostituisce la misura uniforme della media armonica.

## Intuizione
Per le armoniche la media si fa su palle, che sono sottografici della soluzione fondamentale del laplaciano; per il calore si usano i sottolivelli di $U$. Poiché spazio e tempo scalano diversamente ($\|x\|^2\sim t$) e l'informazione viaggia dal passato al futuro, la "sfera" è deformata e tutta contenuta nei tempi $s\le t$.

## Come si usa
È l'analogo parabolico della proprietà di media delle armoniche e, come quella, porta al principio del massimo forte per il calore (dimostrazione rinviata a Evans §2.3.3). Negli appunti la dimostrazione di (6.23) non è svolta: rinvio a Evans §2.3.2, Teorema 3.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §6.4.1 "Proprietà di media" (Lezione 17), enunciato del Teor. 6.4.1 con rinvio a Evans §2.3.2 Teor. 3 (p. 52). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 66-67).

## Prerequisiti
- [[Soluzione fondamentale dell'equazione del calore]]: la palla di calore è un sottolivello di $U$

## Porta a
- [[Principio del massimo per l'equazione del calore]]: la media dà la forma forte

## Collegati
- [[Proprietà di media delle funzioni armoniche]]: analogo ellittico su palle e sfere
