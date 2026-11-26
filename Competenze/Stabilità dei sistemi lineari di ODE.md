---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["stability of linear ODE systems", "stabilità dell'origine per x' = Ax", "criterio degli autovalori", "stima asintotica delle soluzioni lineari", "comportamento asintotico di e^{tA}"]
tags: [competenza, area/analisi]
---

# Stabilità dei sistemi lineari di ODE

> La stabilità dell'origine per $\dot x=Ax$ si legge dalle parti reali degli autovalori di $A$: tutte negative ⇒ globalmente asintoticamente stabile; una positiva ⇒ instabile; nulle ammesse solo se semplici.

## Definizione / enunciato
**Stima asintotica (L06 pp. 8-12).** Posto $\alpha_0=\max\{\mathrm{Re}\lambda_k:\lambda_k\text{ autovalore di }A\}$, per ogni $\alpha>\alpha_0$ esiste $C>0$ tale che
$$\|x(t)\|\le C\,\|x_0\|\,e^{\alpha t}\qquad\forall t\ge0 .$$
**Teoremi (L07-L08).** Per $\dot x=Ax$ e $\bar x=0$:
1. tutti gli autovalori con $\mathrm{Re}<0$ ⇒ $\bar x=0$ globalmente asintoticamente stabile;
2. esiste $\lambda$ con $\mathrm{Re}\lambda>0$ ⇒ $\bar x=0$ non stabile (né attrattivo);
3. **$\bar x=0$ è stabile se e solo se** (i) tutti gli autovalori hanno $\mathrm{Re}\le0$ e (ii) quelli con $\mathrm{Re}=0$ sono **semplici** (molteplicità algebrica = geometrica).

## Formule chiave
Con $e^{tA}=Pe^{tB}P^{-1}$ ($B$ di Jordan): $\|e^{tA}\|_2\le\|P\|_2\|e^{tB}\|_2\|P^{-1}\|_2$. Ogni elemento $c_{ij}t^{m_{ij}}e^{\lambda_{ij}t}$ si stima con il lemma "$\forall\varepsilon>0,\ m\in\mathbb N\ \exists K: t^m<Ke^{\varepsilon t}$" (massimo di $t^me^{-\varepsilon t}$ in $t=m/\varepsilon$), con $\varepsilon=\alpha-\alpha_0$:
$$|(e^{tB})_{ij}|\le|c_{ij}|Ke^{\alpha t}.$$
Instabilità: se $Av=\lambda v$ con $\mathrm{Re}\lambda>0$, $x(t)=e^{\lambda t}\frac{\delta v}{2\|v\|}$ parte a distanza $\delta/2$ ma $\|x(t)\|=\frac\delta2e^{\mathrm{Re}\lambda\,t}\to+\infty$.

## Intuizione
I fattori $t^m$ compaiono solo con blocchi di Jordan non diagonali: con $\mathrm{Re}\lambda<0$ l'esponenziale li vince, con $\mathrm{Re}\lambda=0$ no. Per questo un autovalore immaginario puro va bene solo se semplice.

## Come si usa
Un equilibrio $\tilde x\ne0$ (con $A\tilde x=0$) si riporta all'origine con $y=x-\tilde x$, perché $\dot y=Ay$ (L07 p. 6). Se $A$ è diagonalizzabile, nelle variabili $y=P^{-1}x$ il sistema si disaccoppia in $\dot y_i=\lambda_iy_i$, $y_i=y_{i,0}e^{\lambda_it}$ (L08 p. 3).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/06  - Lezione 13_10_23.pdf` (pp. 8-12); `triennale/ANNO 3/eq fisica matematica/07 - Lezione 17_10_23.pdf` (pp. 1-2, 5-7); `triennale/ANNO 3/eq fisica matematica/08 - Lezione 20_10_23.pdf` (pp. 1-4).

## Prerequisiti
- [[Sistemi lineari di ODE a coefficienti costanti]]: x(t) = e^{tA}x₀
- [[Forma canonica di Jordan]]: struttura degli elementi di e^{tB}
- [[Stabilità secondo Lyapunov]]: definizioni di stabilità e attrattività

## Porta a
- [[Equazione matriciale di Lyapunov]]: costruzione di V quando l'origine è asintoticamente stabile
- [[Stabilità in prima approssimazione]]: per i sistemi non lineari si guarda la parte lineare

## Collegati
- [[Condizionamento dei problemi di Cauchy]]: stesso criterio sugli autovalori, letto come propagazione delle perturbazioni
