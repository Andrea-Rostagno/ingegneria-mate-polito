---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["order of infinitesimal", "principal part", "infinitesimo campione", "ordine di infinito", "infinito campione"]
tags: [competenza, area/analisi]
---

# Ordine di infinitesimo e parte principale

> Confrontando un infinitesimo (o un infinito) con una potenza di un campione si misura "quanto velocemente" va a zero (o all'infinito): l'esponente è l'ordine, il termine $k\,g^\alpha$ è la parte principale.

## Definizione / enunciato
$f$ è **infinitesima** per $x\to\bar x$ se $\lim f=0$; è un **infinito** se $\lim|f|=+\infty$. Per due infinitesimi $f,g$ (Mazzi, def. 1.16): se $\lim\frac fg=k\ne0$ hanno lo stesso ordine; se $\lim\frac fg=0$ $f$ ha ordine superiore ($f\in o(g)$); se $\lim\frac fg=\pm\infty$ ordine inferiore; se il limite non esiste non sono confrontabili. Per gli infiniti (def. 1.19) le parole "superiore" e "inferiore" si scambiano.

**Ordine rispetto a un campione** (def. 1.17, 1.20). Fissato un campione $g$ (di solito $x-x_0$ per $x\to x_0$, $1/x$ o $x$ per $x\to\pm\infty$), $f$ ha **ordine** $\alpha>0$ se
$$\lim_{x\to\bar x}\frac{f(x)}{[g(x)]^\alpha}=k\in\mathbb R\setminus\{0\},\qquad\text{e allora}\quad f(x)=k[g(x)]^\alpha+o(g^\alpha).$$
$k[g(x)]^\alpha$ è la **parte principale** di $f$ rispetto a $g$.

## Formule chiave
$$f=k\,g^\alpha+o(g^\alpha)\qquad(\text{ordine }\alpha,\ \text{parte principale }k\,g^\alpha)$$

## Intuizione
La parte principale è il "termine dominante" che decide segno e velocità; tutto il resto è trascurabile. Non tutte le funzioni hanno un ordine: $x\sin\frac1x$ per $x\to0$ (oss. 1.9), $e^x$ e $\log x$ per $x\to+\infty$ rispetto a $x$.

## Come si usa
Esempi di Mazzi (es. 1.24, 1.26): $\log(1+2x)$ ha ordine $1$ e parte principale $2x$ per $x\to0$; $1-\cos x$ ha ordine $2$ e parte principale $\frac12x^2$; $\sin x-\tan x=-\frac12x^3+o(x^3)$ ha ordine $3$; $3x^2-\sin x$ è un infinito di ordine $2$ per $x\to+\infty$; $\sqrt[5]{x^7+2x+1}$ ha ordine $\frac75$ con parte principale $x^{7/5}$. L'ordine serve per gli asintoti obliqui (ordine $1$) e per i criteri di convergenza degli integrali impropri (confronto con $1/x^\alpha$). Esercizi tipo: esercitazione 15-16 (2021-22, "parti principali"), esercitazione 11 (2022-23, "confronto locale").

## Nei corsi
- **Analisi 1** (triennale): "ordine di infinito e infinitesimo, parte principale rispetto a un dato campione". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.12-1.13, def. 1.15-1.20, oss. 1.9-1.10, es. 1.23-1.26, pp. 41-45); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 3.4.9, prop. 3.4.10, PDF p. 109).

## Prerequisiti
- [[Simboli di Landau]]: parte principale + o(g^α)

## Porta a
- [[Gerarchia degli infiniti]]: ordini di infinito
- [[Asintoti]]: obliquo implica ordine 1
- [[Criteri di convergenza per integrali impropri]]: confronto con 1/x^α

## Collegati
- Nessuno.
