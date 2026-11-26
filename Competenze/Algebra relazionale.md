---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [relational algebra, operatori dell'algebra relazionale, proprietà di chiusura, linguaggio procedurale di interrogazione]
tags: [competenza, area/informatica]
---

# Algebra relazionale

> Linguaggio di interrogazione procedurale che estende l'algebra degli insiemi al modello relazionale: operatori che prendono relazioni e restituiscono relazioni.

## Definizione / enunciato
L'algebra relazionale definisce un insieme di operatori su relazioni che producono come risultato una relazione. Gode della **proprietà di chiusura**: il risultato di qualunque operazione algebrica su relazioni è ancora una relazione, quindi gli operatori si compongono in espressioni (alberi).

Operatori:
- **unari**: selezione $\sigma$, proiezione $\pi$;
- **binari**: prodotto cartesiano $\times$, join $\bowtie$, unione $\cup$, intersezione $\cap$, differenza $-$, divisione $/$.

Raggruppati per natura: **insiemistici** ($\cup$, $\cap$, $-$, $\times$) e **relazionali** ($\sigma$, $\pi$, $\bowtie$, $/$). Il join è un operatore **derivato** (si esprime con $\times$, $\sigma$, $\pi$) ma si definisce a parte perché esprime sinteticamente operazioni ricorrenti.

## Formule chiave
Esempio di espressione: "nome dei corsi del secondo semestre"
$$R = \pi_{\text{NomeCorso}}\big(\sigma_{\text{Semestre}=2}\,\text{Corsi}\big)$$
L'ordine conta: $\sigma_{\text{Semestre}=2}(\pi_{\text{NomeCorso}}\,\text{Corsi})$ è **errata**, perché dopo la proiezione l'attributo Semestre non esiste più.

## Intuizione
In algebra (linguaggio **procedurale**) si fissa l'ordine in cui applicare gli operatori; in SQL (**dichiarativo**) l'ordine migliore lo sceglie l'ottimizzatore. La stessa interrogazione SQL si traduce in un albero algebrico, su cui l'ottimizzatore applica trasformazioni di equivalenza.

## Come si usa
Esercizi del corso sulle relazioni `Corsi(Codice, NomeCorso, Semestre, MatrDocente)` e `Docenti(MatrDocente, NomeDoc, Dipartimento)`: si scompone la richiesta, si sceglie l'operatore (selezione per filtrare righe, join per legare tabelle, differenza o anti-join per "non", divisione per "tutti") e si scrive l'albero dal basso. Estensioni proposte: attributi calcolati (`PESO_LORDO = PESO_NETTO + TARA`) e funzioni aggregate (max, min, avg, count, sum) con raggruppamento, come il GROUP BY di SQL.

## Nei corsi
- **Base di dati** (triennale): mazzo completo sull'algebra, con esempi su Corsi/Docenti e su Forniture-Prodotti nelle slide SQL. Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 4-6 introduzione, pp. 17-20 composizione, p. 90 altri operatori); `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 49-51 confronto con SQL).

## Prerequisiti
- [[Modello relazionale]]: gli operandi sono relazioni

## Porta a
- [[Selezione e proiezione]]: operatori unari
- [[Join relazionale]]: legare tuple di relazioni diverse
- [[Operatori insiemistici relazionali]]: unione, intersezione, differenza
- [[Divisione relazionale]]: interrogazioni con "tutti"
- [[Ottimizzazione algebrica]]: trasformazioni di equivalenza sugli alberi algebrici

## Collegati
- [[Linguaggio SQL]]: procedurale contro dichiarativo
- [[Funzioni aggregate]]: estensione dell'algebra con aggregati
