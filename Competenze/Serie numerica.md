---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["numerical series", "serie", "somma parziale", "partial sum", "carattere di una serie", "serie convergente", "serie divergente", "serie indeterminata", "condizione necessaria di convergenza"]
tags: [competenza, area/analisi]
---

# Serie numerica

> Una serie formalizza la "somma di infiniti termini" come limite delle somme parziali: può convergere, divergere o essere indeterminata.

## Definizione / enunciato
Data $\{a_n\}_{n\ge1}$, la serie $\sum_{n=1}^\infty a_n$ ha somme parziali $S_N=\sum_{n=1}^Na_n$ ed è
- **convergente** se esiste finito $L=\lim_{N\to+\infty}S_N$ (la somma della serie);
- **divergente** a $\pm\infty$ se il limite vale $\pm\infty$;
- **indeterminata** se il limite non esiste.

Il carattere non cambia modificando un numero finito di termini o spostando l'indice di partenza.

**Condizione necessaria.** Se $\sum a_n$ converge, allora $\lim_n a_n=0$ (perché $a_N=S_N-S_{N-1}\to L-L$).

## Formule chiave
Linearità: se $\sum a_n$ e $\sum b_n$ convergono, $\sum(\alpha a_n+\beta b_n)=\alpha\sum a_n+\beta\sum b_n$. Se una converge e l'altra diverge, la somma diverge; la somma di due divergenti o indeterminate può fare qualunque cosa.

## Intuizione
Se $a_n\ge0$ le somme parziali crescono, quindi la serie converge o diverge a $+\infty$ ma non è mai indeterminata. La condizione $a_n\to0$ non basta: la serie armonica $\sum\frac1n$ diverge.

## Come si usa
Esempi di apertura del docente:
- il "Sierpinski gasket": dal quadrato di lato 1 si tolgono il quadrato centrale di lato $\frac13$, poi gli 8 di lato $\frac1{3^2}$, e così via. L'area rimossa è la serie $\sum_{n\ge0}\frac{8^n}{9^{n+1}}=1$, mentre la somma dei perimetri diverge;
- la pallina che a ogni rimbalzo perde $\frac15$ dell'energia cinetica fa infiniti rimbalzi in un tempo finito $T=\sum T_n$ (esercizio senza soluzione scritta).

## Nei corsi
- **Analisi 2** (triennale): lezione del 28/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 17 2022 serie numeriche.pdf` (pp. 1-10). La pagina 3 riporta $\dim C=\log_89$ per il frattale: è un dato del docente non usato nella nota.

## Prerequisiti
- [[Limite di successione]]: limite delle somme parziali

## Porta a
- [[Serie geometrica]]: esempio fondamentale
- [[Criterio del confronto integrale]]: criterio per serie a termini positivi
- [[Criterio del confronto per serie]]: criterio per serie a termini positivi
- [[Convergenza assoluta di una serie]]: serie di segno variabile
- [[Serie di Fourier]]: serie trigonometrica

## Collegati
- Nessuno.
