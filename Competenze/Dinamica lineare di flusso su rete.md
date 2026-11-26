---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["network flow dynamics", "linear network flow dynamics", "dinamica di flusso su rete", "sistemi compartimentali", "compartmental systems", "flow models with exogenous inputs", "flussi con input esogeni"]
tags: [competenza, area/network]
---

# Dinamica lineare di flusso su rete

> Modello di trasporto di massa tra celle collegate da un grafo: ogni nodo invia ai vicini una frazione fissa di ciò che contiene, $y(t+1)=P'y(t)$; la massa totale si conserva e si distribuisce asintoticamente secondo $\pi$.

## Definizione / enunciato
$\mathcal G=(\mathcal V,\mathcal E,W)$ rete fisica: $y_i(t)$ massa nel nodo $i$, $f_{ij}(t)$ massa che va da $i$ a $j$. Conservazione:
$$y_i(t+1)=y_i(t)+\sum_jf_{ji}(t)-\sum_jf_{ij}(t).$$
Caso lineare $f_{ij}(t)=y_i(t)P_{ij}$ con $P=D^{-1}W$ (tutta la massa lascia il nodo):
$$y_i(t+1)=\sum_jy_j(t)P_{ji},\qquad y(t+1)=P'y(t).$$
**Con input esogeni:** $Q$ substocastica, $v(t)$ afflusso esterno,
$$y(t+1)=Q'y(t)+v(t),$$
dove la frazione $1-\sum_jQ_{ij}$ della massa in $i$ viene dissipata; $\mathcal S=\{i:\sum_jQ_{ij}<1\}$.

## Formule chiave
- Equilibri: $P'y=y$; la massa totale $\mathbb 1'y(t)$ è invariante.
- $\mathcal G$ connesso e aperiodico: gli equilibri sono $a\pi$ e $y(t)=P'^ty(0)\to\pi\,\mathbb 1'y(0)$.
- Input costante $v$: $y(t)=(Q')^ty(0)+\sum_{s=0}^{t-1}(Q')^sv$; se $\mathcal S$ è globalmente raggiungibile, $y(t)\to(I-Q')^{-1}v=\sum_{s\ge0}(Q')^sv$.
- Tempo continuo: $\dot y=-L'y$.

## Intuizione
È la dinamica "duale" di French-DeGroot: lì si fanno medie con le righe di $P$, qui si redistribuisce massa con le colonne. La dissipazione garantisce che la massa immessa non si accumuli all'infinito.

## Come si usa
**Calcolo della centralità di Bonacich:** $y(t+1)=(1-\beta)P'y(t)+\beta\nu$ è una dinamica con $Q=(1-\beta)P$ e $\mathcal S=\mathcal V$, sicuramente globalmente raggiungibile; quindi $z=\lim_ty(t)$. Applicazioni citate: reti infrastrutturali, epidemiologia, ecologia, farmacocinetica.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 6, "Network flow dynamics", "Flow models with exogenous inputs", "Continuous time dynamics models". Fonti: `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 2-24).

## Prerequisiti
- [[Matrice stocastica]]: $P'$ e distribuzione invariante

## Porta a
- [[Random walk su un grafo]]: la legge del walk segue la stessa dinamica $\pi(t+1)=P'\pi(t)$

## Collegati
- [[Modello di French-DeGroot]]: dinamica duale sulle righe di $P$
- [[Centralità di Bonacich]]: limite di una dinamica con input esogeno
- [[Laplaciano di un grafo]]: versione continua $\dot y=-L'y$
- [[Agenti testardi]]: stessa matrice substocastica e stessa serie di Neumann
