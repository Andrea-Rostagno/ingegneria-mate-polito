---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["implicit Euler method", "backward Euler", "Eulero all'indietro", "Eulero implicito"]
tags: [competenza, area/numerica]
---

# Metodo di Eulero implicito

> Metodo a un passo implicito $y_{n+1}=y_n+hf(x_{n+1},y_{n+1})$: costa un'equazione (in generale non lineare) per passo, ma è A-stabile.

## Definizione / enunciato
Valutando l'equazione in $x_{n+1}$ e usando $y'(x_{n+1})\approx\frac{y(x_{n+1})-y(x_n)}h$:
$$y_{n+1}=y_n+hf(x_{n+1},y_{n+1}).$$
L'incognita $z=y_{n+1}$ risolve $g(z):=z-hf(x_{n+1},z)-y_n=0$, in generale non lineare (Newton o punto fisso). Per $y'=g_1(x)y+g_2(x)$ si ha esplicitamente
$$y_{n+1}=\frac{y_n+hg_2(x_{n+1})}{1-hg_1(x_{n+1})}.$$
Consistente di ordine 1 e convergente di ordine $p=1$ per $f\in F_1(S)$.

## Formule chiave
Problema test: $y_{n+1}=\left(\frac1{1-h\lambda}\right)^{n+1}y_0$. Regione di stabilità assoluta
$$H_a=\{h\lambda:|1-h\lambda|>1\},$$
l'esterno del cerchio di centro $1$ e raggio 1: contiene tutto il semipiano $\mathrm{Re}(h\lambda)<0$, quindi il metodo è **A-stabile** e per $\lambda<0$ $y_n\to0$ per ogni $h$.

## Intuizione
Si usa la pendenza nel punto di arrivo invece che in quello di partenza: il metodo "guarda avanti" e smorza le componenti che decadono, qualunque sia il passo.

## Come si usa
$y'=y$, $h=0.1$: $y_{n+1}=y_n/(1-h)$, $y_1=1.111\dots$, $y_2=1.2345\dots$, errore $0.13\cdot10^{-1}$ (simile a Eulero esplicito, segno opposto). Con $\lambda=-100$ l'errore relativo in $x=1$ decresce per ogni $h$ (da $1.0\cdot10^{40}$ con $h=0.5$ a $1.6\cdot10^{-1}$ con $h=3.1\cdot10^{-5}$), mentre Eulero esplicito esplode per $h>2\cdot10^{-2}$. Function `eulero_implicito_lineare(g1,g2,x0,y0,xN,N)`.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 44-47, 76, 85, 112-118, 120).

## Prerequisiti
- [[Metodo di Eulero esplicito]]: stessa costruzione valutata in $x_{n+1}$
- [[Metodo di Newton]]: risolve $g(z)=0$ quando $f$ è non lineare

## Porta a
- [[Problemi stiff]]: metodo A-stabile adatto ai problemi stiff

## Collegati
- [[Stabilità assoluta]]: regione esterna al cerchio di centro 1
- [[Metodo dei trapezi per ODE]]: altro metodo implicito A-stabile, di ordine 2
- [[Metodo del punto fisso]]: alternativa a Newton per l'equazione implicita
