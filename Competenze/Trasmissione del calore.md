---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["heat transfer", "conduzione termica", "thermal conduction", "legge di Fourier", "Fourier's law", "conducibilità termica", "convezione", "convection", "irraggiamento", "radiation", "legge di Stefan-Boltzmann"]
tags: [competenza, area/fisica]
---

# Trasmissione del calore

> Il calore si propaga per conduzione (nei solidi, senza trasporto di materia), per convezione (nei fluidi, con trasporto di materia) e per irraggiamento (onde elettromagnetiche, anche nel vuoto).

## Definizione / enunciato
- **Conduzione:** il calore che attraversa una superficie isoterma $dS$ nel tempo $dt$ è proporzionale al gradiente di temperatura (legge di Fourier); $k$ è la conducibilità termica, alta nei metalli e bassa nei gas e nei dielettrici. Il segno meno indica che il flusso va verso le temperature decrescenti.
- **Convezione:** il fluido scaldato cambia densità, sale, e si innescano correnti convettive.
- **Irraggiamento:** tutti i corpi emettono radiazione; la potenza per unità di superficie segue la legge di Stefan-Boltzmann.

## Formule chiave
$$dQ=-k\frac{dT}{dn}\,dS\,dt,\qquad T(x)=T_0-\frac{T_0-T_1}{s}x\ \ (\text{parete piana a regime}),\qquad \varepsilon=e\sigma T^4$$

## Intuizione
In una parete piana a regime la temperatura cala linearmente: il gradiente è costante.

## Come si usa
Calcolo del flusso di calore stazionario attraverso una parete di spessore $s$ tra due temperature $T_0$ e $T_1$; tabella dei valori di $k$ a p. 40.

## Nei corsi
- **Fisica 1** (triennale): lezione del 13/05/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione1.pdf` (pp. 38-43); il simbolo del potere emissivo nella legge di Stefan-Boltzmann è da verificare sul PDF.

## Prerequisiti
- [[Principio zero della termodinamica]]: il calore fluisce tra temperature diverse

## Porta a
- Nessuno.

## Collegati
- [[Calorimetria]]: quantità di calore scambiata
- [[Secondo principio della termodinamica]]: il calore passa spontaneamente dal caldo al freddo
