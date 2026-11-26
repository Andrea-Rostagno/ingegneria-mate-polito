---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["Simpson's paradox", "paradosso di Yule-Simpson", "variabile confondente", "confounding variable", "confondente"]
tags: [competenza, area/statistica]
---

# Paradosso di Simpson

> Una relazione osservata sui dati aggregati può invertirsi quando si tiene conto di una variabile confondente: ignorarla porta a conclusioni opposte a quelle vere.

## Definizione / enunciato
Una **variabile confondente** è legata sia alla risposta sia alla variabile esplicativa. Il **paradosso di Simpson** si ha quando l'associazione fra due variabili cambia segno passando dai dati aggregati ai dati stratificati per il confondente; in regressione, quando omettere il confondente dal modello cambia segno al coefficiente.

## Formule chiave
Con un fattore a tre gruppi e una covariata $x$, il modello con pendenze per gruppo:
$$E(y_i)=\beta_1+\beta_2x_i\ (\text{gruppo 1}),\quad\beta_1+(\beta_2+\beta_3)x_i\ (\text{gruppo 2}),\quad\beta_1+(\beta_2+\beta_4)x_i\ (\text{gruppo 3}),$$
eventualmente con intercette diverse ($\beta_5,\beta_6$ aggiunti a $\beta_1$).

## Intuizione
I dati aggregati mescolano gruppi con livelli medi diversi: la "nuvola" complessiva può inclinarsi al contrario delle nuvole dei singoli gruppi.

## Come si usa
- **Condanne a morte in Florida** (1976-77): imputati bianchi condannati 19 (13%), neri 17 (11%); stratificando per il colore della pelle della vittima, a parità di vittima gli imputati neri sono condannati più spesso (vittima bianca: 14% contro 21%; vittima nera: 0% contro 6%).
- **Pinguini**: profondità contro lunghezza del becco, coefficiente globale $-0.08233$ (significativo, $R^2=0.052$); con una pendenza per specie tutte positive ($0.252510$, $0.252510-0.049885=0.202625$, $0.252510-0.116265=0.136245$), $R^2=0.7587$; con anche intercette per specie la pendenza comune è $0.17668$ e le differenze fra specie non sono significative.

## Nei corsi
- **Prob e statistica** (triennale): seconda parte delle slide "Anova, Ancova, interazione, paradossi". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Anova Ancova lez8.pdf` (Paradosso di Simpson I-XII).
- **Modelli statistici** (magistrale): ripreso per le tabelle di contingenza, come effetto di una terza variabile che, stratificando, inverte o annulla l'associazione tra due variabili categoriche (libro, cap. 16, §16.7, "Una terza variabile: il paradosso di Simpson"). Fonti: `Libri/Modelli statistici/capitoli/cap16.tex`.

## Prerequisiti
- [[Effetto di interazione]]: pendenze diverse per gruppo

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Test chi-quadro di indipendenza e omogeneità]]: associazione in tabelle stratificate (Modelli statistici)

## Collegati
- [[Coefficiente di determinazione]]: $R^2$ cresce includendo la specie
- [[Probabilità condizionata]]: le percentuali stratificate sono probabilità condizionate
