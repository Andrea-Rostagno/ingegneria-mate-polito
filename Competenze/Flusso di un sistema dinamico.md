---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["flow", "flusso", "sistema dinamico", "dynamical system", "sezione di Poincaré", "Poincaré section", "mappa di Poincaré", "Poincaré map", "mappa del primo ritorno", "first return time map", "flusso sospeso", "suspended flow", "sistema dissipativo"]
tags: [competenza, area/analisi]
---

# Flusso di un sistema dinamico

> Famiglia a un parametro di trasformazioni dello spazio delle fasi che porta ogni condizione iniziale nel suo stato al tempo $t$; si studia anche tramite la mappa di Poincaré su una sezione trasversale.

## Definizione / enunciato
Un sistema $\dot x=F(x)$, $x\in M\subseteq\mathbb R^n$ (**spazio delle fasi**), per esempio la meccanica classica $(\dot q,\dot p)=F(q,p)$ senza forzanti dipendenti dal tempo. Se $x_0$ è la condizione iniziale, la traiettoria è $X(t,x_0)=\phi^tx_0$ e $\{\phi^t\}_{t\in\mathbb R}$ è un gruppo a un parametro di trasformazioni di $M$ in sé, il **flusso**: $\phi^t\circ\phi^\tau=\phi^{t+\tau}$. Si suppone l'esistenza delle soluzioni per ogni $t$.
- Flussi **hamiltoniani**: $\mathrm{div}F=0$, i volumi nello spazio delle fasi si conservano.
- Sistemi **dissipativi**: $\langle\mathrm{div}F\rangle<0$, i volumi si contraggono.

## Formule chiave
**Sezione di Poincaré**: ipersuperficie $P$ ($P(x)=0$) di dimensione $\dim M-1$ trasversale alle traiettorie. Poiché il moto è deterministico, ogni intersezione determina la successiva:
$$x_{n+1}=\varphi(x_n)\ \ (\text{mappa di Poincaré}),\qquad t_{n+1}=t_n+T(x_n)\ \ (\text{mappa del tempo di primo ritorno}).$$
Il flusso si ricostruisce come **flusso sospeso** $\tilde\phi^t(x,\tau)=\big(\varphi^nx,\,t+\tau-\sum_{j=0}^{n-1}T(\varphi^jx)\big)$ per $\sum_{j=0}^{n-1}T(\varphi^jx)\le t+\tau<\sum_{j=0}^nT(\varphi^jx)$, e $\phi^t=g\circ\tilde\phi^t\circ g^{-1}$.

## Intuizione
Il flusso dice "dove va ogni punto"; la mappa di Poincaré riduce un sistema continuo in dimensione $n$ a una mappa discreta in dimensione $n-1$, che si studia con gli stessi strumenti delle successioni ricorsive (punti fissi, orbite periodiche, esponenti di Lyapunov).

## Come si usa
Motivazione del corso: perché le eclissi si prevedono e il tempo atmosferico no oltre 7-10 giorni? Leggi di evoluzione note o ignote, deterministiche o probabilistiche; anche le leggi deterministiche possono essere imprevedibili (effetto farfalla). La ricorrenza di uno stato con accuratezza $\epsilon$ richiede in media un tempo $\tau\sim\epsilon^{-D}$, esponenziale nel numero $D$ di gradi di libertà (Lorenz nel 1968 fallì con $10^3$ variabili).

## Nei corsi
- **Matematica per l'AI** (triennale): dispensa "Intro to dynamical systems" (MIA 21/22). Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 1-2).

## Prerequisiti
- [[Problema di Cauchy]]: esistenza e unicità delle traiettorie
- [[Equazioni di Hamilton]]: esempio di flusso che conserva il volume

## Porta a
- [[Esponente di Lyapunov]]: tasso di separazione delle traiettorie
- [[Insiemi invarianti e attrattori]]: punti fissi, orbite periodiche, attrattori
- [[Varietà stabile e instabile]]: insiemi che convergono a un punto per $t\to\pm\infty$
- [[Teorema di ricorrenza di Poincaré]]: ritorno nei flussi che conservano il volume

## Collegati
- [[Successione definita per ricorrenza]]: la mappa di Poincaré è una ricorrenza $x_{n+1}=\varphi(x_n)$
