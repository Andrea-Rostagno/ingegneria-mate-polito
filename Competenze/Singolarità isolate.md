---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["isolated singularities", "polo", "pole", "polo di ordine m", "singolarità essenziale", "essential singularity", "singolarità eliminabile", "singolarità apparente", "zero di ordine m", "zeri isolati"]
tags: [competenza, area/analisi]
---

# Singolarità isolate

> Un punto in cui $f$ non è analitica ma lo è in un intorno bucato: si classifica (eliminabile, polo di ordine $m$, essenziale) guardando quanti termini ha la parte principale dello sviluppo di Laurent.

## Definizione / enunciato
- **Zeri.** Se $f$ è analitica in $z_0$ e $f(z_0)=\dots=f^{(m-1)}(z_0)=0\ne f^{(m)}(z_0)$, $z_0$ è uno **zero di ordine $m$** e $f(z)=(z-z_0)^mg(z)$ con $g(z_0)\neq0$. **Teorema 3.18:** gli zeri di una funzione analitica non identicamente nulla sono isolati.
- **Definizione 3.19.** $z_0$ è **singolarità isolata** se $f$ è analitica in $\{0<|z-z_0|<r\}$: lì vale lo sviluppo di Laurent.
- **Definizione 3.20.** Se la parte principale ha un numero finito, non nullo, di termini e $c_{-m}\ne0$ è l'ultimo, $z_0$ è un **polo di ordine $m$** (semplice se $m=1$, doppio se $m=2$); allora $f(z)=\frac{g(z)}{(z-z_0)^m}$ con $g$ analitica e $g(z_0)\neq0$.
- **Definizione 3.21.** Se la parte principale ha infiniti termini, $z_0$ è una **singolarità essenziale**. Se la parte principale è nulla la singolarità è **eliminabile** ("apparente" nella dispensa).

## Formule chiave
$$f(z)=\frac{c_{-m}}{(z-z_0)^m}+\dots+\frac{c_{-1}}{z-z_0}+c_0+c_1(z-z_0)+\cdots$$

## Intuizione
Un polo è un "infinito controllato": $(z-z_0)^mf$ torna analitica. Una singolarità essenziale non si può curare con nessuna potenza ($\cos\frac1z$ oscilla in ogni intorno di $0$).

## Come si usa
Esempi 3.22: $z\sinh z$ ha uno zero di ordine 2 in $0$; $\frac{z-\sin z}{z^2}=\frac{z}{3!}-\frac{z^3}{5!}+\dots$ ha in $0$ una singolarità apparente (che è uno zero di ordine 1); $\frac{e^z}{z^3}$ ha un polo di ordine 3 (lo si vede anche da $g=e^z$, analitica e non nulla); $\cos\frac1z=\sum\frac{(-1)^n}{(2n)!z^{2n}}$ ha in $0$ una singolarità essenziale.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §3.4 "Singolarità isolate". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 3 (1).pdf` (pp. 17-18 del PDF).

## Prerequisiti
- [[Serie di Laurent]]: la parte principale classifica la singolarità
- [[Serie di Taylor]]: ordine degli zeri dai coefficienti

## Porta a
- [[Residuo]]: definito nelle singolarità isolate

## Collegati
- Nessuno.
