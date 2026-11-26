---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["linear multistep methods", "metodi a più passi", "metodi multistep", "multistep methods", "metodi a k passi"]
tags: [competenza, area/numerica]
---

# Metodi multistep lineari

> Metodi per ODE in cui $y_{n+1}$ si calcola da una combinazione lineare dei $k$ valori precedenti e dei corrispondenti valori di $f$.

## Definizione / enunciato
Il generico metodo lineare a $k$ passi è
$$\alpha_0y_{n+1}+\alpha_1y_n+\dots+\alpha_ky_{n+1-k}=h\big[\beta_0f(x_{n+1},y_{n+1})+\beta_1f(x_n,y_n)+\dots+\beta_kf(x_{n-k+1},y_{n-k+1})\big],$$
$n=k-1,k,\dots$; è **implicito** se $\beta_0\ne0$, **esplicito** se $\beta_0=0$.

Servono $k$ valori iniziali $y_0,\dots,y_{k-1}$: il problema dà solo $y_0$, gli altri si calcolano con metodi a un passo o multistep già disponibili, **di ordine almeno pari** a quello del metodo, altrimenti se ne perde l'ordine.

## Formule chiave
- Zero-stabilità: condizione delle radici su $\alpha_0t^k+\dots+\alpha_k=0$.
- Convergenza se e solo se consistente e zero-stabile, con errore $O(h^p)$.
- Problema test: $\sum_{i=0}^k(\alpha_i-h\lambda\beta_i)y_{n+1-i}=0$, equazione alle differenze lineare omogenea di ordine $k$; è assolutamente stabile se e solo se tutte le radici di $\sum_i(\alpha_i-h\lambda\beta_i)t^{k-i}=0$ hanno modulo minore di 1.

## Intuizione
Invece di fare più valutazioni di $f$ dentro il passo (Runge-Kutta) si riusano i valori già calcolati ai passi precedenti: più economico, ma serve un avvio e la stabilità è più delicata.

## Come si usa
Esempio delle slide: $y_{n+1}=y_{n-1}+2hf(x_n,y_n)$ è un metodo a 2 passi esplicito. La famiglia principale vista nel corso è quella dei metodi di Adams.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 37-38, 89, 98-103, 122).

## Prerequisiti
- [[Metodo di Eulero esplicito]]: caso particolare a un passo, usabile per l'avvio
- [[Teorema fondamentale dell'algebra]]: l'equazione caratteristica di grado k ha k radici complesse

## Porta a
- [[Metodi di Adams]]: famiglia costruita con quadrature interpolatorie
- [[Zero-stabilità]]: condizione delle radici

## Collegati
- [[Convergenza di un metodo numerico per ODE]]: teorema di equivalenza anche per i multistep
- [[Stabilità assoluta]]: radici di $\sum(\alpha_i-h\lambda\beta_i)t^{k-i}$
