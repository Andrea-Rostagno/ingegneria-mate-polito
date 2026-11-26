---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["irrotational vector field", "campo irrotazionale", "condizione necessaria di conservatività", "condizione sufficiente di conservatività", "derivate in croce"]
tags: [competenza, area/analisi]
---

# Campo irrotazionale

> Un campo $C^1$ è irrotazionale se $\partial F_i/\partial x_j=\partial F_j/\partial x_i$: è necessario per essere conservativo e diventa sufficiente su un aperto semplicemente connesso.

## Definizione / enunciato
**Teorema (condizione necessaria).** Se $F\in C^1(\Omega)$ è conservativo in $\Omega$ aperto, allora
$$\frac{\partial F_i}{\partial x_j}=\frac{\partial F_j}{\partial x_i}\quad\text{in }\Omega,\ \forall i\ne j.$$
Un campo con questa proprietà si dice **irrotazionale** in $\Omega$. Dimostrazione: $F_i=\partial f/\partial x_i$ con $f\in C^2$ e si applica Schwarz.

**Teorema (condizione sufficiente).** Se $F\in C^1(\Omega)$ è irrotazionale in $\Omega$ e $\Omega$ è semplicemente connesso, allora $F$ è conservativo in $\Omega$.

## Formule chiave
In $\mathbb R^2$: $F$ irrotazionale $\iff \frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}=0$, cioè rotore nullo.

## Intuizione
L'irrotazionalità da sola non basta (è solo necessaria); la semplice connessione da sola non è né necessaria né sufficiente; insieme bastano.

## Come si usa
- $F=(1,2x)$ non è conservativo in nessun aperto: $\partial_x F_2=2\ne0=\partial_y F_1$.
- $F=\big(\frac{-y}{x^2+y^2},\frac x{x^2+y^2}\big)$: $\partial_xF_2=\partial_yF_1=\frac{y^2-x^2}{(x^2+y^2)^2}$, quindi è irrotazionale in $\mathbb R^2\setminus\{0\}$ ma non conservativo lì (circuitazione $2\pi$); è conservativo nei semipiani $x>0$ e $x<0$, che sono semplicemente connessi.
- Procedura d'esame: dominio, verifica delle derivate in croce, semplice connessione, poi calcolo del potenziale.

## Nei corsi
- **Analisi 2** (triennale): condizione necessaria a fine lezione sugli integrali di linea, sufficiente nella lezione "campi conservativi". Fonti: `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 12-14); `triennale/ANNO 2/analisi 2/AII 11 2022 campi conservativi.pdf` (pp. 13-18).

## Prerequisiti
- [[Teorema di Schwarz]]: condizione necessaria ∂F_i/∂x_j = ∂F_j/∂x_i
- [[Campo conservativo]]: condizione necessaria di conservatività
- [[Insieme semplicemente connesso]]: ipotesi della condizione sufficiente

## Porta a
- [[Calcolo del potenziale]]: verifica prima del calcolo

## Collegati
- [[Rotore]]: F irrotazionale iff rotore nullo
