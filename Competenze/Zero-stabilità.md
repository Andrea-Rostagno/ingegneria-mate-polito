---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["zero-stability", "zero stabilità", "condizione delle radici", "root condition", "stabilità di un metodo per ODE", "equazione caratteristica di un metodo multistep"]
tags: [competenza, area/numerica]
---

# Zero-stabilità

> Un metodo per ODE è zero-stabile se, su un intervallo fissato, piccole perturbazioni dei dati producono perturbazioni limitate della soluzione numerica per $h\to0$; per i multistep si verifica con la condizione delle radici.

## Definizione / enunciato
Un metodo a un passo $y_{n+1}=y_n+h_n\varphi(x_n,y_n;h_n)$ è **zero-stabile** se, detta $\tilde y_{n+1}$ l'approssimazione calcolata in precisione finita a partire da $\tilde y_0=y_0+\epsilon$, per $h\to0$
$$|y_{n+1}-\tilde y_{n+1}|\le C\epsilon,$$
con $C$ che può dipendere dall'ampiezza dell'intervallo. Un metodo a un passo consistente applicato a un problema con $f$ continua e lipschitziana in $y$ è zero-stabile.

Per i **multistep** la lipschitzianità di $f$ non basta. **Teorema (condizione delle radici).** Un metodo multistep lineare a $k$ passi è zero-stabile se e solo se le radici dell'equazione caratteristica
$$\alpha_0t^k+\alpha_1t^{k-1}+\dots+\alpha_k=0$$
hanno tutte modulo $\le1$ e quelle di modulo 1 sono semplici.

## Formule chiave
Metodi di Adams: $t^k-t^{k-1}=0$, radici $0$ (molteplicità $k-1$) e $1$ (semplice): zero-stabili. Metodi a un passo: $t-1=0$, sempre zero-stabili.

## Intuizione
Gli errori di arrotondamento sono inevitabili; la zero-stabilità garantisce che il loro effetto resti controllato anche facendo moltissimi passi piccolissimi. Non dice nulla sul comportamento con $h$ fissato e $x\to\infty$: quello è il compito della stabilità assoluta.

## Come si usa
Per verificare un multistep si scrive il polinomio con i soli coefficienti $\alpha_i$ (la parte che non moltiplica $h$) e se ne controllano le radici. Con la consistenza dà la convergenza.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 69, 81-82, 100-102).

## Prerequisiti
- [[Teorema di esistenza e unicità locale]]: f lipschitziana in y implica zero-stabilità dei metodi a un passo consistenti
- [[Metodi multistep lineari]]: coefficienti $\alpha_i$ dell'equazione caratteristica

## Porta a
- [[Convergenza di un metodo numerico per ODE]]: consistenza più zero-stabilità

## Collegati
- [[Stabilità di un algoritmo]]: stessa esigenza di controllare gli errori di arrotondamento
- [[Stabilità assoluta]]: stabilità con h fisso e $n\to\infty$, nozione diversa
- [[Consistenza di un metodo numerico per ODE]]: l'altra condizione del teorema di convergenza
