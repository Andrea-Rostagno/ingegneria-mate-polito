---
tipo: competenza
area: analisi
corsi: [Analisi 2, Geometria differenziale]
livello: [triennale]
aliases: ["line integral", "integrale curvilineo", "integrale di linea di una funzione", "integrale di linea di un campo vettoriale", "circuitazione", "lavoro di un campo lungo una curva", "integrale curvilineo di prima specie", "integrale curvilineo di seconda specie", "elemento di lunghezza", "integrale di una 1-forma"]
tags: [competenza, area/analisi]
---

# Integrale di linea

> L'integrale lungo una curva $\gamma$: di una funzione scalare (pesato con la lunghezza) oppure di un campo vettoriale (la componente tangente, cioè il lavoro).

## Definizione / enunciato
Sia $\gamma:[a,b]\to\mathbb R^n$ di classe $C^1$.
1. Per $f$ scalare continua sui punti della curva:
$$\int_\gamma f\,dl\overset{def}{=}\int_a^bf(\gamma(t))\,\|\gamma'(t)\|\,dt.$$
2. Per un campo continuo $F:\mathbb R^n\to\mathbb R^n$ (basta definito sulla curva), integrale o **lavoro** di $F$ lungo $\gamma$:
$$\int_\gamma F\cdot dl\overset{def}{=}\int_a^bF(\gamma(t))\cdot\gamma'(t)\,dt.$$
Se $\gamma$ è chiusa si scrive $\oint_\gamma F\cdot dl$ (circuitazione).

## Formule chiave
Se $\gamma'\ne0$: $\int_\gamma F\cdot dl=\int_a^b\Big(F(\gamma(t))\cdot\frac{\gamma'(t)}{\|\gamma'(t)\|}\Big)\|\gamma'(t)\|\,dt$, cioè l'integrale di tipo 1 della componente tangente. Per una riparametrizzazione $\tilde\gamma=\gamma\circ\varphi$: $\int_{\tilde\gamma}F\cdot dl=\pm\int_\gamma F\cdot dl$, con $+$ se $\varphi$ è crescente e $-$ se inverte il verso.

## Intuizione
Tipo 1: si divide la curva in tratti, si campiona $f$ e si moltiplica per la lunghezza del tratto (massa di un filo di densità $f$; con $f=1$ la lunghezza). Tipo 2: il lavoro del campo su una particella che percorre $\gamma$; non dipende dalla parametrizzazione ma dal verso.

## Come si usa
Esempio fondamentale: $F=\big(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\big)$ sulla circonferenza $\gamma(t)=(R\cos t,R\sin t)$, $t\in[0,2\pi]$:
$$\oint_\gamma F\cdot dl=\int_0^{2\pi}(\sin^2t+\cos^2t)\,dt=2\pi,$$
indipendente da $R$ (il docente cita la legge di Ampère). Con esponente 40 al denominatore il risultato sarebbe $2\pi/R^{78}$ (da verificare per esercizio).

## Nei corsi
- **Analisi 2** (triennale): lezione su coordinate sferiche e integrali di linea, riparametrizzazione nella lezione successiva. Fonti: `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 6-11); `triennale/ANNO 2/analisi 2/AII 11 2022 campi conservativi.pdf` (pp. 1-4).
- **Geometria differenziale** (triennale): costruito con le forme.
  - **Elemento di lunghezza.** È la 1-forma $\|P'(t)\|\,dt$, invariante per riparametrizzazione a meno del segno. È la "radice" del pull-back della metrica: $P^*(dx_1^2+\dots+dx_n^2)=\|P'\|^2dt\otimes dt$.
  - **Prima specie:** $\int_\gamma f\,d\ell=\int_a^bf(P(t))\|P'(t)\|dt$. Per una curva nel piano $xy$ è l'area con segno della "tenda" sotto il grafico di $f$. Esempio: $f=\frac{x^2+y}{\sqrt{4z^2+2}}$ su $(t,t^2-4,t)$, $t\in[-2,2]$, dà $-\frac{16}{3}$.
  - **Seconda specie:** è l'integrale del pull-back di una 1-forma, $\int_a^bP^*(\omega)=\int_a^bF(P(t))\cdot P'(t)\,dt$. Esempio: $\omega=(y^3+x)dx-\sqrt x\,dy$ su $(t^2,t)$, $t\in[0,1]$, dà $\frac25$.
  - Fonte: `triennale/ANNO 2/geometria differenziale/Lezione26_GD.pdf` (pp. 1-12; il docente numera 6b e 9b le pp. 7 e 11 del PDF).

## Prerequisiti
- [[Curve parametriche]]: si integra lungo una curva C^1
- [[Forma differenziale]]: l'integrale di 2ª specie integra una 1-forma (Geometria differenziale)
- [[Pull-back]]: ∫_γ ω = ∫_a^b P^*(ω) (Geometria differenziale)

## Porta a
- [[Campo conservativo]]: campi a circuitazione nulla
- [[Teorema di Green]]: circuitazione come integrale doppio
- [[Teorema di Stokes]]: circuitazione come flusso del rotore
- [[Potenziale elettrostatico]]: V è l'integrale di linea di E cambiato di segno

## Collegati
- [[Lavoro di una forza]]: il lavoro è l'integrale di linea della forza
- [[Integrale di linea complesso]]: integrale di linea di forme reali
