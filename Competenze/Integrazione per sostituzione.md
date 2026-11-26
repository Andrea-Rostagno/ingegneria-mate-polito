---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["integration by substitution", "change of variables", "cambio di variabile", "metodo di sostituzione"]
tags: [competenza, area/analisi]
---

# Integrazione per sostituzione

> Se l'integrando ha la forma $f(\varphi(x))\varphi'(x)$, il cambio di variabile $y=\varphi(x)$ lo trasforma nell'integrale di $f$.

## Definizione / enunciato
$$\int f(\varphi(x))\,\varphi'(x)\,dx=\int f(y)\,dy\qquad\text{con } y=\varphi(x),$$
e alla fine si torna alla variabile $x$ ponendo $y=\varphi(x)$.

## Formule chiave
Caso particolare con $f(y)=\frac1y$:
$$\int\frac{\varphi'(x)}{\varphi(x)}\,dx=\log\lvert\varphi(x)\rvert+c .$$

## Intuizione
È la regola di derivazione della funzione composta letta al contrario: se $F$ è una primitiva di $f$, allora $\big(F(\varphi(x))\big)'=f(\varphi(x))\,\varphi'(x)$. Il fattore $\varphi'(x)\,dx$ corrisponde a $dy$.

## Come si usa
Si cerca nell'integrando una funzione interna $\varphi(x)$ accompagnata (a meno di costanti) dalla sua derivata; si pone $y=\varphi(x)$, si integra in $y$ con la tavola delle primitive e si sostituisce indietro. Il formulario dà la regola, ma il materiale della cartella non contiene esercizi svolti.

## Nei corsi
- **Analisi 1** (triennale): "integrazione per sostituzione e per parti". Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 5, "Regole di integrazione"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Analisi 1** (seconda passata, 2026-11-24): versione per primitive nella lezione del 25/11/2021 ($\int f(\varphi(x))\varphi'(x)\,dx=F(\varphi(x))+c$, con l'esempio $\int\tan x\,dx$ ponendo $y=\cos x$) e per integrali definiti nella lezione del 13/12/2021: per $f\in C^0([a,b])$, $\varphi\in C^1([\alpha,\beta])$ con $\varphi([\alpha,\beta])\subseteq[a,b]$, $\int_\alpha^\beta f(\varphi(x))\varphi'(x)\,dx=\int_{\varphi(\alpha)}^{\varphi(\beta)}f(y)\,dy$. Fonti: `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-25.pdf` (p. 1); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-13.pdf` (p. 1); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 5.3.4, PDF p. 188); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Primitive.pdf` (teor. 1.2).

## Prerequisiti
- [[Regole di derivazione]]: regola della composizione letta al contrario
- [[Primitive delle funzioni elementari]]: riconduce l'integrando a una forma della tavola
- [[Teorema fondamentale del calcolo integrale]]: versione per integrali definiti

## Porta a
- Nessuno.

## Collegati
- [[Integrazione delle funzioni razionali]]: per i termini di secondo grado
