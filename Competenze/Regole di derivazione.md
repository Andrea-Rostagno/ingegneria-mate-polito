---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["differentiation rules", "derivata del prodotto", "derivata del quoziente", "derivata della funzione composta", "chain rule", "product rule", "quotient rule", "regola della catena", "linearità della derivata"]
tags: [competenza, area/analisi]
---

# Regole di derivazione

> Le regole per derivare combinazioni lineari, prodotti, quozienti e composizioni di funzioni derivabili.

## Definizione / enunciato
Per $f,g$ derivabili e $\alpha,\beta\in\mathbb R$:

## Formule chiave
$$\big(\alpha f(x)+\beta g(x)\big)'=\alpha f'(x)+\beta g'(x)$$
$$\big(f(x)g(x)\big)'=f'(x)g(x)+f(x)g'(x)$$
$$\left(\frac{f(x)}{g(x)}\right)'=\frac{f'(x)g(x)-f(x)g'(x)}{\big(g(x)\big)^2}$$
$$\big(g(f(x))\big)'=g'(f(x))\,f'(x)$$

## Intuizione
La derivata è lineare. Per il prodotto ciascun fattore "varia" a turno mentre l'altro resta fermo. Per la composizione le velocità di variazione si moltiplicano: quella della funzione esterna, valutata nel punto interno, per quella della funzione interna.

## Come si usa
Si scompone la funzione in somme, prodotti, quozienti e composizioni di funzioni elementari, si applicano le regole dall'esterno verso l'interno e si usa la tavola per le derivate elementari. Lette al contrario, le regole del prodotto e della composizione danno l'integrazione per parti e per sostituzione. Il materiale della cartella non contiene esercizi svolti di derivazione.

## Nei corsi
- **Analisi 1** (triennale): "Regole di derivazione" nel blocco "Calcolo differenziale". Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 3, "Regole di derivazione"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Analisi 1** (seconda passata, 2026-11-24): le regole sono dimostrate dalla definizione di derivata in Mazzi §1.3 (teor. 1.1 linearità, 1.2 Leibniz, 1.3 reciproco e quoziente, 1.4 funzione composta) e in Morandotti (teor. 4.1.11, 4.1.14); la derivata dell'inversa è nella nota Derivata della funzione inversa. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.3, pp. 7-12); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (PDF pp. 119-121); esercitazione 13 (2022-23).

## Prerequisiti
- [[Derivata]]: definizione di derivata

## Porta a
- [[Integrazione per parti]]: regola del prodotto letta al contrario
- [[Integrazione per sostituzione]]: regola della composizione letta al contrario
- [[Velocità e accelerazione]]: velocità e accelerazione sono derivate della posizione
- [[Equazioni differenziali lineari del primo ordine]]: verifica della formula

## Collegati
- [[Derivate delle funzioni elementari]]: insieme permettono di derivare ogni funzione elementare composta
- [[Derivata della funzione inversa]]: regola di calcolo
