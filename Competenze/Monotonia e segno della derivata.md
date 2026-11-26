---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["monotonicity test", "criterio di monotonia", "test della derivata prima"]
tags: [competenza, area/analisi]
---

# Monotonia e segno della derivata

> Su un intervallo una funzione derivabile è crescente se e solo se $f'\ge0$; se $f'>0$ è strettamente crescente. Lo studio del segno di $f'$ dà gli intervalli di monotonia e gli estremi.

## Definizione / enunciato
Sia $f$ derivabile su un intervallo aperto $I$ (Mazzi, §1.8).
- **Teor. 1.5.** Se $f$ è crescente su $I$, allora $f'(x)\ge0$ su $I$ (decrescente ⇒ $f'\le0$).
- **Teor. 1.6.** Se $f'\ge0$ su $I$, $f$ è crescente; se $f'>0$, strettamente crescente; se $f'\le0$, decrescente; se $f'<0$, strettamente decrescente.
- **Cor. 1.1.** Se $f$ è continua su $[a,b]$, derivabile su $(a,b)$ e $f'\ge0$, $f$ è crescente su $[a,b]$.
- **Cor. 1.3 (test della derivata prima).** Se $f$ è continua in $x_0$, derivabile in un intorno bucato, con $f'\le0$ a sinistra e $f'\ge0$ a destra di $x_0$, allora $x_0$ è di minimo locale (scambiando i segni: massimo locale).

## Formule chiave
$$f(x_2)-f(x_1)=f'(c)(x_2-x_1)\ge0\qquad(x_1<x_2,\ f'\ge0)$$

## Intuizione
Il segno della pendenza dice se il grafico sale o scende. Non si può migliorare a "$f$ strettamente crescente ⇒ $f'>0$": $x^3$ ha $f'(0)=0$ (oss. 1.9).

## Come si usa
Si studia il segno di $f'$ e si deducono gli intervalli di monotonia (lezione del 15/11/2021: si suddivide il dominio in intervalli su cui $f$ è monotona e massimali). L'ipotesi di intervallo è essenziale: $f(x)=x$ per $x\ge0$, $x+1$ per $x<0$ ha $f'=1>0$ dove esiste ma non è crescente (oss. 1.10). Esercizi tipo: studi di funzione (esercitazione 15, 2022-23).

## Nei corsi
- **Analisi 1** (triennale): "legami tra monotonia e segno della derivata prima", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.8, teor. 1.5-1.6, cor. 1.1-1.3, oss. 1.9-1.10, pp. 20-22); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-15.pdf` (p. 1).

## Prerequisiti
- [[Teorema di Lagrange]]: f(x2)-f(x1)=f'(c)(x2-x1)
- [[Funzioni monotone]]: definizioni
- [[Teorema della permanenza del segno]]: verso monotona ⇒ f'≥0

## Porta a
- [[Punti di estremo locale]]: test della derivata prima
- [[Funzione convessa]]: convessa ⇔ f' crescente

## Collegati
- Nessuno.
