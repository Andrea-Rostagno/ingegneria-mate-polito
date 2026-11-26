---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [law of iterated logarithm, LIL, legge del logaritmo iterato all'infinito]
tags: [competenza, area/probabilita]
---

# Legge del logaritmo iterato

> Fissa con precisione l'ampiezza delle oscillazioni del moto browniano: vicino a $0$ (e all'infinito) la traiettoria tocca esattamente l'inviluppo $\pm\sqrt{2h\log\log(1/h)}$.

## Definizione / enunciato
**Teorema (LIL, in $0$).** Sia $(W_t)$ browniano unidimensionale. Quasi certamente
$$\limsup_{h\to0^+}\frac{W_h}{\sqrt{2h\log\log\frac1h}}=1,\qquad\liminf_{h\to0^+}\frac{W_h}{\sqrt{2h\log\log\frac1h}}=-1.$$
**Corollario (LIL all'infinito).**
$$\limsup_{t\to\infty}\frac{W_t}{\sqrt{2t\log\log t}}=1,\qquad\liminf_{t\to\infty}\frac{W_t}{\sqrt{2t\log\log t}}=-1.$$
**Corollario.** Con probabilità uno, $W_t>0$ e $W_t<0$ infinite volte in ogni intervallo $[0,\varepsilon)$.

## Formule chiave
Passaggio da $0$ a $\infty$: si pone $h=1/t$ e si usa l'inversione, $tW_{1/t}$ è ancora browniano, per cui
$$\frac{W_{1/t}}{\sqrt{\frac2t\log\log t}}=\frac{tW_{1/t}}{\sqrt{2t\log\log t}}.$$
Per la passeggiata simmetrica vale la stessa legge: $\limsup_n X_n/\sqrt{2n\log\log n}=1$, $\liminf=-1$ q.c.

## Intuizione
La deviazione standard di $W_h$ è $\sqrt h$, ma il massimo delle fluttuazioni su infinite scale aggiunge un fattore $\sqrt{2\log\log(1/h)}$, che cresce lentissimo: le oscillazioni sono appena più grandi di $\sqrt h$. Il cambio di segno infinite volte vicino a $0$ è un'altra immagine della ruvidità delle traiettorie.

## Come si usa
La dimostrazione è saltata a lezione (materiale extra): all'orale servono enunciato, i due corollari e il legame con inversione e hölderianità. Il grafico delle slide mostra una traiettoria su $[0,0.1]$ fra le curve $\pm\sqrt{2t\log\log(1/t)}$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 19. Il `.tex` riporta la versione per $t\to\infty$ e accenna a "formulazioni analoghe per $t\downarrow0$"; nelle slide la versione principale è in $0^+$ e quella all'infinito è un corollario tramite l'inversione. Fonti: `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Traiettorie.

## Prerequisiti
- [[Invarianze del moto browniano]]: inversione passa da t a 0 a infinito

## Collegati
- [[Hölderianità delle traiettorie browniane]]: oscillazioni locali oltre radice di h
