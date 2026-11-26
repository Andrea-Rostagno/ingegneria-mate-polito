---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["integration by parts", "formula di integrazione per parti", "fattore finito e fattore differenziale"]
tags: [competenza, area/analisi]
---

# Integrazione per parti

> Regola per integrare un prodotto: si sposta la derivata da un fattore all'altro, sperando che il nuovo integrale sia più semplice.

## Definizione / enunciato
Se $f$ e $g$ sono derivabili (con derivate continue),
$$\int f(x)\,g'(x)\,dx=f(x)\,g(x)-\int f'(x)\,g(x)\,dx .$$

## Formule chiave
$$\int f\,g'\,dx=f\,g-\int f'\,g\,dx .$$

## Intuizione
È la regola di derivazione del prodotto letta al contrario: da $(fg)'=f'g+fg'$, integrando, $fg=\int f'g+\int fg'$. Si sceglie come $g'$ il fattore di cui si conosce una primitiva dalla tavola e come $f$ quello che derivando si semplifica.

## Come si usa
Il formulario dà la sola regola e il materiale della cartella non contiene esercizi svolti. Schema d'uso: riconoscere nell'integrando un prodotto $f\cdot g'$, prendere $g$ dalla tavola delle primitive, calcolare $f'$ e verificare che $\int f'g$ sia più semplice dell'integrale di partenza; se necessario ripetere.

## Nei corsi
- **Analisi 1** (triennale): "integrazione per sostituzione e per parti". Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 5, "Regole di integrazione"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma). Le ipotesi di regolarità non sono scritte nel formulario (da verificare sul testo del corso).
- **Analisi 1** (seconda passata, 2026-11-24): versione per integrali indefiniti in Mazzi `Primitive.pdf` (teor. 1.1) e per integrali definiti in Morandotti (teor. 5.3.3) e nella lezione del 13/12/2021: per $f,g\in C^1([a,b])$, $\int_a^bf(x)g'(x)\,dx=[f(x)g(x)]_a^b-\int_a^bf'(x)g(x)\,dx$, con l'esempio $\int_0^1\arctan x\,dx$. Esercizi svolti: esercitazione 17 (2022-23). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Primitive.pdf` (p. 5); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 5.3.3, PDF p. 187); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-13.pdf` (p. 1).

## Prerequisiti
- [[Regole di derivazione]]: regola del prodotto letta al contrario
- [[Primitive delle funzioni elementari]]: si applica quando la tavola non basta
- [[Teorema fondamentale del calcolo integrale]]: versione per integrali definiti

## Porta a
- Nessuno.

## Collegati
- Nessuno.
