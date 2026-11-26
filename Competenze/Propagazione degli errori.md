---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["error propagation", "propagazione delle incertezze", "errore massimo", "misure indirette", "errore su misure indirette", "somma in quadratura"]
tags: [competenza, area/fisica]
---

# Propagazione degli errori

> Regola per ottenere l'incertezza di una grandezza $f(x,y,z,\dots)$ misurata indirettamente, a partire dagli errori delle grandezze dirette tramite le derivate parziali.

## Definizione / enunciato
Si calcolano i valori medi $\bar x,\bar y,\dots$ e i loro errori, poi le derivate parziali di $f$ valutate nei valori medi. Lo sviluppo di Taylor al primo ordine dà l'**errore massimo** (stima conservativa, limite superiore). Se gli errori sono deviazioni standard e le misure sono indipendenti (covarianza nulla) si sommano le varianze.

## Formule chiave
$$\Delta f=\left|\frac{\partial f}{\partial x}\right|\Delta x+\left|\frac{\partial f}{\partial y}\right|\Delta y+\left|\frac{\partial f}{\partial z}\right|\Delta z+\dots$$
$$\sigma_f^2=\left(\frac{\partial f}{\partial x}\right)^2\sigma_x^2+\left(\frac{\partial f}{\partial y}\right)^2\sigma_y^2+\dots\quad(\text{misure indipendenti})$$
Casi notevoli: per $f=x\pm y$, $\sigma_f^2=\sigma_x^2+\sigma_y^2$; per $f=xy$, $\sigma_f^2=y^2\sigma_x^2+x^2\sigma_y^2$; per $f=x/y$, $\sigma_f^2=\frac{1}{y^2}\sigma_x^2+\frac{x^2}{y^4}\sigma_y^2$.

## Intuizione
L'errore massimo suppone che tutti gli errori si sommino nello stesso verso; la somma in quadratura tiene conto che errori indipendenti in parte si compensano, ed è quindi meno conservativa.

## Come si usa
- Velocità media $v=x/t$ (Lezione 2, pp. 11-19): $\partial v/\partial x=1/t$, $\partial v/\partial t=-x/t^2$, quindi $\Delta v=\Delta x/t+x\,\Delta t/t^2$ (errore massimo).
- Esercizio sul raggio interno di un cilindro cavo dal momento di inerzia (Lezione 2, pp. 27-32): con il metodo della differenziazione si ottiene $r=(0.10\pm0.01)$ m.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 28/02 e del 2/03/2022; la covarianza è citata ma non dimostrata. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/LezioneFisica1_Dimensione_ErrorediMisura.pdf` (pp. 25-34); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/Dimensione_ErrorediMisura_Lezione2.pdf` (pp. 9-32).

## Prerequisiti
- [[Errori di misura]]: errori sulle grandezze misurate direttamente
- [[Media e deviazione standard delle misure]]: varianze delle grandezze dirette
- [[Sviluppi di Maclaurin]]: sviluppo di Taylor al primo ordine di f

## Porta a
- Nessuno.

## Collegati
- [[Derivate parziali]]: le derivate parziali pesano gli errori delle misure (Analisi 2)
