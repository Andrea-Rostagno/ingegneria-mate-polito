---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Morrey's inequality", "teorema di Morrey", "W^{1,p} in C^{0,1-n/p}", "versione continua di una funzione di Sobolev"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Morrey

> Per $n<p\le\infty$ le funzioni di $W^{1,p}$ sono, dopo una modifica su un insieme di misura nulla, hölderiane di esponente $\gamma=1-n/p$.

## Definizione / enunciato
**Teorema 4 (Morrey).** Sia $n<p\le\infty$. Esiste $C=C(p,n)$ tale che
$$\|u\|_{C^{0,\gamma}(\mathbb R^n)}\le C\|u\|_{W^{1,p}(\mathbb R^n)}\qquad\text{per ogni }u\in C^1(\mathbb R^n),\qquad\gamma:=1-\frac np .$$
$u^*$ è una **versione** di $u$ se $u=u^*$ q.o.
**Teorema 5.** Se $U$ è limitato con $\partial U$ di classe $C^1$, $n<p\le\infty$ e $u\in W^{1,p}(U)$, allora $u$ ha una versione $u^*\in C^{0,\gamma}(\overline U)$, $\gamma=1-\frac np$, con $\|u^*\|_{C^{0,\gamma}(\overline U)}\le C\|u\|_{W^{1,p}(U)}$, $C=C(p,n,U)$. Da qui in poi si identifica $u\in W^{1,p}$ ($p>n$) con la sua versione continua.

## Formule chiave
Passo 1 (media su palla, $C=C(n)$):
$$\frac1{|B(x,r)|}\int_{B(x,r)}|u(y)-u(x)|\,dy\le C\int_{B(x,r)}\frac{|Du(y)|}{|y-x|^{n-1}}dy.$$
Passo 2: con Hölder, poiché $p>n$ implica $(n-1)\frac p{p-1}<n$, l'integrale $\int_{B(x,1)}|x-y|^{-(n-1)\frac p{p-1}}dy$ è finito e $\sup|u|\le C\|u\|_{W^{1,p}}$.
Passo 3: con $r=|x-y|$, $W=B(x,r)\cap B(y,r)$, si ottiene
$$|u(x)-u(y)|\le Cr^{1-\frac np}\|Du\|_{L^p(\mathbb R^n)}=C|x-y|^{1-\frac np}\|Du\|_{L^p}.$$

## Intuizione
Quando l'integrabilità del gradiente supera la dimensione, il gradiente non può concentrarsi abbastanza da creare salti: la variazione media su una palla di raggio $r$ scala come $r^{1-n/p}$, cioè hölderianamente.

## Come si usa
Teor. 5 si ottiene da Teor. 4 con estensione, approssimazione $u_m\in C_c^\infty$ e completezza di $C^{0,1-n/p}$. Una variante (osservazione dopo la dimostrazione) $|u(y)-u(x)|\le Cr^{1-n/p}\big(\int_{B(x,2r)}|Du|^p\big)^{1/p}$ serve per la differenziabilità q.o. Combinata con GNS dà le immersioni generali $W^{k,p}\subset C^{k-[n/p]-1,\gamma}$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.6.2 "Morrey's inequality" (Teor. 4-5, definizione di versione). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 266-269).

## Prerequisiti
- [[Spazi di Hölder]]: spazio di arrivo $C^{0,\gamma}$
- [[Teorema di estensione per spazi di Sobolev]]: passaggio da $\mathbb R^n$ a $U$

## Porta a
- [[Immersioni di Sobolev]]: caso $k>n/p$

## Collegati
- [[Disuguaglianza di Gagliardo-Nirenberg-Sobolev]]: il caso $p<n$
