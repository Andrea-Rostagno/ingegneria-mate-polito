---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["reparameterization trick", "riparametrizzazione gaussiana", "x = mu + sigma epsilon", "standardizzazione di una gaussiana"]
tags: [competenza, area/probabilita]
---

# Trucco della riparametrizzazione

> Una variabile gaussiana $x\sim\mathcal N(\mu,\sigma^2)$ si scrive come $x=\mu+\sigma\varepsilon$ con $\varepsilon\sim\mathcal N(0,1)$: la casualità viene isolata in un rumore standard che non dipende dai parametri.

## Definizione / enunciato
Se $x\sim\mathcal N(\mu,\sigma^2)$ si ridefinisce $x=\mu+\sigma\varepsilon$, $\varepsilon\sim\mathcal N(0,1)$: "stesso processo". Con il cambio di variabile $\varepsilon=(x-\mu)/\sigma$, $dx=\sigma\,d\varepsilon$:
$$P(x)\,dx=\frac1{\sqrt{2\pi}\,\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}dx\quad\longrightarrow\quad P(\varepsilon)\,d\varepsilon=\frac1{\sqrt{2\pi}}e^{-\frac{\varepsilon^2}2}d\varepsilon .$$

## Formule chiave
Nel processo di diffusione: $q(x_t\mid x_{t-1})=\mathcal N(\sqrt{\alpha_t}x_{t-1},(1-\alpha_t)I)$ diventa
$$x_t=\sqrt{\alpha_t}\,x_{t-1}+\sqrt{1-\alpha_t}\,\varepsilon_{t-1},\qquad\varepsilon_{t-1}\sim\mathcal N(0,I).$$
Somma di gaussiane indipendenti: se si hanno $\mathcal N(0,\sigma_1^2I),\dots,\mathcal N(0,\sigma_{t-1}^2I)$ indipendenti, la somma ha varianza $\sum_i\sigma_i^2$; basta sommare i quadrati dei coefficienti del rumore.

## Intuizione
Il campionamento diventa una funzione deterministica e differenziabile dei parametri ($\mu,\sigma$) applicata a un rumore fisso: si possono comporre i passi e calcolarne media e varianza in modo esplicito, e si può derivare rispetto ai parametri.

## Come si usa
Negli appunti serve a ricavare in forma chiusa $x_t=\sqrt{\bar\alpha_t}x_0+\sqrt{1-\bar\alpha_t}\,\bar\varepsilon_t$ e a eliminare $x_0$ in favore del rumore $\bar\varepsilon_t$ nella media del passo inverso.

## Nei corsi
- **Matematica per l'AI** (triennale): appunti a mano di De Gregorio sui modelli di diffusione. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 3.pdf` (p. 3-4).

## Prerequisiti
- [[Distribuzione normale]]: la trasformazione affine di una normale è normale

## Porta a
- [[Modello di diffusione probabilistico]]: forma chiusa del processo in avanti

## Collegati
- [[Somma di variabili aleatorie indipendenti]]: le varianze del rumore si sommano
- [[Normalizzazione degli attributi]]: la stessa trasformazione $z=(x-\mu)/\sigma$ (z-score)
