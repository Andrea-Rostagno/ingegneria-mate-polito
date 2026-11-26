---
tipo: competenza
area: analisi
corsi: [Analisi 2, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: ["geometric series", "serie geometrica di ragione alpha", "somma della serie geometrica", "numeri periodici come serie"]
tags: [competenza, area/analisi]
---

# Serie geometrica

> $\sum_{n\ge0}\alpha^n$ converge se e solo se $|\alpha|<1$, con somma $\frac1{1-\alpha}$: è il prototipo di serie e di serie di potenze.

## Definizione / enunciato
**Teorema.** La serie $\sum_{n=0}^\infty\alpha^n=1+\alpha+\alpha^2+\dots$ è
- convergente $\iff|\alpha|<1$, con somma $\frac1{1-\alpha}$;
- indeterminata se $\alpha\le-1$;
- divergente a $+\infty$ se $\alpha\ge1$.

## Formule chiave
$$S_N=\sum_{n=0}^{N-1}\alpha^n=\frac{1-\alpha^N}{1-\alpha}\ (\alpha\ne1),\qquad \sum_{n=k}^\infty\alpha^n=\frac{\alpha^k}{1-\alpha}\ (|\alpha|<1).$$

## Intuizione
È uno dei pochi casi in cui la somma parziale si calcola esplicitamente: moltiplicando per $1-\alpha$ i termini si cancellano a catena e resta $1-\alpha^N$. Con $\alpha=\frac12$: a $1+\frac12+\dots+\frac1{2^n}$ manca esattamente $\frac1{2^n}$ per arrivare a 2.

## Come si usa
Esempi della lezione:
- area rimossa dal frattale: $\frac19\sum(\frac89)^n=\frac19\cdot\frac1{1-8/9}=1$; somma dei perimetri: $\frac43\sum(\frac83)^n=+\infty$;
- $0{,}\overline{41}=41\cdot10^{-2}\sum100^{-n}=\frac{41}{99}$; per esercizio $0{,}7\overline{41}$ e $0{,}\bar9=1$;
- sviluppi in serie di potenze ($\frac1{1-x}=\sum x^n$) e le somme che compaiono con Parseval.

## Nei corsi
- **Analisi 2** (triennale): lezione del 28/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 17 2022 serie numeriche.pdf` (pp. 6-12).
- **Blockchain e criptoeconomia** (magistrale): l'emissione di Bitcoin. La ricompensa di 50 BTC si dimezza ogni 210.000 blocchi; i primi 4 anni emettono 10,5 milioni, metà del totale, e $\frac12+\frac14+\frac18+\dots=\sum_{k\ge1}(\frac12)^k=1$ porta il totale a 21 milioni. È un'approssimazione: sotto 1 satoshi la ricompensa non si paga più (gennaio 2140). Fonte: `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 87-90).

## Prerequisiti
- [[Serie numerica]]: carattere di una serie

## Porta a
- [[Serie di potenze]]: serie di potenze
- [[Halving]]: l'emissione totale di Bitcoin è una serie geometrica di ragione 1/2 (Blockchain e criptoeconomia)

## Collegati
- Nessuno.
