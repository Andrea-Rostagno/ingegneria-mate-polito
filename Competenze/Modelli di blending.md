---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["blending", "modelli di miscelazione", "problema della dieta", "diet problem", "mix ottimo nell'industria di processo"]
tags: [competenza, area/ottimizzazione]
---

# Modelli di blending

> Modelli LP di miscelazione (industria chimica, petrolifera, alimentare) in cui si scelgono le quantità di ingredienti rispettando limiti sulla composizione del prodotto.

## Definizione / enunciato
**Problema della dieta** (prototipo): elementi $i\in I$, cibi $j\in J$, costo $c_j$, contenuto $a_{ij}$ dell'elemento $i$ per unità di cibo $j$, limiti $l_i,u_i$ sull'assunzione giornaliera; $x_j\ge0$ consumo giornaliero:
$$\min\sum_{j\in J}c_jx_j\quad\text{s.t. }l_i\le\sum_{j\in J}a_{ij}x_j\le u_i,\ i\in I;\qquad x_j\ge0 .$$

## Formule chiave
Limiti percentuali sulla miscela: il vincolo naturale $L\le\frac{d_ax_a+d_bx_b+d_cx_c}{x_a+x_b+x_c}\le U$ è non lineare, ma con $y=x_a+x_b+x_c$ (conservazione della massa) diventa lineare:
$$Ly\le d_ax_a+d_bx_b+d_cx_c\le Uy .$$
Mix nell'industria di processo ($y_j$ prodotto finito, $x_{ij}$ materia prima $i\in R_j$ usata per $j$, caratteristica $q_i$):
$$\max\sum_jp_jy_j-\sum_j\sum_{i\in R_j}c_ix_{ij}\ \ \text{s.t. }y_j=\sum_{i\in R_j}x_{ij},\ \ L_jy_j\le\sum_{i\in R_j}q_ix_{ij}\le U_jy_j,\ \ \sum_{j:i\in R_j}x_{ij}\le I_i,\ \ 0\le y_j\le d_j .$$

## Intuizione
Le caratteristiche si combinano linearmente in proporzione alle percentuali: moltiplicando i limiti per la quantità totale si evita il rapporto, e il modello resta un LP.

## Come si usa
Si scelgono come variabili le quantità (non le percentuali) e si moltiplica per la quantità prodotta ogni vincolo espresso in percentuale. Esempio delle slide: la gradazione di un cocktail con tre ingredienti.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 9-12).

## Prerequisiti
- [[Programmazione lineare]]: il modello è un LP

## Collegati
- [[Mix ottimo di produzione]]: stessa idea per la manifattura discreta
- [[Combinazioni coniche, affini e convesse]]: le percentuali sommano a 1
