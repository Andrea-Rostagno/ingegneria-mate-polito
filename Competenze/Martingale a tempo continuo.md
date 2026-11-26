---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [continuous-time martingales, versione càdlàg, càdlàg version, teoremi di Doob in tempo continuo, filtrazione con le ipotesi abituali]
tags: [competenza, area/probabilita]
---

# Martingale a tempo continuo

> Estensione della teoria di Doob a $t\in[0,\infty)$: con una filtrazione aumentata si può sempre lavorare con versioni càdlàg, e per queste valgono optional sampling/stopping, convergenza e disuguaglianze.

## Definizione / enunciato
**Filtrazione aumentata** (ipotesi abituali): $(\mathcal F_t)$ è *completa* ($\mathcal N\subseteq\mathcal F_t$ per ogni $t$, con $\mathcal N$ gli insiemi contenuti in eventi di probabilità nulla) e *continua a destra* ($\mathcal F_t=\bigcap_{s>t}\mathcal F_s$). Si può sempre ingrandire una filtrazione per renderla aumentata: i processi adattati restano adattati.

**Versione.** $(Y_i)$ è una versione di $(X_i)$ se $P(X_i=Y_i)=1$ per ogni $i$.

**Teorema (versioni càdlàg, non dimostrato).** Ogni martingala (sub, super) rispetto a una filtrazione aumentata ha una versione che è ancora martingala (sub, super) con traiettorie continue a destra e con limiti a sinistra q.c.

**Teoremi di Doob per processi càdlàg** (lezione 22): optional sampling ($\sigma\le\tau\le C$), optional stopping, primo teorema di convergenza ($\sup_t\mathbb E[X_t^-]<\infty$), secondo teorema (u.i.), massimale ($P(\sup_{t\le T}X_t\ge a)\le\mathbb E[X_T^+]/a$), Kolmogorov ($\le\mathbb E[X_0]/a$).

## Formule chiave
Approssimazione dall'alto dei tempi d'arresto sulla griglia $I_n=\{k/n\}$:
$$\tau_n=\inf\{r\in I_n:r\ge\tau\}\downarrow\tau,\qquad X_{\tau_n}\to X_\tau\ \text{q.c. (continuità a destra).}$$
Martingala del problema delle martingale (Stroock-Varadhan), per $f$ limitata:
$$M_t=f(X_t)-\int_0^t\mathcal Lf(X_s)\,ds.$$

## Intuizione
"Popular pattern": si dimostra il risultato su una griglia discreta di tempi e poi o si infittisce la griglia sfruttando la continuità (convergenza, sampling), o si controlla il processo tra i punti della griglia (inversione del browniano).

## Come si usa
Il moto browniano ha traiettorie continue, quindi tutti questi teoremi si applicano a $W_t$ e a $W_t^2-t$ ("the power of martingales is unlocked"). Esempi: Poisson compensato (lezione 16); martingala chiusa del tempo passato in uno stato transiente di una CTMC (lezione 17); esercizio C: se $\mathcal Lf\equiv0$ e $f$ è limitata, $f(X_t)$ è martingala.

## Nei corsi
- **Processi stocastici** (magistrale): trasversale agli argomenti 12-14 e prerequisito del 17. La verifica che $\mathbb E[X_{\tau_n}\mid\mathcal F_{\sigma_n}]\to\mathbb E[X_\tau\mid\mathcal F_\sigma]$ non è chiesta all'esame. Nella slide dell'optional stopping continuo l'ipotesi è scritta con $X_n$ (da verificare sul PDF). Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `suggested_exercises_martingales.pdf` (es. C).

## Prerequisiti
- [[Martingala]]: estensione al tempo continuo
- [[Filtrazione]]: filtrazione con le ipotesi abituali

## Porta a
- [[Formula di Dynkin]]: f(X_t) compensato è martingala
- [[Martingale del moto browniano]]: teoria di Doob in tempo continuo
