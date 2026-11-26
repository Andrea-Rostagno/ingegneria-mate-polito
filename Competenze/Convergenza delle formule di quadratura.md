---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["convergence of quadrature rules", "formula di quadratura convergente", "teorema di convergenza delle formule di quadratura", "somma dei moduli dei pesi"]
tags: [competenza, area/numerica]
---

# Convergenza delle formule di quadratura

> Una formula interpolatoria pesata converge per ogni integranda continua se la somma dei moduli dei pesi resta limitata; la velocità dipende dalla regolarità dell'integranda.

## Definizione / enunciato
La formula è **convergente** se $\lim_{n\to\infty}R_n(g)=0$.

**Teorema.** Se (1) $g\in C^0([a,b])$ e (2) $\sum_{j=1}^n|\bar w_j|\le M$ con $M$ indipendente da $n$, allora $R_n(g)\to0$. Se inoltre $g\in C^{k,\mu}([a,b])$, $k\ge0$, $0\le\mu\le1$:
$$|R_n(g)|=O\!\left(\frac1{n^{k+\mu}}\right).$$
*Dimostrazione:* con $q^*_{n-1}$ di migliore approssimazione uniforme, sfruttando l'esattezza sui polinomi di grado $\le n-1$,
$$|R_n(g)|\le\Big(\int_a^bw\,dx+M\Big)\|g-q^*_{n-1}\|_\infty,$$
e si conclude con i teoremi di Jackson.

## Formule chiave
Se $\sum|w_i|=O(n^r)$, $r>0$, allora $|R_n(g)|=O(n^{-(k+\mu-r)})$: per $r>k+\mu$ la formula diverge. Per $r=0$, $k=0$: $o(1)$ se $\mu=0$, $O(n^{-\mu})$ se $\mu>0$.

## Intuizione
I pesi dipendono solo dai nodi. Se la loro somma in modulo cresce, gli errori sui valori di $g$ vengono amplificati: è lo stesso ruolo della costante di Lebesgue nell'interpolazione.

## Come si usa
- **Gaussiane:** pesi positivi, $\sum|\bar w_j|=\int_a^bw=M$, quindi convergono per ogni $g$ continua.
- **Newton-Cotes:** pesi di segno variabile con $\sum|w_i|\to\infty$; nessuna convergenza garantita nemmeno per $g\in C^\infty$.
- **Composte:** convergono per ogni integranda continua al tendere a zero del passo.

Più $g$ è regolare, più la convergenza è rapida: per questo conviene isolare la parte singolare nel peso.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 25, 36-44, 58).

## Prerequisiti
- [[Formule di quadratura interpolatorie]]: errore $R_n$ e pesi $\bar w_j$
- [[Costante di Lebesgue]]: polinomio di migliore approssimazione e teoremi di Jackson

## Porta a
- Nessuno.

## Collegati
- [[Formule gaussiane]]: convergono per ogni $g$ continua
- [[Formule di Newton-Cotes]]: possono divergere
- [[Formule di quadratura composte]]: alternativa convergente che non aumenta il grado
