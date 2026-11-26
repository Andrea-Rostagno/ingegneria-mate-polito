---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["table profiles", "data profiles", "statistiche delle tabelle", "cardinalità", "selettività", "stima della selettività", "update statistics"]
tags: [competenza, area/informatica]
---

# Profili dei dati

> Statistiche quantitative su tabelle e colonne, conservate nel dizionario dei dati, con cui l'ottimizzatore stima la dimensione dei risultati intermedi e quindi il costo dei piani.

## Definizione / enunciato
Un **profilo di tabella** contiene, per ogni tabella $T$:
- la **cardinalità** (numero di tuple), stimata anche per le espressioni relazionali intermedie;
- la dimensione in byte delle tuple e di ciascun attributo $A_j$;
- il numero di valori distinti di ciascun attributo (cardinalità del **dominio attivo**);
- i valori minimo e massimo di ciascun attributo.

I profili sono memorizzati nel **dizionario dei dati** e vanno aggiornati periodicamente rianalizzando le tabelle con un comando di *update statistics*, eseguito su richiesta: aggiornarli subito ad ogni transazione sovraccaricherebbe il sistema.

## Formule chiave
Stima della cardinalità di una selezione di uguaglianza:
$$\mathrm{Card}(\sigma_{A_i=v}(T))\approx\frac{\mathrm{Card}(T)}{\mathrm{Val}(A_i\ \text{in}\ T)}$$
dove $\mathrm{Val}(A_i \text{ in } T)$ è il numero di valori distinti di $A_i$ in $T$. Vale solo nell'ipotesi di **distribuzione uniforme**.

## Intuizione
L'ottimizzatore non legge i dati per decidere: ragiona su un riassunto. Se il riassunto è vecchio o la distribuzione è molto asimmetrica, le stime sbagliano e il piano scelto può essere pessimo.

## Come si usa
- La selettività determina se conviene un indice o la scansione completa (per predicati poco selettivi conviene la full table scan).
- In Oracle le statistiche (righe, blocchi, lunghezza media delle righe; valori distinti, nulli e **istogrammi** per le colonne; foglie, livelli e clustering factor per gli indici) sono raccolte in automatico o con il pacchetto DBMS_STATS. Gli istogrammi (height-balanced o di frequenza) migliorano la stima quando i dati sono asimmetrici, cioè proprio quando la formula uniforme sbaglia.
- Nella progettazione fisica: "se non funziona, ricordarsi di aggiornare le statistiche".

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Data profiles" nella parte di ottimizzazione basata sui costi. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 41-45); `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/01 - DSTBD_oracle_optimizer-IT.pdf` (pp. 46-56); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/05 - 16-PhysicalDesign.pdf` (p. 23).

## Prerequisiti
- Nessuno.

## Porta a
- [[Ottimizzazione basata sui costi]]: stime di cardinalità per i costi

## Collegati
- [[Ottimizzatore Oracle]]: statistiche e istogrammi
