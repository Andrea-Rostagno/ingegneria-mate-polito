---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Laplace transform", "L-trasformata", "ascissa di convergenza", "ascissa di L-trasformabilità", "teorema del valore iniziale", "teorema del valore finale", "initial value theorem", "final value theorem"]
tags: [competenza, area/analisi]
---

# Trasformata di Laplace

> $\mathcal L(f)(s)=\int_0^{+\infty}f(t)e^{-st}dt$ è definita in un semipiano $\operatorname{Re}s>\lambda_f$ del piano complesso; trasforma derivate in moltiplicazioni per $s$ (con il dato iniziale) e convoluzioni in prodotti.

## Definizione / enunciato
**Definizione 6.1.** Per $f:[0,+\infty[\to\mathbb C$ localmente sommabile, $\Omega_f=\{s\in\mathbb C: f(t)e^{-st}\text{ sommabile in }t\}$ e
$$\mathcal L(f)(s)=\int_0^{+\infty}f(t)e^{-st}\,dt,\qquad s\in\Omega_f\quad(6.2).$$
**Proposizione 6.2.** Con $\lambda_f=\inf\{\operatorname{Re}s: f(t)e^{-st}\text{ sommabile}\}$ (**ascissa di L-trasformabilità**), $\Omega_f$ è $\{\operatorname{Re}s>\lambda_f\}$, oppure $\{\operatorname{Re}s\ge\lambda_f\}$, oppure $\mathbb C$, oppure $\emptyset$: sempre un semipiano. $f$ è **L-trasformabile** se $\Omega_f\neq\emptyset$ (Def. 6.3).

## Formule chiave
Proposizione 6.5 ($t_0,a>0$, $s_0\in\mathbb C$):
- $\mathcal L(e^{s_0t}f)(s)=\mathcal L(f)(s-s_0)$; $\ \mathcal L(f(t-t_0)H(t-t_0))(s)=e^{-t_0s}\mathcal L(f)(s)$; $\ \mathcal L(f(at))(s)=\frac1a\mathcal L(f)\big(\frac sa\big)$;
- $[\mathcal L(f)]'(s)=-\mathcal L(tf(t))(s)$; $\ \mathcal L(f')(s)=s\mathcal L(f)(s)-f(0^+)$.

Proposizione 6.10: $\mathcal L\big(\int_0^tf\big)=\frac{\mathcal L(f)}{s}$; se $f$ è $T$-periodica $\mathcal L(f)(s)=\frac1{1-e^{-Ts}}\int_0^Tf(t)e^{-st}dt$. Proposizione 6.11: $f(0^+)=\lim_{\operatorname{Re}s\to+\infty}s\mathcal L(f)(s)$ (valore iniziale), $f(+\infty)=\lim_{s\to0^+}s\mathcal L(f)(s)$ (valore finale). Convoluzione: $\mathcal L(f*g)=\mathcal L(f)\mathcal L(g)$ (6.39).
Tavola: $\mathcal L(H)=\frac1s$ ($\operatorname{Re}s>0$), $\mathcal L(t^kH)=\frac{k!}{s^{k+1}}$, $\mathcal L(e^{s_0t}H)=\frac1{s-s_0}$, $\mathcal L(\cos\omega t\,H)=\frac{s}{s^2+\omega^2}$, $\mathcal L(\sin\omega t\,H)=\frac{\omega}{s^2+\omega^2}$.

## Intuizione
È una trasformata di Fourier "smorzata": il fattore $e^{-\operatorname{Re}s\,t}$ rende trasformabili funzioni che crescono (fino a esponenzialmente), al prezzo di lavorare solo su $[0,+\infty)$.

## Come si usa
Esempio 6.4: $\mathcal L(H)(s)=\big[\frac{e^{-st}}{-s}\big]_0^{+\infty}=\frac1s$ per $\operatorname{Re}s>0$. Esempio 6.12: $\mathcal L(H(t-2))=\frac{e^{-2s}}{s}$. Esempio 6.13: $p_1(t-2)=H(t-\frac32)-H(t-\frac52)$ si trasforma per linearità e traslazione.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §6.1-6.2. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 6 (1).pdf` (pp. 1-7 del PDF); `formulario_analisi.pdf` (proprietà e tavola); `13 - Trasformata di Laplace.pdf` (Richiami di teoria).

## Prerequisiti
- [[Integrale improprio]]: integrale su $[0,+\infty)$

## Porta a
- [[Antitrasformata di Laplace]]: inversione e unicità
- [[Trasformata di Laplace di distribuzioni]]: estensione alle distribuzioni

## Collegati
- [[Trasformata di Fourier]]: $\mathcal L(f)(s_1+i\tau)$ è una trasformata di Fourier di $f e^{-s_1t}$
