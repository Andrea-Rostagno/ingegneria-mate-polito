---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["PAC learning", "Probably Approximately Correct", "apprendimento PAC", "PAC-apprendibilità", "PAC-learnable", "efficient PAC-learning", "classe di concetti", "concept class", "apprendimento di rettangoli allineati agli assi", "axis-aligned rectangles"]
tags: [competenza, area/data-ml]
---

# Modello PAC

> Definizione formale di "imparabile": con un numero polinomiale di esempi l'algoritmo restituisce, con probabilità almeno $1-\delta$, un'ipotesi con errore al più $\epsilon$.

## Definizione / enunciato
(Valiant, 1984) $\mathcal X$ insieme delle istanze, **concetto** $c:\mathcal X\to\{0,1\}$, **classe di concetti** $C$, distribuzione $D$ su $\mathcal X$ fissata e ignota, campione $S$, insieme di ipotesi $H$. La classe $C$ è **PAC-apprendibile** se esiste un algoritmo $\mathcal A$ tale che per ogni $c\in C$, $\epsilon>0$, $\delta>0$ e **ogni** distribuzione $D$, per campioni di taglia $m=\mathrm{poly}(1/\epsilon,1/\delta)$:
$$\Pr_{S\sim D^m}[R(h_S)\le\epsilon]\ge1-\delta .$$
"Probably" = confidenza $1-\delta$; "Approximately correct" = accuratezza $1-\epsilon$. Il modello è *distribution-free*; addestramento e test seguono la stessa $D$. **Efficiente** se $\mathcal A$ gira in tempo $\mathrm{poly}(1/\epsilon,1/\delta)$; tenendo conto della rappresentazione, $O(\mathrm{poly}(1/\epsilon,1/\delta,n,\mathrm{size}(c)))$.

## Formule chiave
**Esempio dei rettangoli allineati agli assi.** Algoritmo: il rettangolo consistente più stretto $R'$. Con quattro rettangoli $r_1,\dots,r_4$ lungo i lati di $R$ di massa $\Pr_D[r_i]\ge\epsilon/4$, se $R(R')>\epsilon$ allora $R'$ manca almeno una $r_i$:
$$\Pr[R(R')>\epsilon]\le\sum_{i=1}^4\Pr[R'\text{ manca }r_i]\le4\Big(1-\frac\epsilon4\Big)^m\le4e^{-m\epsilon/4}.$$
Imponendo $4e^{-m\epsilon/4}\le\delta$: per $m\ge\frac4\epsilon\log\frac4\delta$, con probabilità almeno $1-\delta$ si ha $R(R')\le\epsilon$.

## Intuizione
Non si chiede di imparare esattamente $c$ (impossibile con un campione finito) né di riuscirci sempre (il campione può essere sfortunato): si chiede un errore piccolo con alta probabilità, con un costo in esempi polinomiale.

## Come si usa
Per dimostrare che una classe è PAC-apprendibile si esibisce un algoritmo e una complessità campionaria. Nei rettangoli l'insieme $H$ è infinito ma la prova è geometrica e non si estende facilmente (es. cerchi non concentrici): da qui l'esigenza di bound generali (H finito, Rademacher, VC).

## Nei corsi
- **Matematica per l'AI** (triennale): lezione "Learning with finite hypothesis sets". Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 33-48, 64); `FML.pdf` §2.1.

## Prerequisiti
- [[Errore di generalizzazione]]: la condizione riguarda $R(h_S)$
- [[Disuguaglianza di Hoeffding]]: union bound e stime esponenziali delle prove

## Porta a
- [[Bound di apprendimento per H finito (caso consistente)]]: complessità campionaria per H finito
- [[Apprendimento PAC agnostico]]: estensione quando $c\notin H$
- [[Dimensione VC]]: caratterizza le classi PAC-apprendibili infinite
- [[Teorema no free lunch]]: la classe di tutte le funzioni non è PAC-apprendibile

## Collegati
- [[Classificazione supervisionata]]: il compito formalizzato dal modello
