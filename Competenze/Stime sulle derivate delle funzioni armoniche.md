---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["stime a priori sulle derivate", "derivative estimates for harmonic functions", "analiticità delle funzioni armoniche", "regolarità interna delle armoniche"]
tags: [competenza, area/analisi]
---

# Stime sulle derivate delle funzioni armoniche

> Ogni derivata di una funzione armonica in un punto è controllata dal sup della funzione diviso una potenza della distanza dal bordo; ne segue che le armoniche sono analitiche.

## Definizione / enunciato
**Lemma 3.1.8.** Sia $u$ armonica su $\Omega\subsetneq\mathbb R^N$. Per ogni multi-indice $\alpha\in\mathbb N^N$
$$|D^\alpha u(x)|\le\Big(\frac{N|\alpha|}{d_{\partial\Omega}(x)}\Big)^{|\alpha|}\sup_{y\in\Omega}|u(y)|.\qquad(3.6)$$
**Lemma 3.1.9.** Una funzione armonica su $\Omega\subsetneq\mathbb R^N$ è **analitica** (si scrive in serie di potenze).

## Formule chiave
Passo base ($|\alpha|=1$): $D_iu$ è armonica, quindi per la media di volume e il teorema della divergenza
$$D_iu(x)=\frac1{\omega_N\rho^N}\int_{\partial B_\rho(x)}u\,\nu_i\,d\sigma\ \Rightarrow\ |D_iu(x)|\le\frac{\sigma_{N-1}\rho^{N-1}}{\omega_N\rho^N}\sup|u|=\frac N\rho\sup_{y\in\Omega}|u(y)|,$$
e per $\rho\to d_{\partial\Omega}(x)$ si ha (3.6); versione raffinata (3.7): $|D_iu(x)|\le\frac N{d_{\partial\Omega}(x)}\sup_{B_{d_{\partial\Omega}}(x)}|u|$. Passo induttivo: si applica (3.7) su una palla di raggio $\lambda d_{\partial\Omega}(x)$ e si sceglie $\lambda=1/|\alpha|$.

Analiticità: il resto di Lagrange di ordine $m$ della serie di Maclaurin, con (3.6) e il teorema multinomiale, si stima con $C a_m$, $a_m=\big(\frac{2N}{d_{\partial\Omega}(0)}\big)^m m^m\frac{(|y_1|+\dots+|y_N|)^m}{m!}$; per il criterio del rapporto $a_m\to0$ se $\rho<\frac{d_{\partial\Omega}(0)}{2N^{3/2}e}$.

## Intuizione
La proprietà di media permette di "scaricare" una derivata sul bordo di una palla: ogni derivata costa un fattore $N/\rho$. È una stima **a priori** di regolarità interna: non serve nulla sul comportamento di $u$ vicino a $\partial\Omega$.

## Come si usa
- Teorema di Liouville: su $\Omega=B_R(x)$, $|\partial_{x_i}u(x)|\le\frac nR\sup|u|\to0$ per $R\to\infty$.
- Convergenza di armoniche: se $u_n\to u$ uniformemente, (3.6) applicata a $u_n-u$ su $\Omega_\varepsilon$ dà la convergenza di tutte le derivate sui compatti.
- Con Ascoli-Arzelà, limitatezza $L^1$ uniforme implica convergenza uniforme di tutte le derivate a meno di sottosuccessioni.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.1, Lemmi 3.1.8 (per induzione su $|\alpha|$) e 3.1.9 (stima del resto di Lagrange, teorema multinomiale 1.4.2, formula di Taylor (1.10)). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 8, 19-20).

## Prerequisiti
- [[Proprietà di media delle funzioni armoniche]]: media di volume applicata a $D_iu$
- [[Formula di Taylor in più variabili]]: resto di Lagrange per l'analiticità

## Porta a
- [[Convergenza di successioni di funzioni armoniche]]: convergenza delle derivate sui compatti
- [[Teorema di Liouville]]: derivate nulle per armoniche limitate su tutto lo spazio

## Collegati
- [[Serie di potenze]]: le armoniche sono somme di serie di potenze
