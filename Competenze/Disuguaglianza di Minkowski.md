---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Minkowski inequality", "disuguaglianza triangolare per la norma p", "triangle inequality in Lp"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Minkowski

> È la disuguaglianza triangolare per le norme $p$: rende $\|\cdot\|_p$ una norma su $\ell^p$ e (sulle classi) su $L^p$.

## Definizione / enunciato
**Prop. 5.15 (successioni).** Sia $p\in[1,\infty]$. Per ogni $x,y\in\mathbb F^{\mathbb N}$:
$$\|x+y\|_p\le\|x\|_p+\|y\|_p.$$
**Teor. 5.25 (funzioni).** Sia $(M,\mathcal M,\mu)$ uno spazio di misura e $p\in[1,\infty]$. Per ogni $f,g$ misurabili:
$$\|f+g\|_p\le\|f\|_p+\|g\|_p.$$

## Formule chiave
Cor. 5.16: $\|\cdot\|_p$ è una norma su $\ell^p$ per ogni $p\in[1,\infty)$ (separazione e omogeneità sono immediate).
Su $\mathcal L^p$ invece $\|f\|_p=0\iff f=0$ $\mu$-q.o., quindi serve il quoziente $L^p=\mathcal L^p/\!\sim$ per avere una norma.

## Intuizione
Per $p=1$ e $p=\infty$ è la disuguaglianza triangolare di $|\cdot|$ applicata termine a termine. Per $1<p<\infty$ (dimostrazione della Prop. 5.15):
$$\|x+y\|_p^p=\sum_k|x_k+y_k|^{p-1}|x_k+y_k|\le\sum_k|x_k+y_k|^{p-1}|x_k|+\sum_k|x_k+y_k|^{p-1}|y_k|;$$
con $q=p/(p-1)$ si ha $\|(|x_k+y_k|^{p-1})_k\|_q^q=\|x+y\|_p^p$, e Hölder dà $\sum_k|x_k+y_k|^{p-1}|x_k|\le\|x+y\|_p^{p-1}\|x\|_p$ (idem per $y$); si divide per $\|x+y\|_p^{p-1}$.

## Come si usa
Serve a dimostrare che $\ell^p$ e $\mathcal L^p$ sono sottospazi vettoriali (somma di elementi $p$-sommabili è $p$-sommabile) e che $\|\cdot\|_p$ è una norma, quindi che $\ell^p$ e $L^p$ sono spazi normati (e poi di Banach).

## Nei corsi
- **Analisi funzionale** (triennale): Prop. 5.15, Cor. 5.16 (§5.1), Teor. 5.25 (§5.2). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 50-51, 55); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (pp. 3, 5).

## Prerequisiti
- [[Disuguaglianza di Hölder]]: strumento della dimostrazione

## Porta a
- [[Spazi di successioni lp]]: ‖·‖p è una norma su ℓp
- [[Spazi Lp]]: ‖·‖p è una norma su Lp

## Collegati
- [[Norme vettoriali]]: disuguaglianza triangolare delle norme p su R^n
- [[Spazio normato]]: è l'assioma (c) della norma
