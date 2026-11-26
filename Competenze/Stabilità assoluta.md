---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["absolute stability", "regione di stabilità assoluta", "region of absolute stability", "problema test", "test equation", "metodo A-stabile", "A-stable method", "A-stabilità", "A-stability"]
tags: [competenza, area/numerica]
---

# Stabilità assoluta

> Con passo $h$ fissato e $n\to\infty$, un metodo applicato a $y'=\lambda y$ ($\mathrm{Re}\,\lambda<0$) deve dare $y_n\to0$ come la soluzione esatta: succede se $h\lambda$ cade nella regione di stabilità assoluta del metodo.

## Definizione / enunciato
La convergenza garantisce $|y_N-y(x)|\to0$ per $h\to0$, ma non dice quanto piccolo debba essere $h$. Con il **problema test** $y'=\lambda y$ si ottiene $y_{n+1}=R(h\lambda)^{n+1}y_0$ e il metodo è assolutamente stabile se $|R(h\lambda)|<1$. L'insieme $H_a$ dei valori $h\lambda$ (in generale complessi) per cui ciò accade è la **regione di stabilità assoluta**.
- Eulero esplicito: $|1+h\lambda|<1$ (cerchio di centro $-1$, raggio 1); per $\lambda<0$ reale $h<2/|\lambda|$;
- Eulero implicito: $|1-h\lambda|>1$ (esterno del cerchio di centro $1$);
- trapezi: $\mathrm{Re}(h\lambda)<0$;
- Heun: $|1+h\lambda+\frac12(h\lambda)^2|<1$; RK a $r$ stadi $|p_r(h\lambda)|<1$.

Un metodo è **A-stabile** se $H_a$ contiene tutto il semipiano $\mathrm{Re}(h\lambda)<0$ (Eulero implicito, trapezi); i metodi A-stabili sono impliciti e hanno ordine $p\le2$.

## Formule chiave
Per $y'=f(x,y)$ si usa $\lambda=f_y(a,y_0)$ e si sceglie $h$ con $hf_y(a,y_0)\in H_a$; per i sistemi si guardano gli autovalori di $J_f(a,\mathbf y_0)$ e quello di modulo massimo (con parte reale negativa) vincola $h$. Ha senso solo se la soluzione è asintoticamente stabile.

## Intuizione
La soluzione esatta decade, quindi anche quella numerica deve decadere: se il fattore di amplificazione per passo supera 1 in modulo, gli errori crescono geometricamente e la soluzione numerica esplode, anche se il metodo è convergente.

## Come si usa
Esempio delle slide: $y'=\lambda y$ in $x=1$ con $h=2^{-k}$. Per $\lambda=-100$ con Eulero esplicito l'errore relativo vale $6.45\cdot10^{46}$ per $h=0.5$ e diventa ragionevole solo per $h<2\cdot10^{-2}$. Per $\lambda=1$ e $\lambda=100$ il problema non si presenta. Con $\lambda=-100$ Eulero implicito e trapezi danno errori che decrescono per ogni $h$, Heun solo sotto una soglia.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 104-124).

## Prerequisiti
- [[Condizionamento dei problemi di Cauchy]]: ha senso per soluzioni asintoticamente stabili
- [[Convergenza di un metodo numerico per ODE]]: la convergenza da sola non fissa h
- [[Numeri complessi]]: la regione vive nel piano complesso di $h\lambda$

## Porta a
- [[Problemi stiff]]: richiedono metodi A-stabili

## Collegati
- [[Metodo di Eulero esplicito]]: vincolo $h<2/|\lambda|$
- [[Metodo di Eulero implicito]]: A-stabile
- [[Metodo dei trapezi per ODE]]: regione uguale al semipiano sinistro
- [[Metodi Runge-Kutta espliciti]]: regioni limitate
- [[Zero-stabilità]]: nozione diversa ($h\to0$ su intervallo fissato)
