---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["randomized complete block design", "RCBD", "piano a blocchi", "block design", "blocking", "blocco", "randomizzazione", "randomization"]
tags: [competenza, area/statistica]
---

# Piano a blocchi randomizzati

> Disegno sperimentale in cui ogni blocco (fonte di variabilità nota: giocatore, lotto, giorno) riceve una volta ciascun trattamento in ordine casuale; il modello è un'ANOVA a due vie additiva che toglie la variabilità dei blocchi dai residui.

## Definizione / enunciato
In un piano a blocchi randomizzati completi ciascuno dei $J$ blocchi riceve una volta ciascuno degli $I$ trattamenti, con assegnazione casuale dentro il blocco. Modello (libro, cap. 13, Def. 13.10):
$$Y_{ij}=\nu+\alpha_i+\gamma_j+\epsilon_{ij},\qquad\epsilon_{ij}\overset{iid}\sim N(0,\sigma^2),$$
con $\alpha_i$ effetto del trattamento e $\gamma_j$ effetto del blocco: modello a due vie **additivo** con una sola osservazione per cella.

## Formule chiave
Gradi di libertà: trattamenti $I-1$, blocchi $J-1$, residui $(I-1)(J-1)$; $F_{\text{tratt}}=\mathrm{MS}_{\text{tratt}}/\mathrm{RMS}$. Non si stima l'interazione: con una osservazione per cella i suoi gradi di libertà sono proprio quelli dei residui.

## Intuizione
Le fonti di variabilità note e misurabili si trasformano in blocchi; quelle ignote si neutralizzano randomizzando, così non possono allinearsi sistematicamente con un trattamento. Il confronto tra trattamenti avviene "dentro" ogni blocco.

## Come si usa
Golf con $I=4$ tipi di palla e $J=10$ giocatori (libro, Es. `c13-golf-blocchi`): GOLFER 9 g.d.l., $F=66.27$; tipo 3 g.d.l., $F=54.31$ (p $1.5\cdot10^{-11}$); residui 27 g.d.l., MS 20.26. Ignorando i blocchi, un'ANOVA a una via metterebbe i 12 074 della somma dei quadrati dei giocatori nei residui ($\mathrm{RSS}=12\,621$ con 36 g.d.l., $\mathrm{MSR}=350.6$): $F=3.14$ e p-value 0.037, appena significativo; il blocco riduce la media dei quadrati residua di oltre 17 volte. I giocatori si potrebbero anche trattare come effetto casuale.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 13, §13.4 (Def. 13.10, p. 222). Fonti: `Libri/Modelli statistici/capitoli/cap13.tex`; `magistrale/Modelli statistici/251204-Piani-Fattoriali.pdf`.

## Prerequisiti
- [[ANOVA a due vie]]: versione senza interazione
- [[Analisi della varianza]]: test F per i trattamenti

## Porta a
- [[Modello lineare a effetti misti]]: blocchi come effetti casuali

## Collegati
- [[Metodo di Tukey]]: confronti tra trattamenti
- [[Correlazione intraclasse]]: osservazioni dello stesso blocco correlate se il blocco è casuale
