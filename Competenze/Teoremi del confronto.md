---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["comparison theorems", "teorema dei carabinieri", "squeeze theorem", "teorema dei due carabinieri"]
tags: [competenza, area/analisi]
---

# Teoremi del confronto

> Le disuguaglianze passano al limite, e una funzione stretta tra due che hanno lo stesso limite ha anch'essa quel limite (carabinieri).

## Definizione / enunciato
Sia $\bar x$ di accumulazione per il dominio comune (Mazzi, §1.5).
- **I confronto** (teor. 1.8): se $f\le g$ in un intorno bucato e $\lim f=\ell$, $\lim g=m$ reali, allora $\ell\le m$.
- **Confronto, caso infinito** (teor. 1.9): se $f\le g$ in un intorno bucato e $\lim f=+\infty$, allora $\lim g=+\infty$; se $\lim g=-\infty$, allora $\lim f=-\infty$.
- **II confronto o dei due carabinieri** (teor. 1.10): se $f\le g\le h$ in un intorno bucato e $\lim f=\lim h=\ell\in\mathbb R$, allora esiste $\lim g=\ell$.
- **Corollario 1.10**: se $\lim f=0$ e $g$ è localmente limitata, allora $\lim f\cdot g=0$.

## Formule chiave
$$f\le g\le h,\quad f\to\ell,\ h\to\ell\ \Longrightarrow\ g\to\ell;\qquad f\to0,\ |g|\le M\ \Longrightarrow\ fg\to0$$

## Intuizione
Se due "carabinieri" convergono allo stesso punto, chi sta in mezzo non ha scampo. Il corollario dice che "infinitesimo per limitato è infinitesimo".

## Come si usa
Esempi di Mazzi: $5x^2\sin\frac1x\to0$ per $x\to0$ (carabinieri, o corollario); $x^2(\sin25x+3)\to+\infty$ per confronto con $2x^2$; con i carabinieri si dimostra $\lim_{x\to0}\frac{\sin x}x=1$ da $\cos x\le\frac{\sin x}x\le1$. Nella lezione del 25/10/2021: $\lim_{x\to+\infty}\frac{x+\sin x}{x^2+1}$ stimando $\frac x2\le x+\sin x\le2x$ per $x$ grande. Per le successioni: Morandotti, teor. 2.2.8 e 2.2.12.

## Nei corsi
- **Analisi 1** (triennale): "teoremi di confronto". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.5, teor. 1.8-1.10, cor. 1.10, pp. 16-19); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 2.2.8, 2.2.12, 3.1.18-3.1.19); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-25.pdf` (p. 1).

## Prerequisiti
- [[Teorema della permanenza del segno]]: dimostrazione del primo confronto
- [[Limite di funzione]]: si intersecano gli intorni

## Porta a
- [[Criteri del rapporto e della radice per successioni]]: confronto con q^n

## Collegati
- Nessuno.
