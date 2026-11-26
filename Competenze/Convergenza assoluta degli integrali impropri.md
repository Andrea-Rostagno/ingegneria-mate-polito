---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["absolute convergence", "integrabilità assoluta", "assolutamente convergente"]
tags: [competenza, area/analisi]
---

# Convergenza assoluta degli integrali impropri

> Un integrale improprio converge assolutamente se converge quello di $|f|$; la convergenza assoluta implica la convergenza, ma non viceversa.

## Definizione / enunciato
**Definizione** (lezione del 15/12/2021; Lussardi def. 4.4.5; Morandotti def. 5.5.5). $\int_a^{+\infty}f$ (o $\int_a^bf$ improprio in $b$) **converge assolutamente** se converge $\int_a^{+\infty}|f(x)|\,dx$.

**Criterio di convergenza assoluta** (corollario nella lezione; Lussardi teor. 4.4.6; Morandotti cor. 5.5.4, 5.5.13). Se $\int|f|$ converge, allora $\int f$ converge e
$$\left|\int_a^{+\infty}f(x)\,dx\right|\le\int_a^{+\infty}|f(x)|\,dx .$$
Il viceversa è falso: convergenza assoluta $\Rightarrow$ convergenza, ma convergenza $\not\Rightarrow$ convergenza assoluta.

## Formule chiave
$$\int|f|<+\infty\ \Rightarrow\ \int f\ \text{converge},\qquad \left|\int f\right|\le\int|f|$$

## Intuizione
Se l'area totale (contata tutta positiva) è finita, a maggior ragione lo è quella con segno, dove parti positive e negative si compensano. La compensazione può però bastare da sola, come per $\frac{\sin x}x$.

## Come si usa
Per integrande di segno variabile si studia $|f|$ con i criteri del confronto: tipicamente si maggiora $|\sin x|\le1$ o $|\cos x|\le1$. Controesempio della lezione del 15/12/2021: $\int_2^{+\infty}\frac{\sin x}x\,dx$ converge ma non assolutamente (proposto come esercizio "difficile"). Esercizi dell'esercitazione 21 (2022-23): $\int_\pi^{+\infty}\frac1{x^2}\sin\frac1x\,dx$, $\int_{-1}^{+\infty}\frac{\sin x+\cos x}{x^2-x+1}dx$ (es. 1(d) e 1(f)).

## Nei corsi
- **Analisi 1** (triennale): "integrabilità assoluta". Fonti: `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-15.pdf` (pp. 2-3); `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (def. 4.4.5, teor. 4.4.6, pp. 79-80); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (cor. 5.5.4, def. 5.5.5, PDF p. 207).

## Prerequisiti
- [[Criteri di convergenza per integrali impropri]]: si applica il confronto a |f|
- [[Valore assoluto]]: |∫f|≤∫|f|

## Porta a
- Nessuno.

## Collegati
- Nessuno.
