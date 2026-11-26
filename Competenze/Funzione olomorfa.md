---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["holomorphic function", "funzione analitica", "analytic function", "derivata complessa", "complex derivative", "funzione intera", "entire function", "derivabilità in senso complesso"]
tags: [competenza, area/analisi]
---

# Funzione olomorfa

> Una funzione di variabile complessa è olomorfa (analitica) su un aperto se ha derivata complessa in ogni punto: una condizione molto più forte della derivabilità reale, che la rende automaticamente $C^\infty$ e sviluppabile in serie.

## Definizione / enunciato
$f$ definita in un intorno di $z_0$ è **derivabile** in $z_0$ se esiste finito
$$f'(z_0)=\lim_{z\to z_0}\frac{f(z)-f(z_0)}{z-z_0}=\lim_{\Delta z\to0}\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}\quad(2.1)\text{-}(2.2).$$
Equivalentemente $f(z)=f(z_0)+f'(z_0)(z-z_0)+o(z-z_0)$ (2.3). Derivabile $\Rightarrow$ continua.
Su un aperto $\Omega$: $f$ **analitica (olomorfa)** se derivabile in ogni $z\in\Omega$; analitica in $z_0$ se lo è in un intorno $B_r(z_0)$; **intera** se analitica su tutto $\mathbb C$ (Def. 2.3).

## Formule chiave
- Regole di somma, prodotto, quoziente e della catena identiche al caso reale (Teoremi 2.4-2.5): $(g\circ f)'(z_0)=g'(f(z_0))f'(z_0)$.
- $DP_n(z)=a_1+2a_2z+\dots+na_nz^{n-1}$; polinomi, $e^z$, funzioni trigonometriche e iperboliche sono intere; le razionali sono analitiche nel dominio.
- Teorema 2.8: se $f$ è olomorfa su $D$, la derivata $f'$ è continua su $D$.

## Intuizione
Il limite deve essere lo stesso lungo **tutte** le direzioni di avvicinamento in $\mathbb C$: per questo funzioni "innocue" come $\bar z$ o $|z|^2$ falliscono.

## Come si usa
Esempi 2.2: $f(z)=z^2$ ha $f'(z_0)=2z_0$ ed è intera; $f(z)=|z|^2$ dà il rapporto $\bar z_0+z_0\frac{\overline{\Delta z}}{\Delta z}+\overline{\Delta z}$, che lungo l'asse reale tende a $\bar z_0+z_0$ e lungo quello immaginario a $\bar z_0-z_0$: è derivabile solo in $0$, quindi non è analitica in alcun punto.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.1 "Derivabilità". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 1-3 del PDF).

## Prerequisiti
- [[Topologia del piano complesso]]: la derivata si definisce in un intorno
- [[Derivata]]: stessa definizione come limite del rapporto incrementale

## Porta a
- [[Condizioni di Cauchy-Riemann]]: caratterizzazione tramite parte reale e immaginaria
- [[Teorema di Cauchy-Goursat]]: integrale nullo sui cammini chiusi
- [[Serie di Taylor]]: le olomorfe sono sviluppabili in serie di potenze

## Collegati
- [[Funzioni elementari complesse]]: esempi di funzioni intere
- [[Regole di derivazione]]: valgono identiche in campo complesso
