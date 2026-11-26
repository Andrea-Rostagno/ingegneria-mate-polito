---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["convexity-preserving operations", "riconoscere una funzione convessa", "minimizzazione parziale", "partial minimization", "massimo puntuale di funzioni convesse", "composizione di funzioni convesse"]
tags: [competenza, area/ottimizzazione]
---

# Operazioni che preservano la convessità

> Regole per dimostrare la convessità di una funzione senza calcolare l'hessiana: combinazioni coniche, massimi puntuali, composizioni opportune, minimizzazione parziale, restrizione a rette.

## Definizione / enunciato
- **Combinazione conica:** $f=\sum_i\lambda_if_i$ con $\lambda_i\ge0$ e $f_i$ convesse è convessa.
- **Massimo puntuale:** $\max\{f_1,\dots,f_m\}$ di funzioni convesse è convessa.
- **Composizione con mappa affine:** $g(\mathbf x)=f(A\mathbf x+\mathbf b)$ è convessa se $f$ lo è.
- **Composizione $h\circ g$** (funzioni $\mathbb R\to\mathbb R$): convessa se $h$ è convessa non decrescente e $g$ convessa, oppure $h$ convessa non crescente e $g$ concava.
- **Restrizione a rette:** $f$ è convessa se e solo se $g(t)=f(\mathbf x+t\mathbf u)$ lo è per ogni $\mathbf x\in\mathrm{dom}f$ e direzione $\mathbf u$.

**Teorema (minimizzazione parziale).** Se $f$ è congiuntamente convessa in $(\mathbf x,\mathbf y)$ e $S$ è convesso non vuoto, $g(\mathbf x)=\inf_{\mathbf y\in S}f(\mathbf x,\mathbf y)$ è convessa, purché $g(\mathbf x)>-\infty$ per qualche $\mathbf x$.

## Formule chiave
$$f''(x)=h''\big(g(x)\big)g'(x)^2+h'\big(g(x)\big)g''(x).$$
Dimostrazione della minimizzazione parziale: scelti $\mathbf y_k$ con $f(\mathbf x_k,\mathbf y_k)\le g(\mathbf x_k)+\epsilon$,
$$g(\lambda\mathbf x_1+(1-\lambda)\mathbf x_2)\le f\big(\lambda\mathbf x_1+(1-\lambda)\mathbf x_2,\lambda\mathbf y_1+(1-\lambda)\mathbf y_2\big)\le\lambda g(\mathbf x_1)+(1-\lambda)g(\mathbf x_2)+\epsilon .$$

## Intuizione
Il massimo di funzioni convesse ha epigrafo uguale all'intersezione degli epigrafi, quindi convesso; per lo stesso motivo il minimo puntuale di funzioni affini (la funzione duale) è concavo.

## Come si usa
Esempio delle slide: una norma è convessa per la disuguaglianza di Jensen, $\|\lambda\mathbf x_1+(1-\lambda)\mathbf x_2\|\le\lambda\|\mathbf x_1\|+(1-\lambda)\|\mathbf x_2\|$, che segue da omogeneità e disuguaglianza triangolare. Per una funzione composta si controllano i segni dei due addendi di $f''$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 25-28).

## Prerequisiti
- [[Funzione convessa]]: la proprietà da dimostrare
- [[Regole di derivazione]]: derivata seconda della composta

## Porta a
- [[Dualità lagrangiana]]: la funzione duale è un inviluppo inferiore di affini, quindi concava

## Collegati
- [[Norme vettoriali]]: le norme sono convesse
- [[Insieme convesso]]: epigrafo del massimo come intersezione
- [[Convessità di funzioni differenziabili]]: alternativa basata sulle derivate
