---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["derivative limit theorem", "teorema tappabuchi", "tappabuchi"]
tags: [competenza, area/analisi]
---

# Teorema del limite della derivata

> Il "tappabuchi": se $f$ è continua in $x_0$ e $f'(x)$ ha limite $\ell$ per $x\to x_0$, allora $f$ è derivabile in $x_0$ con $f'(x_0)=\ell$; dai limiti laterali di $f'$ si classificano anche i punti di non derivabilità.

## Definizione / enunciato
**Teorema 1.9 (del tappabuchi)** (Mazzi). Sia $f$ definita in un intorno $B(x_0)$, continua in $x_0$, derivabile in $B(x_0)\setminus\{x_0\}$, e esistano $\lim_{x\to x_0^-}f'(x)=\ell_1$ e $\lim_{x\to x_0^+}f'(x)=\ell_2$ in $\overline{\mathbb R}$. Allora:
- (A) $\ell_1\in\mathbb R\Rightarrow f'_-(x_0)=\ell_1$; (B) $\ell_2\in\mathbb R\Rightarrow f'_+(x_0)=\ell_2$;
- (C) $\ell_1=\ell_2\in\mathbb R\Rightarrow f$ è derivabile in $x_0$ e $f'(x_0)=\ell_1=\ell_2$;
- (D) se $\ell_1$ o $\ell_2$ è infinito, $f$ non è derivabile in $x_0$;
- (E) $\ell_1,\ell_2$ infiniti dello stesso segno: punto a tangente verticale; di segno opposto: cuspide.

## Formule chiave
$$\lim_{x\to x_0^\pm}\frac{f(x)-f(x_0)}{x-x_0}\ \overset{\text{H}}{=}\ \lim_{x\to x_0^\pm}f'(x)$$

## Intuizione
È de l'Hôpital applicato al rapporto incrementale ($0/0$ grazie alla continuità): la derivata in $x_0$ "tappa il buco" lasciato dai valori di $f'$ vicino a $x_0$. La continuità è indispensabile.

## Come si usa
Per funzioni definite a tratti: si verifica la continuità nel punto di raccordo, poi si confrontano i limiti di $f'$ da destra e da sinistra. Il viceversa non vale: $f$ può essere derivabile in $x_0$ senza che $f'$ abbia limite (Mazzi §1.10.1 sulla discontinuità della derivata). Esercizi tipo: esercitazione 14 (2022-23, es. 3: trovare $\alpha,\beta$ perché la funzione a tratti sia continua e derivabile).

## Nei corsi
- **Analisi 1** (triennale): applicazione di de l'Hôpital alla derivabilità; nell'elenco dei teoremi come "teorema tappabuchi". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (teor. 1.9, p. 29; §1.10.1); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.2.15, PDF p. 130); `triennale/ANNO 1/analisi 1/Esercitazioni 2022-23 (con svolti)/Esercitazione_14.pdf`.

## Prerequisiti
- [[Teorema di de l'Hôpital]]: applicato al rapporto incrementale
- [[Punti di non derivabilità]]: classifica i casi infiniti

## Porta a
- Nessuno.

## Collegati
- Nessuno.
