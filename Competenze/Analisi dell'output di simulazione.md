---
tipo: competenza
area: statistica
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["output analysis", "statistical output analysis", "analisi statistica dell'output", "metodo dei lotti", "batching method", "batch means", "medie a lotti", "transitorio iniziale", "warm-up"]
tags: [competenza, area/statistica]
---

# Analisi dell'output di simulazione

> Come costruire intervalli di confidenza affidabili da una simulazione: le osservazioni di una sola corsa sono correlate, non stazionarie all'inizio e non normali, quindi la formula ingenua sottostima l'errore.

## Definizione / enunciato
L'intervallo ingenuo per l'attesa media su $N$ clienti è
$$\bar W\pm z_{1-\alpha/2}\frac{S_W}{\sqrt N}$$
(senza quantili $t$ di Student, perché $N$ è grande). In una simulazione di coda è sbagliato per tre motivi:
1. ignora la **correlazione positiva** tra attese consecutive (l'errore più grave);
2. assume che le attese abbiano la stessa distribuzione, vero solo in regime stazionario dopo un **transitorio**;
3. usa un intervallo per popolazione normale, ma le attese non sono normali.

## Formule chiave
Con osservazioni correlate **non** vale
$$\mathrm{Var}(\bar W)=\frac{S_W^2}{N},$$
perché alla varianza della media contribuiscono le covarianze. **Metodo dei lotti** (batching): si fanno le medie di lotti consecutivi (es. 1000 clienti) e si costruisce l'intervallo su queste medie, quasi indipendenti e più vicine alla normalità; eventualmente si scartano le osservazioni del transitorio.

## Intuizione
Con alta utilizzazione un cliente che aspetta molto è seguito da clienti che aspettano molto: l'autocorrelazione decade lentamente e $N$ osservazioni valgono molto meno di $N$ osservazioni indipendenti.

## Come si usa
Esempio delle slide: M/M/1 con $\lambda=1$, $\mu=1.1$ ($\rho=0.9091$), 100000 clienti, 10 repliche: gli intervalli al 95% (es. $(8.7903, 8.9036)$, $(9.2031, 9.3195)$, $(8.0386, 8.1425)$) non si sovrappongono; lo script `ScriptMM1.m` stampa come riferimento l'attesa teorica $(\lambda/\mu)/(\mu-\lambda)$, che con questi dati vale circa 9.09 (calcolo dai dati dello script). Il grafico `autocorr` mostra autocorrelazione che decade lentamente. Con $\mu=2$ (utilizzazione 50%) gli intervalli, intorno a 0.49-0.51, si sovrappongono meglio ma restano sbagliati.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "The danger of naive statistical output analysis". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 10-13); `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 3-4).

## Prerequisiti
- [[Intervallo di confidenza]]: la formula ingenua da correggere
- [[Simulazione a eventi discreti]]: produce osservazioni correlate

## Porta a
- [[Campionamento antitetico]]: ridurre la varianza dell'intervallo invece di aumentare $N$

## Collegati
- [[Dimensione campionaria effettiva]]: stesso problema per campioni autocorrelati (MCMC)
- [[Covarianza]]: le covarianze tra osservazioni gonfiano la varianza della media
- [[Coda M-M-1]]: l'attesa teorica serve da riferimento per gli intervalli simulati
