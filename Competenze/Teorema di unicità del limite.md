---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["uniqueness of the limit"]
tags: [competenza, area/analisi]
---

# Teorema di unicità del limite

> Se una funzione (o una successione) ha limite in un punto, quel limite è uno solo.

## Definizione / enunciato
**Teorema** (Mazzi, teor. 1.1). Siano $f:A\to\mathbb R$ e $\bar x\in\overline{\mathbb R}$ di accumulazione per $A$. Se esiste $\lim_{x\to\bar x}f(x)=\ell\in\overline{\mathbb R}$, allora $\ell$ è l'unico limite di $f$ per $x\to\bar x$.

Per le successioni (Morandotti, teor. 2.2.6): il limite di una successione convergente è unico.

## Formule chiave
Dimostrazione per assurdo, caso $\ell_1\ne\ell_2$ reali: con $\varepsilon=\frac13|\ell_1-\ell_2|$ gli intorni $B_\varepsilon(\ell_1)$ e $B_\varepsilon(\ell_2)$ sono disgiunti, ma nell'intersezione $B_1(\bar x)\cap B_2(\bar x)$ dovrebbe valere $f(x)\in B_\varepsilon(\ell_1)\cap B_\varepsilon(\ell_2)=\emptyset$.

Versione per successioni: $|\ell_1-\ell_2|\le|a_n-\ell_1|+|a_n-\ell_2|<2\varepsilon$ per ogni $\varepsilon$, quindi $\ell_1=\ell_2$.

## Intuizione
Due valori diversi si possono separare con intorni disgiunti; la funzione non può stare definitivamente in entrambi. È ciò che autorizza a scrivere "il" limite.

## Come si usa
Si usa implicitamente ogni volta che si scrive $\lim f=\ell$, e esplicitamente nelle dimostrazioni per assurdo: se due procedimenti danno limiti diversi, il limite non esiste (sottosuccessioni, caratterizzazione sequenziale). La lezione del 18/10/2021 lo enuncia per $f:U\subseteq\mathbb R\to\mathbb R$, $\gamma\in\overline{\mathbb R}$ e lo dimostra con intorni disgiunti.

## Nei corsi
- **Analisi 1** (triennale): "teoremi sui limiti: unicità del limite", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (teor. 1.1, p. 5); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 2.2.6, PDF pp. 61-62); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-18.pdf` (p. 1); `triennale/ANNO 1/analisi 1/Appunti, riassunti e teoremi/Analisi Matematica 1 - TEOREMI.pdf` (elenco).

## Prerequisiti
- [[Limite di funzione]]: definizione usata nella dimostrazione

## Porta a
- Nessuno.

## Collegati
- [[Dimostrazione per contrapposizione e per assurdo]]: si dimostra per assurdo
