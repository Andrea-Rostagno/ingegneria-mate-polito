---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["best-shot public goods game", "gioco best-shot", "beni pubblici su rete", "public goods game on networks", "sostituti strategici", "strategic substitutes", "decreasing differences", "differenze decrescenti"]
tags: [competenza, area/network]
---

# Gioco dei beni pubblici best-shot

> Ogni nodo può pagare per un bene che poi condivide con i vicini (imparare qualcosa, comprare un libro da prestare): gli equilibri di Nash sono esattamente gli insiemi indipendenti massimali del grafo.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ non orientato non pesato, gioco grafico con $\mathcal A_i=\{0,1\}$ e costo $0<c<1$:
$$u_i(x_i,x_{-i})=\begin{cases}1-c&x_i=1\\1&x_i=0,\ \exists j\in N_i:\ x_j=1\\0&x_i=0,\ \forall j\in N_i:\ x_j=0.\end{cases}$$
Chi gioca 1 paga $c$; chi ha almeno un vicino (o sé stesso) che gioca 1 riceve 1.

**Teorema.** Gli equilibri di Nash esistono sempre: $x\in\{0,1\}^n$ è un equilibrio se e solo se $\{i:x_i=1\}$ è un insieme indipendente massimale di $\mathcal G$.

## Formule chiave
Differenze decrescenti (sostituti strategici):
$$u_i(b_i,x_{-i})-u_i(a_i,x_{-i})\ge u_i(b_i,y_{-i})-u_i(a_i,y_{-i})\quad\text{se }x_{-i}\le y_{-i},\ a_i\le b_i:$$
più gli altri contribuiscono, meno conviene contribuire.

## Intuizione
All'equilibrio nessun contributore ha un vicino contributore (altrimenti risparmierebbe $c$): l'insieme è indipendente. E ogni non contributore ha un vicino contributore (altrimenti preferirebbe pagare $c<1$): l'insieme è massimale.

## Come si usa
Esistenza: un insieme indipendente massimale si costruisce sempre in modo greedy, quindi gli equilibri esistono. Il gioco mostra l'effetto opposto alla coordinazione (complementi strategici): qui le azioni sono sostituti.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "Best-Shot public goods game". Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 46-48).

## Prerequisiti
- [[Gioco grafico]]: utilità che dipendono dal vicinato
- [[Insieme indipendente]]: caratterizzazione degli equilibri

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Gioco di coordinazione su rete]]: effetto opposto, complementi strategici
