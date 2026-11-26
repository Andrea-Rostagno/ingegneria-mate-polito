---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["integral function", "F(x)=∫f", "integral function continuity"]
tags: [competenza, area/analisi]
---

# Funzione integrale

> $F(x)=\int_{x_0}^xf(t)\,dt$ è la funzione che misura l'area accumulata da un punto fisso: è sempre continua, e derivabile con $F'=f$ dove $f$ è continua.

## Definizione / enunciato
Sia $f:[a,b]\to\mathbb R$ integrabile e $x_0\in[a,b]$. La **funzione integrale** di $f$ è (Morandotti, def. 5.2.13)
$$F(x)=\int_{x_0}^xf(t)\,dt,\qquad x\in[a,b].$$
**Teorema** (Morandotti, teor. 7.5.1, versione generale). Sia $f:I\to\mathbb R$ integrabile su ogni sottointervallo chiuso di $I$ e $a\in I$. Allora
1. $F(x)=\int_a^xf(t)\,dt$ è **continua** su $I$;
2. se $f$ è continua in $x_0$, $F$ è derivabile in $x_0$ e $F'(x_0)=f(x_0)$.

## Formule chiave
$$|F(x)-F(x_0)|=\left|\int_{x_0}^xf(t)\,dt\right|\le M_r|x-x_0|\qquad(|f|\le M_r\ \text{vicino a }x_0)$$

## Intuizione
Spostando di poco l'estremo, l'area cambia al più di "altezza massima × spostamento": per questo $F$ è continua anche se $f$ ha salti. Nei punti di salto di $f$, $F$ ha un punto angoloso.

## Come si usa
Si studia come una funzione qualsiasi: dominio, segno, monotonia dal segno di $F'=f$, convessità da $f'$, sviluppi di Taylor in un punto. Esercizi dell'esercitazione 20 (2022-23): derivare $\int_\pi^x\sin^{15}t\,dt$, $\int_0^{\sqrt x}e^{t^2}dt$, $\int_{2x}^{3x}\cos^2t\,dt$ (con la regola della catena); per $F(x)=\int_{-1}^x\frac{te^t}{t^2+1}dt$ trovare monotonia, punti critici e sviluppo di Taylor al secondo ordine in $x=-1$.

## Nei corsi
- **Analisi 1** (triennale): "funzione integrale, teorema di continuità della funzione integrale". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 5.2.13, PDF p. 184; teor. 7.5.1, PDF p. 318); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_20.pdf` (es. 3-5).

## Prerequisiti
- [[Proprietà dell'integrale definito]]: additività
- [[Funzione continua]]: F è continua

## Porta a
- [[Teorema fondamentale del calcolo integrale]]: si deriva F

## Collegati
- Nessuno.
