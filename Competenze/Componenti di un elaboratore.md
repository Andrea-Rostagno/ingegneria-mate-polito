---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [hardware e software, architettura del calcolatore, unità di input e output, computer hardware]
tags: [competenza, area/informatica]
---

# Componenti di un elaboratore

> Scomposizione di un calcolatore in hardware e software, e dell'hardware nei blocchi unità di I/O, unità di elaborazione e memoria: il quadro su cui si appoggia tutta la programmazione.

## Definizione / enunciato
Un calcolatore è composto da **hardware** (la parte fisica: dispositivi elettronici, meccanici, magnetici, ottici) e **software** (la parte intangibile: programmi, cioè istruzioni per l'hardware, e dati su cui i programmi lavorano).

L'hardware si divide in tre blocchi fondamentali (T2):
- **Unità di input/output**: interfaccia da e verso l'utente. Implica un cambio di dominio fisico: l'umano è analogico, asincrono, non elettrico; il calcolatore è digitale, sincrono, elettrico, quindi servono conversioni.
- **Unità di elaborazione** (microprocessore, che contiene la CPU): esegue le istruzioni.
- **Memoria**: conserva dati e programmi. Si distingue la memoria interna (RAM) dalla memoria secondaria (hard disk, dischi flash, CD/DVD).

Riassunto delle slide: sistema di elaborazione = unità di I/O + unità centrale (CPU) + memoria; CPU = unità operativa + unità di controllo.

## Intuizione
Per eseguire un programma, questo va portato in memoria, dove la CPU lo legge ed esegue un'istruzione per volta. La CPU legge i dati (anche l'input dell'utente), li modifica e li riscrive in memoria, sullo schermo o sulla memoria di massa. Le slide usano l'analogia della cucina: hardware = cucina e utensili, software = ricetta, dati = ingredienti.

## Come si usa
Domanda tipica: descrivere i blocchi di un elaboratore e il ruolo di ciascuno, e spiegare perché I/O richiede conversioni analogico-digitale. È la base per capire cosa sia un'operazione "elementare" in un diagramma di flusso (T2 p. 18).

## Nei corsi
- **Informatica** (triennale): introdotto in P1 (hardware e software, vista semplificata di un PC) e ripreso in T2 come schema a blocchi. Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 8-13), `triennale/ANNO 1/informatica/Unita T2 - Architettura.pdf` (p. 3-5, 19, 37).

## Prerequisiti
- Nessuno nel corso: è un punto di partenza.

## Porta a
- [[Compilazione e interpretazione]]: il codice tradotto è eseguito dalla CPU
- [[Variabile]]: nome simbolico di una cella di memoria
- [[Unità centrale di elaborazione]]: è l'unità di elaborazione
- [[Gerarchia di memoria]]: dettaglia il blocco memoria
- [[Bus di sistema]]: collega CPU, memoria e I/O

## Collegati
- [[Diagramma di flusso]]: i blocchi usano solo operazioni elementari della CPU
