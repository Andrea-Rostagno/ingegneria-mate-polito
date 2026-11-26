---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["principal value", "v.p. 1/x", "valore principale di Cauchy", "Cauchy principal value", "vp 1/x"]
tags: [competenza, area/analisi]
---

# Valore principale di 1 su x

> La distribuzione $\mathrm{v.p.}\frac1x$ dà senso a "$\int\frac{\varphi(x)}{x}dx$" togliendo un intorno simmetrico dell'origine: è la derivata di $\ln|x|$ e la trasformata di Fourier (a meno di costanti) del segno.

## Definizione / enunciato
$$\Big\langle\mathrm{v.p.}\frac1x,\varphi\Big\rangle=\lim_{\epsilon\to0^+}\Big[\int_{-\infty}^{-\epsilon}\frac{\varphi(x)}{x}dx+\int_{\epsilon}^{+\infty}\frac{\varphi(x)}{x}dx\Big],\qquad\varphi\in\mathcal D.$$
Nasce derivando la distribuzione regolare $T_{\ln|x|}$: $T_{\ln|x|}'=\mathrm{v.p.}\frac1x$. Non è regolare, perché $\frac1x$ non è localmente integrabile in $0$.

## Formule chiave
- $x\cdot\mathrm{v.p.}\frac1x=T_1$ (4.19).
- È dispari (§5.6 d.).
- Trasformate (§5.6, (5.52)-(5.54)):
$$\mathcal F\Big(\mathrm{v.p.}\frac1t\Big)(\nu)=-i\pi\,\mathrm{sign}(\nu),\qquad \mathcal F(\mathrm{sign}\,t)(\nu)=\frac1{i\pi}\,\mathrm{v.p.}\frac1\nu,\qquad \mathcal F(H)(\nu)=\frac1{2\pi i}\,\mathrm{v.p.}\frac1\nu+\frac12\delta_0.$$

## Intuizione
Le due metà di $\int\frac{\varphi}{x}$ divergono separatamente con segni opposti; tagliando in modo simmetrico i contributi infiniti si cancellano (come nel valore principale degli integrali impropri).

## Come si usa
Esercizio 4.1: per ogni $a>0$ si ha la scrittura alternativa $\langle\mathrm{v.p.}\frac1x,\varphi\rangle=\int_{-\infty}^{-a}\frac{\varphi}{x}dx+\int_a^{+\infty}\frac{\varphi}{x}dx+\int_{-a}^{a}\frac{\varphi(x)-\varphi(0)}{x}dx$. Per trovarne la trasformata, il testo usa $t\cdot\mathrm{v.p.}\frac1t=1$, trasforma ($\frac{-1}{2\pi i}\frac{d}{d\nu}\mathcal F(\mathrm{v.p.}\frac1t)=\delta_0$) e sceglie la costante usando la disparità.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.5 (derivata di $\ln|x|$, Esempio con (4.19)) e §5.6 "Calcolo di trasformate". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (p. 22 del PDF); `Capitolo 5 (3).pdf` (§5.6); tavola in `formulario_analisi.pdf`.

## Prerequisiti
- [[Distribuzione (funzione generalizzata)]]: distribuzione non regolare

## Porta a
- Nessuno.

## Collegati
- [[Integrale improprio]]: limite simmetrico attorno a $0$
- [[Trasformata di Fourier di distribuzioni temperate]]: $\mathcal F(\mathrm{v.p.}\frac1t)=-i\pi\,\mathrm{sign}$
