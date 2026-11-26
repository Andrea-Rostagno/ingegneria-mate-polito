---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["antiderivatives", "integrali immediati", "tavola degli integrali", "table of integrals", "integrale indefinito", "indefinite integral", "primitiva", "linearità dell'integrale"]
tags: [competenza, area/analisi]
---

# Primitive delle funzioni elementari

> La tavola degli integrali indefiniti delle funzioni elementari, con la linearità e la regola $\int\frac{\varphi'}{\varphi}=\log|\varphi|+c$.

## Definizione / enunciato
Una primitiva di $f$ è una funzione la cui derivata è $f$; l'integrale indefinito $\int f(x)\,dx$ indica la famiglia delle primitive, definite a meno di una costante $c$ (definizione non presente nel formulario, che riporta solo le tavole: da verificare sul testo del corso).

| $f(x)$ | $\int f(x)\,dx$ |
|---|---|
| $x^\alpha$ | $\dfrac{x^{\alpha+1}}{\alpha+1}+c$, $\alpha\ne-1$ |
| $\dfrac1x$ | $\log\lvert x\rvert+c$ |
| $\sin x$ | $-\cos x+c$ |
| $\cos x$ | $\sin x+c$ |
| $e^x$ | $e^x+c$ |
| $\sinh x$ | $\cosh x+c$ |
| $\cosh x$ | $\sinh x+c$ |
| $\dfrac1{1+x^2}$ | $\arctan x+c$ |
| $\dfrac1{\sqrt{1-x^2}}$ | $\arcsin x+c$ |
| $\dfrac1{\sqrt{1+x^2}}$ | $\log(x+\sqrt{x^2+1})+c=\operatorname{sett\,sinh}x+c$ |
| $\dfrac1{\sqrt{x^2-1}}$ | $\log(x+\sqrt{x^2-1})+c=\operatorname{sett\,cosh}x+c$ |

## Formule chiave
$$\int\big(\alpha f(x)+\beta g(x)\big)dx=\alpha\!\int f(x)\,dx+\beta\!\int g(x)\,dx,\qquad \int\frac{\varphi'(x)}{\varphi(x)}\,dx=\log\lvert\varphi(x)\rvert+c .$$

## Intuizione
La tavola è la tavola delle derivate letta al contrario: ogni riga si verifica derivando il secondo membro. Il caso $\alpha=-1$ è escluso dalla prima riga perché la primitiva di $\frac1x$ è logaritmica.

## Come si usa
Si spezza l'integrando per linearità in termini della tavola; se l'integrando è il rapporto tra una funzione e la sua derivata si usa la regola del logaritmo. Quando non basta si passa a parti o a sostituzione. Il programma prevede anche "integrazione di funzioni razionali" e la "caratterizzazione delle funzioni costanti", non sviluppate nel materiale.

## Nei corsi
- **Analisi 1** (triennale): "Primitive, ... integrale indefinito. Primitive di funzioni elementari, regole di calcolo delle primitive". Fonti: `triennale/ANNO 1/analisi 1/formulario.pdf` (p. 5, "Tavola degli integrali di funzioni elementari" e "Regole di integrazione"); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Analisi 1** (seconda passata, 2026-11-24): definizione di primitiva su un intervallo e teoria in Mazzi `Primitive.pdf` (def. 1.1, prop. 1.1-1.2: due primitive su un intervallo differiscono per una costante, conseguenza del teorema di Lagrange) e tavola completa in Morandotti (5.53). Il legame con l'integrale definito è il Teorema fondamentale del calcolo integrale. Esempio della lezione del 24/11/2021: la funzione di Heaviside non ammette primitiva su $\mathbb R$. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Primitive.pdf` (pp. 1-2); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§5.3, def. 5.3.1, (5.53), PDF pp. 186-191); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-24.pdf` (p. 1); esercitazioni 17-19 (2022-23).

## Prerequisiti
- [[Derivate delle funzioni elementari]]: la tavola letta al contrario
- [[Funzioni a derivata nulla]]: le primitive differiscono per costanti

## Porta a
- [[Integrazione per parti]]: si applica quando la tavola non basta
- [[Integrazione per sostituzione]]: riconduce l'integrando a una forma della tavola
- [[Velocità e accelerazione]]: si risale alla legge oraria integrando
- [[Teorema fondamentale del calcolo integrale]]: G(b)-G(a)
- [[Integrazione delle funzioni razionali]]: log e arctan finali
- [[Equazioni a variabili separabili]]: si integrano entrambi i membri
- [[Equazioni differenziali lineari del primo ordine]]: A e B sono primitive

## Collegati
- Nessuno.
