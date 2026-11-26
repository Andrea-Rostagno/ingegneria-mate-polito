---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["integrable functions", "integrabilità delle funzioni continue", "integrabilità delle funzioni monotone", "funzioni continue a tratti"]
tags: [competenza, area/analisi]
---

# Classi di funzioni integrabili

> Sono integrabili secondo Riemann su $[a,b]$ le funzioni continue, le funzioni monotone limitate e le funzioni limitate continue a tratti.

## Definizione / enunciato
- **Teorema 5.1.12** (Morandotti). Ogni $f:[a,b]\to\mathbb R$ continua è integrabile secondo Riemann.
- **Teorema 5.1.13.** Ogni $f:[a,b]\to\mathbb R$ monotona e limitata è integrabile secondo Riemann.
- Dall'elenco dei teoremi del corso: sono integrabili su $[a,b]$ le funzioni continue, continue a tratti, continue sull'aperto $(a,b)$ e limitate sul chiuso, oppure monotone.
- **Teorema 5.2.6.** Se $f$ è integrabile con $m\le f\le M$ e $\Phi:[m,M]\to\mathbb R$ è continua, $\Phi\circ f$ è integrabile; quindi (cor. 5.2.7-5.2.9) sono integrabili $|f|$, le parti positiva e negativa e il prodotto di integrabili.

## Formule chiave
Monotone (idea della dimostrazione, $f$ crescente, partizione uniforme di passo $\frac{b-a}n$):
$$S(f,\mathcal P)-s(f,\mathcal P)=\sum_{i=1}^n\big(f(x_i)-f(x_{i-1})\big)\frac{b-a}n=\big(f(b)-f(a)\big)\frac{b-a}n\to0 .$$
(Calcolo telescopico svolto qui a partire dalla definizione delle somme; la dimostrazione di Morandotti usa la prop. 5.1.11.)

## Intuizione
Una funzione monotona può avere infiniti salti, ma la loro somma è al più $f(b)-f(a)$: i rettangoli "di errore" si incastrano e la loro area totale va a zero. Per le continue, la continuità (uniforme su $[a,b]$) rende piccola l'oscillazione su ogni intervallino.

## Come si usa
Prima di calcolare un integrale definito si verifica l'integrabilità: integranda continua, o limitata con un numero finito di discontinuità, o monotona. Se l'integranda è illimitata o l'intervallo è illimitato, l'integrale è improprio. Esercizio 3 dell'esercitazione 21 (2022-23): dire se un integrale è di Riemann o improprio.

## Nei corsi
- **Analisi 1** (triennale): "classi di funzioni integrabili, teorema di integrabilità delle funzioni monotone". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 5.1.12-5.1.13, PDF pp. 172-173; teor. 5.2.6, cor. 5.2.7-5.2.9, PDF pp. 180-182); `triennale/ANNO 1/analisi 1/Appunti, riassunti e teoremi/Analisi Matematica 1 - TEOREMI.pdf` (riga "Funzioni integrabili").

## Prerequisiti
- [[Integrale di Riemann]]: criterio S-s<ε
- [[Funzione continua]]: le continue sono integrabili
- [[Funzioni monotone]]: le monotone limitate sono integrabili

## Porta a
- Nessuno.

## Collegati
- Nessuno.
