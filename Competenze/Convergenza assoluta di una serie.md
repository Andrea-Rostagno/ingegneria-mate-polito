---
tipo: competenza
area: analisi
corsi: [Analisi 2, Analisi funzionale]
livello: [triennale]
aliases: ["absolute convergence of series", "serie assolutamente convergente", "criterio della convergenza assoluta", "serie dei moduli"]
tags: [competenza, area/analisi]
---

# Convergenza assoluta di una serie

> Se la serie dei moduli $\sum|a_n|$ converge, converge anche $\sum a_n$; il viceversa è falso.

## Definizione / enunciato
$\sum a_n$ **converge assolutamente** se converge $\sum|a_n|$.

**Criterio della convergenza assoluta.** Se $\sum|a_n|$ converge, allora converge anche $\sum a_n$ ($a_n$ di segno qualunque).

Dimostrazione: per $M>N$, $|S_M-S_N|\le|a_{N+1}|+\dots+|a_M|=|\tilde S_M-\tilde S_N|$; se le somme parziali dei moduli $\tilde S_N$ formano una successione di Cauchy, lo fanno anche le $S_N$.

## Formule chiave
$$\Big|\sum_{n=N+1}^Ma_n\Big|\le\sum_{n=N+1}^M|a_n|.$$

## Intuizione
La convergenza assoluta è sufficiente ma non necessaria: $\sum\frac{(-1)^n}n$ converge (criterio di Leibniz, usato a lezione ma enunciato in una lezione non presente nel materiale) mentre $\sum\frac1n$ diverge. Con segni "caotici" (come $\sin n$: tre, a volte quattro, termini consecutivi dello stesso segno) è l'unico criterio che si può provare.

## Come si usa
- $\sum\frac{\sin n}{n^2}$: $\frac{|\sin n|}{n^2}\le\frac1{n^2}$, quindi converge assolutamente e quindi converge.
- $\sum\frac{\sin n}n$ resta difficile: il criterio non si applica.
- Controesempio: $\sum(-1)^nb_n$ con $b_n=\frac1n$ per $n$ pari e $2^{-n}$ per $n$ dispari diverge a $+\infty$, pur essendo a segni alterni.
- Nelle serie di potenze si studia la serie dei moduli con il criterio del rapporto.

## Nei corsi
- **Analisi 2** (triennale): lezione del 05/12/2022 ("Riprendiamo il criterio"). Fonte: `triennale/ANNO 2/analisi 2/AII 19 serie potenze.pdf` (pp. 1-6, 16-17).
- **Analisi funzionale** (triennale): serie in uno spazio normato $X$ (Def. 4.18): $\sum x_n$ converge assolutamente se $\sum_n\|x_n\|<\infty$. In uno **spazio di Banach** la convergenza assoluta implica la convergenza (Prop. 4.20: le somme parziali sono di Cauchy); in ogni spazio normato una serie assolutamente convergente converge **incondizionatamente**, cioè $\sum x_{\sigma(n)}=x$ per ogni biiezione $\sigma$ (Prop. 4.21). Per serie reali le due nozioni coincidono, ma in spazi di Hilbert esistono serie incondizionatamente ma non assolutamente convergenti (Oss. 6.45). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§4.4, pp. 37-38); `triennale/ANNO 3/analisi funzionale/03_spazinormati_handout.pdf` (p. 7).

## Prerequisiti
- [[Serie numerica]]: serie a termini di segno qualunque
- [[Criterio del confronto per serie]]: si applica il confronto a Σ|a_n|

## Porta a
- [[Teorema di Riemann sul riordinamento]]: riordinamenti
- [[Serie di potenze]]: convergenza assoluta nel lemma

## Collegati
- [[Convergenza assoluta degli integrali impropri]]: analogo per gli integrali
- [[Spazio di Banach]]: serie a valori vettoriali, la completezza garantisce la convergenza (Analisi funzionale)
- [[Criterio di invertibilità di Neumann]]: la serie Σ T^n converge assolutamente in B(X) (Analisi funzionale)
