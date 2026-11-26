---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["integration of rational functions", "fratti semplici", "partial fractions", "funzioni razionali fratte"]
tags: [competenza, area/analisi]
---

# Integrazione delle funzioni razionali

> Le primitive di un quoziente di polinomi si ottengono con la divisione e la scomposizione in fratti semplici: risultano combinazioni di polinomi, logaritmi e arcotangenti.

## Definizione / enunciato
**Teorema 5.4.3** (Morandotti). Sia $f=P/Q$ una funzione razionale fratta, con $\operatorname{dom}f=\mathbb R\setminus\{Q=0\}$. Le sue primitive sono combinazioni lineari di (polinomi,) logaritmi e arcotangenti, in particolare della forma $\log(ax^2+bx+c)$ e $\arctan(\alpha x+\beta)$.

Procedura (Morandotti §5.4.1, es. 5.4.4):
1. se $\deg P\ge\deg Q$, si esegue la divisione: $\frac PQ=S+\frac RQ$ con $\deg R<\deg Q$;
2. si fattorizza $Q$ in fattori lineari e quadratici irriducibili (teorema fondamentale dell'algebra);
3. si scrive $\frac RQ$ come somma di fratti semplici e si integra ciascuno; per i termini di secondo grado il caso dipende dal segno di $\Delta$.

## Formule chiave
$$\int\frac{dx}{x-a}=\log|x-a|+c,\qquad \int\frac{dx}{1+x^2}=\arctan x+c$$
Esempio di Morandotti (es. 5.4.4-1): $\dfrac{x^5+2x^4}{x^3+1}=x^2+2x-\dfrac{x^2+2x}{x^3+1}$, con $x^3+1=(x+1)(x^2-x+1)$.

## Intuizione
Ogni fattore del denominatore contribuisce con un pezzo elementare: le radici reali danno logaritmi, le coppie di radici complesse coniugate danno arcotangenti (completando il quadrato) e logaritmi di trinomi.

## Come si usa
Esercizi dell'esercitazione 18 (2022-23, "integrazione di funzioni razionali fratte, decomposizione in fratti semplici"): $\int\frac{dx}{x^2+2x+3}$, $\int\frac{3x+2}{x^2+x+1}dx$, $\int\frac{x+3}{x^2-6x}dx$, $\int\frac{x^3-2x^2-x+3}{x^2-3x+2}dx$, $\int\frac{dx}{x(x^2+1)^2}$. Molte sostituzioni (ad esempio con esponenziali o radici) riconducono a integrali razionali.

## Nei corsi
- **Analisi 1** (triennale): "integrazione di funzioni razionali". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§5.4.1, teor. 5.4.3, es. 5.4.4, PDF pp. 197-204); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_18.pdf`; `triennale/ANNO 1/analisi 1/Esercitazioni 2021-22 (manoscritte e svolte)/ESERCITAZIONE_23_INTEGRALI_DI_FUNZIONI_RAZIONALI_16_12_21.pdf` (scansione).

## Prerequisiti
- [[Primitive delle funzioni elementari]]: log e arctan finali
- [[Teorema fondamentale dell'algebra]]: fattorizzazione del denominatore

## Porta a
- Nessuno.

## Collegati
- [[Integrazione per sostituzione]]: per i termini di secondo grado
