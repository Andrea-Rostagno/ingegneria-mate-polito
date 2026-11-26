---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["stiff problems", "stiffness", "problema stiff", "equazioni stiff", "sistemi stiff", "grado di stiffness", "ode15s"]
tags: [competenza, area/numerica]
---

# Problemi stiff

> Problemi di Cauchy ben condizionati ma con autovalori della jacobiana di ordini di grandezza molto diversi: un metodo esplicito è costretto a usare un passo dettato dall'autovalore più grande in modulo, quindi servono metodi A-stabili.

## Definizione / enunciato
Un problema $\mathbf y'=\mathbf f(x,\mathbf y)$ su $(a,b)$ è **stiff** quando:
- agli eventuali autovalori $\lambda_i$ di $J_f$ con parte reale positiva corrispondono quantità $(b-a)\mathrm{Re}(\lambda_i)$ non grandi;
- esiste almeno un autovalore $\lambda_j$ con $(b-a)\mathrm{Re}(\lambda_j)\ll-1$.

Misura del grado di stiffness:
$$S_M=(b-a)\max_{\mathrm{Re}(\lambda_i)<0}|\mathrm{Re}(\lambda_i)|,$$
con problemi in cui $10^6\le S_M\le10^{10}$. Anche la costante di Lipschitz è grande: $L\ge\|J_f\|\ge\rho(J_f)$.

## Formule chiave
Per evitare l'esplosione dell'errore serve $h\lambda_i\in H_a$ per ogni $\lambda_i$ con parte reale negativa: con metodi a regione limitata (espliciti) il passo può diventare piccolissimo rispetto all'intervallo. Servono metodi la cui regione contenga $\mathrm{Re}(h\lambda)<0$, cioè **A-stabili**.

## Intuizione
La componente rapida si esaurisce subito (transitorio) e poi non conta più per l'accuratezza, ma continua a imporre il vincolo di stabilità ai metodi espliciti per tutto l'intervallo.

## Come si usa
Esempio delle slide: $y_1'=-\frac{101}2y_1+\frac{99}2y_2$, $y_2'=\frac{99}2y_1-\frac{101}2y_2$ su $[0,10]$, $y_1(0)=1$, $y_2(0)=0$; autovalori $-1$ e $-100$, soluzione $y_{1,2}=\frac{e^{-x}\pm e^{-100x}}2$ con un breve transitorio iniziale. Eulero esplicito richiede $h<2/100=2\cdot10^{-2}$: con $h=0.2$ l'errore è $4.33\cdot10^{63}$, con $h=1.25\cdot10^{-2}$ diventa $2.68\cdot10^{-1}$. Il metodo dei trapezi è stabile per ogni $h$. In Matlab per problemi stiff si usano `ode15s` e `ode23s`.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 30, 125-133, 135).

## Prerequisiti
- [[Stabilità assoluta]]: il passo è vincolato dalla regione di stabilità
- [[Condizionamento dei problemi di Cauchy]]: problema ben condizionato ma con $f_y$ grande in modulo
- [[Autovalori e autovettori]]: autovalori della jacobiana del sistema

## Porta a
- Nessuno.

## Collegati
- [[Metodo di Eulero implicito]]: A-stabile, adatto ai problemi stiff
- [[Metodo dei trapezi per ODE]]: stabile per ogni h sull'esempio delle slide
- [[Matrice jacobiana]]: i suoi autovalori definiscono la stiffness
- [[Norma spettrale]]: $L\ge\rho(J_f)$
