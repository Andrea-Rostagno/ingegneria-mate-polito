---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["sampling schemes for contingency tables", "tabella di contingenza I x J", "margini di riga e di colonna", "studio prospettivo", "prospective study", "studio retrospettivo", "retrospective study", "studio trasversale", "cross-sectional study", "campionamento inverso", "margini fissi", "multinomiale parallelo"]
tags: [competenza, area/statistica]
---

# Schemi di campionamento delle tabelle di contingenza

> Una tabella di conteggi incrociati può nascere da disegni diversi, che fissano margini diversi: lo schema decide la distribuzione dei conteggi, quali probabilità si possono stimare e quale ipotesi si sta verificando.

## Definizione / enunciato
**Tabella di contingenza** di $X$ ($I$ livelli) e $Y$ ($J$ livelli) su $n$ unità: $N_{ij}=\#\{k:X_k=i,Y_k=j\}$, margini $N_{i+}$, $N_{+j}$, totale $n$; i margini fissati dal disegno si scrivono minuscoli (libro, cap. 16, Def. 16.1). Schemi (Def. 16.10):
1. **prospettivo** (multinomiale o binomiale parallelo per riga): totali di riga $n_{i+}$ fissati;
2. **retrospettivo** (per colonna): totali di colonna fissati, lo studio **caso-controllo**;
3. **trasversale** (multinomiale incrociato): solo $n$ fissato, conteggi $\mathrm{Mult}(n;\pi_{ij})$;
4. **inverso**: si campiona fino a un numero prefissato di successi per gruppo, insuccessi binomiali negativi;
5. **a margini fissi**: righe e colonne fissate, $N_{11}$ ipergeometrica (test esatto di Fisher).

## Formule chiave
Nel prospettivo si stimano $\pi_{j\mid i}$; nel retrospettivo $\pi_{i\mid j}$ ma non $P(M\mid E)$; nel trasversale tutte le $\pi_{ij}$. L'odds ratio è stimabile in tutti e tre i primi schemi.

## Intuizione
Ciò che il ricercatore fissa non è informazione sui parametri: se si scelgono 100 malati e 100 sani, la proporzione di malati nel campione non dice nulla sulla prevalenza. Per questo omogeneità (righe fissate) e indipendenza (solo $n$ fissato) sono ipotesi diverse, anche se si verificano con la stessa statistica.

## Come si usa
Esercizio tipo: riconoscere lo schema da una descrizione dello studio e dire quali quantità sono stimabili. Signora che assaggia il tè: 8 tazze, 4 per tipo, e la signora sa di doverne indicare 4: margini tutti fissi, legge ipergeometrica (Es. `c16-lady-tea`). La figura del libro mostra le cinque tabelle con i margini fissati evidenziati.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 16, §16.1 e §16.4 (Def. 16.1, 16.10, pp. 265-273). Fonti: `Libri/Modelli statistici/capitoli/cap16.tex`; `magistrale/Modelli statistici/251217 Due variabili categoriche.pdf`; `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf`.

## Prerequisiti
- [[Distribuzione multinomiale]]: schemi multinomiali
- [[Distribuzione ipergeometrica]]: schema a margini fissi
- [[Distribuzione di Pascal]]: campionamento inverso

## Porta a
- [[Test chi-quadro di indipendenza e omogeneità]]: ipotesi diverse a seconda dello schema
- [[Test esatto di Fisher]]: condizionamento a tutti i margini

## Collegati
- [[Odds ratio]]: stimabile anche negli studi caso-controllo
- [[Misure di interesse delle regole]]: la tabella di contingenza nelle regole di associazione
