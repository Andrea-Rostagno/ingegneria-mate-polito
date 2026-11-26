---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["limit of a sequence", "successione convergente", "successione divergente", "successione regolare", "definitivamente"]
tags: [competenza, area/analisi]
---

# Limite di successione

> Una successione converge a $\ell$ se da un certo indice in poi resta vicina a $\ell$ quanto si vuole; diverge se supera definitivamente ogni soglia.

## Definizione / enunciato
Una successione è una funzione $n\mapsto a_n$ con dominio $\mathbb N$ (o $\{n\ge n_0\}$). Un predicato vale **definitivamente** se vale per ogni $n\ge n_0$. Definizione 2.2.1 di Morandotti:
1. $\{a_n\}$ è **infinitesima** se $\forall\varepsilon>0\ \exists\nu_\varepsilon\in\mathbb N:\ \forall n>\nu_\varepsilon\ |a_n|<\varepsilon$;
2. $\{a_n\}$ **converge** a $\ell\in\mathbb R$ se $\{a_n-\ell\}$ è infinitesima: $\forall\varepsilon>0\ \exists\nu_\varepsilon:\ \forall n>\nu_\varepsilon\ |a_n-\ell|<\varepsilon$;
3. $\{a_n\}$ **diverge** a $+\infty$ se $\forall M\in\mathbb R\ \exists\nu_M:\ \forall n>\nu_M\ a_n>M$ (a $-\infty$ con $a_n<M$).

È **regolare** se ammette limite in uno di questi sensi, **non regolare** (irregolare) altrimenti. Poiché $\mathbb N$ ha solo $+\infty$ come punto di accumulazione, l'unico limite che ha senso è per $n\to+\infty$.

Proprietà: il limite è unico (teor. 2.2.6); una successione convergente è limitata (teor. 2.2.7; Mazzi, prop. 1.5); valgono permanenza del segno, confronto e carabinieri (teor. 2.2.8).

## Formule chiave
$$\lim_{n\to\infty}a_n=\ell\iff\forall\varepsilon>0\ \exists\nu_\varepsilon\in\mathbb N:\ n>\nu_\varepsilon\Rightarrow|a_n-\ell|<\varepsilon$$
Successione geometrica (Mazzi, es. 1.16): $q^n\to+\infty$ se $q>1$, $\to1$ se $q=1$, $\to0$ se $|q|<1$, non ha limite se $q\le-1$.

## Intuizione
Si fissa la tolleranza $\varepsilon$, poi si cerca un indice oltre il quale tutti i termini stanno nella fascia $(\ell-\varepsilon,\ell+\varepsilon)$: l'ordine "$\forall\varepsilon\ \exists\nu$" è essenziale, $\nu$ dipende da $\varepsilon$.

## Come si usa
Verifica dalla definizione (Morandotti, es. 2.2.3): $a_n=1/n\to0$ perché $|1/n|<\varepsilon$ per $n>1/\varepsilon$. Nella lezione dell'11/10/2021 si dimostra per assurdo che $a_n=n^2$ non converge (se convergesse a $\ell$, $\mathbb N$ sarebbe superiormente limitato). Esercizi tipo: esercitazione 7 (2021-22, "limiti di successioni"), esercitazione 9 (2022-23).

## Nei corsi
- **Analisi 1** (triennale): "successioni, limiti di successioni". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§2.1-2.2, def. 2.2.1-2.2.4, teor. 2.2.6-2.2.8, PDF pp. 60-63); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.7, pp. 23-26); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-11.pdf` (p. 1).

## Prerequisiti
- [[Quantificatori]]: ordine ∀ε ∃ν
- [[Valore assoluto]]: distanza |a_n-ℓ|

## Porta a
- [[Sottosuccessione]]: ha lo stesso limite
- [[Teorema sulle successioni monotone]]: definizione di convergenza
- [[Forme indeterminate]]: teoremi algebrici per successioni
- [[Caratterizzazione sequenziale del limite]]: si valuta f lungo x_n

## Collegati
- [[Limite di funzione]]: caso x̄=+∞ sul dominio N
